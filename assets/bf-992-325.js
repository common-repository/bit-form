import{w as se,h as re,a as te,q as oe,r as v,j as s,aM as ne,_ as y,b as U,g as j,ag as ce,u as W,x as u,E as ae,R as ie,e5 as me,bk as X,dq as de,dn as ue,dr as he,aw as ge,aA as xe,cO as fe}from"./main-700.js";import{C as Z}from"./bf-420-194.js";import{C as D}from"./bf-497-85.js";import{I as be}from"./bf-150-183.js";import{F as ee}from"./bf-445-182.js";import{T as je}from"./bf-748-73.js";const Ie={wrapper:{p:5,brs:8,mt:10},flx:{flx:"align-center"},flxBetween:{flx:"center-between",my:1,mr:2},tipBody:{lh:"1.1",fs:"12.5px",fw:100,ff:'"Roboto", sans-serif'},btn:{cur:"pointer",b:"none",oe:"none",bd:"none"},errMsgBox:{w:"96%",brs:8,mx:"auto",bd:"var(--b-79-96)",p:10,fs:13,curp:1,"& p":{m:"0!important"}},checked:{"& .hovertip":{oy:0},"&:hover":{"& .hovertip":{oy:1,tn:"0.2s"}}}};var a=Ie;function $e({errorModal:I,setErrorModal:h,type:r}){var C,N,E,S,k,f;const{fieldKey:m}=se(),[T,w]=re(ce),{css:M}=te(),B=T[m],n=oe(B),c=(N=(C=n==null?void 0:n.err)==null?void 0:C[r])!=null&&N.custom?(S=(E=n==null?void 0:n.err)==null?void 0:E[r])==null?void 0:S.msg:(f=(k=n==null?void 0:n.err)==null?void 0:k[r])==null?void 0:f.dflt,[g,x]=v.useState(c);v.useEffect(()=>{I&&x(c)},[I]);const t=(d,$)=>{w(P=>j(P,i=>{i[m].err||(i[m].err={}),i[m].err[d]||(i[m].err[d]={}),i[m].err[d].msg=$}))},e=()=>{n.err[r].msg=g,setTimeout(()=>{w(d=>j(d,$=>{$[m]=n})),h(!1)})};return s.jsxs(ne,{md:!0,show:I,setModal:e,title:y("Edit Custom Error Message"),children:[s.jsx(je,{id:`${m}-${r}`,menubar:!1,value:c,onChangeHandler:d=>t(r,d)}),s.jsxs("div",{className:"mt-2 f-right",children:[s.jsx("button",{type:"button",className:`${M(U.btn)} mr-2`,onClick:e,children:"Cancel"}),s.jsx("button",{type:"button",className:`${M(U.btn)} blue`,onClick:()=>h(!1),children:"Save"})]})]})}function Ee({className:I,id:h,type:r,title:m,tipTitle:T,defaultMsg:w,allowIcons:M=!0}){var R,H,q,z,A,V,O,Y,L,G,J,Q;const[B,n]=v.useState(!1),{fieldKey:c}=se(),[g,x]=re(ce),{css:t}=te(),e=oe(g[c]),C=(H=(R=e==null?void 0:e.err)==null?void 0:R[r])!=null&&H.custom?(z=(q=e==null?void 0:e.err)==null?void 0:q[r])==null?void 0:z.msg:(V=(A=e==null?void 0:e.err)==null?void 0:A[r])==null?void 0:V.dflt,N=W(ge),[E,S]=v.useState(""),[k,f]=v.useState(!1),d=W(xe),$=l=>{const{name:o,checked:b}=l.target;e.err||(e.err={}),e.err[o]||(e.err[o]={}),b?(e.err[o].custom=!0,e.err[o].msg||(e.err[o].msg=e.err[o].dflt)):delete e.err[o].custom;const p=b?"on":"off",F=j(g,le=>{le[c]=e});x(F),X({event:`Custom error message ${p}`,type:`custom_error_message_${p}`,state:{fields:F,fldKey:c}})},P=l=>{const{name:o,checked:b}=l.target;e.err||(e.err={}),e.err[o]||(e.err[o]={}),b?(e.err[o].show=!0,e.err[o].dflt||(e.err[o].dflt=w)):delete e.err[o].show;const p=j(g,F=>{F[c]=e});x(p),X({event:"Custom error message updated",type:"change_custom_error_message",state:{fields:p,fldKey:c}})},i=()=>{e.err||(e.err={}),e.err[r]||(e.err[r]={}),e.err[r].custom=!0,e.err[r].msg||(e.err[r].msg=e.err[r].dflt),setTimeout(()=>{x(l=>j(l,o=>{o[c]=e})),n(!0)})},_=l=>{de(N,c,fe[l])||ue(d,l),he(l,c),S(l),f(!0)},K=l=>{if(e[l]){delete e[l];const o=j(g,b=>{b[c]=e});x(o)}};return s.jsxs("div",{className:`${t(a.wrapper)} err-msg-wrapper ${I}`,children:[s.jsx("div",{className:`${t(a.flxBetween)} ${t(a.checked)}`,children:s.jsxs("div",{className:`${t(a.flx)}`,children:[s.jsx(Z,{id:`${h}-shw-err-msg`,className:`${t(u.mr2)} ${t(u.fw500)} `,name:r,checked:((Y=(O=e==null?void 0:e.err)==null?void 0:O[r])==null?void 0:Y.show)||!1,title:y("Show Error Message"),onChange:P}),s.jsx(D,{width:250,icnSize:13,className:`${t(u.mr2)} hovertip`,children:s.jsxs("div",{className:t(a.tipBody),children:["Check the box to enable the custom error message.",s.jsx("br",{}),"Note: You can edit the message by clicking on edit icon."]})})]})}),((G=(L=e==null?void 0:e.err)==null?void 0:L[r])==null?void 0:G.show)&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:`${t(a.flxBetween)} ${t(a.checked)}`,children:[s.jsxs("div",{className:t(a.flx),children:[s.jsx(Z,{id:`${h}-cstm-err-msg`,className:`${t(u.mr2)} ${t(u.fw500)} `,name:r,checked:((Q=(J=e==null?void 0:e.err)==null?void 0:J[r])==null?void 0:Q.custom)||!1,title:y("Custom Error Message"),onChange:$}),s.jsx(D,{width:250,icnSize:13,className:`${t(u.mr2)} hovertip`,children:s.jsxs("div",{className:t(a.tipBody),children:["Check the box to enable the custom error message.",s.jsx("br",{}),"Note: You can edit the message by clicking on edit icon."]})})]}),s.jsx("button",{"data-testid":`${h}-err-msg-edt-btn`,tabIndex:"-1",className:t(a.btn),onClick:i,onKeyDown:i,children:s.jsx(ae,{size:19})})]}),s.jsx("div",{className:`${t(a.errMsgBox)} ${t(u.mt2)}`,tabIndex:"0",role:"button",onClick:i,onKeyDown:i,children:s.jsx(ie,{html:me(C)})}),M&&s.jsxs("div",{className:t(u.mt1),children:[s.jsx(ee,{label:"Leading Icon",iconSrc:e==null?void 0:e.errPreIcn,styleRoute:"err-txt-pre-i",setIcon:()=>_("errPreIcn"),removeIcon:()=>K("errPreIcn"),isPro:!0,proProperty:"leadingIcon"}),s.jsx(ee,{label:"Trailing Icon",iconSrc:e==null?void 0:e.errSufIcn,styleRoute:"err-txt-suf-i",setIcon:()=>_("errSufIcn"),removeIcon:()=>K("errSufIcn"),isPro:!0,proProperty:"trailingIcon"})]}),s.jsx($e,{errorModal:B,setErrorModal:n,type:r}),s.jsxs(ne,{md:!0,autoHeight:!0,show:k,setModal:f,className:"o-v",title:y("Icons"),children:[s.jsx("div",{className:"pos-rel"}),s.jsx(be,{iconType:E,setModal:f,addPaddingOnSelect:!1})]})]})]})}export{Ee as E,a};
