var w=Object.defineProperty;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var v=(n,t,l)=>t in n?w(n,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[t]=l,o=(n,t)=>{for(var l in t||(t={}))N.call(t,l)&&v(n,l,t[l]);if(b)for(var l of b(t))f.call(t,l)&&v(n,l,t[l]);return n};import{r as g,j as e,T as A,_ as a,e as C,u as y,$ as T,aQ as M,g as S}from"./main-700.js";import{u as p,T as E}from"./bf-748-73.js";function V({formFields:n,mailConf:t,setMailConf:l}){const[r,h]=g.useState({show:!1}),m=(c,x)=>{const u=o({},t);x==="attachments"&&(c!==""?u.actions.attachments=c:delete u.actions.attachments),l(o({},u))};return e.jsxs("div",{className:"pos-rel",children:[e.jsx("div",{className:"d-flx flx-wrp",children:e.jsx(A,{onChange:()=>h({show:"attachments"}),checked:"attachments"in t.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:a("Attachments"),subTitle:a("Add attachments from BitForm to mail pushed to Zoho Mail.")})}),e.jsxs(C,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:r.show==="attachments",close:()=>h({show:!1}),action:()=>h({show:!1}),title:a("Select Attachment"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Select file upload fields")}),e.jsx(p,{defaultValue:t.actions.attachments,className:"mt-2 w-9",onChange:c=>m(c,"attachments"),options:n.filter(c=>c.type==="file-up").map(c=>({label:c.name,value:c.key}))})]})]})}function Z({formFields:n,mailConf:t,setMailConf:l}){const r=y(T),h=y(M),m=()=>{const s=[];r.userMail&&Array.isArray(r.userMail)&&s.push(...r.userMail);const d=[];return n.map(i=>{i.type==="email"&&d.push({label:i.name,value:`\${${i.key}}`})}),s.push({title:"Form Fields",type:"group",childs:d}),s},c=(s,d)=>{l(i=>{const j=o({},i);return j[d]=s,j})},x=s=>{l(d=>S(d,i=>{i.body=s}))},u=s=>{const d=o({},t);d.subject+=s.target.value,l(o({},d)),s.target.value=""};return e.jsxs("div",{style:{width:875},children:[e.jsxs("div",{className:"flx",children:[e.jsx("b",{style:{width:100},children:a("Type:")}),e.jsxs("select",{onChange:s=>c(s.target.value,"mailType"),className:"btcd-paper-inp",style:{width:150},value:t.mailType,children:[e.jsx("option",{value:"",children:a("Select type")}),e.jsx("option",{value:"send",children:a("Send Email")}),e.jsx("option",{value:"draft",children:a("Save as Draft")})]})]}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{style:{width:100},children:"To:"}),e.jsx(p,{className:"w-7 mt-2 btcd-paper-drpdwn",defaultValue:t.to,placeholder:a("Add Email Receiver"),onChange:s=>c(s,"to"),options:m(),customValue:!0})]}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{style:{width:100},children:a("CC:")}),e.jsx(p,{className:"w-7 mt-2 btcd-paper-drpdwn",defaultValue:t.cc,placeholder:a("Add Email CC"),onChange:s=>c(s,"cc"),options:m(),customValue:!0})]}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{style:{width:100},children:a("BCC:")}),e.jsx(p,{className:"w-7 mt-2 btcd-paper-drpdwn",defaultValue:t.bcc,placeholder:a("Add Email BCC"),onChange:s=>c(s,"bcc"),options:m(),customValue:!0})]}),e.jsxs("div",{className:"mt-2 flx",children:[e.jsx("b",{style:{width:100},children:a("Subject:")}),e.jsx("input",{type:"text",onChange:s=>c(s.target.value,"subject"),className:"btcd-paper-inp w-7",placeholder:a("Email Subject Here"),value:t.subject||""}),e.jsxs("select",{onChange:u,className:"btcd-paper-inp ml-2",style:{width:150},children:[e.jsx("option",{value:"",children:a("Add form field")}),n!==null&&n.map(s=>!s.type.match(/^(file-up|recaptcha)$/)&&e.jsx("option",{value:`\${${s.key}}`,children:s.name},s.key))]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("div",{className:"flx flx-between",children:e.jsx("b",{children:a("Body:")})}),e.jsx(E,{id:"body-content",formFields:h,value:t.body||"",onChangeHandler:x})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(V,{mailConf:t,setMailConf:l,formFields:n})]})}export{Z};
