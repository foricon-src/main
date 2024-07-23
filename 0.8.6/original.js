import { db, dbFirestore } from "https://foricon-src.github.io/foricon-firebase/script.js";
import { ref, onValue } from '//www.gstatic.com/firebasejs/10.12.2/firebase-database.js';
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
        await setDoc(doc(dbFirestore, "users", u[1]), {
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
                if (typeof iconName == "string") this.setAttribute("icon", iconName);
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
                if (typeof iconName == "string") this.setAttribute("icon-style", styleName);
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
          
          let s = document.createElement("style");
          s.innerHTML = `:root {
  --primary-color: inherit;
  --secondary-color: inherit;
  --primary-opacity: 1;
  --secondary-opacity: 0.4;
}
@font-face {
  font-family: "Foricon Alpha 8";
  src: url("//foricon-src.github.io/main/0.8.6/font.ttf");
  font-weight: normal;
  font-style: normal;
}

f-icon {
  animation: 1s ease infinite;
  position: relative;
  justify-content: center;
  display: inline-flex;
}
f-icon::before, f-icon::after {
  font-family: "Foricon Alpha 8";
  line-height: 1em;
}
f-icon::before {
  color: var(--primary-color);
}
f-icon[icon-style^="duotone/"]::before, f-icon[reversed][icon-style^="duotone/"]::after {
  opacity: var(--primary-opacity);
}
f-icon[icon-style^="duotone/"]::after, f-icon[reversed][icon-style^="duotone/"]::before {
  color: var(--secondary-color);
  opacity: var(--secondary-opacity);
}
f-icon[icon-style^="duotone/"]::after {
  position: absolute;
}

f-icon[animation*="-xxslow"] {
  animation-duration: 3s;
}
f-icon[animation*="-xslow"] {
  animation-duration: 2.5s;
}
f-icon[animation*="-slow"] {
  animation-duration: 2s;
}
f-icon[animation*="-semislow"] {
  animation-duration: 1.5s;
}
f-icon[animation*="-semifast"] {
  animation-duration: .75s;
}
f-icon[animation*="-fast"] {
  animation-duration: .5s;
}
f-icon[animation*="-xfast"] {
  animation-duration: .25s;
}
f-icon[animation*="-xxfast"] {
  animation-duration: .125s;
}

f-icon[animation^="spin"] {
  animation-name: spin;
  animation-timing-function: linear;
}
f-icon[animation^="spin-reverse"] {
  animation-direction: reverse;
}
f-icon[animation^="ltfade"] {
  animation-name: ltfade;
}
f-icon[animation^="mdfade"], f-icon[animation^="fade"] {
  animation-name: mdfade;
}
f-icon[animation^="hvfade"] {
  animation-name: hvfade;
}
f-icon[animation^="ulfade"] {
  animation-name: ulfade;
}
f-icon[animation^="csfade"] {
  animation-name: csfade;
}
f-icon[animation^="smbeat"] {
  animation-name: smbeat;
}
f-icon[animation^="blbeat"], f-icon[animation^="beat"] {
  animation-name: blbeat;
}
f-icon[animation^="bgbeat"] {
  animation-name: bgbeat;
}
f-icon[animation^="fadebeat"] {
  animation-name: fadebeat;
}
f-icon[animation^="csbeat"] {
  animation-name: csbeat;
}
f-icon[animation^="flipX"] {
  animation-name: flipX;
}
f-icon[animation^="flipY"] {
  animation-name: flipY;
}
f-icon[animation^="flipXY"] {
  animation-name: flipXY;
}

f-icon[size="smallest"] {
  font-size: .25em !important;
}
f-icon[size="smaller"] {
  font-size: .5em !important;
}
f-icon[size="small"] {
  font-size: .75em !important;
}
f-icon[size="large"] {
  font-size: 1.25em !important;
}
f-icon[size="larger"] {
  font-size: 1.5em !important;
}
f-icon[size="largest"] {
  font-size: 1.75em !important;
}

f-icon[scale="xsmaller"] {
  scale: .5;
}
f-icon[scale="smaller"] {
  scale: .75;
}
f-icon[scale="larger"] {
  scale: 1.25;
}
f-icon[scale="xlarger"] {
  scale: 1.5;
}

f-icon[rotate="90"] {
  rotate: 90deg;
}
f-icon[rotate="180"] {
  rotate: 180deg;
}
f-icon[rotate="270"] {
  rotate: 270deg;
}
f-icon[rotate="flipX"] {
  transform: rotateX(180deg);
}
f-icon[rotate="flipY"] {
  transform: rotateY(180deg);
}

@keyframes spin {
  0% {rotate: z 0}
  100% {rotate: z 360deg}
}
@keyframes ltfade {
  0% {opacity: 1}
  50% {opacity: 0.75}
  100% {opacity: 1}
}
@keyframes mdfade {
  0% {opacity: 1}
  50% {opacity: 0.5}
  100% {opacity: 1}
}
@keyframes hvfade {
  0% {opacity: 1}
  50% {opacity: 0.25}
  100% {opacity: 1}
}
@keyframes ulfade {
  0% {opacity: 1}
  50% {opacity: 0}
  100% {opacity: 1}
}
@keyframes csfade {
  0% {opacity: var(--max)}
  50% {opacity: var(--min)}
  100% {opacity: var(--max)}
}
@keyframes smbeat {
  0% {scale: 1}
  50% {scale: .6}
  100% {scale: 1}
}
@keyframes blbeat {
  0% {scale: 1.2}
  50% {scale: .8}
  100% {scale: 1.2}
}
@keyframes bgbeat {
  0% {scale: 1.4}
  50% {scale: 1}
  100% {scale: 1.4}
}
@keyframes fadebeat {
  0% {opacity: 1; scale: 1.2}
  50% {opacity: 0.5; scale: .8}
  100% {opacity: 1; scale: 1.2}
}
@keyframes csbeat {
  0% {scale: var(--max)}
  50% {scale: var(--min)}
  100% {scale: var(--max)}
}
@keyframes flipX {
  0% {rotate: x 0;}
  50% {rotate: x 180deg;}
  100% {rotate: x 360deg;}
}
@keyframes flipY {
  0% {rotate: y 0;}
  50% {rotate: y 180deg;}
  100% {rotate: y 360deg;}
}
@keyframes flipXY {
  0% {transform: rotateX(0deg) rotateY(0deg);}
  50% {transform: rotateX(180deg) rotateY(180deg);}
  100% {transform: rotateX(360deg) rotateY(360deg);}
}`

          onValue(ref(db, "icons/"), snap => {
            const data = snap.val();
            for (let key in data) {
          	  let each = data[key];

              each.styles.forEach(item => {
                let string;
                let unicode = each.unicodes[item];
                if (item.includes("duotone/")) {
                  let unicode_layers = unicode?.split("|");
                  string = `f-icon["${key}"][icon-style="${item}"]::before { content: "\\${unicode_layers[0]}"}
                  f-icon["${key}"][icon-style="${item}"]::after { content: "\\${unicode_layers[2]}"}`;
                }
                else string = `f-icon["${key}"][icon-style="${item}"]::before { content: "\\${unicode}"}`;
                s.innerHTML += string
              });
            };
          });
          document.querySelector("head").appendChild(s);
          console.log("Foricon assets were loaded successfully");
        }
        else error("This site cannot access to Foricon assets because the user has't allowed this domain yet");
      };
    } 
    else error("Given account id is invalid");
  })();
};