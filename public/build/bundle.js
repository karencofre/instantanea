(()=>{"use strict";function e(){}function t(e,t){for(const s in t)e[s]=t[s];return e}function s(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(s)}function c(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e){return 0===Object.keys(e).length}function r(t,...s){if(null==t)return e;const n=t.subscribe(...s);return n.unsubscribe?()=>n.unsubscribe():n}function a(e,t,s){e.$$.on_destroy.push(r(t,s))}function u(e,t,s,n){if(e){const o=d(e,t,s,n);return e[0](o)}}function d(e,s,n,o){return e[1]&&o?t(n.ctx.slice(),e[1](o(s))):n.ctx}function p(e,t,s,n,o,c,i){const l=function(e,t,s,n){if(e[2]&&n){const o=e[2](n(s));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],s=Math.max(t.dirty.length,o.length);for(let n=0;n<s;n+=1)e[n]=t.dirty[n]|o[n];return e}return t.dirty|o}return t.dirty}(t,n,o,c);if(l){const o=d(t,s,n,i);e.p(o,l)}}function f(e){const t={};for(const s in e)"$"!==s[0]&&(t[s]=e[s]);return t}function m(e,t){const s={};t=new Set(t);for(const n in e)t.has(n)||"$"===n[0]||(s[n]=e[n]);return s}function v(e,t){e.appendChild(t)}function g(e,t,s){e.insertBefore(t,s||null)}function $(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function b(){return j(" ")}function w(){return j("")}function y(e,t,s){null==s?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function k(e,t){const s=Object.getOwnPropertyDescriptors(e.__proto__);for(const n in t)null==t[n]?e.removeAttribute(n):"style"===n?e.style.cssText=t[n]:"__value"===n?e.value=e[n]=t[n]:s[n]&&s[n].set?e[n]=t[n]:y(e,n,t[n])}let x;function _(e){x=e}function E(){if(!x)throw new Error("Function called outside component initialization");return x}function z(e,t){E().$$.context.set(e,t)}function S(e){return E().$$.context.get(e)}new Set,new Set;const A=[],C=[],P=[],q=[],L=Promise.resolve();let O=!1;function T(e){P.push(e)}let I=!1;const M=new Set;function R(){if(!I){I=!0;do{for(let e=0;e<A.length;e+=1){const t=A[e];_(t),H(t.$$)}for(_(null),A.length=0;C.length;)C.pop()();for(let e=0;e<P.length;e+=1){const t=P[e];M.has(t)||(M.add(t),t())}P.length=0}while(A.length);for(;q.length;)q.pop()();O=!1,I=!1,M.clear()}}function H(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}const N=new Set;let B,D;function U(){B={r:0,c:[],p:B}}function K(){B.r||o(B.c),B=B.p}function F(e,t){e&&e.i&&(N.delete(e),e.i(t))}function G(e,t,s,n){if(e&&e.o){if(N.has(e))return;N.add(e),B.c.push((()=>{N.delete(e),n&&(s&&e.d(1),n())})),e.o(t)}}function J(e,t){const s={},n={},o={$$scope:1};let c=e.length;for(;c--;){const i=e[c],l=t[c];if(l){for(const e in i)e in l||(n[e]=1);for(const e in l)o[e]||(s[e]=l[e],o[e]=1);e[c]=l}else for(const e in i)o[e]=1}for(const e in n)e in s||(s[e]=void 0);return s}function V(e){return"object"==typeof e&&null!==e?e:{}}function Q(e){e&&e.c()}function W(e,t,n,i){const{fragment:l,on_mount:r,on_destroy:a,after_update:u}=e.$$;l&&l.m(t,n),i||T((()=>{const t=r.map(s).filter(c);a?a.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(T)}function X(e,t){const s=e.$$;null!==s.fragment&&(o(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function Y(t,s,c,i,l,r,a=[-1]){const u=x;_(t);const d=t.$$={fragment:null,ctx:null,props:r,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=c?c(t,s.props||{},((e,s,...n)=>{const o=n.length?n[0]:s;return d.ctx&&l(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),p&&function(e,t){-1===e.$$.dirty[0]&&(A.push(e),O||(O=!0,L.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),s})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),s.target){if(s.hydrate){const e=(f=s.target,Array.from(f.childNodes));d.fragment&&d.fragment.l(e),e.forEach($)}else d.fragment&&d.fragment.c();s.intro&&F(t.$$.fragment),W(t,s.target,s.anchor,s.customElement),R()}var f;_(u)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(D=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(s).filter(c);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,s){this[e]=s}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){X(this,1),this.$destroy=e}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}$set(e){this.$$set&&!l(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class Z{$destroy(){X(this,1),this.$destroy=e}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}$set(e){this.$$set&&!l(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ee=[];function te(t,s=e){let n;const o=[];function c(e){if(i(t,e)&&(t=e,n)){const e=!ee.length;for(let e=0;e<o.length;e+=1){const s=o[e];s[1](),ee.push(s,t)}if(e){for(let e=0;e<ee.length;e+=2)ee[e][0](ee[e+1]);ee.length=0}}}return{set:c,update:function(e){c(e(t))},subscribe:function(i,l=e){const r=[i,l];return o.push(r),1===o.length&&(n=s(c)||e),i(t),()=>{const e=o.indexOf(r);-1!==e&&o.splice(e,1),0===o.length&&(n(),n=null)}}}}const se={},ne={};function oe(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}const ce=function(e,t){const s=[];let n=oe(e);return{get location(){return n},listen(t){s.push(t);const o=()=>{n=oe(e),t({location:n,action:"POP"})};return e.addEventListener("popstate",o),()=>{e.removeEventListener("popstate",o);const n=s.indexOf(t);s.splice(n,1)}},navigate(t,{state:o,replace:c=!1}={}){o={...o,key:Date.now()+""};try{c?e.history.replaceState(o,null,t):e.history.pushState(o,null,t)}catch(s){e.location[c?"replace":"assign"](t)}n=oe(e),s.forEach((e=>e({location:n,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(e="/"){let t=0;const s=[{pathname:e,search:""}],n=[];return{get location(){return s[t]},addEventListener(e,t){},removeEventListener(e,t){},history:{get entries(){return s},get index(){return t},get state(){return n[t]},pushState(e,o,c){const[i,l=""]=c.split("?");t++,s.push({pathname:i,search:l}),n.push(e)},replaceState(e,o,c){const[i,l=""]=c.split("?");s[t]={pathname:i,search:l},n[t]=e}}}}()),{navigate:ie}=ce,le=/^:(.+)/;function re(e,t){return e.substr(0,t.length)===t}function ae(e){return"*"===e[0]}function ue(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function de(e){return e.replace(/(^\/+|\/+$)/g,"")}function pe(e,t){return{route:e,score:e.default?0:ue(e.path).reduce(((e,t)=>(e+=4,function(e){return""===e}(t)?e+=1:function(e){return le.test(e)}(t)?e+=2:ae(t)?e-=5:e+=3,e)),0),index:t}}function fe(e,t){let s,n;const[o]=t.split("?"),c=ue(o),i=""===c[0],l=function(e){return e.map(pe).sort(((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index))}(e);for(let e=0,o=l.length;e<o;e++){const o=l[e].route;let r=!1;if(o.default){n={route:o,params:{},uri:t};continue}const a=ue(o.path),u={},d=Math.max(c.length,a.length);let p=0;for(;p<d;p++){const e=a[p],t=c[p];if(void 0!==e&&ae(e)){u["*"===e?"*":e.slice(1)]=c.slice(p).map(decodeURIComponent).join("/");break}if(void 0===t){r=!0;break}let s=le.exec(e);if(s&&!i){const e=decodeURIComponent(t);u[s[1]]=e}else if(e!==t){r=!0;break}}if(!r){s={route:o,params:u,uri:"/"+c.slice(0,p).join("/")};break}}return s||n||null}function me(e,t){return e+(t?`?${t}`:"")}function ve(e,t){return`${de("/"===t?e:`${de(e)}/${de(t)}`)}/`}function ge(e){let t;const s=e[9].default,n=u(s,e,e[8],null);return{c(){n&&n.c()},m(e,s){n&&n.m(e,s),t=!0},p(e,[t]){n&&n.p&&256&t&&p(n,s,e,e[8],t,null,null)},i(e){t||(F(n,e),t=!0)},o(e){G(n,e),t=!1},d(e){n&&n.d(e)}}}function $e(t,s,n){let i,l,u,{$$slots:d={},$$scope:p}=s,{basepath:f="/"}=s,{url:m=null}=s;const v=S(se),g=S(ne),$=te([]);a(t,$,(e=>n(7,u=e)));const h=te(null);let j=!1;const b=v||te(m?{pathname:m}:ce.location);a(t,b,(e=>n(6,l=e)));const w=g?g.routerBase:te({path:f,uri:f});a(t,w,(e=>n(5,i=e)));const y=function(t,s,n){const i=!Array.isArray(t),l=i?[t]:t,a=s.length<2;return{subscribe:te(n,(t=>{let n=!1;const u=[];let d=0,p=e;const f=()=>{if(d)return;p();const n=s(i?u[0]:u,t);a?t(n):p=c(n)?n:e},m=l.map(((e,t)=>r(e,(e=>{u[t]=e,d&=~(1<<t),n&&f()}),(()=>{d|=1<<t}))));return n=!0,f(),function(){o(m),p()}})).subscribe}}([w,h],(([e,t])=>{if(null===t)return e;const{path:s}=e,{route:n,uri:o}=t;return{path:n.default?s:n.path.replace(/\*.*$/,""),uri:o}}));var k;return v||(k=()=>ce.listen((e=>{b.set(e.location)})),E().$$.on_mount.push(k),z(se,b)),z(ne,{activeRoute:h,base:w,routerBase:y,registerRoute:function(e){const{path:t}=i;let{path:s}=e;if(e._path=s,e.path=ve(t,s),"undefined"==typeof window){if(j)return;const t=function(e,t){return fe([e],t)}(e,l.pathname);t&&(h.set(t),j=!0)}else $.update((t=>(t.push(e),t)))},unregisterRoute:function(e){$.update((t=>{const s=t.indexOf(e);return t.splice(s,1),t}))}}),t.$$set=e=>{"basepath"in e&&n(3,f=e.basepath),"url"in e&&n(4,m=e.url),"$$scope"in e&&n(8,p=e.$$scope)},t.$$.update=()=>{if(32&t.$$.dirty){const{path:e}=i;$.update((t=>(t.forEach((t=>t.path=ve(e,t._path))),t)))}if(192&t.$$.dirty){const e=fe(u,l.pathname);h.set(e)}},[$,b,w,f,m,i,l,u,p,d]}const he=class extends Z{constructor(e){super(),Y(this,e,$e,ge,i,{basepath:3,url:4})}},je=e=>({params:4&e,location:16&e}),be=e=>({params:e[2],location:e[4]});function we(e){let t,s,n,o;const c=[ke,ye],i=[];function l(e,t){return null!==e[0]?0:1}return t=l(e),s=i[t]=c[t](e),{c(){s.c(),n=w()},m(e,s){i[t].m(e,s),g(e,n,s),o=!0},p(e,o){let r=t;t=l(e),t===r?i[t].p(e,o):(U(),G(i[r],1,1,(()=>{i[r]=null})),K(),s=i[t],s?s.p(e,o):(s=i[t]=c[t](e),s.c()),F(s,1),s.m(n.parentNode,n))},i(e){o||(F(s),o=!0)},o(e){G(s),o=!1},d(e){i[t].d(e),e&&$(n)}}}function ye(e){let t;const s=e[10].default,n=u(s,e,e[9],be);return{c(){n&&n.c()},m(e,s){n&&n.m(e,s),t=!0},p(e,t){n&&n.p&&532&t&&p(n,s,e,e[9],t,je,be)},i(e){t||(F(n,e),t=!0)},o(e){G(n,e),t=!1},d(e){n&&n.d(e)}}}function ke(e){let s,n,o;const c=[{location:e[4]},e[2],e[3]];var i=e[0];function l(e){let s={};for(let e=0;e<c.length;e+=1)s=t(s,c[e]);return{props:s}}return i&&(s=new i(l())),{c(){s&&Q(s.$$.fragment),n=w()},m(e,t){s&&W(s,e,t),g(e,n,t),o=!0},p(e,t){const o=28&t?J(c,[16&t&&{location:e[4]},4&t&&V(e[2]),8&t&&V(e[3])]):{};if(i!==(i=e[0])){if(s){U();const e=s;G(e.$$.fragment,1,0,(()=>{X(e,1)})),K()}i?(s=new i(l()),Q(s.$$.fragment),F(s.$$.fragment,1),W(s,n.parentNode,n)):s=null}else i&&s.$set(o)},i(e){o||(s&&F(s.$$.fragment,e),o=!0)},o(e){s&&G(s.$$.fragment,e),o=!1},d(e){e&&$(n),s&&X(s,e)}}}function xe(e){let t,s,n=null!==e[1]&&e[1].route===e[7]&&we(e);return{c(){n&&n.c(),t=w()},m(e,o){n&&n.m(e,o),g(e,t,o),s=!0},p(e,[s]){null!==e[1]&&e[1].route===e[7]?n?(n.p(e,s),2&s&&F(n,1)):(n=we(e),n.c(),F(n,1),n.m(t.parentNode,t)):n&&(U(),G(n,1,1,(()=>{n=null})),K())},i(e){s||(F(n),s=!0)},o(e){G(n),s=!1},d(e){n&&n.d(e),e&&$(t)}}}function _e(e,s,n){let o,c,{$$slots:i={},$$scope:l}=s,{path:r=""}=s,{component:u=null}=s;const{registerRoute:d,unregisterRoute:p,activeRoute:m}=S(ne);a(e,m,(e=>n(1,o=e)));const v=S(se);a(e,v,(e=>n(4,c=e)));const g={path:r,default:""===r};let $={},h={};var j;return d(g),"undefined"!=typeof window&&(j=()=>{p(g)},E().$$.on_destroy.push(j)),e.$$set=e=>{n(13,s=t(t({},s),f(e))),"path"in e&&n(8,r=e.path),"component"in e&&n(0,u=e.component),"$$scope"in e&&n(9,l=e.$$scope)},e.$$.update=()=>{2&e.$$.dirty&&o&&o.route===g&&n(2,$=o.params);{const{path:e,component:t,...o}=s;n(3,h=o)}},s=f(s),[u,o,$,h,c,m,v,g,r,l,i]}const Ee=class extends Z{constructor(e){super(),Y(this,e,_e,xe,i,{path:8,component:0})}};function ze(e){let s,n,o,c;const i=e[16].default,l=u(i,e,e[15],null);let r=[{href:e[0]},{"aria-current":e[2]},e[1],e[6]],a={};for(let e=0;e<r.length;e+=1)a=t(a,r[e]);return{c(){s=h("a"),l&&l.c(),k(s,a)},m(t,i){var r,a,u,d;g(t,s,i),l&&l.m(s,null),n=!0,o||(r=s,a="click",u=e[5],r.addEventListener(a,u,d),c=()=>r.removeEventListener(a,u,d),o=!0)},p(e,[t]){l&&l.p&&32768&t&&p(l,i,e,e[15],t,null,null),k(s,a=J(r,[(!n||1&t)&&{href:e[0]},(!n||4&t)&&{"aria-current":e[2]},2&t&&e[1],64&t&&e[6]]))},i(e){n||(F(l,e),n=!0)},o(e){G(l,e),n=!1},d(e){e&&$(s),l&&l.d(e),o=!1,c()}}}function Se(e,s,n){let o;const c=["to","replace","state","getProps"];let i,l,r=m(s,c),{$$slots:u={},$$scope:d}=s,{to:p="#"}=s,{replace:v=!1}=s,{state:g={}}=s,{getProps:$=(()=>({}))}=s;const{base:h}=S(ne);a(e,h,(e=>n(13,i=e)));const j=S(se);a(e,j,(e=>n(14,l=e)));const b=function(){const e=E();return(t,s)=>{const n=e.$$.callbacks[t];if(n){const o=function(e,t){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,!1,!1,t),s}(t,s);n.slice().forEach((t=>{t.call(e,o)}))}}}();let w,y,k,x;return e.$$set=e=>{s=t(t({},s),f(e)),n(6,r=m(s,c)),"to"in e&&n(7,p=e.to),"replace"in e&&n(8,v=e.replace),"state"in e&&n(9,g=e.state),"getProps"in e&&n(10,$=e.getProps),"$$scope"in e&&n(15,d=e.$$scope)},e.$$.update=()=>{8320&e.$$.dirty&&n(0,w="/"===p?i.uri:function(e,t){if(re(e,"/"))return e;const[s,n]=e.split("?"),[o]=t.split("?"),c=ue(s),i=ue(o);if(""===c[0])return me(o,n);if(!re(c[0],"."))return me(("/"===o?"":"/")+i.concat(c).join("/"),n);const l=i.concat(c),r=[];return l.forEach((e=>{".."===e?r.pop():"."!==e&&r.push(e)})),me("/"+r.join("/"),n)}(p,i.uri)),16385&e.$$.dirty&&n(11,y=re(l.pathname,w)),16385&e.$$.dirty&&n(12,k=w===l.pathname),4096&e.$$.dirty&&n(2,o=k?"page":void 0),23553&e.$$.dirty&&n(1,x=$({location:l,href:w,isPartiallyCurrent:y,isCurrent:k}))},[w,x,o,h,j,function(e){if(b("click",e),function(e){return!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)){e.preventDefault();const t=l.pathname===w||v;ie(w,{state:g,replace:t})}},r,p,v,g,$,y,k,i,l,d,u]}const Ae=class extends Z{constructor(e){super(),Y(this,e,Se,ze,i,{to:7,replace:8,state:9,getProps:10})}};function Ce(t){let s;return{c(){s=h("div"),s.innerHTML='<img src="../assets/mini-profile.jpg" alt="" class="svelte-17nbgj1"/> \n    <div class="text svelte-17nbgj1"><div class="header-text svelte-17nbgj1"><h3>Joaquin</h3> \n            <button class="svelte-17nbgj1">Enviar mensaje</button></div> \n        <div class="statistics svelte-17nbgj1"><p><bold class="svelte-17nbgj1">141</bold> publicaciones</p> \n            <p><bold class="svelte-17nbgj1">2,768</bold> seguidores</p> \n            <p><bold class="svelte-17nbgj1">710</bold> seguidos</p></div> \n        <p>🗺 Disfruta de los mejores paisajes del mundo</p></div>',y(s,"class","profile-info svelte-17nbgj1")},m(e,t){g(e,s,t)},p:e,i:e,o:e,d(e){e&&$(s)}}}const Pe=class extends Z{constructor(e){super(),Y(this,e,null,Ce,i,{})}};function qe(t){let s;return{c(){s=h("div"),s.innerHTML='<hr/> \n  <div class="options svelte-1mm35mz"><h6 class="svelte-1mm35mz">PUBLICACIONES</h6> \n    <h6 class="svelte-1mm35mz">REELS</h6> \n    <h6 class="svelte-1mm35mz">IGTV</h6> \n    <h6 class="svelte-1mm35mz">GUARDADO</h6> \n    <h6 class="svelte-1mm35mz">ETIQUETADAS</h6></div> \n  <div class="grid-container svelte-1mm35mz"><img src="../assets/img-one.png" alt="" class="svelte-1mm35mz"/> \n    <img src="../assets/img-two.png" alt="" class="svelte-1mm35mz"/> \n    <img src="../assets/img-three.png" alt="" class="svelte-1mm35mz"/> \n    <img src="../assets/img-four.png" alt="" class="svelte-1mm35mz"/> \n    <img src="../assets/img-five.png" alt="" class="svelte-1mm35mz"/> \n    <img src="../assets/img-six.png" alt="" class="svelte-1mm35mz"/> \n    <img src="../assets/img-seven.png" alt="" class="svelte-1mm35mz"/> \n    <img src="../assets/img-eight.png" alt="" class="svelte-1mm35mz"/> \n    <img src="../assets/img-nine.png" alt="" class="svelte-1mm35mz"/></div>',y(s,"class","publicaciones svelte-1mm35mz")},m(e,t){g(e,s,t)},p:e,i:e,o:e,d(e){e&&$(s)}}}const Le=class extends Z{constructor(e){super(),Y(this,e,null,qe,i,{})}};function Oe(t){let s,n,o,c,i;return n=new Pe({}),c=new Le({}),{c(){s=h("div"),Q(n.$$.fragment),o=b(),Q(c.$$.fragment),y(s,"class","profile-container svelte-eh03fe")},m(e,t){g(e,s,t),W(n,s,null),v(s,o),W(c,s,null),i=!0},p:e,i(e){i||(F(n.$$.fragment,e),F(c.$$.fragment,e),i=!0)},o(e){G(n.$$.fragment,e),G(c.$$.fragment,e),i=!1},d(e){e&&$(s),X(n),X(c)}}}const Te=class extends Z{constructor(e){super(),Y(this,e,null,Oe,i,{})}};function Ie(t){let s;return{c(){s=h("div"),s.innerHTML='<div class="profile svelte-1wj7dc6"><img src="../assets/mini-profile.jpg" alt="foto profile" class="svelte-1wj7dc6"/> \n        <p class="svelte-1wj7dc6">esther</p></div> \n    <div class="profile svelte-1wj7dc6"><img src="../assets/profile1.jpg" alt="foto profile" class="svelte-1wj7dc6"/> \n        <p class="svelte-1wj7dc6">juan</p></div> \n    <div class="profile svelte-1wj7dc6"><img src="../assets/profile2.jpg" alt="foto profile" class="svelte-1wj7dc6"/> \n        <p class="svelte-1wj7dc6">ana</p></div> \n    <div class="profile svelte-1wj7dc6"><img src="../assets/profile3.jpg" alt="foto profile" class="svelte-1wj7dc6"/> \n        <p class="svelte-1wj7dc6">andres</p></div> \n    <div class="profile svelte-1wj7dc6"><img src="../assets/profile4.jpg" alt="foto profile" class="svelte-1wj7dc6"/> \n        <p class="svelte-1wj7dc6">maria</p></div> \n    <div class="profile svelte-1wj7dc6"><img src="../assets/profile2.jpg" alt="foto profile" class="svelte-1wj7dc6"/> \n        <p class="svelte-1wj7dc6">andrea</p></div> \n    <div class="profile svelte-1wj7dc6"><img src="../assets/profile4.jpg" alt="foto profile" class="svelte-1wj7dc6"/> \n        <p class="svelte-1wj7dc6">maria juana</p></div> \n    <div class="profile svelte-1wj7dc6"><img src="../assets/profile3.jpg" alt="foto profile" class="svelte-1wj7dc6"/> \n        <p class="svelte-1wj7dc6">jose</p></div> \n    <div class="profile svelte-1wj7dc6"><img src="../assets/profile3.jpg" alt="foto profile" class="svelte-1wj7dc6"/> \n        <p class="svelte-1wj7dc6">matias</p></div>',y(s,"class","Scroll svelte-1wj7dc6")},m(e,t){g(e,s,t)},p:e,i:e,o:e,d(e){e&&$(s)}}}const Me=class extends Z{constructor(e){super(),Y(this,e,null,Ie,i,{})}};function Re(t){let s;return{c(){s=h("div"),s.innerHTML='<div class="posts-container svelte-12so76c"><div class="post"><div class="header-container svelte-12so76c"><div class="user svelte-12so76c"><img src="../assets/mini-profile.jpg" alt="user" class="svelte-12so76c"/> \n                    <h5 class="svelte-12so76c">joaquin</h5></div> \n                <img src="../assets/more.svg" alt="more icon" class="svelte-12so76c"/></div></div> \n        <img src="../assets/image-post-1.png" alt="image post"/> \n        <div class="rectangle svelte-12so76c"><div class="post-icons svelte-12so76c"><div class="left-icons svelte-12so76c"><img src="../assets/fill-heart.svg" alt="heart icon" class="icon svelte-12so76c"/> \n                    <img src="../assets/outline-search.svg" alt="icon search" class="icon svelte-12so76c"/> \n                    <img src="../assets/direct-outline.svg" alt="direct icon" class="icon svelte-12so76c"/></div> \n                <img src="../assets/outline-bookmark.svg" alt="bookmark" class="icon"/></div> \n            <div class="comment-section"><p><bold>Nestor</bold> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> \n                <div class="info-comment"></div></div> \n            <div class="add-comment-container svelte-12so76c"><div class="add-comment svelte-12so76c"><img src="../assets/mini-profile.jpg" alt="user" class="user-image svelte-12so76c"/> \n                    <h5 class="svelte-12so76c">Agrega un comentario...</h5></div> \n                <a href="/">Publicar</a></div></div></div> \n    \n    <div class="posts-container svelte-12so76c"><div class="post"><div class="header-container svelte-12so76c"><div class="user svelte-12so76c"><img src="../assets/mini-profile.jpg" alt="user" class="svelte-12so76c"/> \n                    <h5 class="svelte-12so76c">joaquin</h5></div> \n                <img src="../assets/more.svg" alt="more icon" class="svelte-12so76c"/></div></div> \n        <img src="../assets/image-post-2.png" alt="image post"/> \n        <div class="rectangle svelte-12so76c"><div class="post-icons svelte-12so76c"><div class="left-icons svelte-12so76c"><img src="../assets/fill-heart.svg" alt="heart icon" class="icon svelte-12so76c"/> \n                    <img src="../assets/outline-search.svg" alt="icon search" class="icon svelte-12so76c"/> \n                    <img src="../assets/direct-outline.svg" alt="direct icon" clas="icon"/></div> \n                <img src="../assets/outline-bookmark.svg" alt="bookmark" class="icon"/></div> \n            <div class="comment-section"><p><bold>Juana</bold> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> \n                <div class="info-comment"></div></div> \n            <div class="add-comment-container svelte-12so76c"><div class="add-comment svelte-12so76c"><img src="../assets/mini-profile.jpg" alt="user" class="user-image svelte-12so76c"/> \n                    <h5 class="svelte-12so76c">Agrega un comentario...</h5></div> \n                <a href="/">Publicar</a></div></div></div>',y(s,"class","Feed svelte-12so76c")},m(e,t){g(e,s,t)},p:e,i:e,o:e,d(e){e&&$(s)}}}const He=class extends Z{constructor(e){super(),Y(this,e,null,Re,i,{})}};function Ne(t){let s;return{c(){s=h("aside"),s.innerHTML='<div class="profile svelte-1hdj3ck"><div class="profile-info svelte-1hdj3ck"><img src="../assets/mini-profile.jpg" alt="foto profile" class="svelte-1hdj3ck"/> \n            <p id="username" class="svelte-1hdj3ck"><a href="/">Joaquin</a>\n                joaquin.perez</p></div> \n        <p><a href="/">Cambiar</a></p></div> \n    <div class="follow"><h5 class="svelte-1hdj3ck">Sugerencia para ti</h5> \n        \n        <div class="profile svelte-1hdj3ck"><div class="profile-info svelte-1hdj3ck"><img src="../assets/profile1.jpg" alt="foto profile" class="svelte-1hdj3ck"/> \n                <p id="username" class="svelte-1hdj3ck"><a href="/">victorcoral</a>\n                    Sugerencia para ti</p></div> \n            <p><a href="/">Seguir</a></p></div> \n        \n        \n        <div class="profile svelte-1hdj3ck"><div class="profile-info svelte-1hdj3ck"><img src="../assets/profile2.jpg" alt="foto profile" class="svelte-1hdj3ck"/> \n                <p id="username" class="svelte-1hdj3ck"><a href="/">evanodal</a>\n                    Sugerencia para ti</p></div> \n            <p><a href="/">Seguir</a></p></div> \n        \n        <div class="profile svelte-1hdj3ck"><div class="profile-info svelte-1hdj3ck"><img src="../assets/profile3.jpg" alt="foto profile" class="svelte-1hdj3ck"/> \n                <p id="username" class="svelte-1hdj3ck"><a href="/">mohammedev</a>\n                    Sugerencia para ti</p></div> \n            <p><a href="/">Seguir</a></p></div> \n        \n        <ul class="bottom svelte-1hdj3ck"><li class="svelte-1hdj3ck">Informacion *</li> \n            <li class="svelte-1hdj3ck">Ayuda *</li> \n            <li class="svelte-1hdj3ck">Prensa *</li> \n            <li class="svelte-1hdj3ck">API *</li><br/> \n            <li class="svelte-1hdj3ck">Privacidad *</li> \n            <li class="svelte-1hdj3ck">Condiciones *</li> \n            <li class="svelte-1hdj3ck">Ubicaciones *</li><br/> \n            <li class="svelte-1hdj3ck">Cuentas destacadas *</li> \n            <li class="svelte-1hdj3ck">Hashtags *</li> \n            <li class="svelte-1hdj3ck">Idioma *</li></ul></div> \n    <p class="bottom svelte-1hdj3ck">© 2020 INSTAGRAM FROM FACEBOOK</p>',y(s,"class","Sidebar svelte-1hdj3ck")},m(e,t){g(e,s,t)},p:e,i:e,o:e,d(e){e&&$(s)}}}const Be=class extends Z{constructor(e){super(),Y(this,e,null,Ne,i,{})}};function De(t){let s,n,o,c,i,l,r,a,u;return o=new Me({}),i=new He({}),a=new Be({}),{c(){s=h("div"),n=h("div"),Q(o.$$.fragment),c=b(),Q(i.$$.fragment),l=b(),r=h("div"),Q(a.$$.fragment),y(n,"class","main-content svelte-29qwu6"),y(r,"class","profile-content svelte-29qwu6"),y(s,"class","Home svelte-29qwu6"),y(s,"id","Home")},m(e,t){g(e,s,t),v(s,n),W(o,n,null),v(n,c),W(i,n,null),v(s,l),v(s,r),W(a,r,null),u=!0},p:e,i(e){u||(F(o.$$.fragment,e),F(i.$$.fragment,e),F(a.$$.fragment,e),u=!0)},o(e){G(o.$$.fragment,e),G(i.$$.fragment,e),G(a.$$.fragment,e),u=!1},d(e){e&&$(s),X(o),X(i),X(a)}}}const Ue=class extends Z{constructor(e){super(),Y(this,e,null,De,i,{})}};function Ke(e){let t,s;return{c(){t=h("img"),t.src!==(s="../assets/fill-home.png")&&y(t,"src","../assets/fill-home.png"),y(t,"alt","icono home fill"),y(t,"class","icons svelte-teibaz")},m(e,s){g(e,t,s)},d(e){e&&$(t)}}}function Fe(e){let t,s;return{c(){t=h("img"),t.src!==(s="../assets/mini-profile.png")&&y(t,"src","../assets/mini-profile.png"),y(t,"alt","mini profile"),y(t,"class","icons svelte-teibaz"),y(t,"id","mini-profile")},m(e,s){g(e,t,s)},d(e){e&&$(t)}}}function Ge(e){let t,s;return t=new Ue({}),{c(){Q(t.$$.fragment)},m(e,n){W(t,e,n),s=!0},i(e){s||(F(t.$$.fragment,e),s=!0)},o(e){G(t.$$.fragment,e),s=!1},d(e){X(t,e)}}}function Je(e){let t,s,n,o,c,i,l,r,a,u,d,p,f,m,j,w,k,x,_,E,z,S;return r=new Ae({props:{to:"/",$$slots:{default:[Ke]},$$scope:{ctx:e}}}),w=new Ae({props:{to:"/profile",$$slots:{default:[Fe]},$$scope:{ctx:e}}}),_=new Ee({props:{path:"/profile",component:Te}}),z=new Ee({props:{path:"/",$$slots:{default:[Ge]},$$scope:{ctx:e}}}),{c(){t=h("nav"),s=h("img"),o=b(),c=h("input"),i=b(),l=h("div"),Q(r.$$.fragment),a=b(),u=h("img"),p=b(),f=h("img"),j=b(),Q(w.$$.fragment),k=b(),x=h("div"),Q(_.$$.fragment),E=b(),Q(z.$$.fragment),s.src!==(n="../assets/Instantanea-logo.png")&&y(s,"src","../assets/Instantanea-logo.png"),y(s,"alt","logo instantanea website"),y(c,"type","search"),y(c,"placeholder","Buscar"),u.src!==(d="../assets/messenger.png")&&y(u,"src","../assets/messenger.png"),y(u,"alt","icono messenger"),y(u,"class","icons svelte-teibaz"),f.src!==(m="../assets/outline-heart.png")&&y(f,"src","../assets/outline-heart.png"),y(f,"alt","icono corazon"),y(f,"class","icons svelte-teibaz"),y(l,"class","icon-container"),y(t,"class","svelte-teibaz")},m(e,n){g(e,t,n),v(t,s),v(t,o),v(t,c),v(t,i),v(t,l),W(r,l,null),v(l,a),v(l,u),v(l,p),v(l,f),v(l,j),W(w,l,null),g(e,k,n),g(e,x,n),W(_,x,null),v(x,E),W(z,x,null),S=!0},p(e,t){const s={};1&t&&(s.$$scope={dirty:t,ctx:e}),r.$set(s);const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),w.$set(n);const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),z.$set(o)},i(e){S||(F(r.$$.fragment,e),F(w.$$.fragment,e),F(_.$$.fragment,e),F(z.$$.fragment,e),S=!0)},o(e){G(r.$$.fragment,e),G(w.$$.fragment,e),G(_.$$.fragment,e),G(z.$$.fragment,e),S=!1},d(e){e&&$(t),X(r),X(w),e&&$(k),e&&$(x),X(_),X(z)}}}function Ve(e){let t,s;return t=new he({props:{$$slots:{default:[Je]},$$scope:{ctx:e}}}),{c(){Q(t.$$.fragment)},m(e,n){W(t,e,n),s=!0},p(e,[s]){const n={};1&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(F(t.$$.fragment,e),s=!0)},o(e){G(t.$$.fragment,e),s=!1},d(e){X(t,e)}}}new class extends Z{constructor(e){super(),Y(this,e,null,Ve,i,{})}}({target:document.body,props:{name:"world"}})})();