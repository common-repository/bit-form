import{v,w as E,r as a,a as S,j as e,S as I,B as k,x as w,_}from"./main-700.js";import{B as y}from"./bf-748-73.js";import{S as C}from"./bf-202-122.js";import{b as N}from"./bf-925-78.js";import{I as b}from"./bf-516-333.js";import B from"./bf-506-259.js";import{c as F}from"./bf-43-386.js";import{E as P}from"./bf-256-387.js";import"./bf-420-76.js";import"./bf-172-189.js";import"./bf-158-402.js";import"./bf-178-403.js";import"./bf-497-85.js";function O({formFields:c,setIntegration:m,integrations:p,allIntegURL:l}){const d=v(),{formID:r}=E(),[g,f]=a.useState(!1),[t,n]=a.useState(1),[h,i]=a.useState({show:!1}),{css:u}=S(),[s,o]=a.useState({name:"Encharge API",type:"Encharge",tags:"",api_key:"",field_map:[{formField:"",enChargeFields:""}],actions:{}}),x=j=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),j===3){if(!F(s)){i({show:!0,msg:"Please map all required fields to continue."});return}s.name!==""&&s.field_map.length>0&&n(3)}};return e.jsxs("div",{children:[e.jsx(I,{snack:h,setSnackbar:i}),e.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:e.jsx(C,{step:3,active:t})}),e.jsx(B,{formID:r,enchargeConf:s,setEnchargeConf:o,step:t,setstep:n,isLoading:g,setisLoading:f,setSnackbar:i}),e.jsxs("div",{className:"btcd-stp-page",style:{width:t===2&&900,minHeight:t===2&&"900px"},children:[e.jsx(P,{formID:r,formFields:c,enchargeConf:s,setEnchargeConf:o}),e.jsxs(k,{variant:"success",onClick:()=>x(3),disabled:s.field_map.length<1,className:u(w.ftRight),children:[_("Next")," ",e.jsx(y,{className:"ml-1 rev-icn"})]})]}),e.jsx(b,{step:t,saveConfig:()=>N(p,m,l,s,d)})]})}export{O as default};
