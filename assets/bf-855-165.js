import{w as g,j as t,a as S,h as y,r as F,q as b,B as T,_ as x,b2 as v,aM as w,g as c,ag as E}from"./main-700.js";import{F as m}from"./bf-445-146.js";import{F as O,a as q,S as N,A,b as C,H,c as K}from"./bf-964-95.js";import{F as M}from"./bf-406-322.js";import{F as U}from"./bf-15-323.js";import{F as s}from"./bf-150-183.js";import{P as k}from"./bf-47-327.js";import{R as P}from"./bf-267-324.js";import{U as R}from"./bf-628-330.js";import{E as _}from"./bf-77-328.js";import"./bf-783-86.js";import"./bf-748-73.js";import"./bf-420-76.js";import"./bf-335-109.js";import"./bf-968-110.js";import"./bf-622-112.js";import"./bf-519-136.js";import"./bf-497-85.js";import"./bf-606-117.js";import"./bf-645-111.js";import"./bf-348-113.js";import"./bf-13-114.js";import"./bf-571-115.js";import"./bf-173-116.js";import"./bf-848-118.js";import"./bf-212-75.js";import"./bf-445-182.js";import"./bf-556-133.js";import"./bf-282-147.js";import"./bf-208-145.js";import"./bf-420-194.js";import"./bf-992-325.js";import"./bf-910-77.js";import"./bf-916-83.js";import"./bf-684-144.js";function Ft(){const{fieldKey:e}=g();if(!e)return t.jsx(t.Fragment,{children:"No field exist with this field key"});const{css:o}=S(),[j,n]=y(E),[p,d]=F.useState(!1),a=b(j[e]),u=a.opt,f=i=>{n(r=>c(r,l=>{l[e].opt=i}))},h=i=>{n(r=>c(r,l=>{l[e].customType=i}))};return t.jsxs(t.Fragment,{children:[t.jsx(O,{title:"Field Settings",subtitle:a.typ,fieldKey:e}),t.jsx(q,{}),t.jsx(s,{}),t.jsx(N,{}),t.jsx(s,{}),t.jsx(A,{}),t.jsx(s,{}),t.jsx(C,{}),t.jsx(s,{}),t.jsx(k,{}),t.jsx(s,{}),t.jsx(H,{}),t.jsx(s,{}),t.jsx(P,{}),t.jsx(s,{}),t.jsx(K,{}),t.jsx(s,{}),t.jsx(U,{}),t.jsx(s,{}),t.jsx(M,{}),t.jsx(s,{}),t.jsx("div",{className:o(m.fieldSection),children:t.jsxs(T,{dataTestId:"edt-opt-stng",variant:"primary-outline",size:"sm",className:o({mt:10}),onClick:()=>d(!0),children:[x("Add/Edit Options"),t.jsx("span",{className:o({ml:3,mt:3,tm:"rotate(45deg)"}),children:t.jsx(v,{size:"13",stroke:"3"})})]})}),t.jsx(s,{}),t.jsx(R,{type:"entryUnique",title:"Validate as Entry Unique",tipTitle:"Enabling this option will check from the entry database whether its value is duplicate.",className:o(m.fieldSection,m.hover_tip),isUnique:"show"}),t.jsx(s,{}),t.jsx(w,{md:!0,autoHeight:!0,show:p,setModal:()=>d(!1),className:"o-v",title:x("Options"),width:"730px",children:t.jsx(_,{optionMdl:p,options:u,setOptions:i=>f(i),lblKey:"lbl",valKey:"val",type:"radio",hasGroup:!0,customType:a.customType,setCustomType:h})})]})}export{Ft as default};
