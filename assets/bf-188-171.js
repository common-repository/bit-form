var oe=Object.defineProperty,le=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var H=(o,l,r)=>l in o?oe(o,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[l]=r,B=(o,l)=>{for(var r in l||(l={}))ae.call(l,r)&&H(o,r,l[r]);if(L)for(var r of L(l))pe.call(l,r)&&H(o,r,l[r]);return o},K=(o,l)=>le(o,ne(l));import{w as V,h as $,q as R,a as W,j as s,_ as O,I as P,x as U,ag as G,dn as de,g as f,bk as y,aI as F,r as v,u as me,B as ce,b2 as he,aM as ue,$ as xe,aw as ge,e4 as z}from"./main-700.js";import{t as fe}from"./bf-445-182.js";import{F as a}from"./bf-445-146.js";import{a as M}from"./bf-622-112.js";import{F as ye,a as Oe,S as be,A as je,b as ve,H as Se,c as qe}from"./bf-964-95.js";import{E as k}from"./bf-992-325.js";import{F as we}from"./bf-406-322.js";import{F as d}from"./bf-150-183.js";import{S}from"./bf-348-113.js";import{R as Ce}from"./bf-267-324.js";import{U as $e}from"./bf-628-330.js";import{E as Re}from"./bf-77-328.js";import"./bf-420-76.js";import"./bf-783-86.js";import"./bf-748-73.js";import"./bf-335-109.js";import"./bf-968-110.js";import"./bf-645-111.js";import"./bf-13-114.js";import"./bf-571-115.js";import"./bf-173-116.js";import"./bf-497-85.js";import"./bf-606-117.js";import"./bf-848-118.js";import"./bf-212-75.js";import"./bf-556-133.js";import"./bf-519-136.js";import"./bf-282-147.js";import"./bf-208-145.js";import"./bf-420-194.js";import"./bf-910-77.js";import"./bf-916-83.js";import"./bf-684-144.js";function Pe(){const{fieldKey:o}=V(),[l,r]=$(G),e=R(l[o]),{css:p}=W(),g=e.adminLbl||"",t=m=>{if(!P)return;m.target.checked?(e.addOtherOpt=!0,e.valid.otherOptReq=!0,e.err||(e.err={}),e.err.otherOptReq||(e.err.otherOptReq={}),e.err.otherOptReq.dflt='<p style="margin:0">Custom Option Required</p>',e.err.otherOptReq.show=!0,de(o,"otherOptions")):(delete e.valid.otherOptReq,delete e.addOtherOpt);const c=m.target.checked?"Add":"Remove",u=f(l,j=>{j[o]=e});r(u),y({event:`${c} Other Option: ${e.lbl||g||o}`,type:`${c.toLowerCase()}_Other_Option`,state:{fields:u,fldKey:o}}),F(o)},q=m=>{m.target.checked?(e.valid.otherOptReq=!0,e.err||(e.err={}),e.err.otherOptReq||(e.err.otherOptReq={}),e.err.otherOptReq.dflt='<p style="margin:0">Custom Option Required</p>',e.err.otherOptReq.show=!0):delete e.valid.otherOptReq;const c=m.target.checked?"Requred":"Optional",u=f(l,j=>{j[o]=e});r(u),y({event:`${c} Required Other Option: ${e.lbl||g||o}`,type:`${c.toLowerCase()}_Other_Option`,state:{fields:u,fldKey:o}})},b=m=>{m.target.checked?(e.otherInpPh="Write Custom Option...",e.otherPhShow=!0):(e.otherPhShow=!1,delete e.otherInpPh);const c=m.target.checked?"Show":"Hide",u=f(l,j=>{j[o]=e});r(u),y({event:`${c} Placeholder: ${e.lbl||g||o}`,type:`${c.toLowerCase()}_placeholder`,state:{fields:u,fldKey:o}})};function w(m){m.target.value===""?delete e.otherInpPh:e.otherInpPh=m.target.value;const c=f(l,u=>{u[o]=e});r(c),y({event:`Other Input Placeholder updated: ${e.lbl||g||o}`,type:"change_placeholder",state:{fields:c,fldKey:o}})}return s.jsx(S,K(B({id:"other-opt-stng",title:O("Allow Other Option"),className:p(a.fieldSection,a.hover_tip),switching:!0,tip:"An option will be added as labelled 'Other...' to get custom input from the user",tipProps:{width:250,icnSize:17},toggleAction:t,toggleChecked:e==null?void 0:e.addOtherOpt,open:e==null?void 0:e.addOtherOpt},P&&{disable:!(e!=null&&e.addOtherOpt)}),{isPro:!0,proProperty:"otherOption",children:s.jsxs("div",{className:p(a.placeholder),children:[s.jsxs("div",{className:p({flx:"center-between",my:5}),children:[s.jsx("span",{children:"Required Custom Input"}),s.jsx(M,{id:"req-other-opt",className:p(U.mr2),name:"req-other-opt",action:q,isChecked:!!e.valid.otherOptReq})]}),e.valid.otherOptReq&&s.jsx(k,{id:"other-opt-stng",type:"otherOptReq",title:"Error Message",tipTitle:"By enabling this feature, user will see the error message when input is empty"}),s.jsxs("div",{className:p({flx:"center-between",my:5}),children:[s.jsx("span",{children:"Input Placeholder"}),s.jsx(M,{id:"other-inp-ph",className:p(U.mr2),name:"other-inp-ph",action:b,isChecked:!!e.otherPhShow})]}),e.otherPhShow&&s.jsx("input",{"data-testid":"othep-ph-inp","aria-label":"Placeholer for Other Input",placeholder:"Type Placeholder here...",className:p(a.input),type:"text",value:e.otherInpPh||"",onChange:w})]})}))}function Fe(){var E,A;const o=me(xe),{isPro:l}=o,{css:r}=W(),{fieldKey:e}=V(),[p,g]=$(G),t=R(p[e]),q=R(p[e].opt),b=t.adminLbl||"";t.round;const w=(t==null?void 0:t.optionCol)===void 0?"":t==null?void 0:t.optionCol;t.opt.find(i=>i.req);const m=t.mn||"",c=t.mx||"",u=((E=t==null?void 0:t.customType)==null?void 0:E.type)||"fileupload",[j,J]=$(ge);let N=null,T=!1;(A=t==null?void 0:t.customType)!=null&&A.type&&(T=!0,N=t==null?void 0:t.customType);const[ke,Q]=v.useState({}),[_,I]=v.useState(!1);v.useEffect(()=>Q({dataSrc:u,fieldObject:N,disabled:T}),[e]);const X=()=>{I(!0)},Y=()=>{I(!1)};function Z(i){if(!l)return;Number(i.target.value)?(t.mn=i.target.value,t.err||(t.err={}),t.err.mn||(t.err.mn={}),t.err.mn.dflt=`<p style="margin:0">Minimum ${i.target.value} option${Number(i.target.value)>1?"s":""}<p>`,t.err.mn.show=!0):delete t.mn;const n=f(p,h=>{h[e]=t});g(n),y({event:`Min value updated to ${i.target.value}: ${t.lbl||b||e}`,type:"set_min",state:{fields:n,fldKey:e}}),i.target.value>=1&&!t.req&&z({target:{checked:!0}})}function D(i){if(!l)return;i.target.value===""?delete t.mx:(t.mx=i.target.value,t.err||(t.err={}),t.err.mx||(t.err.mx={}),t.err.mx.dflt=`<p style="margin:0">Maximum ${i.target.value} option${Number(i.target.value)>1?"s":""}</p>`,t.err.mx.show=!0);const n=f(p,h=>{h[e]=t});g(n),y({event:`Max value updated to ${i.target.value}: ${t.lbl||b||e}`,type:"set_max",state:{fields:n,fldKey:e}})}const ee=i=>{if(!l)return;i.target.checked?t.valid.disableOnMax=!0:delete t.valid.disableOnMax;const n=f(p,h=>{h[e]=t});g(n),y({event:`Disable on max selected ${i.target.checked?"on":"off"}: ${t.lbl||b||e}`,type:"set_disable_on_max",state:{fields:n,fldKey:e}})},te=i=>{console.log("newOpts",i);const n=i.filter(x=>x.req);n.length&&z({target:{checked:!0}});const h=f(p,x=>{x[e].opt=i,n.length&&x[e].err.req?(x[e].err.req.custom=!0,x[e].err.req.msg=`<p style="margin:0">${n.map(C=>C.lbl).join(",")} is required</p>`):x[e].err.req&&(x[e].err.req.msg='<p style="margin:0">This field is required</p>')});g(h),y({event:`Options List Moddified: ${t.lbl||b||e}`,type:"option_list_modify",state:{fields:h,fldKey:e}}),F(e)};function se({target:{value:i}}){if(!P)return;i===""?delete t.optionCol:t.optionCol=i;const n=f(p,x=>{x[e]=t}),h=f(j,x=>{const C={display:"grid","grid-template-columns":`repeat(${i}, 1fr)`,width:"100%","grid-row-gap":"10px","column-gap":"10px"},re={display:"flex","flex-wrap":"wrap","margin-top":"8px"};x.fields[e].classes[`.${e}-cc`]=i===""?re:C});g(n),J(h),y({event:`Column Update to ${i}: ${t.lbl||b||e}`,type:"columns_update",state:{fields:n,styles:h,fldKey:e}}),F(e)}window.selectedFieldData=t;const ie=i=>{g(n=>f(n,h=>{h[e].customType=i}))};return s.jsxs("div",{className:"",children:[s.jsx(ye,{title:"Field Settings",subtitle:t.typ==="check"?"Check Box":"Radio",fieldKey:e}),s.jsx(Oe,{}),s.jsx(d,{}),s.jsx(be,{}),s.jsx(d,{}),s.jsx(je,{}),s.jsx(d,{}),s.jsx(ve,{}),s.jsx(d,{}),s.jsx(Se,{}),s.jsx(d,{}),s.jsx(Ce,{}),s.jsx(d,{}),s.jsx(qe,{}),s.jsx(d,{}),s.jsx(d,{}),s.jsx(we,{}),s.jsx(d,{}),s.jsx(S,{id:"opt-clm-stng",title:O("Options Column"),className:r(a.fieldSection),isPro:!0,proProperty:"optionColumn",tip:O("Specify the number of columns to display the options in. Leave blank to display the options as needed space."),children:s.jsx("div",{className:r(a.placeholder),children:s.jsx("input",{"data-testid":"opt-clm-stng-inp","aria-label":"Option Column",className:r(a.input),min:"1",type:"number",value:w,onChange:se})})}),s.jsx(d,{}),t.typ==="check"&&s.jsxs(s.Fragment,{children:[s.jsxs(S,{id:"mnmm-stng",title:O("Minimum"),className:r(a.fieldSection),tip:"Set minimum number to be selected for checkbox option",isPro:!0,proProperty:"mimimumOption",children:[s.jsx("div",{className:r(a.placeholder),children:s.jsx("input",{"data-testid":"mnmm-stng-inp","aria-label":"Minimum number",className:r(a.input),value:m,type:"number",onChange:Z,disabled:!l})}),t.mn&&s.jsx(k,{id:"mnmm-stng",type:"mn",title:"Min Error Message",tipTitle:`By enabling this feature, user will see the error message when selected checkbox is less than ${t.mn}`})]}),s.jsx(d,{}),s.jsxs(S,{id:"mxmm-stng",title:O("Maximum"),className:r(a.fieldSection),tip:"Set maximum number to be selected for checkbox option",isPro:!0,proProperty:"maximumOption",children:[s.jsx("div",{className:r(a.placeholder),children:s.jsx("input",{"data-testid":"mxmm-stng-inp","aria-label":"maximim number",className:r(a.input),value:c,type:"number",onChange:D,disabled:!l})}),t.mx&&s.jsxs(s.Fragment,{children:[s.jsx(k,{id:"mxmm-stng",type:"mx",title:"Max Error Message",tipTitle:`By enabling this feature, user will see the error message when selected checkbox is greater than ${t.mx}`}),s.jsx(M,{id:"mxmm-slctd",title:O("Disable if maximum selected:"),action:ee,isChecked:t.valid.disableOnMax,disabled:!l,className:"mt-3 mb-2"})]})]}),s.jsx(d,{})]}),s.jsx(Pe,{id:`${e}-other-stng`}),s.jsx(d,{}),s.jsx($e,{type:"entryUnique",title:"Unique Entry",tipTitle:fe.uniqueEntry,className:r(a.fieldSection,a.hover_tip),isUnique:"show"}),s.jsx(d,{}),s.jsx("div",{className:r(a.fieldSection),children:s.jsxs(ce,{dataTestId:"edt-opt-stng",variant:"primary-outline",size:"sm",className:r({mt:10}),onClick:X,children:[O("Add/Edit Options"),s.jsx("span",{className:r(Me.plsIcn),children:s.jsx(he,{size:"13",stroke:"3"})})]})}),s.jsx(d,{}),s.jsx(ue,{md:!0,autoHeight:!0,show:_,setModal:Y,className:"o-v",title:O("Options"),width:"755px",children:s.jsx(Re,{optionMdl:_,options:q,setOptions:i=>te(i),lblKey:"lbl",valKey:"val",type:t.typ,customType:t.customType,setCustomType:ie})})]})}var ht=v.memo(Fe);const Me={plsIcn:{ml:3,mt:3,tm:"rotate(45deg)"}};export{ht as default};
