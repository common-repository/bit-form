var R=Object.defineProperty;var T=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var _=(r,u,s)=>u in r?R(r,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[u]=s,b=(r,u)=>{for(var s in u||(u={}))M.call(u,s)&&_(r,s,u[s]);if(T)for(var s of T(u))V.call(u,s)&&_(r,s,u[s]);return r};import{j as e,T as A,dy as c,u as O,z as q,$ as L,r as E,f as z}from"./main-700.js";import{S as H,M as P,u as S}from"./bf-748-73.js";import{d as U}from"./bf-925-78.js";import{r as $,a as B,b as k}from"./bf-328-381.js";function D({activeCampaingConf:r,setActiveCampaingConf:u}){var t;const s=(h,j)=>{const m=b({},r);j==="update"&&(h.target.checked?m.actions.update=!0:delete m.actions.update),u(b({},m))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(A,{checked:((t=r.actions)==null?void 0:t.update)||!1,onChange:h=>s(h,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:c("Update ActiveCampaign"),subTitle:c("Update Responses with ActiveCampaign existing email?")})})}function G({i:r,formFields:u,field:s,activeCampaingConf:t,setActiveCampaingConf:h}){var N,d,x,o;const j=s.required,m=O(L),{isPro:n}=m,F=((N=t==null?void 0:t.default)==null?void 0:N.fields)&&Object.values((d=t==null?void 0:t.default)==null?void 0:d.fields).filter(l=>!l.required),y=l=>{const i=b({},t);i.field_map.splice(l,0,{}),h(i)},w=l=>{const i=b({},t);i.field_map.length>1&&i.field_map.splice(l,1),h(i)},p=(l,i)=>{const a=b({},t);a.field_map[i][l.target.name]=l.target.value,l.target.value==="custom"&&(a.field_map[i].customValue=""),h(a)},I=(l,i)=>{const a=b({},t);a.field_map[i].customValue=l.target.value,h(a)};return e.jsxs("div",{className:"flx mt-2 mr-1",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:l=>p(l,r),children:[e.jsx("option",{value:"",children:c("Select Field")}),e.jsx("optgroup",{label:"Form Fields",children:u.map(l=>l.type!=="file-up"&&e.jsx("option",{value:l.key,children:l.name},`ff-zhcrm-${l.key}`))}),e.jsx("option",{value:"custom",children:c("Custom...")}),e.jsx("optgroup",{label:`General Smart Codes ${n?"":"(PRO)"}`,children:n&&((x=H)==null?void 0:x.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),s.formField==="custom"&&e.jsx(P,{onChange:l=>I(l,r),label:c("Custom Value"),className:"mr-2",type:"text",value:s.customValue,placeholder:c("Custom Value")}),e.jsxs("select",{className:"btcd-paper-inp",name:"activeCampaignField",value:s.activeCampaignField,onChange:l=>p(l,r),disabled:j,children:[e.jsx("option",{value:"",children:c("Select Field")}),j?((o=t==null?void 0:t.default)==null?void 0:o.fields)&&Object.values(t.default.fields).map(l=>e.jsx("option",{value:l.fieldId,children:l.fieldName},`${l.fieldId}-1`)):F&&F.map(l=>e.jsx("option",{value:l.fieldId,children:l.fieldName},`${l.fieldId}-1`))]})]}),!j&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>y(r),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>w(r),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(q,{})})]})]})}function Y({formID:r,formFields:u,activeCampaingConf:s,setActiveCampaingConf:t,isLoading:h,setIsLoading:j,setSnackbar:m}){var w,p,I,N;const n=d=>{const x=b({},s);d?x.tagIds=d?d.split(","):[]:delete x.tagIds,t(b({},x))},F=d=>{const x=d.target.value,o=b({},s);x?o.listId=x:delete o.listId,k(o,t,j,m)},y=(w=s==null?void 0:s.default)==null?void 0:w.activeCampaignLists;return E.useEffect(()=>{y&&$(s,t,j,m)},[y]),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:c("List:")}),e.jsxs("select",{value:s==null?void 0:s.listId,name:"listId",id:"",className:"btcd-paper-inp w-5",onChange:F,children:[e.jsx("option",{value:"",children:c("Select List")}),((p=s==null?void 0:s.default)==null?void 0:p.activeCampaignLists)&&Object.keys(s.default.activeCampaignLists).map(d=>e.jsx("option",{value:s.default.activeCampaignLists[d].listId,children:s.default.activeCampaignLists[d].listName},`${d+1}`))]}),e.jsx("button",{onClick:()=>B(s,t,j,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Activecapmaign list"'},type:"button",disabled:h,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{style:{marginTop:"15px"},className:"wdt-200 d-in-b",children:c("Tags: ")}),e.jsx(S,{defaultValue:s==null?void 0:s.tagIds,className:"btcd-paper-drpdwn w-5",options:((I=s==null?void 0:s.default)==null?void 0:I.activeCampaignTags)&&Object.keys(s.default.activeCampaignTags).map(d=>({label:s.default.activeCampaignTags[d].tagName,value:s.default.activeCampaignTags[d].tagId})),onChange:d=>n(d)}),e.jsx("button",{onClick:()=>$(s,t,j,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Activecapmaign Tags")}'`},type:"button",disabled:h,children:"↻"})]}),e.jsx("br",{}),h&&e.jsx(z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:c("Map Fields")}),e.jsx("button",{onClick:()=>k(s,t,j,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Activecapmaign Field")}'`},type:"button",disabled:h,children:"↻"})]}),((s==null?void 0:s.listId)||((N=s==null?void 0:s.default)==null?void 0:N.fields))&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("ActiveCampaign Fields")})})]}),s.field_map.map((d,x)=>e.jsx(G,{i:x,field:d,activeCampaingConf:s,formFields:u,setActiveCampaingConf:t},`Activecampaign-m-${x+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>U(s.field_map.length,s,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:c("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(D,{activeCampaingConf:s,setActiveCampaingConf:t})]})]})}export{Y as A};
