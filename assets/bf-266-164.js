var w=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var y=(s,i,e)=>i in s?w(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e,S=(s,i)=>{for(var e in i||(i={}))D.call(i,e)&&y(s,e,i[e]);if(b)for(var e of b(i))$.call(i,e)&&y(s,e,i[e]);return s},C=(s,i)=>A(s,B(i));import{w as M,h as N,q as E,a as T,r as f,j as t,aM as z,_ as k,b as F,g,bk as H,ag as K,a1 as I,x as l,E as P,R,e5 as q,aj as V}from"./main-700.js";import{s as W}from"./bf-968-110.js";import{F as v}from"./bf-445-146.js";import{C as G}from"./bf-497-85.js";import{F as J,A as O,b as Q,c as U}from"./bf-964-95.js";import{F as X}from"./bf-406-322.js";import{F as d}from"./bf-150-183.js";import{T as Y}from"./bf-748-73.js";import"./bf-622-112.js";import"./bf-519-136.js";import"./bf-420-76.js";import"./bf-606-117.js";import"./bf-783-86.js";import"./bf-335-109.js";import"./bf-645-111.js";import"./bf-348-113.js";import"./bf-13-114.js";import"./bf-571-115.js";import"./bf-173-116.js";import"./bf-848-118.js";import"./bf-212-75.js";import"./bf-445-182.js";import"./bf-556-133.js";import"./bf-282-147.js";import"./bf-208-145.js";function Z({labelModal:s,setLabelModal:i}){var h;const{fieldKey:e}=M(),[r,c]=N(K),o=E(r[e]),{css:a}=T(),n=o.content||((h=o==null?void 0:o.info)==null?void 0:h.content),[x,m]=f.useState(n);f.useEffect(()=>{s&&m(n)},[s]);const L=p=>{const u=g(r,_=>{_[e].content=p});c(u),H({event:"Modify HTML Content Label",type:"html_content_label",state:{fields:u,fldKey:e}})},j=()=>{o.content=x;const p=g(r,u=>{u[e]=o});c(p),i(!1),H({event:"Cancel HTML Content Label ",type:"cancel_html_content_label",state:{fields:p,fldKey:e}})};return t.jsxs(z,{md:!0,show:s,setModal:j,title:k("Edit HTML Content"),children:[t.jsx(Y,{id:e,value:n,onChangeHandler:L}),t.jsxs("div",{className:"mt-2 f-right",children:[t.jsx("button",{type:"button",className:`${a(F.btn)} mr-2`,onClick:j,children:"Cancel"}),t.jsx("button",{type:"button",className:`${a(F.btn)} blue`,onClick:()=>i(!1),children:"Save"})]})]})}function Mt(){const{fieldKey:s}=M(),[i,e]=N(K),r=I(V),c=E(i[s]),[o,a]=f.useState(!1),{css:n}=T(),x=()=>{r(m=>C(S({},m),{reCalculateSpecificFldHeight:{fieldKey:s,counter:m.reCalculateSpecificFldHeight.counter+1}}))};return f.useEffect(()=>{x()},[c.content]),t.jsxs("div",{children:[t.jsx(J,{title:"Field Settings",subtitle:c.typ,fieldKey:s}),t.jsx(O,{}),t.jsx(d,{}),t.jsx(Q,{}),t.jsx(d,{}),t.jsxs("div",{className:n(v.fieldSection),children:[t.jsxs("div",{className:n(l.flxcb),children:[t.jsxs("div",{className:n(l.flxc),children:[t.jsx("b",{children:"Content: "}),t.jsx(G,{width:250,icnSize:17,className:n(l.ml2),children:t.jsx("div",{className:n(l.tipBody),children:k("Edit the HTML field content by clicking on edit icon")})})]}),t.jsx("span",{"data-testid":"cntnt-edt-btn",role:"button",tabIndex:"-1",className:n(l.mr2,l.cp),onClick:()=>a(!0),onKeyDown:()=>a(!0),children:t.jsx(P,{size:19})})]}),t.jsx("div",{"data-testid":"cntnt",role:"button",tabIndex:"-1",className:n(v.input,l.px10,l.py5,W.childPmargin0,{h:"auto",fs:"12px !important"}),onClick:()=>a(!0),onKeyDown:()=>a(!0),children:t.jsx(R,{html:q(c.content)})})]}),t.jsx(Z,{labelModal:o,setLabelModal:a}),t.jsx(d,{}),t.jsx(U,{}),t.jsx(d,{}),t.jsx(X,{}),t.jsx(d,{})]})}export{Mt as default};
