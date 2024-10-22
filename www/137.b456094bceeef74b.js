"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[137],{2137:(Ce,G,y)=>{y.r(G),y.d(G,{CameraPage:()=>ue});var u=y(467),D=y(177),N=y(4341),A=y(584);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var $=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}($||{});class _ extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const te=r=>{var e,t,n,a,i;const s=r.CapacitorCustomPlatform||null,o=r.Capacitor||{},l=o.Plugins=o.Plugins||{},c=r.CapacitorPlatforms,k=(null===(e=null==c?void 0:c.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==s?s.name:(r=>{var e,t;return null!=r&&r.androidBridge?"android":null!==(t=null===(e=null==r?void 0:r.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(r)),de=(null===(t=null==c?void 0:c.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==k()),me=(null===(n=null==c?void 0:c.currentPlatform)||void 0===n?void 0:n.isPluginAvailable)||(d=>{const m=S.get(d);return!!(null!=m&&m.platforms.has(k())||z(d))}),z=(null===(a=null==c?void 0:c.currentPlatform)||void 0===a?void 0:a.getPluginHeader)||(d=>{var m;return null===(m=o.PluginHeaders)||void 0===m?void 0:m.find(x=>x.name===d)}),S=new Map,Pe=(null===(i=null==c?void 0:c.currentPlatform)||void 0===i?void 0:i.registerPlugin)||((d,m={})=>{const x=S.get(d);if(x)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),x.proxy;const E=k(),O=z(d);let P;const be=function(){var p=(0,u.A)(function*(){return!P&&E in m?P=P="function"==typeof m[E]?yield m[E]():m[E]:null!==s&&!P&&"web"in m&&(P=P="function"==typeof m.web?yield m.web():m.web),P});return function(){return p.apply(this,arguments)}}(),H=p=>{let g;const v=(...b)=>{const w=be().then(h=>{const L=((p,g)=>{var v,b;if(!O){if(p)return null===(b=p[g])||void 0===b?void 0:b.bind(p);throw new _(`"${d}" plugin is not implemented on ${E}`,$.Unimplemented)}{const w=null==O?void 0:O.methods.find(h=>g===h.name);if(w)return"promise"===w.rtype?h=>o.nativePromise(d,g.toString(),h):(h,L)=>o.nativeCallback(d,g.toString(),h,L);if(p)return null===(v=p[g])||void 0===v?void 0:v.bind(p)}})(h,p);if(L){const j=L(...b);return g=null==j?void 0:j.remove,j}throw new _(`"${d}.${p}()" is not implemented on ${E}`,$.Unimplemented)});return"addListener"===p&&(w.remove=(0,u.A)(function*(){return g()})),w};return v.toString=()=>`${p.toString()}() { [capacitor code] }`,Object.defineProperty(v,"name",{value:p,writable:!1,configurable:!1}),v},J=H("addListener"),X=H("removeListener"),ye=(p,g)=>{const v=J({eventName:p},g),b=function(){var h=(0,u.A)(function*(){const L=yield v;X({eventName:p,callbackId:L},g)});return function(){return h.apply(this,arguments)}}(),w=new Promise(h=>v.then(()=>h({remove:b})));return w.remove=(0,u.A)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield b()}),w},M=new Proxy({},{get(p,g){switch(g){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return O?ye:J;case"removeListener":return X;default:return H(g)}}});return l[d]=M,S.set(d,{name:d,proxy:M,platforms:new Set([...Object.keys(m),...O?[E]:[]])}),M});return o.convertFileSrc||(o.convertFileSrc=d=>d),o.getPlatform=k,o.handleError=d=>r.console.error(d),o.isNativePlatform=de,o.isPluginAvailable=me,o.pluginMethodNoop=(d,m,x)=>Promise.reject(`${x} does not have an implementation of "${m}".`),o.registerPlugin=Pe,o.Exception=_,o.DEBUG=!!o.DEBUG,o.isLoggingEnabled=!!o.isLoggingEnabled,o.platform=o.getPlatform(),o.isNative=o.isNativePlatform(),o},R=(r=>r.Capacitor=te(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),F=R.registerPlugin;class I{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var n=this;let a=!1;this.listeners[e]||(this.listeners[e]=[],a=!0),this.listeners[e].push(t);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),a&&this.sendRetainedArgumentsForEvent(e);const o=function(){var c=(0,u.A)(function*(){return n.removeListener(e,t)});return function(){return c.apply(this,arguments)}}();return Promise.resolve({remove:o})}removeAllListeners(){var e=this;return(0,u.A)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t,n){const a=this.listeners[e];if(a)a.forEach(i=>i(t));else if(n){let i=this.retainedEventArguments[e];i||(i=[]),i.push(t),this.retainedEventArguments[e]=i}}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:n=>{this.notifyListeners(t,n)}}}unimplemented(e="not implemented"){return new R.Exception(e,$.Unimplemented)}unavailable(e="not available"){return new R.Exception(e,$.Unavailable)}removeListener(e,t){var n=this;return(0,u.A)(function*(){const a=n.listeners[e];if(!a)return;const i=a.indexOf(t);n.listeners[e].splice(i,1),n.listeners[e].length||n.removeWindowListener(n.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(n=>{this.notifyListeners(e,n)}))}}const q=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),K=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class re extends I{getCookies(){return(0,u.A)(function*(){const e=document.cookie,t={};return e.split(";").forEach(n=>{if(n.length<=0)return;let[a,i]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=K(a).trim(),i=K(i).trim(),t[a]=i}),t})()}setCookie(e){return(0,u.A)(function*(){try{const t=q(e.key),n=q(e.value),a=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),s=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${a}; path=${i}; ${s};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,u.A)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,u.A)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,u.A)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}F("CapacitorCookies",{web:()=>new re});const ne=function(){var r=(0,u.A)(function*(e){return new Promise((t,n)=>{const a=new FileReader;a.onload=()=>{const i=a.result;t(i.indexOf(",")>=0?i.split(",")[1]:i)},a.onerror=i=>n(i),a.readAsDataURL(e)})});return function(t){return r.apply(this,arguments)}}();class se extends I{request(e){return(0,u.A)(function*(){const t=((r,e={})=>{const t=Object.assign({method:r.method||"GET",headers:r.headers},e),a=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(a=>a.toLocaleLowerCase()).reduce((a,i,s)=>(a[i]=r[e[s]],a),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)t.body=r.data;else if(a.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[s,o]of Object.entries(r.data||{}))i.set(s,o);t.body=i.toString()}else if(a.includes("multipart/form-data")||r.data instanceof FormData){const i=new FormData;if(r.data instanceof FormData)r.data.forEach((o,l)=>{i.append(l,o)});else for(const o of Object.keys(r.data))i.append(o,r.data[o]);t.body=i;const s=new Headers(t.headers);s.delete("content-type"),t.headers=s}else(a.includes("application/json")||"object"==typeof r.data)&&(t.body=JSON.stringify(r.data));return t})(e,e.webFetchExtra),n=((r,e=!0)=>r?Object.entries(r).reduce((n,a)=>{const[i,s]=a;let o,l;return Array.isArray(s)?(l="",s.forEach(c=>{o=e?encodeURIComponent(c):c,l+=`${i}=${o}&`}),l.slice(0,-1)):(o=e?encodeURIComponent(s):s,l=`${i}=${o}`),`${n}&${l}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),a=n?`${e.url}?${n}`:e.url,i=yield fetch(a,t),s=i.headers.get("content-type")||"";let l,c,{responseType:o="text"}=i.ok?e:{};switch(s.includes("application/json")&&(o="json"),o){case"arraybuffer":case"blob":c=yield i.blob(),l=yield ne(c);break;case"json":l=yield i.json();break;default:l=yield i.text()}const C={};return i.headers.forEach((k,W)=>{C[W]=k}),{data:l,headers:C,status:i.status,url:i.url}})()}get(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,u.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}F("CapacitorHttp",{web:()=>new se});var U=function(r){return r.Prompt="PROMPT",r.Camera="CAMERA",r.Photos="PHOTOS",r}(U||{}),T=function(r){return r.Rear="REAR",r.Front="FRONT",r}(T||{}),V=function(r){return r.Uri="uri",r.Base64="base64",r.DataUrl="dataUrl",r}(V||{});class Y extends I{getPhoto(e){var t=this;return(0,u.A)(function*(){return new Promise(function(){var n=(0,u.A)(function*(a,i){if(e.webUseInput||e.source===U.Photos)t.fileInputExperience(e,a,i);else if(e.source===U.Prompt){let s=document.querySelector("pwa-action-sheet");s||(s=document.createElement("pwa-action-sheet"),document.body.appendChild(s)),s.header=e.promptLabelHeader||"Photo",s.cancelable=!1,s.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],s.addEventListener("onSelection",function(){var o=(0,u.A)(function*(l){0===l.detail?t.fileInputExperience(e,a,i):t.cameraExperience(e,a,i)});return function(l){return o.apply(this,arguments)}}())}else t.cameraExperience(e,a,i)});return function(a,i){return n.apply(this,arguments)}}())})()}pickImages(e){var t=this;return(0,u.A)(function*(){return new Promise(function(){var n=(0,u.A)(function*(a,i){t.multipleFileInputExperience(a,i)});return function(a,i){return n.apply(this,arguments)}}())})()}cameraExperience(e,t,n){var a=this;return(0,u.A)(function*(){if(customElements.get("pwa-camera-modal")){const i=document.createElement("pwa-camera-modal");i.facingMode=e.direction===T.Front?"user":"environment",document.body.appendChild(i);try{yield i.componentOnReady(),i.addEventListener("onPhoto",function(){var s=(0,u.A)(function*(o){const l=o.detail;null===l?n(new _("User cancelled photos app")):l instanceof Error?n(l):t(yield a._getCameraPhoto(l,e)),i.dismiss(),document.body.removeChild(i)});return function(o){return s.apply(this,arguments)}}()),i.present()}catch{a.fileInputExperience(e,t,n)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),a.fileInputExperience(e,t,n)})()}fileInputExperience(e,t,n){let a=document.querySelector("#_capacitor-camera-input");const i=()=>{var s;null===(s=a.parentNode)||void 0===s||s.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",s=>{const o=a.files[0];let l="jpeg";if("image/png"===o.type?l="png":"image/gif"===o.type&&(l="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const c=new FileReader;c.addEventListener("load",()=>{if("dataUrl"===e.resultType)t({dataUrl:c.result,format:l});else if("base64"===e.resultType){const C=c.result.split(",")[1];t({base64String:C,format:l})}i()}),c.readAsDataURL(o)}else t({webPath:URL.createObjectURL(o),format:l}),i()}),a.addEventListener("cancel",s=>{n(new _("User cancelled photos app")),i()})),a.accept="image/*",a.capture=!0,e.source===U.Photos||e.source===U.Prompt?a.removeAttribute("capture"):e.direction===T.Front?a.capture="user":e.direction===T.Rear&&(a.capture="environment"),a.click()}multipleFileInputExperience(e,t){let n=document.querySelector("#_capacitor-camera-input-multiple");const a=()=>{var i;null===(i=n.parentNode)||void 0===i||i.removeChild(n)};n||(n=document.createElement("input"),n.id="_capacitor-camera-input-multiple",n.type="file",n.hidden=!0,n.multiple=!0,document.body.appendChild(n),n.addEventListener("change",i=>{const s=[];for(let o=0;o<n.files.length;o++){const l=n.files[o];let c="jpeg";"image/png"===l.type?c="png":"image/gif"===l.type&&(c="gif"),s.push({webPath:URL.createObjectURL(l),format:c})}e({photos:s}),a()}),n.addEventListener("cancel",i=>{t(new _("User cancelled photos app")),a()})),n.accept="image/*",n.click()}_getCameraPhoto(e,t){return new Promise((n,a)=>{const i=new FileReader,s=e.type.split("/")[1];"uri"===t.resultType?n({webPath:URL.createObjectURL(e),format:s,saved:!1}):(i.readAsDataURL(e),i.onloadend=()=>{const o=i.result;n("dataUrl"===t.resultType?{dataUrl:o,format:s,saved:!1}:{base64String:o.split(",")[1],format:s,saved:!1})},i.onerror=o=>{a(o)})})}checkPermissions(){var e=this;return(0,u.A)(function*(){if(typeof navigator>"u"||!navigator.permissions)throw e.unavailable("Permissions API not available in this browser");try{return{camera:(yield window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw e.unavailable("Camera permissions are not available in this browser")}})()}requestPermissions(){var e=this;return(0,u.A)(function*(){throw e.unimplemented("Not implemented on web.")})()}pickLimitedLibraryPhotos(){var e=this;return(0,u.A)(function*(){throw e.unavailable("Not implemented on web.")})()}getLimitedLibraryPhotos(){var e=this;return(0,u.A)(function*(){throw e.unavailable("Not implemented on web.")})()}}new Y;const le=F("Camera",{web:()=>new Y});var f=y(4438);function ce(r,e){if(1&r&&f.nrm(0,"ion-img",4),2&r){const t=f.XpG();f.Y8G("src",t.img.webPath)}}let ue=(()=>{var r;class e{constructor(){}ngOnInit(){}get_photo(){var n=this;return(0,u.A)(function*(){n.img=yield le.getPhoto({resultType:V.Uri,source:U.Prompt,quality:100}),console.log(n.img)})()}}return(r=e).\u0275fac=function(n){return new(n||r)},r.\u0275cmp=f.VBU({type:r,selectors:[["app-camera"]],standalone:!0,features:[f.aNF],decls:8,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],[3,"click"],[3,"src",4,"ngIf"],[3,"src"]],template:function(n,a){1&n&&(f.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),f.EFF(3,"camera"),f.k0s()()(),f.j41(4,"ion-content",1)(5,"ion-button",2),f.bIt("click",function(){return a.get_photo()}),f.EFF(6,"Open Camera"),f.k0s(),f.DNE(7,ce,1,1,"ion-img",3),f.k0s()),2&n&&(f.Y8G("translucent",!0),f.R7$(4),f.Y8G("fullscreen",!0),f.R7$(3),f.Y8G("ngIf",a.img))},dependencies:[A.KW,A.W9,A.eU,A.BC,A.ai,D.MD,D.bT,N.YN,A.Jm]}),e})()}}]);