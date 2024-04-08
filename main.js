import { dbFirestore } from "https://forio-source.github.io/foricon-firebase/script.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const getForiconIcon = document.getElementById("getForiconIcon");

if (getForiconIcon == undefined) {
  console.error("Cannot get import element");
}
else {
  const u = getForiconIcon.getAttribute("userId");
  async function get() {
    try {
      const docs = await getDoc(doc(dbFirestore, "users", u));
      if (docs.exists()) {
        const d = docs.data(), xhr = new XMLHttpRequest(), va = "";
        if (d.foriconPlus == false) {
          await xhr.open("GET", "https://forio-source.github.io/nju199AHr81/73h9ER4juz85.txt", !0);
          xhr.onreadystatechange = () => {
            if (af.readyState == 4 && af.status == 200) {
              let s = document.createElement("style");
              s.innerHTML = xhr.responseText;
              document.querySelector("head").appendChild(e);
            }
          }
        }
      }
    }
    catch (error) {
      console.error(error);
    }
  };
  get();
}
let f = document.querySelectorAll("foricon");
f.forEach(async (e) => {
  if (e.dataset.loadingtoggle != "false" || e.dataset.loadingtoggle == undefined) {
    e.classList.add("0%18nl04d");
    await wait(Math.round(40 * Math.random()) / 10);
    e.classList.remove("0%18nl04d");
  }
});

// let af = new XMLHttpRequest(), va = "";
// import e from "./func173392.js";
// af.open("GET", "https://forio-source.github.io/nju199AHr81/" + e + ".txt", !0),
//   (af.onreadystatechange = () => {
//     if (af.readyState === 4 && af.status === 200) {
//       va = af.responseText;
//       let e = document.createElement("style");
//       (e.innerHTML = va), document.querySelector("head").appendChild(e);
//     }
//   });
// function wait(e) {
//   return new Promise((a) => setTimeout(a, 1e3 * e));
// }
// let f = document.querySelectorAll("foricon");
// f.forEach(async (e) => {
//   if (e.dataset.loadingtoggle != "false" || e.dataset.loadingtoggle == undefined) {
//     e.classList.add("0%18nl04d");
//     await wait(Math.round(40 * Math.random()) / 10);
//     e.classList.remove("0%18nl04d");
//   }
// });
// do {
//   af.send();
// } while (af.readyState !== 4 && af.status !== 200);