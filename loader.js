// import { db, dbFirestore } from "//foricon-src.github.io/foricon-firebase/script.js";
// import { ref, get } from "//www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
// import { doc, getDoc, setDoc } from "//www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const { uid } = document.currentScript.dataset;
const { log, error } = console;

(async () => {
    const { db, dbFirestore } = await import('https://foricon-src.github.io/foricon-firebase/script.js');
    const { ref, get } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js');
    const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');

    try {
        const resp = await fetch(`https://foricon-server-side.onrender.com/get-package?uid=${uid}`, { credentials: 'include' });
        const fonts = await resp.json();

        if (fonts.error) {
            console.error("Package error:", fonts.error);
            return;
        }

        let { settings } = await getDoc(doc(dbFirestore, 'users', uid));

        customElements.define("f-icon", class extends HTMLElement {
            getIcon() {
                return this.getAttribute("icon");
            }
            setIcon(iconName) {
                if (typeof iconName != "string") error("Invalid value format: iconName must be a valid string");
                else this.setAttribute("icon", iconName);
            }
            toggleIcon(icon1Name, icon2Name) {
            let currentIcon = this.getIcon();
                if (!icon1Name) error(`Missing arguments: icon1Name is undefined`);
                else if (!icon2Name) error(`Missing arguments: icon2Name is undefined`);
                else this.setIcon(currentIcon == icon1Name ? icon2Name : icon1Name);
            }
            getStyle() {
                return this.getAttribute("i-s") || "solid";
            }
            setStyle(styleName) {
                if (typeof styleName != "string") error("Invalid value format: Style name must be a valid string");
                else this.setAttribute("i-s", styleName);
            }
            toggleStyle(style1Name, style2Name) {
                let currentStyle = this.getAttribute("i-s") || "Solid";
                if (!style1Name) error("Missing arguments: style1Name is undefined");
                else if (!style2Name) error("Missing arguments: style2Name is undefined");
                else this.setStyle(currentStyle == style1Name ? style2Name : style1Name);
            }
            setAnimation(animationName, speedName) {
                if (animationName == null) this.removeAttribute("animation");
                else if (typeof animationName != "string" || (speedName && typeof speedName != "string")) error("Invalid value format: animationName and speedName must be a valid string");
                else if (!["spin", "spin-reverse", "ltfade", "fade", "hvfade", "ulfade", "csfade", "smbeat", "beat", "bgbeat", "fadebeat", "csbeat", "flipX", "flipY", "flipXY"].includes(animationName)) error(`Invalid value: "${animationName}" is not supported`);
                else if (speedName && !["xxslow", "xslow", "slow", "semislow", "semifast", "fast", "xfast", "xxfast"].includes(speedName)) error(`Invalid value: "${speedName}" is not supported`);
                else this.setAttribute("animation", `${animationName}${speedName ? '-' + speedName : ''}`);
            }
            setSize(sizeName) {
                if (sizeName == null) this.removeAttribute("size");
                else if (typeof sizeName == "string") {
                    if (["smallest", "smaller", "small", "large", "larger", "largest"].includes(sizeName)) this.setAttribute("size", sizeName);
                    else error(`Invalid value: "${sizeName}" is not supported`);
                }
                else error("Invalid value format: sizeName must be a valid string");
            }
            setScale(scaleName) {
                if (scaleName == null) this.removeAttribute("scale");
                else if (typeof scaleName == "string") {
                    let scales = ["xsmaller", "smaller", "larger", "xlarger"];
                    if (scales.includes(scaleName)) this.setAttribute("scale", scaleName);
                    else error(`Invalid value: "${scaleName}" is not supported`);
                }
                else error("Invalid value format: scaleName must be a valid string");
            }
            rotate(value) {
                if (value == null) this.removeAttribute("rotate");
                else if (typeof value == "string" || typeof value == "number") {
                    let values = ["90", "180", "270", "flipX", "flipY"];
                    if (values.includes(value.toString())) this.setAttribute("rotate", value);
                    else error(`Invalid value: "${value}" is not supported`);
                }
                else error("Invalid value format: Value must be a valid string or number");
            }
            toggleIconOnHover(activeIconName, element = this) {
                let t = this;
                let currentIconName = this.getIcon();
                
                function i_meh() {
                    t.setIcon(activeIconName);
                }
                function i_mlh() {
                    t.setIcon(currentIconName);
                }
            
                element.addEventListener("mouseenter", i_meh);
                element.addEventListener("mouseleave", i_mlh);
            
                element._i_meh = i_meh;
                element._i_mlh = i_mlh;
            }
            removeToggleIconOnHover(element = this) {
                if (element._i_meh) {
                    element.removeEventListener("mouseenter", element._i_meh);
                    delete element._i_meh;
                }
                if (element._i_mlh) {
                    element.removeEventListener("mouseleave", element._i_mlh);
                    delete element._i_mlh;
                }
            }
            toggleStyleOnHover(activeStyleName, element = this) {
                let t = this;
                let currentStyleName = this.getStyle();
                
                function s_meh() {
                    t.setStyle(activeStyleName);
                }
                function s_mlh() {
                    t.setStyle(currentStyleName);
                }
            
                element.addEventListener("mouseenter", s_meh);
                element.addEventListener("mouseleave", s_mlh);
            
                element._s_meh = s_meh;
                element._s_mlh = s_mlh;
            }
            removeToggleStyleOnHover(element = this) {
                if (element._s_meh) {
                    element.removeEventListener("mouseenter", element._s_meh);
                    delete element._s_meh;
                }
                if (element._s_mlh) {
                    element.removeEventListener("mouseleave", element._s_mlh);
                    delete element._s_mlh;
                }
            }
        })
        
        let s = document.createElement("style");
        s.innerHTML = `:root {
            --primary-color: inherit;
            --secondary-color: inherit;
            --primary-opacity: 1;
            --secondary-opacity: 0.4;
        }
        ${fonts.b1 ? `@font-face {
            font-family: "Foricon Beta 1";
            src: url("${fonts.b1}");
            font-weight: normal;
            font-style: normal;
            text-rendering: ${settings.renderingOption == "performance" ? "optimizeSpeed" : "geometricPrecision"};
        }` : ''}
        ${fonts.b2 ? `@font-face {
            font-family: "Foricon Beta";
            src: url("${fonts.b2}");
            font-weight: normal;
            font-style: normal;
            text-rendering: ${settings.renderingOption == "performance" ? "optimizeSpeed" : "geometricPrecision"};
        }` : ''}

        f-icon {
            animation: 1s ease infinite;
            position: relative;
            font-family: "Foricon Beta";
            line-height: 1em;
            font-weight: normal;
            display: inline-flex;
            justify-content: center;

            &::before {
                color: var(--primary-color);
            }
            &[i-s^="duotone/"]::before, &[reversed][i-s^="duotone/"]::after {
                opacity: var(--primary-opacity);
            }
            &[i-s^="duotone/"]::after, &[reversed][i-s^="duotone/"]::before {
                color: var(--secondary-color);
                opacity: var(--secondary-opacity);
            }
            &[i-s^="duotone/"]::after {
                position: absolute;
            }
            &[animation*="-xxslow"] {
                animation-duration: 3s;
            }
            &[animation*="-xslow"] {
                animation-duration: 2.5s;
            }
            &[animation*="-slow"] {
                animation-duration: 2s;
            }
            &[animation*="-semislow"] {
                animation-duration: 1.5s;
            }
            &[animation*="-semifast"] {
                animation-duration: .75s;
            }
            &[animation*="-fast"] {
                animation-duration: .5s;
            }
            &[animation*="-xfast"] {
                animation-duration: .25s;
            }
            &[animation*="-xxfast"] {
                animation-duration: .125s;
            }
            
            &[animation^="spin"] {
                animation-name: spin;
                animation-timing-function: linear;
            }
            &[animation^="spin-reverse"] {
                animation-direction: reverse;
            }
            &[animation^="ltfade"] {
                animation-name: ltfade;
            }
            &[animation^="fade"] {
                animation-name: fade;
            }
            &[animation^="hvfade"] {
                animation-name: hvfade;
            }
            &[animation^="ulfade"] {
                animation-name: ulfade;
            }
            &[animation^="csfade"] {
                animation-name: csfade;
            }
            &[animation^="smbeat"] {
                animation-name: smbeat;
            }
            &[animation^="beat"] {
                animation-name: beat;
            }
            &[animation^="bgbeat"] {
                animation-name: bgbeat;
            }
            &[animation^="fadebeat"] {
                animation-name: fadebeat;
            }
            &[animation^="csbeat"] {
                animation-name: csbeat;
            }
            &[animation^="flipX"] {
                animation-name: flipX;
            }
            &[animation^="flipY"] {
                animation-name: flipY;
            }
            &[animation^="flipXY"] {
                animation-name: flipXY;
            }
            
            &[size="smallest"] {
                font-size: .25em !important;
            }
            &[size="smaller"] {
                font-size: .5em !important;
            }
            &[size="small"] {
                font-size: .75em !important;
            }
            &[size="large"] {
                font-size: 1.25em !important;
            }
            &[size="larger"] {
                font-size: 1.5em !important;
            }
            &[size="largest"] {
                font-size: 1.75em !important;
            }
            
            &[scale="xsmaller"] {
                scale: .5;
            }
            &[scale="smaller"] {
                scale: .75;
            }
            &[scale="larger"] {
                scale: 1.25;
            }
            &[scale="xlarger"] {
                scale: 1.5;
            }
            
            &[rotate="90"] {
                rotate: 90deg;
            }
            &[rotate="180"] {
                rotate: 180deg;
            }
            &[rotate="270"] {
                rotate: 270deg;
            }
            &[rotate="flipX"] {
                transform: rotateX(180deg);
            }
            &[rotate="flipY"] {
                transform: rotateY(180deg);
            }
        }
        f-icon[b1] {
            font-family: 'Foricon Beta 1';
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
        @keyframes fade {
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
        @keyframes beat {
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
        for (let ver of settings.versions) {
            let icons = (await get(ref(db, ver == 'b2' ? 'iconsB2/' : "icons/"))).val();
            for (let key in icons) {
                let icon = icons[key];
                
                icon.styles.forEach(item => {
                    let string = `\nf-icon[icon="${key}"]${ver == 'b1' ? '[b1]' : ''}`;
                    let unicode = icon.unicodes?.[item.replace("/", "-")];
                    if (item.startsWith("duotone/")) {
                        let unicode_layers = unicode?.split("|");
                        string += `[i-s="${item}"]::before { content: "\\${unicode_layers?.[0]}"}
                        ${string}[i-s="${item}"]::after { content: "\\${unicode_layers?.[1]}"}`;
                    }
                    else string += `${item == "outline" ? '[i-s="outline"]' : ""}::before { content: "\\${unicode}"}`;
                    s.innerHTML += string;
                })
            }
        }
        document.querySelector("head").appendChild(s);
    }
    catch (err) {
        error(err);
    }
})()