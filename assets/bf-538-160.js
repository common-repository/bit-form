import{w as b,h as g,q as v,r as k,a as S,j as e,_ as n,E as C,x,g as F,bk as N,ag as y}from"./main-700.js";import{a as D}from"./bf-992-325.js";import{F as s}from"./bf-445-146.js";import{C as w}from"./bf-497-85.js";import{F as A,A as E,b as R,c as $}from"./bf-964-95.js";import{D as L}from"./bf-422-329.js";import{F as M}from"./bf-406-322.js";import{F as i}from"./bf-150-183.js";import{R as P}from"./bf-267-324.js";import{S as u}from"./bf-348-113.js";import"./bf-420-194.js";import"./bf-445-182.js";import"./bf-420-76.js";import"./bf-783-86.js";import"./bf-748-73.js";import"./bf-335-109.js";import"./bf-968-110.js";import"./bf-622-112.js";import"./bf-519-136.js";import"./bf-606-117.js";import"./bf-645-111.js";import"./bf-13-114.js";import"./bf-571-115.js";import"./bf-173-116.js";import"./bf-848-118.js";import"./bf-212-75.js";import"./bf-556-133.js";import"./bf-282-147.js";import"./bf-208-145.js";function me(){const{fieldKey:r}=b(),[c,h]=g(y),a=v(c[r]),[j,o]=k.useState(!1),{css:t}=S(),m=(l,d)=>{a.msg[d]=l;const p=F(c,f=>{f[r]=a});h(p),N({event:`${d[0].toUpperCase()+d.slice(1)} Value Modified to "${l}"`,type:`${d}_value_modify`,state:{fields:p,fldKey:r}})};return window.selectedFieldData=a,e.jsxs("div",{children:[e.jsx(A,{title:"Field Settings",subtitle:a.typ,fieldKey:r}),e.jsxs("div",{className:t(s.fieldSection),children:[e.jsxs("div",{className:`flx flx-between ${s.hover_tip}`,children:[e.jsxs("div",{className:"flx",children:[e.jsx("b",{children:"Label "}),e.jsx(w,{width:250,icnSize:17,className:"hover-tip",children:e.jsx("div",{className:"txt-body",children:n("Edit GDPR Concent label by clicking on edit icon")})})]}),e.jsx("span",{"data-testid":"lbl-edt-btn",role:"button",tabIndex:"-1",className:"mr-2 cp",onClick:()=>o(!0),onKeyDown:()=>o(!0),children:e.jsx(C,{size:19})})]}),e.jsx("div",{className:`${t(D.errMsgBox)} ${t(x.mt2)}`,tabIndex:"0",role:"button",onClick:()=>o(!0),onKeyDown:()=>o(!0),children:e.jsx("p",{className:t(x.m0),children:"Click to edit GDPR Concent Label"})})]}),e.jsx(i,{}),e.jsx(L,{labelModal:j,setLabelModal:o,title:n("Edit GDPR Concent Label")}),e.jsx(E,{}),e.jsx(i,{}),e.jsx(R,{}),e.jsx(i,{}),e.jsx(P,{asteriskIsAllow:!1}),e.jsx(i,{}),e.jsx(M,{}),e.jsx(i,{}),e.jsx($,{}),e.jsx(i,{}),e.jsx(u,{id:"chek-val-stng",title:n("Checked Value"),className:t(s.fieldSection),open:!0,children:e.jsx("div",{className:t(s.placeholder),children:e.jsx("input",{"data-testid":"chek-val-inp","aria-label":"Checked value",className:t(s.input),type:"text",value:a.msg.checked||"",onChange:l=>m(l.target.value,"checked")})})}),e.jsx(i,{}),e.jsx(u,{id:"unchek-val-stng",title:n("Unchecked Value"),className:t(s.fieldSection),open:!0,children:e.jsx("div",{className:t(s.placeholder),children:e.jsx("input",{"data-testid":"unchek-val-inp","aria-label":"Uncheked value",className:t(s.input),type:"text",value:a.msg.unchecked||"",onChange:l=>m(l.target.value,"unchecked")})})}),e.jsx(i,{})]})}export{me as default};