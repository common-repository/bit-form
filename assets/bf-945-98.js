import{j as s,w as u,a1 as I,aA as v,v as w,aL as z,bQ as g,_ as f,cU as b,cJ as F,cK as j,ck as k,cL as N,cQ as C,a as y}from"./main-700.js";import{p as L,q as M,T as S,a as D,C as R,R as $,N as P,D as B,c as T,U as G,d as U,e as W,M as H,W as O,f as V,g as E,G as _,B as A,k as Q,m as q,n as J,l as X,b as Y,P as Z,F as K,o as ss,i as es,j as ts,I as is,h as ns,S as as}from"./bf-111-135.js";import{C as cs}from"./bf-519-136.js";import{D as rs}from"./bf-293-137.js";import{R as os}from"./bf-582-82.js";import{U as ls}from"./bf-472-131.js";function ds({w:e}){return s.jsxs("svg",{className:"btc-line-icn",viewBox:"0 0 172.3 163.8",width:e,children:[s.jsx("path",{className:"line-icn",d:`M146.6,150.5h-118c-11.4,0-20.7-9.3-20.7-20.7V28.7C8,17.3,17.3,8,28.7,8h118c11.4,0,20.7,9.3,20.7,20.7v101.1
          C167.3,141.2,158.1,150.5,146.6,150.5z`}),s.jsx("path",{className:"line-icn",strokeWidth:"12",d:"M31.5,106.2l34-47.6c2.1-3,6.5-3.1,8.8-0.2l31.4,39.5"}),s.jsx("path",{className:"line-icn",strokeWidth:"12",d:"M93.2,86l12.8-15.1c2.1-3,6.5-3.1,8.8-0.2l31.4,39.5"}),s.jsx("path",{className:"line-icn",strokeWidth:"9",d:`M126,38.3L126,38.3c-2.1,0-3.8-1.7-3.8-3.8v0c0-2.1,1.7-3.8,3.8-3.8h0c2.1,0,3.8,1.7,3.8,3.8v0
          C129.8,36.6,128.1,38.3,126,38.3z`})]})}function xs({size:e,stroke:n=2}){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 20",children:s.jsx("path",{strokeWidth:20,fill:"currentColor",d:"M6 14H4V6h2V4H2v12h4zm1.1 3h2.1l3.7-14h-2.1zM14 4v2h2v8h-2v2h4V4z"})})}function hs({icn:e,title:n,subTitle:a,fieldKey:t}){const{formType:i,formID:o}=u(),r=I(v),l=w(),c=z(`.${t}-fld-wrp.drag`),m=()=>{r(t),c&&c.classList.remove("drag-hover"),l(`/form/builder/${i}/${o}/field-settings/${t}`)},x=p=>{if(!c)return;const{type:h}=p;h==="mouseenter"?c.classList.add("drag-hover"):h==="mouseleave"&&c.classList.remove("drag-hover")};return s.jsx("button",{type:"button","data-testid":`fld-lst-itm-${e}-${t}`,onClick:m,onMouseEnter:x,onMouseLeave:x,className:"btc-s-l mt-2",children:s.jsxs("div",{className:"flx flx-between ",children:[s.jsxs("div",{className:"flx w-9",children:[s.jsx("span",{className:"lft-icn mr-2 flx br-50",children:typeof e=="string"?js(e):e}),s.jsxs("div",{className:"w-nwrp o-h",children:[s.jsx("div",{className:"txt-o o-h mb-1",children:g(n)}),a&&s.jsxs("small",{children:[f("Key:"),` ${a}`]})]})]}),s.jsx(b,{size:18})]})})}const js=e=>({title:s.jsx(L,{w:"14"}),divider:s.jsx(M,{w:"14"}),image:s.jsx(ds,{w:"14"}),text:s.jsx(S,{size:"14"}),username:s.jsx(ls,{size:"14"}),textarea:s.jsx(D,{size:"14"}),check:s.jsx(R,{w:"14"}),radio:s.jsx($,{size:"14"}),number:s.jsx(P,{w:"14"}),"html-select":s.jsx(cs,{size:"14"}),select:s.jsx(B,{w:"14"}),password:s.jsx(T,{size:"14"}),email:s.jsx(F,{size:"14"}),url:s.jsx(G,{w:"14"}),"file-up":s.jsx(j,{w:"14"}),date:s.jsx(rs,{w:"14"}),time:s.jsx(U,{size:"14"}),"datetime-local":s.jsx(W,{w:"14"}),month:s.jsx(H,{w:"14"}),week:s.jsx(O,{size:"14"}),color:s.jsx(V,{w:"14"}),recaptcha:s.jsx(os,{size:"14"}),"decision-box":s.jsx(E,{size:"14"}),gdpr:s.jsx(_,{size:"14"}),button:s.jsx(A,{size:"14"}),html:s.jsx(k,{size:"14"}),shortcode:s.jsx(xs,{size:"14"}),paypal:s.jsx(Q,{w:"14"}),stripe:s.jsx(q,{size:"18"}),mollie:s.jsx(J,{size:"18"}),razorpay:s.jsx(X,{w:"14",h:"19"}),"advanced-file-up":s.jsx(j,{w:"14"}),currency:s.jsx(Y,{size:"15"}),"phone-number":s.jsx(Z,{size:"15"}),country:s.jsx(K,{size:"14"}),section:s.jsx(ss,{size:"14"}),repeater:s.jsx(es,{size:"14"}),rating:s.jsx(N,{size:"18"}),signature:s.jsx(ts,{size:"18"}),"image-select":s.jsx(is,{size:"16"}),turnstile:s.jsx(ns,{size:"16"}),range:s.jsx(as,{size:"16"})})[e];function d(){const e=C(),n=Object.entries(e).filter(([,t])=>{var i;return(i=t==null?void 0:t.valid)==null?void 0:i.hide}),a=Object.entries(e).filter(([,t])=>{var i;return!((i=t==null?void 0:t.valid)!=null&&i.hide)});return s.jsxs(s.Fragment,{children:[s.jsx(d.Group,{title:`Hidden Fields (${n.length})`,filteredFields:n}),s.jsx(d.Group,{title:`Fields (${a.length})`,filteredFields:a})]})}const ms=({title:e,filteredFields:n})=>{const{css:a}=y();return n.length?s.jsxs("div",{children:[s.jsx("div",{className:a(ps.title),children:e}),n.map(([t,i])=>{let{lbl:o}=i;const{typ:r,adminLbl:l,txt:c}=i;return["decision-box","gdpr"].includes(r)?o=l:r==="button"&&(o=c),s.jsx(hs,{fieldKey:t,icn:r,title:o||l||r,subTitle:t},t)})]}):s.jsx(s.Fragment,{children:" "})};d.Group=ms;const ps={title:{fw:500,fs:16,mx:8,pn:"sticky",pt:14,tp:0,bd:"var(--white)",h:40}};export{d as default};
