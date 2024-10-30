var $=Object.defineProperty;var H=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var L=(s,c,m)=>c in s?$(s,c,{enumerable:!0,configurable:!0,writable:!0,value:m}):s[c]=m,h=(s,c)=>{for(var m in c||(c={}))V.call(c,m)&&L(s,m,c[m]);if(H)for(var m of H(c))W.call(c,m)&&L(s,m,c[m]);return s};import{r as F,j as e,T as P,_ as d,aM as I,b5 as f,u as z,z as B,$ as K,f as q}from"./main-700.js";import{u as G,S as X,M as Y}from"./bf-748-73.js";import{C as T}from"./bf-916-83.js";import{T as J}from"./bf-736-336.js";import{r as Q,a as y,b as C}from"./bf-634-334.js";function ee({analyticsConf:s,setAnalyticsConf:c,formFields:m}){var u,x,R,k,S,A,Z,D,M;const[t,p]=F.useState(!1),[w,N]=F.useState({show:!1}),j={read:[{apiName:"ZOHO_READ",displayLabel:"Read Access"},{apiName:"ZOHO_EXPORT",displayLabel:"Export Data"}],write:[{apiName:"ZOHO_ADDROW",displayLabel:"Add Row"},{apiName:"ZOHO_UPDATEROW",displayLabel:"Modify Row"},{apiName:"ZOHO_DELETEROW",displayLabel:"Delete Row"},{apiName:"ZOHO_DELETEALLROWS",displayLabel:"Delete All"}],import:[{apiName:"ZOHO_IMPORT_APPEND",displayLabel:"Only Append Rows"},{apiName:"ZOHO_IMPORT_ADDORUPDATE",displayLabel:"Add or Update Rows"},{apiName:"ZOHO_IMPORT_DELETEALLADD",displayLabel:"Delete All Rows and Add New Rows"}],share:[{apiName:"ZOHO_SHARE",displayLabel:"Share View / Child Reports"}]},g=(l,a)=>{var o;const i=h({},s);a==="update"&&(l.target.checked&&!((o=i==null?void 0:i.actions)!=null&&o.update)?(i.actions.update={insert:!0,criteria:""},p(!0)):delete i.actions.update),c(h({},i))},v=(l,a)=>{const i=h({},s);a==="criteria"&&(i.actions.update.criteria=l),a==="insert"&&(i.actions.update.insert=l),c(h({},i))},E=()=>{var l;if(!((l=s.actions)!=null&&l.update)){const a=h({},s);a.actions.update={insert:!0,criteria:""},c(h({},a))}p(!0)},r=(l,a,i)=>{var O;const o=h({},s);if((O=o.actions)!=null&&O.share||(o.actions.share={}),o.actions.share.permissions||(o.actions.share.permissions={read:["ZOHO_READ"]}),l==="parent"){o.actions.share.permissions[a]||(o.actions.share.permissions[a]=[]);const b=j[a].map(_=>_.apiName);b.every(_=>o.actions.share.permissions[a].includes(_))?a==="read"?o.actions.share.permissions.read=["ZOHO_READ"]:delete o.actions.share.permissions[a]:o.actions.share.permissions[a]=b}else if(l==="value"){o.actions.share.permissions[i]||(o.actions.share.permissions[i]=[]);const b=o.actions.share.permissions[i].indexOf(a);b!==-1?(o.actions.share.permissions[i].splice(b,1),o.actions.share.permissions[i].length||delete o.actions.share.permissions[i]):o.actions.share.permissions[i].push(a)}else o.actions.share[l]=a;c(h({},o))},n=()=>{var a;const l=[{title:"Zoho Analytics Users",type:"group",childs:[]},{title:"Form Fields",type:"group",childs:[]}];return((a=s==null?void 0:s.default)==null?void 0:a.users.length)>0&&(l[0].childs=s.default.users.map(i=>({label:i,value:i}))),l[1].childs=m.map(i=>({label:i.name,value:`\${${i.key}}`})),l};return F.useEffect(()=>{var l,a;if(!t&&!((a=(l=s.actions)==null?void 0:l.update)!=null&&a.criteria)){const i=h({},s);delete i.actions.update,c(h({},i))}},[t]),e.jsxs("div",{className:"pos-rel",children:[e.jsxs("div",{className:"d-flx flx-wrp",children:[e.jsx(J,{action:E,children:e.jsx(P,{onChange:l=>g(l,"update"),checked:"update"in(s==null?void 0:s.actions),className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",title:d("Update Row"),subTitle:d("Control how the row gets updated.")})}),e.jsx(P,{checked:((x=(u=s==null?void 0:s.actions)==null?void 0:u.share)==null?void 0:x.email)||!1,onChange:()=>N({show:"share"}),className:"wdt-200 mt-4 mr-2",value:"user_share",title:d("Share Table"),subTitle:d("Share Table with users pushed to Zoho Analytics.")})]}),e.jsx(I,{md:!0,show:t,setModal:p,title:d("Update Row"),children:e.jsx("div",{className:"o-a",children:((R=s==null?void 0:s.actions)==null?void 0:R.update)&&e.jsxs(e.Fragment,{children:[e.jsx("small",{children:d("Enter the criteria to update rows. Please use the below format.")}),e.jsx("br",{}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("small",{children:[d("Example"),": ",`("Table Name"."Department" = 'Finance' and "Table Name"."Salary" < 9000 or "Table Name"."Country" = 'USA')`]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("small",{children:d("Here Department, Salary and Country are Zoho Analytics table column name")}),e.jsx("span",{className:"icn-btn ml-2 tooltip",style:{"--tooltip-txt":`'${d("Supported Arithmetic Operators: ( +, -, *, / ) and Supported Relational Operators: ( =, !=, <, >, <=, >=, LIKE, NOT LIKE, IN, NOT IN, BETWEEN )")}'`,"--tt-wrap":"wrap","--tt-width":"225px",fontSize:15},children:e.jsx(f,{size:"15"})}),e.jsx("textarea",{name:"",rows:"5",className:"btcd-paper-inp mt-1",onChange:l=>v(l.target.value,"criteria"),value:(S=(k=s.actions)==null?void 0:k.update)==null?void 0:S.criteria})]}),e.jsx("div",{className:"font-w-m mt-3",children:d("Update Preferance")}),e.jsx("small",{children:"insert new row if the above criteria doesn't met?"}),e.jsxs("div",{children:[e.jsx(T,{onChange:()=>v(!0,"insert"),radio:!0,checked:(A=s.actions.update)==null?void 0:A.insert,name:"up-row",title:d("Yes")}),e.jsx(T,{onChange:()=>v(!1,"insert"),radio:!0,checked:!((Z=s.actions.update)!=null&&Z.insert),name:"up-row",title:d("No")})]})]})})}),e.jsx(I,{md:!0,show:w.show==="share",setModal:()=>N({show:!1}),title:d("Share Settings"),children:e.jsxs("div",{className:"o-a",style:{height:"95%"},children:[e.jsx("div",{className:"mt-2 mb-1",children:d("Enter Email Addresses")}),e.jsx(G,{className:"btcd-paper-drpdwn w-9 mr-2",placeholder:"Input Email Address(s)",defaultValue:(M=(D=s==null?void 0:s.actions)==null?void 0:D.share)==null?void 0:M.email,onChange:l=>r("email",l),options:n(),customValue:!0}),e.jsx("small",{children:d("you can select analytics users or select form fields value or even can input custom email address as well")}),e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2 mb-1 font-w-m",children:d("Permissions Settings")}),e.jsx("div",{className:"btcd-hr mt-2"}),Object.keys(j).map(l=>e.jsxs("div",{children:[e.jsx(T,{className:"font-w-m btcd-ttc",onChange:()=>r("parent",l),title:`${l} Options`,checked:j[l].map(a=>a.apiName).every(a=>{var i,o,O,b;return(b=(O=(o=(i=s==null?void 0:s.actions)==null?void 0:i.share)==null?void 0:o.permissions)==null?void 0:O[l])==null?void 0:b.includes(a)})}),e.jsx("div",{className:"flx",children:j[l].map(a=>{var i,o,O,b;return e.jsx(T,{className:"scl-7",value:"true",title:e.jsx("span",{children:a.displayLabel}),sqr:!0,checked:((b=(O=(o=(i=s.actions)==null?void 0:i.share)==null?void 0:o.permissions)==null?void 0:O[l])==null?void 0:b.indexOf(a.apiName))>=0,onChange:()=>r("value",a.apiName,l),disabled:a.apiName==="ZOHO_READ"||!1},a.apiName)})}),e.jsx("div",{className:"btcd-hr mt-2"})]},l))]})})]})}const U=(s,c,m)=>{const t=h({},c);t.field_map.splice(s,0,{}),m(t)};function se({i:s,formFields:c,field:m,analyticsConf:t,setAnalyticsConf:p}){var E;const w=z(K),{isPro:N}=w,j=r=>{const n=h({},t);n.field_map.length>1&&n.field_map.splice(r,1),p(n)},g=(r,n)=>{const u=h({},t);u.field_map[n][r.target.name]=r.target.value,r.target.value==="custom"&&(u.field_map[n].customValue=""),p(u)},v=(r,n)=>{const u=h({},t);u.field_map[n].customValue=r.target.value,p(u)};return e.jsxs("div",{className:"flx flx-around mt-2 mr-1",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:m.formField||"",onChange:r=>g(r,s),children:[e.jsx("option",{value:"",children:d("Select Field")}),e.jsx("optgroup",{label:"Form Fields",children:c.map(r=>r.type!=="file-up"&&e.jsx("option",{value:r.key,children:r.name},`ff-zhcrm-${r.key}`))}),e.jsx("option",{value:"custom",children:d("Custom...")}),e.jsx("optgroup",{label:`General Smart Codes ${N?"":"(PRO)"}`,children:N&&((E=X)==null?void 0:E.map(r=>e.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`)))})]}),m.formField==="custom"&&e.jsx(Y,{onChange:r=>v(r,s),label:d("Custom Value"),className:"mr-2",type:"text",value:m.customValue,placeholder:d("Custom Value")}),e.jsxs("select",{className:"btcd-paper-inp",name:"zohoFormField",value:m.zohoFormField||"",onChange:r=>g(r,s),children:[e.jsx("option",{value:"",children:d("Select Field")}),Object.values(t.default.tables.headers[t.table]).map(r=>e.jsx("option",{value:r,children:r},`${r}-1`))]})]}),e.jsx("button",{onClick:()=>U(s,t,p),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>j(s),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(B,{})})]})}function oe({formID:s,formFields:c,handleInput:m,analyticsConf:t,setAnalyticsConf:p,isLoading:w,setisLoading:N,setSnackbar:j}){var g,v,E,r,n,u;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:d("Workspace:")}),e.jsxs("select",{onChange:m,name:"workspace",value:t.workspace,className:"btcd-paper-inp w-7",children:[e.jsx("option",{value:"",children:d("Select Workspace")}),((g=t==null?void 0:t.default)==null?void 0:g.workspaces)&&t.default.workspaces.map(x=>e.jsx("option",{value:x,children:x},x))]}),e.jsx("button",{onClick:()=>Q(s,t,p,N,j),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh Analytics Workspaces")}'`},type:"button",disabled:w,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:d("Table:")}),e.jsxs("select",{onChange:m,name:"table",value:t.table,className:"btcd-paper-inp w-7",children:[e.jsx("option",{value:"",children:d("Select Table")}),((E=(v=t==null?void 0:t.default)==null?void 0:v.tables)==null?void 0:E[t.workspace])&&t.default.tables[t.workspace].map(x=>e.jsx("option",{value:x,children:x},x))]}),e.jsx("button",{onClick:()=>y(s,t,p,N,j),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Analytics Tables"'},type:"button",disabled:w,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("small",{style:{color:"red",marginLeft:105},children:d("** Zoho Analytics doesn't support data INSERT / UPDATE in other integration table")}),w&&e.jsx(q,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((u=(n=(r=t.default)==null?void 0:r.tables)==null?void 0:n.headers)==null?void 0:u[t.table])&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:d("Map Fields")}),e.jsx("button",{onClick:()=>C(s,t,p,N,j),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh Analytics Table Headers")}'`},type:"button",disabled:w,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Zoho Fields")})})]}),t.field_map.map((x,R)=>e.jsx(se,{i:R,field:x,analyticsConf:t,formFields:c,setAnalyticsConf:p},`analytics-m-${R+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>U(t.field_map.length,t,p),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(ee,{analyticsConf:t,setAnalyticsConf:p,formFields:c})]})]})}export{oe as Z};
