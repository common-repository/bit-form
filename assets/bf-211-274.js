import{v as b,w as k,r as i,j as e,S as j,_ as S}from"./main-700.js";import"./bf-748-73.js";import{S as I}from"./bf-202-122.js";import{s as M,b as w}from"./bf-925-78.js";import{I as H}from"./bf-516-333.js";import{N as Z}from"./bf-178-403.js";import _ from"./bf-355-253.js";import{h as v,c as y,r as N}from"./bf-408-349.js";import{Z as P}from"./bf-470-350.js";import"./bf-420-76.js";import"./bf-172-189.js";import"./bf-158-402.js";function q({formFields:f,setIntegration:c,integrations:d,allIntegURL:h}){const g=b(),{formID:r}=k(),[l,n]=i.useState(!1),[o,p]=i.useState(1),[u,s]=i.useState({show:!1}),[t,m]=i.useState({name:"Zoho Marketing Hub API",type:"Zoho Marketing Hub",clientId:"",clientSecret:"",list:"",field_map:[{formField:"",zohoFormField:""}]});i.useEffect(()=>{window.opener&&M("zohoMarkatingHub")},[]);const x=a=>{if(a===3){if(!y(t)){s({show:!0,msg:S("Please map mandatory fields")});return}t.list!==""&&t.table!==""&&t.field_map.length>0&&p(a)}else p(a),a===2&&!t.list&&N(r,t,m,n,s)};return e.jsxs("div",{children:[e.jsx(j,{snack:u,setSnackbar:s}),e.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:e.jsx(I,{step:3,active:o})}),e.jsx(_,{formID:r,marketingHubConf:t,setMarketingHubConf:m,step:o,setstep:p,isLoading:l,setisLoading:n,setSnackbar:s}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"100%"},children:[e.jsx(P,{formID:r,formFields:f,handleInput:a=>v(a,r,t,m,n,s),marketingHubConf:t,setMarketingHubConf:m,isLoading:l,setisLoading:n,setSnackbar:s}),e.jsx(Z,{nextPageHandler:()=>x(3),disabled:t.list===""||t.table===""||t.field_map.length<1})]}),e.jsx(H,{step:o,saveConfig:()=>w(d,c,h,t,g)})]})}export{q as default};
