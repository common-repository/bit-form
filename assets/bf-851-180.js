import{r as u,w as C,a1 as E,j as e,a as K,h as q,q as S,_ as d,B,b2 as z,aM as b,aw as U,ag as V,I as G,g as h,bk as x}from"./main-700.js";import"./bf-748-73.js";import{F as J,t as y}from"./bf-445-182.js";import{F as l}from"./bf-445-146.js";import{a as R}from"./bf-622-112.js";import{F as Q,a as W,S as X,A as Y,b as Z,H as D,c as ee}from"./bf-964-95.js";import{F as n,I as se}from"./bf-150-183.js";import{R as te}from"./bf-267-324.js";import{E as ie}from"./bf-77-328.js";import{S as oe}from"./bf-348-113.js";import"./bf-420-76.js";import"./bf-783-86.js";import"./bf-335-109.js";import"./bf-968-110.js";import"./bf-645-111.js";import"./bf-13-114.js";import"./bf-571-115.js";import"./bf-173-116.js";import"./bf-497-85.js";import"./bf-606-117.js";import"./bf-848-118.js";import"./bf-212-75.js";import"./bf-556-133.js";import"./bf-519-136.js";import"./bf-282-147.js";import"./bf-208-145.js";import"./bf-420-194.js";import"./bf-992-325.js";import"./bf-910-77.js";import"./bf-916-83.js";import"./bf-684-144.js";function le(){const{fieldKey:s}=C(),O=E(U),[F,f]=u.useState(!1);if(!s)return e.jsx(e.Fragment,{children:"No field exist with this field key"});const{css:r}=K(),[m,v]=q(V),[j,w]=u.useState(!1),t=S(m[s]),L=S(m[s].opt),_=(t==null?void 0:t.showReviewLblOnHover)||!1,M=(t==null?void 0:t.showReviewLblOnSelect)||!1,P=t.adminLbl||"",N=(t==null?void 0:t.ratingPos)||"start",I=[{name:d("Left"),value:"start"},{name:d("Center"),value:"center"},{name:d("Right"),value:"end"}],H=()=>{w(!0)},k=i=>{if(!G)return;const o=h(m,a=>{a[s].opt=i});v(o),x({event:`Modify Option: ${t.lbl||P||s}`,type:"modify_options_list",state:{fields:o,fldKey:s}})},$=({target:i})=>{const{checked:o}=i,a=h(m,p=>{const c=p[s];o?c.showReviewLblOnHover=!0:c.showReviewLblOnHover=!1}),g=o?"show":"hide";v(a),x({event:`Review Label ${g}`,type:"review_lbl_show_hide",state:{fields:a,fldKey:s}})},T=({target:i})=>{const{checked:o}=i,a=h(m,p=>{const c=p[s];o?c.showReviewLblOnSelect=!0:c.showReviewLblOnSelect=!1}),g=o?"show":"hide";v(a),x({event:`Review Label ${g}`,type:"review_lbl_show_hovsr_hide",state:{fields:a,fldKey:s}})},A=({target:i})=>{const{value:o}=i,a=h(m,p=>{p[s].ratingPos=o});O(p=>h(p,c=>{c.fields[s].classes[`.${s}-inp-fld-wrp`]["justify-content"]=o,o==="end"?c.fields[s].classes[`.${s}-inp-fld-wrp`]["flex-direction"]="row-reverse":delete c.fields[s].classes[`.${s}-inp-fld-wrp`]["flex-direction"]}));const g=o;v(a),x({event:`Review start position change to ${g}`,type:"review_start_pos",state:{fields:a,fldKey:s}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:[e.jsx(Q,{title:"Field Settings",subtitle:t.typ,fieldKey:s}),e.jsx(W,{}),e.jsx(n,{}),e.jsx(X,{}),e.jsx(n,{}),e.jsx(Y,{}),e.jsx(n,{}),e.jsx(Z,{}),e.jsx(n,{}),e.jsx(oe,{id:"rating-algn",title:d("Rating Position"),className:r(l.fieldSection),isPro:!0,children:e.jsx("div",{className:r(l.placeholder),children:e.jsx("select",{"data-testid":"rating-algn-slct",className:r(l.input),name:"",id:"",value:N,onChange:A,children:I.map(i=>e.jsx("option",{value:i.value,children:i.name},`btcd-k-${i.name}`))})})}),e.jsx(n,{}),e.jsx("div",{className:r(l.fieldSection,l.hover_tip,l.singleOption,{fw:700}),children:e.jsx(J,{label:"Rating Icon",iconSrc:t.opt[0].img,styleRoute:"rating-img",setIcon:()=>f(!0),isPro:!0,proProperty:"ratingIcon"})}),e.jsx(n,{}),e.jsx("div",{className:r(l.fieldSection),children:e.jsxs(B,{dataTestId:"edt-opt-stng",variant:"primary-outline",size:"sm",className:r({mt:10}),onClick:H,children:[d("Add/Edit Rating Options"),e.jsx("span",{className:r(ne.plsIcn),children:e.jsx(z,{size:"13",stroke:"3"})})]})}),e.jsx(n,{}),e.jsx("div",{className:r(l.fieldSection,l.hover_tip,l.singleOption),children:e.jsx(R,{id:"fld-rating-lbl-hover",tip:y.ratingLbl,title:d("Show Rating Message On hover"),action:$,isChecked:_,isPro:!0,proProperty:"ratingMsgOnHover"})}),e.jsx(n,{}),e.jsx("div",{className:r(l.fieldSection,l.hover_tip,l.singleOption),children:e.jsx(R,{id:"fld-rating-lbl-select",tip:y.ratingSelectTip,title:d("Show Rating Message On Selected"),action:T,isChecked:M,isPro:!0,proProperty:"ratingMsgOnSelect"})}),e.jsx(n,{}),e.jsx(D,{}),e.jsx(n,{}),e.jsx(te,{}),e.jsx(n,{}),e.jsx(ee,{}),e.jsx(n,{})]}),e.jsx(b,{md:!0,autoHeight:!0,show:j,setModal:()=>w(!1),className:"o-v ",title:d("Options"),width:"740px",children:e.jsx("div",{className:"pos-rel",children:e.jsx(ie,{optionMdl:j,options:L,setOptions:i=>k(i),lblKey:"lbl",valKey:"val",imgKey:"img",isRating:t.typ,type:"rating",showUpload:!0,onlyVisualOptionsTab:!0,isPro:!0})})}),e.jsxs(b,{md:!0,autoHeight:!0,show:F,setModal:f,className:"o-v",title:d("Icons"),children:[e.jsx("div",{className:"pos-rel"}),e.jsx(se,{iconType:"opt",setModal:f})]})]})}var Ce=u.memo(le);const ne={dotBtn:{b:0,brs:5,mr:15,curp:1},button:{dy:"block",w:"100%",ta:"left",b:0,bd:"none",p:3,curp:1,"&:hover":{bd:"var(--white-0-95)",cr:"var(--black-0)",brs:8},fs:11},plsIcn:{ml:8,mt:3,tm:"rotate(45deg)"}};export{Ce as default};
