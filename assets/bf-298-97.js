var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var N=(r,o,l)=>o in r?X(r,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[o]=l,f=(r,o)=>{for(var l in o||(o={}))ee.call(o,l)&&N(r,l,o[l]);if(T)for(var l of T(o))te.call(o,l)&&N(r,l,o[l]);return r},j=(r,o)=>Y(r,Z(o));import{u as _,h as A,a1 as se,a as ie,r as F,j as e,x as w,_ as m,I as L,aM as oe,g as S,c4 as le,bs as re,a0 as ne,al as ce,ds as ae}from"./main-700.js";import{B as pe,F as b,t as k}from"./bf-445-182.js";import{s as n}from"./bf-208-145.js";import{F as c}from"./bf-445-146.js";import{h as de}from"./bf-748-73.js";import{a as ue}from"./bf-622-112.js";import{A as B}from"./bf-282-147.js";import{F as p,I as me}from"./bf-150-183.js";import{S as M}from"./bf-348-113.js";import"./bf-420-76.js";import"./bf-783-86.js";import"./bf-335-109.js";import"./bf-968-110.js";import"./bf-645-111.js";import"./bf-13-114.js";import"./bf-571-115.js";import"./bf-173-116.js";import"./bf-497-85.js";import"./bf-606-117.js";import"./bf-848-118.js";import"./bf-212-75.js";import"./bf-556-133.js";import"./bf-519-136.js";function He(){const r=_(le),o=_(re),[l,R]=A(ne),C=se(ce),[a,g]=A(ae),{css:s}=ie(),$=a||{},[H,h]=F.useState(!1),[v,z]=F.useState(""),{showStepHeader:U}=l.multiStepSettings||{},{lbl:D,showLbl:y,subtitle:E,showSubtitle:P,lblPreIcn:O,lblSufIcn:V,subTlePreIcn:q,subTleSufIcn:G}=$||{},J=(t,i)=>{R(u=>S(u,W=>{W.multiStepSettings[t]=i})),C(u=>j(f({},u),{unsaved:!0}))},d=t=>{z(t),h(!0)},I=t=>{g(S(a,i=>{delete i[t]}))},x=(t,i)=>{g(S(a,u=>{u[t]=i}))},K=t=>{g(S(a,i=>{i[v]=t})),h(!1)},Q=t=>{a[v]===t&&g(S(a,i=>{delete i[v]}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("div",{className:s(n.section,n.flxColumn,n.fixed,o&&n.shw),children:[e.jsx(pe,{size:"16",className:s(n.btn,w.fontBody)}),e.jsx("div",{children:e.jsx("div",{className:s(n.mainTitle),children:m("Step Settings")})})]}),e.jsx(p,{}),e.jsxs("div",{className:s(n.section,{mx:15}),children:[e.jsx("span",{className:s(n.title),children:"Step key"}),e.jsx(de,{id:"fld-stng-key",value:r+1})]}),e.jsx(p,{}),e.jsx("div",{className:s(c.fieldSection,c.hover_tip),children:e.jsx(b,{label:"Step Icon",iconSrc:$.icon,styleRoute:"step-icn",setIcon:()=>d("icon"),isPro:!0,proProperty:"stepIcon"})}),e.jsx(p,{}),e.jsx("div",{className:s(c.fieldSection),children:e.jsx(ue,{id:"show-stp-header",tip:"By disabling this option, the Step Header will be hidden.",title:m("Show Step Header"),action:t=>J("showStepHeader",t.target.checked),isChecked:U||"",isPro:!0})}),e.jsx(p,{}),e.jsx(M,j(f({id:"fld-lbl-stng",title:m("Step Label"),className:`${s(c.fieldSection)} ${s(c.hover_tip)}`,switching:!0,tip:k.stepLbl,tipProps:{width:250,icnSize:17},toggleAction:t=>x("showLbl",t.target.checked),toggleChecked:y,open:y},L&&{disable:!y}),{isPro:!0,proTip:"Use this feature? please buy pro version.",children:e.jsxs("div",{children:[e.jsx("div",{className:s({w:"97%",mx:5}),children:e.jsx(B,{id:"fld-lbl-stng",ariaLabel:"Label input",changeAction:t=>{var i;return x("lbl",(i=t.target.value)==null?void 0:i.replace(/\\\\/g,"$_bf_$"))},value:D.replace(/\$_bf_\$/g,"\\")})}),e.jsxs("div",{className:s(w.mt1),children:[e.jsx(b,{label:"Leading Icon",iconSrc:O,styleRoute:"lbl-pre-i",setIcon:()=>d("lblPreIcn"),removeIcon:()=>I("lblPreIcn"),isPro:!0,proProperty:"leadingIcon"}),e.jsx(b,{label:"Trailing Icon",iconSrc:V,styleRoute:"lbl-suf-i",setIcon:()=>d("lblSufIcn"),removeIcon:()=>I("lblSufIcn"),isPro:!0,proProperty:"trailingIcon"})]})]})})),e.jsx(p,{}),e.jsx(M,j(f({id:"fld-sub-titl-stng",title:m("Step Subtitle"),className:`${s(c.fieldSection)} ${s(c.hover_tip)}`,switching:!0,tip:k.stepSubtitle,tipProps:{width:250,icnSize:17},toggleAction:t=>x("showSubtitle",t.target.checked),toggleChecked:P,open:P},L&&{disable:!P}),{isPro:!0,proTip:"Use this feature? please buy pro version.",children:e.jsxs("div",{children:[e.jsx("div",{className:s({w:"97%",mx:5}),children:e.jsx(B,{id:"fld-lbl-stng",ariaLabel:"Label input",changeAction:t=>{var i;return x("subtitle",(i=t.target.value)==null?void 0:i.replace(/\\\\/g,"$_bf_$"))},value:E.replace(/\$_bf_\$/g,"\\")})}),e.jsxs("div",{className:s(w.mt1),children:[e.jsx(b,{label:"Leading Icon",iconSrc:q,styleRoute:"lbl-pre-i",setIcon:()=>d("subTlePreIcn"),removeIcon:()=>I("subTlePreIcn"),isPro:!0,proProperty:"leadingIcon"}),e.jsx(b,{label:"Trailing Icon",iconSrc:G,styleRoute:"lbl-suf-i",setIcon:()=>d("subTleSufIcn"),removeIcon:()=>I("subTleSufIcn"),isPro:!0,proProperty:"trailingIcon"})]})]})})),e.jsx(p,{})]}),e.jsxs(oe,{md:!0,autoHeight:!0,show:H,setModal:h,className:"o-v",title:m("Icons"),children:[e.jsx("div",{className:"pos-rel"}),e.jsx(me,{iconType:"opt",setModal:h,setIconAction:K,removeIconAction:Q})]})]})}export{He as default};
