var Y=Object.defineProperty,q=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var E=(t,l,o)=>l in t?Y(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o,f=(t,l)=>{for(var o in l||(l={}))J.call(l,o)&&E(t,o,l[o]);if(R)for(var o of R(l))K.call(l,o)&&E(t,o,l[o]);return t},b=(t,l)=>q(t,G(l));import{r as Q,h as X,a1 as Z,u as I,a as ee,j as e,_ as x,k as se,I as w,x as n,C as A,dT as F,g as _,A as N,dU as ae,dV as re,a0 as te,al as le,$ as oe,aT as ne}from"./main-700.js";import{A as D,S as V,B as ie,a as ce}from"./bf-56-315.js";import{C as z}from"./bf-986-314.js";import"./bf-519-136.js";import"./bf-606-117.js";import"./bf-420-76.js";import"./bf-622-112.js";import"./bf-497-85.js";import"./bf-748-73.js";import"./bf-645-111.js";import"./bf-968-110.js";import"./bf-13-114.js";import"./bf-619-153.js";function ke(){var P,T,B,O,H,L;const t=Q.useRef(null),[l,o]=X(te),{standaloneSettings:r={},conversationalSettings:k={}}=l,C=Z(le),U=I(oe),v=I(ne),{css:a}=ee(),u=(s,d)=>{if(!w)return!0;const h=`standaloneSettings->${s}`;o(i=>_(i,c=>{N(c,h,d)})),C(i=>b(f({},i),{unsaved:!0}))},g=(s,d)=>{if(!w)return!0;const h=`standaloneSettings->${s}`;o(i=>_(i,c=>{ae(d)?Object.keys(d).forEach(j=>{N(c,`${h}->${j}`,d[j])}):N(c,h,d),c.standaloneSettings.styles=re(c.standaloneSettings.styles)})),C(i=>b(f({},i),{unsaved:!0}))},p={};r.active?(p.opacity=1,p.pointerEvents="auto",p.userSelect="auto"):(p.opacity=.6,p.pointerEvents="none",p.userSelect="none");const $=`${U.siteURL}/${r.customUrl||`?bit-form=${v}`}`,S=`${U.siteURL}/${r.customUrl||`?bit-conversational-form=${v}`}`,M=`<iframe id="bit-form" width="100%" height="500px" style="min-height: 500px; width: 100%" frameborder="0" src="${$}&embedded=1"></iframe>`,W=`<iframe id="bit-form" width="100%" height="500px" style="min-height: 500px; width: 100%" frameborder="0" src="${S}&embedded=1"></iframe>`,y=(s,d=[])=>d.reduce((h,i)=>{var c,j;return b(f({},h),{[i]:((j=(c=r.styles)==null?void 0:c[s])==null?void 0:j[i])||""})},{});return e.jsxs("div",{className:"pos-rel",children:[e.jsxs("div",{className:"flx mt-4",children:[e.jsx("h2",{className:"m-0",children:x("Landing Page")}),e.jsx(se,{name:"status",action:s=>u("active",s.target.checked),checked:r.active||!1,className:"ml-2 flx"})]}),e.jsxs("h5",{className:"mt-3",children:[x("How to setup Landinge Page"),":",e.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",className:"yt-txt ml-1 mr-1",children:x("YouTube")}),e.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",className:"doc-txt",children:x("Documentation")})]}),!w&&e.jsx("div",{className:"pro-blur flx",style:{height:"111%",left:-53,width:"104%"},children:e.jsxs("div",{className:"pro",children:[x("Available On"),e.jsx("a",{href:"https://www.bitapps.pro/bit-form",target:"_blank",rel:"noreferrer",children:e.jsx("span",{className:"txt-pro",children:x("Premium")})})]})}),e.jsx("div",{className:"w-10",children:e.jsx("div",{style:p,className:"mt-4",children:e.jsxs("div",{className:a(n.w10,n.flxi,{gp:20}),children:[e.jsxs("div",{className:a(n.w4),children:[e.jsxs("div",{children:[e.jsx("h4",{className:a({my:10}),children:"Custom URL"}),e.jsx("input",{"aria-label":"Custom URL",type:"text",placeholder:`?bit-form=${v}`,name:"message",className:"btcd-paper-inp",onChange:s=>u("customUrl",s.target.value),value:r.customUrl||""}),e.jsxs("p",{className:a(n.mt1),children:[e.jsx("strong",{children:"Note: "}),"Please try to avoid any duplicate custom url, as it will conflict between the page and Bit Form."]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:a({my:10}),children:"Page Title"}),e.jsx("input",{"aria-label":"Page Title",type:"text",placeholder:"Bit Form",name:"message",className:"btcd-paper-inp",onChange:s=>u("pageTitle",s.target.value),value:r.pageTitle||""})]}),e.jsxs("div",{children:[e.jsx("h4",{className:a({my:10}),children:"Share via Direct URL"}),e.jsx(A,{value:$,className:"field-key-cpy w-12 ml-0",readOnly:!0})]}),k.enable&&e.jsxs("div",{children:[e.jsx("h4",{className:a({my:10}),children:"Share via Direct URL (Conversational Form)"}),e.jsx(A,{value:S,className:"field-key-cpy w-12 ml-0",readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{className:a(n.mb2),children:"Embed via HTML Code"}),e.jsx("textarea",{ref:t,rows:4,readOnly:!0,className:a(n.w10,m.embed),onClick:()=>F({ref:t}),value:M})]}),k.enable&&e.jsxs("div",{children:[e.jsx("h4",{className:a(n.mb2),children:"Embed via HTML Code (Conversational Form)"}),e.jsx("textarea",{ref:t,rows:4,readOnly:!0,className:a(n.w10,m.embed),onClick:()=>F({ref:t}),value:W})]})]}),e.jsxs("div",{className:a(n.w3,n.pl4),children:[e.jsx("h4",{className:a({my:10}),children:"Styling"}),e.jsx(D,{title:"Body",open:!0,children:e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{className:a(n.m0),children:"Background"}),e.jsx(z,{value:y(".standalone-form-container",["background-color","background-image","background-position","background-repeat"]),onChangeHandler:s=>g("styles->.standalone-form-container",s),colorProp:"background-color"})]})}),e.jsxs(D,{title:"Wrapper",open:!0,children:[e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{children:"Width"}),e.jsx(V,{value:((T=(P=r==null?void 0:r.styles)==null?void 0:P[".standalone-form-wrapper"])==null?void 0:T.width)||"40%",onChangeHandler:s=>u("styles->.standalone-form-wrapper->width",s),width:130})]}),e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{children:"Height"}),e.jsx(V,{value:((O=(B=r==null?void 0:r.styles)==null?void 0:B[".standalone-form-wrapper"])==null?void 0:O.height)||"100%",onChangeHandler:s=>u("styles->.standalone-form-wrapper->height",s),width:130})]}),e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{children:"Background"}),e.jsx(z,{value:y(".standalone-form-wrapper",["background-color","background-image","background-position","background-repeat"]),onChangeHandler:s=>g("styles->.standalone-form-wrapper",s),colorProp:"background-color"})]}),e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{children:"Border"}),e.jsx(ie,{value:y(".standalone-form-wrapper",["border-color","border-width","border-style","border-radius"]),onChangeHandler:s=>g("styles->.standalone-form-wrapper",s)})]}),e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{children:"Padding"}),e.jsx(ce,{value:(L=(H=r==null?void 0:r.styles)==null?void 0:H[".standalone-form-wrapper"])==null?void 0:L.padding,onChangeHandler:s=>g("styles->.standalone-form-wrapper->padding",s)})]})]})]})]})})})]})}const m={embed:{curp:1,bc:"var(--white-0-95) !important",brs:8,b:"1px solid var(--white-0-89)",h:"70px !important"},prop:{flx:"between",px:20}};export{ke as default};
