import { dbFirestore } from "https://foricon-src.github.io/foricon-firebase/script.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
  (async function () {

    let d = await getDoc(doc(dbFirestore, "users", u[1]));
    if (d.exists()) {
      d = d.data();
      if (d.settings.allowedDomains.some((domain) => location.hostname == domain)) {
        customElements.define(
          "f-icon",
          class extends HTMLElement {
            getIcon() {
              return this.getAttribute("icon");
            }
            setIcon(iconName) {
              if (iconName) this.setAttribute("icon", iconName);
              else error("Argument cannot be null or undefined");
            }
            toggleIcon(icon1Name, icon2Name) {
              if (arguments.length == 2) {
                this.getAttribute("icon") == icon1Name ? this.setAttribute("icon", icon2Name) : this.setAttribute("icon", icon1Name);
              }
              else error("There are must be 2 arguments");
            }
            getStyle() {
              let splited = this.getAttribute("type").split("/");
              return splited.length == 2 ? splited[1] : splited[0];
            }
            toggleStyle() {
              let spl = this.getAttribute("type");
              spl = spl ? spl.split("/") : ["filled"];
              let tst = spl.length == 2 ? `${spl[0]}/${spl[1] == "filled" ? "outlined" : "filled"}` : `${spl[0] == "filled" ? "outlined" : "filled"}`;
              this.setAttribute("type", tst);
            }
            getType() {
              let spl = this.getAttribute("type");
              spl = spl ? spl.split("/") : [""];
              return spl.length == 2 ? spl[0] : "regular";
            }
            setType(typeName) {
              if (typeName || typeName == "") {
                let spl = this.getAttribute("type");
                spl = spl ? spl.split("/") : [""];
                let style = spl.length == 2 ? spl[1] : spl[0] == "" ? "filled" : spl[0];
                let tst = typeName == "" ? style : `${typeName}/${style}`;
                this.setAttribute("type", tst);
              }
              else error("Argument cannot be null or undefined");
            }
            toggleType(type1Name, type2Name) {
              if (arguments.length == 2) {
                let spl = this.getAttribute("type");
                spl = spl ? spl.split("/") : [""];
                spl = spl.length == 2 ? spl : ["", ...spl];
                let tst = spl[0] == type1Name ? type2Name : type1Name;
                if (tst != "") tst += "/";
                this.setAttribute("type", `${tst}${spl[1] == "" ? "filled" : spl[1]}`);
              }
              else error("There are must be 2 arguments");
            }
          }
        );
        
        const xhr = new XMLHttpRequest();
        xhr.open(
          "GET",
          "//foricon-src.github.io/main/0.8.4/style.css",
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
    } 
    else error("Given account id is invalid");
  })();
};