const _0x3d263f=_0xce24;(function(_0x2ee0d2,_0x4ebb55){const _0x5f2fa2=_0xce24,_0x2354f7=_0x2ee0d2();while(!![]){try{const _0x1ceb2f=-parseInt(_0x5f2fa2(0x1ed))/0x1+-parseInt(_0x5f2fa2(0x207))/0x2*(-parseInt(_0x5f2fa2(0x1ba))/0x3)+-parseInt(_0x5f2fa2(0x1be))/0x4+-parseInt(_0x5f2fa2(0x20d))/0x5*(-parseInt(_0x5f2fa2(0x1ae))/0x6)+-parseInt(_0x5f2fa2(0x214))/0x7*(parseInt(_0x5f2fa2(0x203))/0x8)+parseInt(_0x5f2fa2(0x1bb))/0x9+-parseInt(_0x5f2fa2(0x1b8))/0xa;if(_0x1ceb2f===_0x4ebb55)break;else _0x2354f7['push'](_0x2354f7['shift']());}catch(_0x5bb47b){_0x2354f7['push'](_0x2354f7['shift']());}}}(_0x5307,0x1d475));import{db,dbFirestore}from'//foricon-src.github.io/foricon-firebase/script.js';function _0xce24(_0x2ed1a1,_0x57ffc8){const _0x5307bc=_0x5307();return _0xce24=function(_0xce2412,_0x41a613){_0xce2412=_0xce2412-0x1a0;let _0x3dc6f8=_0x5307bc[_0xce2412];return _0x3dc6f8;},_0xce24(_0x2ed1a1,_0x57ffc8);}import{ref,get}from'//www.gstatic.com/firebasejs/11.0.1/firebase-database.js';function _0x5307(){const _0x4fde2d=['replace','setAttribute','toString',';\x0a}\x0a\x0af-icon\x20{\x0a\x20\x20animation:\x201s\x20ease\x20infinite;\x0a\x20\x20position:\x20relative;\x0a\x20\x20font-family:\x20\x22Foricon\x20Beta\x22;\x0a\x20\x20line-height:\x201em;\x0a\x20\x20display:\x20inline-flex;\x0a\x20\x20justify-content:\x20center;\x0a}\x0af-icon::before\x20{\x0a\x20\x20color:\x20var(--primary-color);\x0a}\x0af-icon[i-s^=\x22duotone/\x22]::before,\x20f-icon[reversed][i-s^=\x22duotone/\x22]::after\x20{\x0a\x20\x20opacity:\x20var(--primary-opacity);\x0a}\x0af-icon[i-s^=\x22duotone/\x22]::after,\x20f-icon[reversed][i-s^=\x22duotone/\x22]::before\x20{\x0a\x20\x20color:\x20var(--secondary-color);\x0a\x20\x20opacity:\x20var(--secondary-opacity);\x0a}\x0af-icon[i-s^=\x22duotone/\x22]::after\x20{\x0a\x20\x20position:\x20absolute;\x0a}\x0a\x0af-icon[animation*=\x22-xxslow\x22]\x20{\x0a\x20\x20animation-duration:\x203s;\x0a}\x0af-icon[animation*=\x22-xslow\x22]\x20{\x0a\x20\x20animation-duration:\x202.5s;\x0a}\x0af-icon[animation*=\x22-slow\x22]\x20{\x0a\x20\x20animation-duration:\x202s;\x0a}\x0af-icon[animation*=\x22-semislow\x22]\x20{\x0a\x20\x20animation-duration:\x201.5s;\x0a}\x0af-icon[animation*=\x22-semifast\x22]\x20{\x0a\x20\x20animation-duration:\x20.75s;\x0a}\x0af-icon[animation*=\x22-fast\x22]\x20{\x0a\x20\x20animation-duration:\x20.5s;\x0a}\x0af-icon[animation*=\x22-xfast\x22]\x20{\x0a\x20\x20animation-duration:\x20.25s;\x0a}\x0af-icon[animation*=\x22-xxfast\x22]\x20{\x0a\x20\x20animation-duration:\x20.125s;\x0a}\x0a\x0af-icon[animation^=\x22spin\x22]\x20{\x0a\x20\x20animation-name:\x20spin;\x0a\x20\x20animation-timing-function:\x20linear;\x0a}\x0af-icon[animation^=\x22spin-reverse\x22]\x20{\x0a\x20\x20animation-direction:\x20reverse;\x0a}\x0af-icon[animation^=\x22ltfade\x22]\x20{\x0a\x20\x20animation-name:\x20ltfade;\x0a}\x0af-icon[animation^=\x22fade\x22]\x20{\x0a\x20\x20animation-name:\x20fade;\x0a}\x0af-icon[animation^=\x22hvfade\x22]\x20{\x0a\x20\x20animation-name:\x20hvfade;\x0a}\x0af-icon[animation^=\x22ulfade\x22]\x20{\x0a\x20\x20animation-name:\x20ulfade;\x0a}\x0af-icon[animation^=\x22csfade\x22]\x20{\x0a\x20\x20animation-name:\x20csfade;\x0a}\x0af-icon[animation^=\x22smbeat\x22]\x20{\x0a\x20\x20animation-name:\x20smbeat;\x0a}\x0af-icon[animation^=\x22beat\x22]\x20{\x0a\x20\x20animation-name:\x20beat;\x0a}\x0af-icon[animation^=\x22bgbeat\x22]\x20{\x0a\x20\x20animation-name:\x20bgbeat;\x0a}\x0af-icon[animation^=\x22fadebeat\x22]\x20{\x0a\x20\x20animation-name:\x20fadebeat;\x0a}\x0af-icon[animation^=\x22csbeat\x22]\x20{\x0a\x20\x20animation-name:\x20csbeat;\x0a}\x0af-icon[animation^=\x22flipX\x22]\x20{\x0a\x20\x20animation-name:\x20flipX;\x0a}\x0af-icon[animation^=\x22flipY\x22]\x20{\x0a\x20\x20animation-name:\x20flipY;\x0a}\x0af-icon[animation^=\x22flipXY\x22]\x20{\x0a\x20\x20animation-name:\x20flipXY;\x0a}\x0a\x0af-icon[size=\x22smallest\x22]\x20{\x0a\x20\x20font-size:\x20.25em\x20!important;\x0a}\x0af-icon[size=\x22smaller\x22]\x20{\x0a\x20\x20font-size:\x20.5em\x20!important;\x0a}\x0af-icon[size=\x22small\x22]\x20{\x0a\x20\x20font-size:\x20.75em\x20!important;\x0a}\x0af-icon[size=\x22large\x22]\x20{\x0a\x20\x20font-size:\x201.25em\x20!important;\x0a}\x0af-icon[size=\x22larger\x22]\x20{\x0a\x20\x20font-size:\x201.5em\x20!important;\x0a}\x0af-icon[size=\x22largest\x22]\x20{\x0a\x20\x20font-size:\x201.75em\x20!important;\x0a}\x0a\x0af-icon[scale=\x22xsmaller\x22]\x20{\x0a\x20\x20scale:\x20.5;\x0a}\x0af-icon[scale=\x22smaller\x22]\x20{\x0a\x20\x20scale:\x20.75;\x0a}\x0af-icon[scale=\x22larger\x22]\x20{\x0a\x20\x20scale:\x201.25;\x0a}\x0af-icon[scale=\x22xlarger\x22]\x20{\x0a\x20\x20scale:\x201.5;\x0a}\x0a\x0af-icon[rotate=\x2290\x22]\x20{\x0a\x20\x20rotate:\x2090deg;\x0a}\x0af-icon[rotate=\x22180\x22]\x20{\x0a\x20\x20rotate:\x20180deg;\x0a}\x0af-icon[rotate=\x22270\x22]\x20{\x0a\x20\x20rotate:\x20270deg;\x0a}\x0af-icon[rotate=\x22flipX\x22]\x20{\x0a\x20\x20transform:\x20rotateX(180deg);\x0a}\x0af-icon[rotate=\x22flipY\x22]\x20{\x0a\x20\x20transform:\x20rotateY(180deg);\x0a}\x0a\x0a@keyframes\x20spin\x20{\x0a\x20\x200%\x20{rotate:\x20z\x200}\x0a\x20\x20100%\x20{rotate:\x20z\x20360deg}\x0a}\x0a@keyframes\x20ltfade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200.75}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20fade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200.5}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20hvfade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200.25}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20ulfade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20csfade\x20{\x0a\x20\x200%\x20{opacity:\x20var(--max)}\x0a\x20\x2050%\x20{opacity:\x20var(--min)}\x0a\x20\x20100%\x20{opacity:\x20var(--max)}\x0a}\x0a@keyframes\x20smbeat\x20{\x0a\x20\x200%\x20{scale:\x201}\x0a\x20\x2050%\x20{scale:\x20.6}\x0a\x20\x20100%\x20{scale:\x201}\x0a}\x0a@keyframes\x20beat\x20{\x0a\x20\x200%\x20{scale:\x201.2}\x0a\x20\x2050%\x20{scale:\x20.8}\x0a\x20\x20100%\x20{scale:\x201.2}\x0a}\x0a@keyframes\x20bgbeat\x20{\x0a\x20\x200%\x20{scale:\x201.4}\x0a\x20\x2050%\x20{scale:\x201}\x0a\x20\x20100%\x20{scale:\x201.4}\x0a}\x0a@keyframes\x20fadebeat\x20{\x0a\x20\x200%\x20{opacity:\x201;\x20scale:\x201.2}\x0a\x20\x2050%\x20{opacity:\x200.5;\x20scale:\x20.8}\x0a\x20\x20100%\x20{opacity:\x201;\x20scale:\x201.2}\x0a}\x0a@keyframes\x20csbeat\x20{\x0a\x20\x200%\x20{scale:\x20var(--max)}\x0a\x20\x2050%\x20{scale:\x20var(--min)}\x0a\x20\x20100%\x20{scale:\x20var(--max)}\x0a}\x0a@keyframes\x20flipX\x20{\x0a\x20\x200%\x20{rotate:\x20x\x200;}\x0a\x20\x2050%\x20{rotate:\x20x\x20180deg;}\x0a\x20\x20100%\x20{rotate:\x20x\x20360deg;}\x0a}\x0a@keyframes\x20flipY\x20{\x0a\x20\x200%\x20{rotate:\x20y\x200;}\x0a\x20\x2050%\x20{rotate:\x20y\x20180deg;}\x0a\x20\x20100%\x20{rotate:\x20y\x20360deg;}\x0a}\x0a@keyframes\x20flipXY\x20{\x0a\x20\x200%\x20{transform:\x20rotateX(0deg)\x20rotateY(0deg);}\x0a\x20\x2050%\x20{transform:\x20rotateX(180deg)\x20rotateY(180deg);}\x0a\x20\x20100%\x20{transform:\x20rotateX(360deg)\x20rotateY(360deg);}\x0a}','smallest','Missing\x20arguments:\x20style1Name\x20is\x20undefined','Missing\x20arguments:\x20icon1Name\x20is\x20undefined','toggleStyle','getForiconIcon','year','uid','Invalid\x20value\x20format:\x20iconName\x20must\x20be\x20a\x20valid\x20string','867800KLtMMa','number','define','larger','74908fIsmgE','icon','setIcon','_s_mlh','Authentication\x20error:\x20We\x20couldn\x27t\x20found\x20the\x20user\x20with\x20given\x20UID','users','367150uXdYyF','i-s','removeAttribute','settings','plan','flipY','day','7TJQTcH','\x22]::before\x20{\x20content:\x20\x22\x5c','nodeName','getStyle','\x0af-icon[icon=\x22','getAttribute','setHours','_i_mlh','getHours','Invalid\x20value:\x20\x22','size','count','setDate','string','animation','12JEIsDv','dataset','setScale','mouseleave','setAnimation','createElement','setStyle','Access\x20denied:\x20This\x20domain\x20is\x20not\x20allowed\x20yet.\x20Please\x20allow\x20this\x20domain\x20before\x20importing\x20the\x20package','_i_meh','\x20is\x20not\x20supported\x20for\x20','661350fOSKic','xfast','15KUyNgu','1778841mpuUOK','flipX','large','927084ZKQRSb','Invalid\x20value\x20format:\x20sizeName\x20must\x20be\x20a\x20valid\x20string','\x22]::after\x20{\x20content:\x20\x22\x5c','renderingOption','geometricPrecision','appendChild','style','Missing\x20value:\x20User\x20ID\x20is\x20undefined.\x20Have\x20you\x20added\x20\x22data-uid\x22\x20attribute?','mouseenter','icons/','toggleStyleOnHover','getIcon','setSize','\x22}\x0af-icon[icon=\x22','_s_meh','getFullYear','semifast','removeEventListener','allowedDomains','addEventListener','querySelector','innerHTML','rotate','toggleIconOnHover','hostname','start','270','month','removeToggleIconOnHover','unicodes','Process\x20completed:\x20The\x20package\x20was\x20loaded\x20successfully\x0a\x0aPackage\x20name:\x20B/1.5.0','slow','toggleIcon','Invalid\x20value:\x20','styles','duotone/','getDate','split','includes','small','xlarger','f-icon','\x22][i-s=\x22','timezone','performance','Invalid\x20value\x20format:\x20Style\x20name\x20must\x20be\x20a\x20valid\x20string','\x22\x20is\x20not\x20supported','5473AovhqR','removeToggleStyleOnHover','pageviewCount','getElementById','scale','outline','smaller','Access\x20denied:\x20You\x20have\x20reached\x20the\x20limit\x20of\x20pageviews\x20for\x20','Invalid\x20value\x20format:\x20scaleName\x20must\x20be\x20a\x20valid\x20string','getMonth'];_0x5307=function(){return _0x4fde2d;};return _0x5307();}import{doc,getDoc,setDoc}from'//www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';const gfi=document[_0x3d263f(0x1f0)](_0x3d263f(0x1ff)),u=gfi[_0x3d263f(0x1af)][_0x3d263f(0x201)],{log,error}=console;if(!gfi)error('Missing\x20element:\x20Element\x20with\x20\x22getForiconIcon\x22\x20id\x20is\x20undefined');else{if(gfi[_0x3d263f(0x1a1)]!='SCRIPT')error('Element\x20error:\x20Element\x20with\x20\x22getForiconIcon\x22\x20id\x20must\x20be\x20a\x20<script>\x20element');else{if(!u)error(_0x3d263f(0x1c5));else gfi['remove'](),((async()=>{const _0x7fcaaf=_0x3d263f;let _0x519a9d=await getDoc(doc(dbFirestore,_0x7fcaaf(0x20c),u));if(_0x519a9d['exists']()){_0x519a9d=_0x519a9d['data']();let {pageview:_0x28cfd9,pageview:{start:_0x330f02}}=_0x519a9d,_0x4d114b=new Date(),_0x3866a1=_0x4d114b['getTimezoneOffset']()/0x3c,_0x105ea6={'lite':0x2af8,'proLite':0x18e70,'pro':0x16e360},_0x148571=new Date(_0x330f02[_0x7fcaaf(0x200)],_0x330f02[_0x7fcaaf(0x1d9)],_0x330f02[_0x7fcaaf(0x213)]);_0x148571[_0x7fcaaf(0x1a5)](_0x148571[_0x7fcaaf(0x1a7)]()+_0x330f02['timezone']),_0x148571['setHours'](_0x148571[_0x7fcaaf(0x1a7)]()-_0x3866a1);let _0x226967=_0x148571[_0x7fcaaf(0x1ab)](_0x148571[_0x7fcaaf(0x1e2)]()+0x1e);if(_0x4d114b>=_0x226967){while(!![]){let _0x2c57ce=new Date(_0x148571);_0x2c57ce['setDate'](_0x2c57ce['getDate']()+0x1e);if(_0x2c57ce>_0x4d114b)break;_0x226967=_0x2c57ce;}_0x28cfd9[_0x7fcaaf(0x1d7)]={'year':_0x148571[_0x7fcaaf(0x1cd)](),'month':_0x148571[_0x7fcaaf(0x1f6)](),'day':_0x148571[_0x7fcaaf(0x1e2)](),'timezone':_0x330f02[_0x7fcaaf(0x1e9)]},_0x28cfd9[_0x7fcaaf(0x1aa)]=0x1;}else _0x28cfd9['count']++;try{await setDoc(doc(dbFirestore,_0x7fcaaf(0x20c),u),{'pageview':_0x28cfd9},{'merge':!![]});}catch(_0x500521){_0x500521(_0x500521);}if(_0x519a9d[_0x7fcaaf(0x1ef)]>_0x105ea6[_0x519a9d[_0x7fcaaf(0x211)]])error(_0x7fcaaf(0x1f4)+_0x519a9d['plan']);else{if(_0x519a9d[_0x7fcaaf(0x210)][_0x7fcaaf(0x1d0)]['some'](_0x26115d=>location[_0x7fcaaf(0x1d6)]==_0x26115d)){customElements[_0x7fcaaf(0x205)](_0x7fcaaf(0x1e7),class extends HTMLElement{[_0x7fcaaf(0x1c9)](){const _0x3b9c1e=_0x7fcaaf;return this[_0x3b9c1e(0x1a4)](_0x3b9c1e(0x208));}['setIcon'](_0x5c0a50){const _0x4a4aeb=_0x7fcaaf;if(typeof _0x5c0a50!=_0x4a4aeb(0x1ac))error(_0x4a4aeb(0x202));else{if(!_0x29f5dc[_0x5c0a50])error(_0x4a4aeb(0x1df)+_0x5c0a50+'\x20is\x20not\x20supported');else this['setAttribute'](_0x4a4aeb(0x208),_0x5c0a50);}}[_0x7fcaaf(0x1de)](_0xfc581a,_0xd1b1ba){const _0x24ae3c=_0x7fcaaf;let _0x18ab6d=this['getIcon']();if(!_0xfc581a)error(_0x24ae3c(0x1fd));else{if(!_0xd1b1ba)error('Missing\x20arguments:\x20icon2Name\x20is\x20undefined');else this['setIcon'](_0x18ab6d==_0xfc581a?_0xd1b1ba:_0xfc581a);}}[_0x7fcaaf(0x1a2)](){const _0xa736cf=_0x7fcaaf;return this[_0xa736cf(0x1a4)](_0xa736cf(0x20e));}[_0x7fcaaf(0x1b4)](_0x4dacfe){const _0x233c60=_0x7fcaaf;let _0x3f5ba4=this[_0x233c60(0x1c9)](),_0x18a1c6=_0x29f5dc[_0x3f5ba4][_0x233c60(0x1e0)];if(typeof _0x4dacfe!=_0x233c60(0x1ac))error(_0x233c60(0x1eb));else{if(!_0x18a1c6[_0x233c60(0x1e4)](_0x4dacfe))error(_0x233c60(0x1df)+_0x4dacfe+_0x233c60(0x1b7)+_0x3f5ba4);else this[_0x233c60(0x1f8)](_0x233c60(0x20e),_0x4dacfe);}}[_0x7fcaaf(0x1fe)](_0x5cd494,_0x1c5739){const _0x1a5887=_0x7fcaaf;let _0xa11833=this[_0x1a5887(0x1a4)](_0x1a5887(0x20e));if(!_0x5cd494)error(_0x1a5887(0x1fc));else{if(!_0x1c5739)error('Missing\x20arguments:\x20style2Name\x20is\x20undefined');else this['setStyle'](_0xa11833==_0x5cd494?_0x1c5739:_0x5cd494);}}[_0x7fcaaf(0x1b2)](_0x447dfe,_0x59e75c){const _0x18dae7=_0x7fcaaf;if(_0x447dfe==null)this[_0x18dae7(0x20f)](_0x18dae7(0x1ad));else{if(typeof _0x447dfe!=_0x18dae7(0x1ac)||_0x59e75c&&typeof _0x59e75c!=_0x18dae7(0x1ac))error('Invalid\x20value\x20format:\x20animationName\x20and\x20speedName\x20must\x20be\x20a\x20valid\x20string');else{if(![_0x18dae7(0x1fb),_0x18dae7(0x1f3),'small',_0x18dae7(0x1bd),_0x18dae7(0x206),'largest'][_0x18dae7(0x1e4)](_0x447dfe))error(_0x18dae7(0x1a8)+_0x447dfe+'\x22\x20is\x20not\x20supported');else{if(_0x59e75c&&!['xxslow','xslow',_0x18dae7(0x1dd),'semislow',_0x18dae7(0x1ce),'fast',_0x18dae7(0x1b9),'xxfast'][_0x18dae7(0x1e4)](_0x59e75c))error('Invalid\x20value:\x20\x22'+_0x59e75c+'\x22\x20is\x20not\x20supported');else this[_0x18dae7(0x1f8)]('animation',''+_0x447dfe+(_0x59e75c?'-'+_0x59e75c:''));}}}}[_0x7fcaaf(0x1ca)](_0xe72a52){const _0x307347=_0x7fcaaf;if(_0xe72a52==null)this[_0x307347(0x20f)](_0x307347(0x1a9));else{if(typeof _0xe72a52==_0x307347(0x1ac)){if([_0x307347(0x1fb),_0x307347(0x1f3),_0x307347(0x1e5),'large','larger','largest'][_0x307347(0x1e4)](_0xe72a52))this[_0x307347(0x1f8)](_0x307347(0x1a9),_0xe72a52);else error(_0x307347(0x1a8)+_0xe72a52+_0x307347(0x1ec));}else error(_0x307347(0x1bf));}}[_0x7fcaaf(0x1b0)](_0x19842d){const _0x5700f4=_0x7fcaaf;if(scale==null)this['removeAttribute'](_0x5700f4(0x1f1));else{if(typeof scale==_0x5700f4(0x1ac)){let _0x4fa7a0=['xsmaller',_0x5700f4(0x1f3),_0x5700f4(0x206),_0x5700f4(0x1e6)];if(_0x4fa7a0[_0x5700f4(0x1e4)](_0x19842d))this['setAttribute'](_0x5700f4(0x1f1),_0x19842d);else error(_0x5700f4(0x1a8)+_0x19842d+_0x5700f4(0x1ec));}else error(_0x5700f4(0x1f5));}}['rotate'](_0xfd0ade){const _0x59d41d=_0x7fcaaf;if(_0xfd0ade==null)this[_0x59d41d(0x20f)](_0x59d41d(0x1d4));else{if(typeof _0xfd0ade==_0x59d41d(0x1ac)||typeof _0xfd0ade==_0x59d41d(0x204)){let _0x4e1e0f=['90','180',_0x59d41d(0x1d8),_0x59d41d(0x1bc),_0x59d41d(0x212)];if(_0x4e1e0f[_0x59d41d(0x1e4)](_0xfd0ade[_0x59d41d(0x1f9)]()))this[_0x59d41d(0x1f8)](_0x59d41d(0x1d4),_0xfd0ade);else error(_0x59d41d(0x1a8)+_0xfd0ade+_0x59d41d(0x1ec));}else error('Invalid\x20value\x20format:\x20Value\x20must\x20be\x20a\x20valid\x20string\x20or\x20number');}}[_0x7fcaaf(0x1d5)](_0x29420,_0x427837=this){const _0x42816e=_0x7fcaaf;let _0xf15b67=this[_0x42816e(0x1c9)]();function _0x46672c(){this['setIcon'](_0x29420);}function _0x2bfc22(){const _0x501777=_0x42816e;this[_0x501777(0x209)](_0xf15b67);}_0x427837[_0x42816e(0x1d1)](_0x42816e(0x1c6),_0x46672c),_0x427837[_0x42816e(0x1d1)](_0x42816e(0x1b1),_0x2bfc22),_0x427837['_i_meh']=_0x46672c,_0x427837[_0x42816e(0x1a6)]=_0x2bfc22;}[_0x7fcaaf(0x1da)](_0x2499d7){const _0x2eb6fa=_0x7fcaaf;_0x2499d7['_i_meh']&&(_0x2499d7[_0x2eb6fa(0x1cf)](_0x2eb6fa(0x1c6),_0x2499d7['_i_meh']),delete _0x2499d7[_0x2eb6fa(0x1b6)]),_0x2499d7[_0x2eb6fa(0x1a6)]&&(_0x2499d7[_0x2eb6fa(0x1cf)](_0x2eb6fa(0x1b1),_0x2499d7['_i_mlh']),delete _0x2499d7['_i_mlh']);}[_0x7fcaaf(0x1c8)](_0x1708ea,_0x1f8cc3=this){const _0x237cb2=_0x7fcaaf;let _0x4f5994=this['getStyle']();function _0x249897(){const _0x312f5e=_0xce24;this[_0x312f5e(0x1b4)](_0x1708ea);}function _0x218eb3(){const _0x33e1c2=_0xce24;this[_0x33e1c2(0x1b4)](_0x4f5994);}_0x1f8cc3[_0x237cb2(0x1d1)](_0x237cb2(0x1c6),_0x249897),_0x1f8cc3[_0x237cb2(0x1d1)](_0x237cb2(0x1b1),_0x218eb3),_0x1f8cc3[_0x237cb2(0x1cc)]=_0x249897,_0x1f8cc3[_0x237cb2(0x20a)]=_0x218eb3;}[_0x7fcaaf(0x1ee)](_0x498ace){const _0x2e6d77=_0x7fcaaf;_0x498ace[_0x2e6d77(0x1cc)]&&(_0x498ace[_0x2e6d77(0x1cf)](_0x2e6d77(0x1c6),_0x498ace[_0x2e6d77(0x1cc)]),delete _0x498ace[_0x2e6d77(0x1cc)]),_0x498ace[_0x2e6d77(0x20a)]&&(_0x498ace['removeEventListener'](_0x2e6d77(0x1b1),_0x498ace[_0x2e6d77(0x20a)]),delete _0x498ace[_0x2e6d77(0x20a)]);}});let _0x41a57f=document[_0x7fcaaf(0x1b3)](_0x7fcaaf(0x1c4));_0x41a57f[_0x7fcaaf(0x1d3)]=':root\x20{\x0a\x20\x20--primary-color:\x20inherit;\x0a\x20\x20--secondary-color:\x20inherit;\x0a\x20\x20--primary-opacity:\x201;\x0a\x20\x20--secondary-opacity:\x200.4;\x0a}\x0a@font-face\x20{\x0a\x20\x20font-family:\x20\x22Foricon\x20Beta\x22;\x0a\x20\x20src:\x20url(\x22//foricon-src.github.io/main/font.ttf\x22);\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20font-style:\x20normal;\x0a\x20\x20text-rendering:\x20'+(_0x519a9d[_0x7fcaaf(0x210)][_0x7fcaaf(0x1c1)]==_0x7fcaaf(0x1ea)?'optimizeSpeed':_0x7fcaaf(0x1c2))+_0x7fcaaf(0x1fa);let _0x29f5dc=(await get(ref(db,_0x7fcaaf(0x1c7))))['val']();for(let _0x2cf9c2 in _0x29f5dc){let _0x166fd1=_0x29f5dc[_0x2cf9c2];_0x166fd1[_0x7fcaaf(0x1e0)]['forEach'](_0x500bd4=>{const _0x31c0d7=_0x7fcaaf;let _0x5a0c47,_0x284234=_0x166fd1[_0x31c0d7(0x1db)]?.[_0x500bd4[_0x31c0d7(0x1f7)]('/','-')];if(_0x500bd4[_0x31c0d7(0x1e4)](_0x31c0d7(0x1e1))){let _0x2ab46c=_0x284234?.[_0x31c0d7(0x1e3)]('|');_0x5a0c47=_0x31c0d7(0x1a3)+_0x2cf9c2+_0x31c0d7(0x1e8)+_0x500bd4+_0x31c0d7(0x1a0)+_0x2ab46c?.[0x0]+_0x31c0d7(0x1cb)+_0x2cf9c2+_0x31c0d7(0x1e8)+_0x500bd4+_0x31c0d7(0x1c0)+_0x2ab46c?.[0x1]+'\x22}';}else _0x5a0c47=_0x31c0d7(0x1a3)+_0x2cf9c2+'\x22]'+(_0x500bd4==_0x31c0d7(0x1f2)?'[i-s=\x22outline\x22]':'')+'::before\x20{\x20content:\x20\x22\x5c'+_0x284234+'\x22}';_0x41a57f[_0x31c0d7(0x1d3)]+=_0x5a0c47;});}document[_0x7fcaaf(0x1d2)]('head')[_0x7fcaaf(0x1c3)](_0x41a57f),log(_0x7fcaaf(0x1dc));}else error(_0x7fcaaf(0x1b5));}}else error(_0x7fcaaf(0x20b));})());}}