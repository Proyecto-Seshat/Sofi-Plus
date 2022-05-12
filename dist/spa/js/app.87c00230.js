(()=>{"use strict";var e={3912:(e,t,r)=>{r(5363),r(71);var n=r(8880),o=r(9592),a=r(3673);function i(e,t,r,n,o,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l=(0,a.aZ)({name:"App"});var s=r(4260);const c=(0,s.Z)(l,[["render",i]]),d=c;var u=r(3340),p=r(9582);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(767)]).then(r.bind(r,3767)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(509)]).then(r.bind(r,6509))},{path:"soporte",component:()=>Promise.all([r.e(736),r.e(98)]).then(r.bind(r,4098))}]},{path:"/usr=:user/",component:()=>Promise.all([r.e(736),r.e(64),r.e(797)]).then(r.bind(r,5326)),children:[{path:"0",component:()=>Promise.all([r.e(736),r.e(64),r.e(396)]).then(r.bind(r,3396))},{path:"1",component:()=>Promise.all([r.e(736),r.e(64),r.e(971)]).then(r.bind(r,2694))},{path:"2",component:()=>Promise.all([r.e(736),r.e(64),r.e(161)]).then(r.bind(r,7713))},{path:"3",component:()=>Promise.all([r.e(736),r.e(64),r.e(593)]).then(r.bind(r,5884))},{path:"4",component:()=>Promise.all([r.e(736),r.e(64),r.e(285)]).then(r.bind(r,5680))},{path:"5",component:()=>Promise.all([r.e(736),r.e(64),r.e(670)]).then(r.bind(r,3498))},{path:"6",component:()=>Promise.all([r.e(736),r.e(64),r.e(739)]).then(r.bind(r,7710))},{path:"7",component:()=>Promise.all([r.e(736),r.e(432)]).then(r.bind(r,4432))},{path:"8",component:()=>Promise.all([r.e(736),r.e(482)]).then(r.bind(r,5482))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(293)]).then(r.bind(r,7293))}],f=h,m=(0,u.BC)((function(){const e=p.r5,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function b(e,t){const r="function"===typeof m?await m({}):m,n=e(d);return n.use(o.Z,t),{app:n,router:r}}var v=r(1233),E=r(499),g=r(4434),O=r(6249);const P={config:{},lang:v.Z,plugins:{Dialog:E.Z,Notify:g.Z,Loading:O.Z}},y="";async function C({app:e,router:t},r){let n=!1;const o=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===n&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:y})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.mount("#q-app"))}b(n.ri,P).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1768)),Promise.resolve().then(r.bind(r,1058))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));C(e,r)}))))},1768:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>l});var n=r(3340),o=r(52),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),l=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},1058:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(3340),o=r(7831),a=r(1903),i=r(2332);const l=(0,n.xr)((({app:e,router:t})=>{const r=(0,o.WB)();r.use(a.ZP),e.use(r);const{name:n,role:l}=(0,o.Jk)((0,i.H)(r));t.beforeEach(((e,t)=>{if("/"===e.path){if(""!==n.value)return{path:`/usr=${n.value}/0`}}else if(""===n.value)return{path:"/"}}))}))},2332:(e,t,r)=>{r.d(t,{H:()=>o});var n=r(7831);const o=(0,n.Q_)("User",{state:()=>{const e={admin:["MENÚ PRINCIPAL","FACTURA DE  VENTA","RECIBOS DE CAJA","COMPROBANTES DE EGRESO","DEVOLUCIONES","INVENTARIO","TERCEROS","REPORTES","INFORMES FINANCIEROS"],cashier:["MENÚ PRINCIPAL","FACTURA DE  VENTA","RECIBOS DE CAJA","COMPROBANTES DE EGRESO","DEVOLUCIONES"],manager:["MENÚ PRINCIPAL","FACTURA DE  VENTA","RECIBOS DE CAJA","COMPROBANTES DE EGRESO","DEVOLUCIONES","INVENTARIO","TERCEROS"]};return{name:"",role:"",permissions:e}},getters:{getPermissions(){return this.permissions[this.role]}},actions:{login(e,t){this.name=e,this.role=t},logout(){this.name="",this.role=""}},persist:!0})}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"b307c74c",98:"6a8d8264",161:"63aac82f",285:"6e0eaf4f",293:"4e70c6c3",396:"8aa5848e",432:"d6c83dd9",482:"1f049668",509:"51e5be92",593:"142eb307",670:"bdcbe17d",739:"0528bd0e",767:"ca46585a",797:"160532b0",971:"78723056"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{98:"23c8991e",143:"e71b2b33",161:"cbccd782",285:"7fb1bf8c",396:"5426f87e",432:"a8485f45",482:"73499f40",509:"3a230b01",593:"1ef7068a",670:"865a1280",736:"c3d2f5ac",739:"9f3ca3b2",797:"c0444aa0",971:"14fad823"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="mockups:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={98:1,161:1,285:1,396:1,432:1,482:1,509:1,593:1,670:1,739:1,797:1,971:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,s=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var d=s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=self["webpackChunkmockups"]=self["webpackChunkmockups"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(3912)));n=r.O(n)})();