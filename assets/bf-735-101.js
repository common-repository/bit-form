import{a as M,w as R,h as y,bK as m,j as o,x as c,bM as B,bL as v,by as U,bN as G,bk as P,bB as W,bC as q,bO as J,bP as Q,bp as X,aw as Y,bo as Z,bx as _}from"./main-700.js";import{B as k}from"./bf-13-114.js";import{S as V}from"./bf-645-111.js";import{c as tt}from"./bf-348-113.js";import{b as T}from"./bf-622-112.js";import"./bf-748-73.js";import"./bf-420-76.js";import"./bf-968-110.js";import"./bf-519-136.js";import"./bf-497-85.js";import"./bf-606-117.js";function mt({objectPaths:u,id:x}){const{css:l}=M(),{"*":j}=R(),[$,F]=y(X),[H,K]=y(Y),[z,D]=y(Z),[E,I]=j.split("/"),g=e=>_(e,{themeVars:$,styles:H,themeColors:z}),r=e=>m(g(e.object),U(g(e.object),e.path)),i=[];if(Array.isArray(u))u.forEach(e=>{const{paths:s,object:n}=e;Object.keys(e.paths).forEach(d=>{i[d]={object:n,path:s[d]}})});else{const{paths:e,object:s}=u;Object.keys(e).forEach(a=>{i[a]={object:s,path:e[a]}})}const t={"outline-color":"","outline-width":"","outline-offset":"","outline-style":""},f=Object.keys(i);for(let e=0;e<f.length;e+=1){const s=f[e];if(f.length===2&&s==="outline"){const n=r(i[s]),a=n==null?void 0:n.split(/(?!\(.*)\s(?![^(]*?\))/g);t["outline-width"]=m(i[s],a[0])||"",t["outline-style"]=m(i[s],a[1])||"",t["outline-color"]=m(i[s],a[2])||"";break}s!=="outline-offset"&&(t[s]=r(i[s]))}t["outline-offset"]=r(i["outline-offset"]);const O=(e,s)=>{if(e==="outline-width")return s||"0px";if(e==="outline-style")return s||"solid";if(e==="outline-color")return s||"hsla(0, 0%, 0%, 0.5)"},w=(e,s)=>{var C;let n,a=s;if(f.length===2&&Object.keys(i).includes("outline")&&s!=="outline-offset"){a="outline";const A=st(r(i.outline));n=Object.entries(A).map(([S,L])=>S===s?O(s,e):O(S,L)).join(" ")}Object.keys(i).includes("outline-offset")&&s==="outline-offset"&&(n=e);const{object:d,path:p}=i[a];n=((C=r(i[a]))==null?void 0:C.indexOf("!important"))>=0?`${e} !important`:n,G(d,p,n,{setThemeVars:F,setThemeColors:D,setStyles:K}),P(W(E,I,a,n,{[d]:q(d)}))},h=({unit:e,value:s,prop:n,oldVal:a})=>{if(s){const d=v(a),N=`${J(e,s,d)}${e||"px"}`;w(N,n)}};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:l(c.flxcb,c.mb2,{w:200}),children:[o.jsx("span",{className:l(c.fs12,c.fw500),children:"Type"}),o.jsx(tt,{options:et,value:t==null?void 0:t["outline-style"],onChange:e=>w(e,"outline-style"),w:130,h:30,id:`${x}-style`})]}),o.jsxs("div",{className:l(c.flxcb,c.mb2,{w:200}),children:[o.jsx("span",{className:l(c.fs12,c.fs12,c.fw500),children:"Color"}),o.jsx(V,{action:{onChange:e=>w(e,"outline-color")},value:t==null?void 0:t["outline-color"]})]}),o.jsx("div",{className:l(c.mb2,{w:200}),children:o.jsxs("div",{className:l(b.titleContainer),children:[o.jsx("span",{className:l(b.title),children:"Width"}),o.jsx("span",{className:l(c.flxc)}),o.jsx("div",{className:l({p:2}),children:o.jsx(T,{min:"0",inputHandler:({unit:e,value:s})=>h({unit:e,value:s,prop:"outline-width"}),sizeHandler:({unitKey:e,unitValue:s})=>h({value:s,unit:e,prop:"outline-width",oldVal:t==null?void 0:t["outline-width"]}),id:"0",label:o.jsx(k,{size:14}),value:(t==null?void 0:t["outline-width"])&&B(t==null?void 0:t["outline-width"]),unit:(t==null?void 0:t["outline-width"])&&v(t==null?void 0:t["outline-width"]),options:["px","em","rem","%"],width:"128px",dataTestId:"outline-width-control"})})]})}),o.jsx("div",{className:l(c.mb2,{w:200}),children:o.jsxs("div",{className:l(b.titleContainer),children:[o.jsx("span",{className:l(b.title),children:"Offset"}),o.jsx("span",{className:l(c.flxc)}),o.jsx("div",{className:l({p:2}),children:o.jsx(T,{min:"0",inputHandler:({value:e,unit:s})=>h({value:e,unit:s,prop:"outline-offset"}),sizeHandler:({unitKey:e,unitValue:s})=>h({value:s,unit:e,prop:"outline-offset",oldVal:t==null?void 0:t["outline-offset"]}),id:"0",label:o.jsx(k,{size:14}),value:(t==null?void 0:t["outline-offset"])&&B(t==null?void 0:t["outline-offset"]),unit:(t==null?void 0:t["outline-offset"])&&v(t==null?void 0:t["outline-offset"]),options:["px","em","rem","%"],width:"128px",dataTestId:"outline-width-control"})})]})})]})}const b={titleContainer:{flx:"center-between"},title:{fs:12,fw:500}},et=[{label:"Solid",value:"solid"},{label:"Dashed",value:"dashed"},{label:"Dotted",value:"dotted"},{label:"Double",value:"double"},{label:"Groove",value:"groove"},{label:"Ridge",value:"ridge"},{label:"Inset",value:"inset"},{label:"Outset",value:"outset"},{label:"None",value:"none"}],st=u=>{const[x,l,j]=Q(u);return{"outline-width":x,"outline-style":l,"outline-color":j}};export{mt as default};
