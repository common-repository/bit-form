var f=Object.defineProperty;var n=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var b=(o,t,s)=>t in o?f(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,c=(o,t)=>{for(var s in t||(t={}))j.call(t,s)&&b(o,s,t[s]);if(n)for(var s of n(t))v.call(t,s)&&b(o,s,t[s]);return o};import{r as a,ba as k,v as _,w as y,j as e,S}from"./main-700.js";import{b as g}from"./bf-925-78.js";import{W as h}from"./bf-202-122.js";import"./bf-748-73.js";import"./bf-420-76.js";import"./bf-172-189.js";const w=a.lazy(()=>k(()=>import("./bf-911-195.js"),["./bf-911-195.js","./main-700.js","./main-700.css","./bf-748-73.js","./bf-420-76.js","./bf-154-414.css","./bf-939-413.css","./bf-724-363.js"],import.meta.url));function N({formFields:o,setIntegration:t,integrations:s,allIntegURL:p}){const l=_(),{id:r,formID:d}=y(),[i,u]=a.useState(c({},s[r])),[x,m]=a.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(S,{snack:x,setSnackbar:m}),e.jsx("div",{className:"mt-3",children:e.jsx(w,{formID:d,formFields:o,webHooks:i,setWebHooks:u,setSnackbar:m})}),e.jsx(h,{edit:!0,saveConfig:()=>g(s,t,p,i,l,r,1)}),e.jsx("br",{})]})}export{N as default};
