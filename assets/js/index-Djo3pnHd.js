const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-Ug7r7mjJ.js","./vendor-WoSn31sX.js","../css/index-DXSHXFhL.css","./index-BaSj2KLD.js","./index-DZRcW398.js","./index-B0Y7FBBk.js","./index-C__DfKob.js","./index-C3yz695w.js"])))=>i.map(i=>d[i]);
import{c as $,d as D,p as M,i as B,a as U,u as C,b as S,e as I,r as p,j as e,M as N,F as H,B as V,S as q,D as R,R as W,f as K,A as Y,L as G,g as j,h as J,k as Q,l as X,m as Z,t as z,W as ee,n as _,o as te,q as ne,s as se,v as oe,O as re,w as A,C as ae,z as le,H as ce,x as ie,y as ue}from"./vendor-WoSn31sX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=c(o);fetch(o.href,r)}})();const x=$()(D(M(s=>({token:"",userInfo:{},isReLogin:!1,language:"zh",systemTheme:"light",crumbsList:[],setUserInfo:t=>s({userInfo:t}),setToken:t=>s({token:t}),loginOut:()=>s({token:"",userInfo:{}}),setLanguage:t=>s({language:t}),setSystemTheme:t=>s({systemTheme:t}),setCrumbsList:t=>s({crumbsList:t})}),{name:"appStore"}))),me=()=>x.getState().language,he=()=>{x.getState().loginOut()},de=s=>x.setState({isReLogin:s}),pe="首页",fe={"layout.header.locales.theme.light":"明亮","layout.header.locales.theme.dark":"黑暗","layout.header.locales.zh":"简体中文","layout.header.locales.en":"English","layout.header.info.out":"退出登录","menu.home":"首页","menu.userList":"用户列表","components.components":"自定义组件","components.uploadFile":"上传文件","menu.menu":"多级菜单","menu.menu-1":"菜单-1","menu.menu-2":"菜单-2","menu.menu-2-1":"菜单-2-1",home:pe},ge="home",xe={"layout.header.locales.theme.light":"light","layout.header.locales.theme.dark":"dark","layout.header.locales.zh":"简体中文","layout.header.locales.en":"English","layout.header.info.out":"logout","menu.home":"Home","components.components":"Components","components.uploadFile":"Upload files","menu.userList":"userList","menu.menu":"menu","menu.menu-1":"menu-1","menu.menu-2":"menu-2","menu.menu-2-1":"menu-2-1",home:ge};B.use(U).init({fallbackLng:me(),debug:!0,interpolation:{escapeValue:!1},resources:{zh:{translation:fe},en:{translation:xe}}});const ye=""+new URL("../png/avatar-DNkpT6eM.png",import.meta.url).href;function je(){const s=C(),{language:t,setLanguage:c,systemTheme:n,setSystemTheme:o,crumbsList:r}=x(),{t:a,i18n:i}=S(),{pathname:g}=I(),h=p.useMemo(()=>r.map(m=>({path:m.path,title:a(m.title)})),[r,a]),d=[{key:"light",label:e.jsx("div",{children:a("layout.header.locales.theme.light")}),onClick:()=>{l("light")}},{key:"dark",label:e.jsx("div",{children:a("layout.header.locales.theme.dark")}),onClick:()=>{l("dark")}}],v=[{key:"zh",label:e.jsx("div",{children:a("layout.header.locales.zh")}),onClick:()=>{u("zh")}},{key:"en",label:e.jsx("div",{children:a("layout.header.locales.en")}),onClick:()=>{u("en")}}],L=[{key:"1",label:e.jsx("div",{children:a("layout.header.info.out")}),onClick:()=>{b()}}],l=m=>{o(m)},u=m=>{c(m),i.changeLanguage(m)},f=m=>{var O;return m.path===g?e.jsx("span",{children:m.title}):e.jsx(G,{to:((O=r.find(F=>F.path==m.path))==null?void 0:O.url)||"",children:m.title})},b=p.useCallback(()=>{N.confirm({centered:!0,destroyOnClose:!0,title:"提示",content:"是否退出登录?",onOk:()=>{he(),s("/login",{replace:!0})}})},[s]);return e.jsx("div",{className:"pr-8 flex-auto",children:e.jsxs(H,{justify:"space-between",children:[e.jsx(V,{items:h,itemRender:f,className:"flex items-center"}),e.jsxs(q,{align:"center",size:"large",children:[e.jsx(R,{menu:{items:d,selectedKeys:[n]},placement:"bottom",arrow:{pointAtCenter:!0},children:e.jsx(W,{className:"text-2xl cursor-pointer block py-2 px-3"})}),e.jsx(R,{menu:{items:v,selectedKeys:[t]},placement:"bottom",arrow:{pointAtCenter:!0},children:e.jsx(K,{className:"text-2xl cursor-pointer block py-2 px-3"})}),e.jsx(R,{menu:{items:L},placement:"bottom",arrow:{pointAtCenter:!0},children:e.jsx(Y,{className:"select-none",size:45,src:ye,shape:"square"})})]})]})})}const ke=""+new URL("../../react.svg",import.meta.url).href,ve="modulepreload",Le=function(s,t){return new URL(s,t).href},w={},k=function(t,c,n){let o=Promise.resolve();if(c&&c.length>0){const a=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),g=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(c.map(h=>{if(h=Le(h,n),h in w)return;w[h]=!0;const d=h.endsWith(".css"),v=d?'[rel="stylesheet"]':"";if(!!n)for(let u=a.length-1;u>=0;u--){const f=a[u];if(f.href===h&&(!d||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${v}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":ve,d||(l.as="script"),l.crossOrigin="",l.href=h,g&&l.setAttribute("nonce",g),document.head.appendChild(l),d)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return o.then(a=>{for(const i of a||[])i.status==="rejected"&&r(i.reason);return t().catch(r)})};function be(){return e.jsx("h1",{children:"Not Found"})}const Re=j.lazy(()=>k(()=>import("./index-Ug7r7mjJ.js"),__vite__mapDeps([0,1,2]),import.meta.url)),P=[{path:"/login",element:e.jsx(Re,{})},{path:"*",element:e.jsx(be,{})}],_e=j.lazy(()=>k(()=>import("./index-BaSj2KLD.js"),__vite__mapDeps([3,1]),import.meta.url)),Ee=j.lazy(()=>k(()=>import("./index-DZRcW398.js"),__vite__mapDeps([4,1]),import.meta.url)),Ce=j.lazy(()=>k(()=>import("./index-B0Y7FBBk.js"),__vite__mapDeps([5,1]),import.meta.url)),Ie=j.lazy(()=>k(()=>import("./index-C__DfKob.js"),__vite__mapDeps([6,1]),import.meta.url)),Oe=j.lazy(()=>k(()=>import("./index-C3yz695w.js"),__vite__mapDeps([7,1]),import.meta.url)),y=[{path:"/",element:e.jsx(_e,{}),meta:{title:"menu.home",icon:e.jsx(J,{}),desc:"首页"}},{path:"/userList",element:e.jsx(Ee,{}),meta:{title:"menu.userList",icon:e.jsx(Q,{}),desc:"用户列表"}},{path:"/components",meta:{title:"components.components",icon:e.jsx(X,{}),desc:"自定义组件"},children:[{path:"/components/uploadFile",element:e.jsx(Ce,{}),meta:{title:"components.uploadFile"}}]},{path:"/menu",meta:{title:"menu.menu",icon:e.jsx(Z,{}),desc:"多级菜单"},children:[{path:"/menu/menu-1",element:e.jsx(Ie,{}),meta:{title:"menu.menu-1"}},{path:"/menu/menu-2",meta:{title:"menu.menu-2"},children:[{path:"/menu/menu-2/menu-2-1",element:e.jsx(Oe,{}),meta:{title:"menu.menu-2-1"}}]}]}];function T(s,t,c=[]){return t.forEach(n=>{n.path===s?c.push(n.path):s.includes(n.path)&&n.children&&(c.push(n.path),T(s,n.children,c))}),c}function E(s,t,c=[]){return t.forEach(n=>{var o,r;n.path===s?c.push({title:((o=n.meta)==null?void 0:o.title)||"",path:n.path,url:n.path}):s.includes(n.path)&&n.children&&(c.push({title:((r=n.meta)==null?void 0:r.title)||"",path:n.path||"",url:n.children[0].path||""}),E(s,n.children,c))}),c}const{Header:we,Footer:Se,Sider:Ne,Content:ze}=_;function Ae(){const s=C(),t=I(),{t:c}=S(),[n,o]=p.useState(!1),[r,a]=p.useState([]),{setCrumbsList:i}=x(),{token:{colorBgContainer:g,borderRadiusLG:h}}=z.useToken(),d=(l=y)=>l.map(u=>{var f,b,m;return{key:u.path||"",label:(f=u.meta)!=null&&f.title?c((b=u.meta)==null?void 0:b.title):"",icon:(m=u.meta)==null?void 0:m.icon,children:(u==null?void 0:u.children)&&d(u.children)}}),v=l=>{s(l.key),i(E(l.key,y))},L=p.useCallback(l=>{if(l.length===0||l.length===1)return a(l);const u=l[l.length-1];if(u.includes(l[0]))return a(l);a([u])},[a]);return p.useEffect(()=>{n||a(T(t.pathname,y)),i(E(t.pathname,y))},[n,t.pathname,i]),e.jsx(e.Fragment,{children:e.jsx(ee,{content:"Yolo",children:e.jsxs(_,{className:"h-[100vh]",children:[e.jsxs(Ne,{className:"overflow-auto",trigger:null,collapsible:!0,collapsed:n,children:[e.jsx("div",{children:e.jsx("img",{className:"w-10 h-10 mx-auto my-2 select-none",src:ke,alt:""})}),e.jsx(te,{className:"select-none",triggerSubMenuAction:"click",theme:"dark",mode:"inline",openKeys:r,selectedKeys:[t.pathname],items:d(y),onClick:v,onOpenChange:L})]}),e.jsxs(_,{children:[e.jsx(we,{style:{padding:0,background:g},children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx(ne,{type:"text",icon:n?e.jsx(se,{}):e.jsx(oe,{}),onClick:()=>o(!n),className:"w-16 h-16",size:"large"}),e.jsx(je,{})]})}),e.jsx(ze,{className:"p-5 m-4 overflow-auto",style:{background:g,borderRadius:h},children:e.jsx(re,{})}),e.jsx(Se,{className:"w-full flex justify-center items-center p-1",style:{background:g},children:e.jsx("a",{href:"https://github.com/Yolo-00/work-template-react",target:"_blank",className:"text-lg font-semibold",children:"work-template-react"})})]})]})})})}function Pe({routerList:s}){return A([{path:"/",element:e.jsx(Ae,{}),children:s},...P])}const Te=()=>{const s=A(P),t=C(),{pathname:c}=I(),{token:n,isReLogin:o,loginOut:r}=x(),[a,i]=p.useState([]);return p.useEffect(()=>{n?(c==="/login"&&t("/",{replace:!0}),i(y)):c!=="/login"&&(r(),t("/login",{replace:!0})),o&&N.error({title:"警告",content:"登录失效请重新登录",okText:"去登录",onOk:()=>{de(!1),r(),t("/login",{replace:!0})}})},[o,c,n,r,t]),e.jsx(e.Fragment,{children:n?e.jsx(Pe,{routerList:a}):s})};function Fe(){const{language:s,systemTheme:t}=x();return p.useEffect(()=>{t==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark")},[t]),e.jsx(e.Fragment,{children:e.jsx(ae,{locale:s==="zh"?le:void 0,theme:{algorithm:t==="dark"?z.darkAlgorithm:void 0},children:e.jsx(ce,{children:e.jsx(ie,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsx(Te,{})})})})})}ue(document.getElementById("root")).render(e.jsx(p.StrictMode,{children:e.jsx(Fe,{})}));export{de as s,x as u};
