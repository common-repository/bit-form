var w=Object.defineProperty;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(s,e,t)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,b=(s,e)=>{for(var t in e||(e={}))y.call(e,t)&&f(s,t,e[t]);if(p)for(var t of p(e))C.call(e,t)&&f(s,t,e[t]);return s};import{v as F,w as N,r as m,j as a,S as E}from"./main-700.js";import"./bf-748-73.js";import{S as P}from"./bf-202-122.js";import{b as L}from"./bf-925-78.js";import{I as T}from"./bf-516-333.js";import{N as _}from"./bf-178-403.js";import B from"./bf-573-261.js";import{h as D,c as g}from"./bf-538-392.js";import{A as M}from"./bf-515-393.js";import"./bf-420-76.js";import"./bf-172-189.js";import"./bf-158-402.js";import"./bf-837-364.js";function Z({formFields:s,setIntegration:e,integrations:t,allIntegURL:h}){const x=F(),{formID:c}=N(),[d,n]=m.useState(!1),[r,u]=m.useState(1),[S,o]=m.useState({show:!1}),A=[{key:"1",label:"Add/Update Subscriber"},{key:"2",label:"Delete Subscriber"}],j=[{key:"email",label:"Email",required:!0}],[i,l]=m.useState({name:"Acumbamail",type:"Acumbamail",mainAction:"",listId:"",auth_token:"",field_map:[{formField:"",acumbamailFormField:"email"}],addSubsCriberFields:j,allActions:A,address_field:[],actions:{}}),v=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!g(i)){o({show:!0,msg:"Please map fields to continue."});return}i.listId!==""&&u(3)},I=()=>{L(t,e,h,i,x)};return a.jsxs("div",{children:[a.jsx(E,{snack:S,setSnackbar:o}),a.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:a.jsx(P,{step:3,active:r})}),a.jsx(B,{formID:c,acumbamailConf:i,setAcumbamailConf:l,step:r,setstep:u,isLoading:d,setIsLoading:n,setSnackbar:o}),a.jsxs("div",{className:"btcd-stp-page",style:b({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(M,{formFields:s,handleInput:k=>D(k,i,l,n,o,c),acumbamailConf:i,setAcumbamailConf:l,isLoading:d,setIsLoading:n,setSnackbar:o}),a.jsx(_,{nextPageHandler:()=>v(),disabled:!i.mainAction||!g(i)})]}),a.jsx(T,{step:r,saveConfig:()=>I()})]})}export{Z as default};