import{r as e,ba as h,v as u,w as b,j as s,S as v}from"./main-700.js";import"./bf-748-73.js";import{S as g,W as j}from"./bf-202-122.js";import{b as k}from"./bf-925-78.js";import"./bf-420-76.js";import"./bf-172-189.js";const S=e.lazy(()=>h(()=>import("./bf-911-195.js"),["./bf-911-195.js","./main-700.js","./main-700.css","./bf-748-73.js","./bf-420-76.js","./bf-154-414.css","./bf-939-413.css","./bf-724-363.js"],import.meta.url));function E({formFields:r,setIntegration:i,integrations:n,allIntegURL:c}){const m=u(),{formID:p}=b(),[t,d]=e.useState(1),[l,o]=e.useState({show:!1}),[a,x]=e.useState({name:"Web Hooks",type:"Web Hooks",method:"POST",url:""});return s.jsxs("div",{children:[s.jsx(v,{snack:l,setSnackbar:o}),s.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:s.jsx(g,{step:2,active:t})}),s.jsx("div",{className:"btcd-stp-page",style:{width:t===1&&900,height:t===1&&"100%"},children:s.jsx(S,{formID:p,formFields:r,webHooks:a,setWebHooks:x,step:t,setstep:d,setSnackbar:o,create:!0})}),s.jsx("div",{className:"btcd-stp-page",style:{width:t===2&&900,minHeight:t===2&&"900px"},children:s.jsx(j,{step:t,saveConfig:()=>k(n,i,c,a,m)})})]})}export{E as default};
