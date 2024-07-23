import { dbFirestore } from "https://foricon-src.github.io/foricon-firebase/script.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const gfi = document.getElementById("getForiconIcon");
const u = gfi.getAttribute("src").split("#");
function error(string) {
  console.error(string);
}

if (!gfi) error('Element with "getForiconIcon" id is undefined');
else if (gfi.nodeName != "SCRIPT") error('Element with "getForiconIcon" id is not <script>');
else if (u.length != 2) error("Invalid src's value");
else {
  gfi.remove();
  (async () => {
    let d = await getDoc(doc(dbFirestore, "users", u[1]));
    if (d.exists()) {
      d = d.data();
      let date = new Date();
      let plans = {
        lite: 6000,
        plus: 20000,
        plusBusiness: 1000000,
      };
      let crnt = {
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      };

      if (!d.pageviewStart) {
        d.pageviewStart = crnt;
      };
      if (crnt.month > d.pageviewStart.month || crnt.year > d.pageviewStart.year) {
        d.pageviewStart = crnt;
        d.pageviewCount = 1;
      }
      else d.pageviewCount++;

      try {
        await setDoc(doc(dbFirestore, 'users', u[1]), {
          pageviewCount: d.pageviewCount,
          pageviewStart: d.pageviewStart,
        }, {merge: true});
      }
      catch (error) {
        error(error);
      };

      if (d.pageviewCount > plans[d.plan]) console.error("You have reached the limit of pageviews");
      else {
        if (d.settings.allowedDomains.some((domain) => location.hostname == domain)) {
          customElements.define(
            "f-icon",
            class extends HTMLElement {
              getIcon() {
                return this.getAttribute("icon");
              }
              setIcon(iconName) {
                if (typeof iconName == 'string') this.setAttribute("icon", iconName);
                else error("Argument must be a valid string");
              }
              toggleIcon(icon1Name, icon2Name) {
                if (arguments.length == 2) {
                  this.getAttribute("icon") == icon1Name ? this.setAttribute("icon", icon2Name) : this.setAttribute("icon", icon1Name);
                }
                else error("There are must be 2 arguments");
              }
              getStyle() {
                return this.getAttribute("icon-style");
              }
              setStyle(styleName) {
                if (typeof iconName == 'string') this.setAttribute("icon-style", styleName);
                else error("Argument must be a valid string");
              }
              toggleType(style1Name, style2Name) {
                if (arguments.length == 2) {
                  this.getAttribute("icon-style") == icon1Name ? this.setAttribute("icon-style", style2Name) : this.setAttribute("icon-style", style1Name);
                }
                else error("There are must be 2 arguments");
              }
            }
          );
          
          const xhr = new XMLHttpRequest();
          xhr.open(
            "GET",
            "//foricon-src.github.io/main/0.8.6/style.css",
            !0
          );
          xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
              let s = document.createElement("style");
              s.innerHTML = xhr.responseText;
              document.querySelector("head").appendChild(s);
            }
          };
          do xhr.send();
          while (xhr.readyState != 4 && xhr.status != 200);
        }
        else error("This site cannot access to Foricon assets because the user has't allowed this domain yet");
      };
    } 
    else error("Given account id is invalid");
  })();
};