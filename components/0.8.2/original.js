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

if (!gfi) error('Element with "getForiconComponents" id is undefined');
else if (gfi.nodeName != "SCRIPT")
  error('Element with "getForiconComponents" id is not <script>');
else if (u.length != 2) error("Invalid src's value");
else {
  gfi.remove();
  (async function () {
    customElements.define(
      "f-select",
      class extends HTMLElement {
        async connectedCallback() {
          let elem = this;
          elem.value = [];
          while (elem.querySelectorAll("*").length == 0) await wait(0.01);

          let elemChildren = elem.querySelectorAll("*");
          let txt = elemChildren[0];
          let optList = elemChildren[1];
          let optList_option = [...optList.children];

          if (!txt) error('Missing element: "text" is not found');

          elem.addEventListener("click", async (e) => {
            if (!optList) error('Missing element: "option-list" is not found');
            else if (e.target == elem) {
              if (!optList.classList.contains("active")) {
                let hei = optList.offsetHeight;
                optList.style.height = "0";
                await wait();
                optList.classList.add("active");
                optList.style.height = `${hei}px`;
                await wait(0.2);
                optList.style = "";
              }
              if (
                elem.getBoundingClientRect().top + optList.offsetHeight >
                window.innerHeight
              ) {
                optList.classList.add("bottom");
              }
              else optList.classList.remove("bottom");
            }
          });
          document.addEventListener("click", async (e) => {
            let multipleChoice = elem.getAttribute("multiple") != undefined;
            let { target } = e;
            if (optList.classList.contains("active")) {
              if (multipleChoice) {
                if (target != optList && !optList_option.some((child) => child == target)) {
                  let hei = optList.offsetHeight;
                  optList.classList.remove("active");
                  optList.style.height = `${hei}px`;
                  await wait();
                  optList.style.height = "0";
                  await wait(0.2);
                  optList.style = "";
                }
              }
              else {
                if (target != optList) {
                  let hei = optList.offsetHeight;
                  optList.classList.remove("active");
                  optList.style.height = `${hei}px`;
                  await wait();
                  optList.style.height = "0";
                  await wait(0.2);
                  optList.style = "";
                }
              }
            }
          });
          optList_option.forEach((opt, i) => {
            opt.addEventListener("click", (e) => {
              let val = opt.innerText;
              if (elem.getAttribute("multiple") != undefined) {
                let isActive = opt.classList.contains("active");
                if (isActive) {
                  let { children } = txt;
                  for (let span of children) {
                    if (span.innerText == val) span.remove();
                  }
                  opt.classList.remove("active");
                }
                else {
                  opt.classList.add("active");
                  txt.innerHTML += `<span>${val}</span>`;
                }
              }
              else {
                let act = optList.querySelector(".active");
                if (act) act.classList.remove("active");
                txt.innerHTML = `<span>${val}</span>`;
                opt.classList.add("active");
              }
              elem.value = [...txt.children].map((span) => {
                return span.innerText;
              });
            });
          });
        }
      }
    );

    let d = await getDoc(doc(dbFirestore, "users", u[1]));
    if (d.exists()) {
      if (d.settings.allowedDomains.some((domain) => location.hostname == domain)) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://foricon-src.github.io/main/components/0.8.2/all.css", !0);
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
      else error("This site cannot access to Foricon assets because the user hasn't allowed this domain yet");
    }
    else error("Given account id is invalid");
  })();
};