const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-dAyLtns6.js","./vendor-NUE-ury9.js","./index-D7OCReY_.js","./index-UWydKF6M.js"])))=>i.map(i=>d[i]);
import{u as L,a as R,r as h,t as E,j as e,L as p,M as b,R as P,b as w,B as k,c as S,d as C,O,e as g,f as N,g as A,C as B,z as I,h as z,i as F}from"./vendor-NUE-ury9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const T="modulepreload",$=function(u,s){return new URL(u,s).href},v={},x=function(s,i,c){let t=Promise.resolve();if(i&&i.length>0){const n=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),y=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));t=Promise.allSettled(i.map(a=>{if(a=$(a,c),a in v)return;v[a]=!0;const d=a.endsWith(".css"),_=d?'[rel="stylesheet"]':"";if(!!c)for(let f=n.length-1;f>=0;f--){const m=n[f];if(m.href===a&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${_}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":T,d||(l.as="script"),l.crossOrigin="",l.href=a,y&&l.setAttribute("nonce",y),document.head.appendChild(l),d)return new Promise((f,m)=>{l.addEventListener("load",f),l.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})}))}function r(n){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n}return t.then(n=>{for(const o of n||[])o.status==="rejected"&&r(o.reason);return s().catch(r)})},H=""+new URL("../svg/react-CHdo91hT.svg",import.meta.url).href,{Header:M,Footer:U,Sider:q,Content:D}=p;function V(){const u=L(),s=R(),[i,c]=h.useState(!1),{token:{colorBgContainer:t,borderRadiusLG:r}}=E.useToken(),n=o=>{u(o.key)};return h.useEffect(()=>{},[]),e.jsx(e.Fragment,{children:e.jsxs(p,{className:"h-[100vh]",children:[e.jsxs(q,{className:"overflow-auto",trigger:null,collapsible:!0,collapsed:i,children:[e.jsx("div",{children:e.jsx("img",{className:"w-10 h-10 mx-auto my-2",src:H,alt:""})}),e.jsx(b,{triggerSubMenuAction:"click",theme:"dark",mode:"inline",defaultSelectedKeys:[s.pathname],items:[{key:"/",icon:e.jsx(P,{}),label:"home"},{key:"/userList",icon:e.jsx(w,{}),label:"userList"}],onClick:n})]}),e.jsxs(p,{children:[e.jsx(M,{style:{padding:0,background:t},children:e.jsx(k,{type:"text",icon:i?e.jsx(S,{}):e.jsx(C,{}),onClick:()=>c(!i),style:{fontSize:"16px",width:64,height:64}})}),e.jsx(D,{style:{margin:"24px 16px",padding:24,overflow:"auto",background:t,borderRadius:r,marginBottom:0},children:e.jsx(O,{})}),e.jsx(U,{className:"w-full h-6 flex justify-center items-center",children:e.jsx("a",{href:"https://github.com/Yolo-00/work-template-react",target:"_blank",className:"text-lg font-semibold",children:"work-template-react"})})]})]})})}function K(){return e.jsx("h1",{children:"Not Found"})}const G=g.lazy(()=>x(()=>import("./index-dAyLtns6.js"),__vite__mapDeps([0,1]),import.meta.url)),W=g.lazy(()=>x(()=>import("./index-D7OCReY_.js"),__vite__mapDeps([2,1]),import.meta.url)),Y=g.lazy(()=>x(()=>import("./index-UWydKF6M.js"),__vite__mapDeps([3,1]),import.meta.url)),J=[{path:"/login",element:e.jsx(G,{}),loader:()=>A("/")},{path:"/",element:e.jsx(V,{}),children:[{path:"",element:e.jsx(W,{}),loader:j},{path:"userList",element:e.jsx(Y,{}),loader:j}]},{path:"*",element:e.jsx(K,{})}],Q=N(J,{future:{v7_fetcherPersist:!0,v7_normalizeFormMethod:!0,v7_partialHydration:!0,v7_relativeSplatPath:!0,v7_skipActionErrorRevalidation:!0}});function j(){return null}function X(){return e.jsx(e.Fragment,{children:e.jsx(B,{locale:I,children:e.jsx(z,{router:Q,future:{v7_startTransition:!0}})})})}F(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(X,{})}));
