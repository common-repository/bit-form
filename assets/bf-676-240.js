var E=Object.defineProperty;var b=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var N=(r,t,s)=>t in r?E(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,d=(r,t)=>{for(var s in t||(t={}))C.call(t,s)&&N(r,s,t[s]);if(b)for(var s of b(t))I.call(t,s)&&N(r,s,t[s]);return r};import{r as v,u as f,j as e,_ as l,C as y,$ as L}from"./main-700.js";import{t as A}from"./bf-172-189.js";import{T as P}from"./bf-202-122.js";import{A as U}from"./bf-158-402.js";import{N as _}from"./bf-178-403.js";import{c as $,r as B}from"./bf-946-362.js";import"./bf-748-73.js";import"./bf-420-76.js";import"./bf-925-78.js";function Q({formID:r,sheetConf:t,setSheetConf:s,step:o,setstep:S,isLoading:z,setisLoading:m,setSnackbar:p,redirectLocation:k,isInfo:a}){const[x,w]=v.useState(!1),[i,h]=v.useState({clientId:"",clientSecret:""}),u=f(L),{siteURL:R}=u,n=c=>{const g=d({},t),j=d({},i);j[c.target.name]="",g[c.target.name]=c.target.value,h(j),s(g)},T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),S(2),B(r,t,s,m,p)};return e.jsxs(e.Fragment,{children:[e.jsx(P,{title:A.googelSheets.title,youTubeLink:A.googelSheets.link}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&900,height:o===1&&"100%"},children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Integration Name:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"name",value:t.name,type:"text",placeholder:l("Integration Name..."),disabled:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Homepage URL:")})}),e.jsx(y,{value:R,className:"field-key-cpy w-6 ml-0",readOnly:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Authorized Redirect URIs:")})}),e.jsx(y,{value:k||`${u.googleRedirectURL}`,className:"field-key-cpy w-6 ml-0",readOnly:a}),e.jsxs("small",{className:"d-blk mt-5",children:[l("To get Client ID and SECRET , Please Visit")," ",e.jsx("a",{className:"btcd-link",href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noreferrer",children:l("Google API Console")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Client id:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"clientId",value:t.clientId,type:"text",placeholder:l("Client id..."),disabled:a}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:i.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Client secret:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:l("Client secret..."),disabled:a}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:i.clientSecret}),!a&&e.jsxs(e.Fragment,{children:[e.jsx(U,{isAuthorized:x,isLoading:z,handleAuthorize:()=>$(t,s,h,w,m,p)}),e.jsx("br",{}),e.jsx(_,{nextPageHandler:()=>T(),disabled:!x})]})]})]})}export{Q as default};
