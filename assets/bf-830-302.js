var z=Object.defineProperty;var w=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var v=(a,s,e)=>s in a?z(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,S=(a,s)=>{for(var e in s||(s={}))C.call(s,e)&&v(a,e,s[e]);if(w)for(var e of w(s))F.call(s,e)&&v(a,e,s[e]);return a};import{r as i,j as t,_ as x,b2 as L,c as P,v as _,w as B,a as E,S as M,B as T,x as $}from"./main-700.js";import{B as H}from"./bf-748-73.js";import{T as R,S as q}from"./bf-202-122.js";import{b as D}from"./bf-925-78.js";import{I as G}from"./bf-516-333.js";import{t as k}from"./bf-172-189.js";import{A as J}from"./bf-158-402.js";import{N as K}from"./bf-178-403.js";import{A as O,g as Q,c as U}from"./bf-515-388.js";import"./bf-420-76.js";function V({autonamiConf:a,setAutonamiConf:s,step:e,nextPage:j,setSnackbar:A,isInfo:f}){const[l,b]=i.useState(!1),[u,o]=i.useState(!1),[d,g]=i.useState(!1),[r,n]=i.useState(!0),[h,p]=i.useState({integrationName:""});i.useEffect(()=>()=>{n(!1)},[]);const m=()=>{g("auth"),P({},"bitforms_autonami_authorize").then(c=>{r&&(c!=null&&c.success&&(b(!0),A({show:!0,msg:x("Connect Successfully")})),o(!0),g(!1))})},y=c=>{const I=S({},a),N=S({},h);N[c.target.name]="",I[c.target.name]=c.target.value,p(N),s(I)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&900,height:e===1&&"100%"},children:[t.jsx(R,{title:k.autonami.title,youTubeLink:k.autonami.link}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:x("Integration Name:")})}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:y,name:"name",value:a.name,type:"text",placeholder:x("Integration Name..."),disabled:f}),u&&!l&&!d&&t.jsxs("div",{className:"flx mt-4",style:{color:"red"},children:[t.jsx(L,{size:"30"}),"Please! First Install or Active Autonami Pro Plugin"]}),t.jsx("br",{}),t.jsx(J,{isAuthorized:l,isLoading:d,handleAuthorize:()=>m()}),t.jsx("br",{}),t.jsx(K,{nextPageHandler:()=>j(2),disabled:!l})]})})}function rt({formFields:a,setIntegration:s,integrations:e,allIntegURL:j}){const A=_(),{formID:f}=B(),{css:l}=E(),[b,u]=i.useState(!1),[o,d]=i.useState(1),[g,r]=i.useState({show:!1}),[n,h]=i.useState({name:"Autonami API",type:"Autonami",field_map:[{formField:"",autonamiField:""}],actions:{}}),p=m=>{if(m===2&&n.name!=="")Q(n,h,u,r),d(m);else if(m===3){if(!U(n)){r({show:!0,msg:"Please map all required fields to continue."});return}n.field_map.length>0&&d(m)}document.getElementById("btcd-settings-wrp").scrollTop=0};return t.jsxs("div",{children:[t.jsx(M,{snack:g,setSnackbar:r}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(q,{step:3,active:o})}),t.jsx(V,{formID:f,autonamiConf:n,setAutonamiConf:h,step:o,nextPage:p,isLoading:b,setIsLoading:u,setSnackbar:r}),t.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"100%",minHeight:o===2&&"200px"},children:[t.jsx(O,{formID:f,formFields:a,autonamiConf:n,setAutonamiConf:h,setIsLoading:u,setSnackbar:r}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs(T,{onClick:()=>p(3),disabled:n.field_map.length<1,className:l($.ftRight),children:[x("Next"),t.jsx(H,{className:"ml-1 rev-icn"})]})]}),t.jsx(G,{step:o,saveConfig:()=>D(e,s,j,n,A)})]})}export{rt as default};
