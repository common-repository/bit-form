var Z=Object.defineProperty;var A=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var M=(t,a,o)=>a in t?Z(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,r=(t,a)=>{for(var o in a||(a={}))x.call(a,o)&&M(t,o,a[o]);if(A)for(var o of A(a))L.call(a,o)&&M(t,o,a[o]);return t};import{_ as h,P as v,$ as P,c as p,ea as S}from"./main-700.js";const K=(t,a,o,n,d,l,e,i,s,u)=>{let f=r({},o);if(a===0){if(i){const m=r({},s);m[t.target.name]="",u(r({},m))}f[t.target.name]=t.target.value}else f.relatedlists||(f.relatedlists=[]),f.relatedlists[a-1][t.target.name]=t.target.value;switch(t.target.name){case"module":f=H(a,d,f,n,l,e);break;case"layout":f=j(a,d,f,n,l,e);break}n(r({},f))},Q=(t,a,o,n,d,l,e)=>{var i,s;t&&!((s=(i=n.default)==null?void 0:i.relatedlists)!=null&&s[n.module])&&N(o,n,d,l,e),a(t)},H=(t,a,o,n,d,l)=>{var s,u;let e=r({},o);const i=t===0?e.module:e.relatedlists[t-1].module;if(e.relatedlists[t-1]||(e.relatedlists[t-1]={}),t===0?(e.layout="",e.actions={},e.field_map=[{formField:"",zohoFormField:""}],e.upload_field_map=[{formField:"",zohoFormField:""}],e.relatedlists=[]):(e.relatedlists[t-1].layout="",e.relatedlists[t-1].actions={},e.relatedlists[t-1].field_map=[{formField:"",zohoFormField:""}],e.relatedlists[t-1].upload_field_map=[{formField:"",zohoFormField:""}]),!((s=e.default.layouts)!=null&&s[i]))J(t,a,e,n,d,l);else{const f=Object.keys((u=e.default.layouts)==null?void 0:u[i]);f.length===1&&(t===0?[e.layout]=f:[e.relatedlists[t-1].layout]=f,e=j(t,a,e,n,d,l))}return e},j=(t,a,o,n,d,l)=>{var u,f,m,g,F,c,_,z,R,w,k,D,I,$,U,q,O;const e=r({},o),i=t===0?e.module:e.relatedlists[t-1].module,s=t===0?e.layout:e.relatedlists[t-1].layout;return t===0?(e.actions={},e.field_map=(g=(m=(f=(u=e==null?void 0:e.default)==null?void 0:u.layouts)==null?void 0:f[i])==null?void 0:m[s])!=null&&g.required?y(t,e):[{formField:"",zohoFormField:""}],e.upload_field_map=(z=(_=(c=(F=e==null?void 0:e.default)==null?void 0:F.layouts)==null?void 0:c[i])==null?void 0:_[s])!=null&&z.requiredFileUploadFields&&Object.keys(e.default.layouts[i][s].requiredFileUploadFields).length>0?y(t,e,!0):[{formField:"",zohoFormField:""}]):(e.relatedlists[t-1].actions={},e.relatedlists[t-1].field_map=(D=(k=(w=(R=e==null?void 0:e.default)==null?void 0:R.layouts)==null?void 0:w[i])==null?void 0:k[s])!=null&&D.required?y(t,e):[{formField:"",zohoFormField:""}],e.relatedlists[t-1].upload_field_map=(q=(U=($=(I=e==null?void 0:e.default)==null?void 0:I.layouts)==null?void 0:$[i])==null?void 0:U[s])!=null&&q.requiredFileUploadFields&&Object.keys(e.default.layouts[i][s].requiredFileUploadFields).length>0?y(t,e,!0):[{formField:"",zohoFormField:""}]),!((O=e.default.tags)!=null&&O[i])&&E(t,a,e,n,d,l),e},V=(t,a,o,n,d)=>{n(!0);const l={formID:t,id:a.id,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};p(l,"bitforms_zcrm_refresh_modules").then(e=>{if(e&&e.success){const i=r({},a);i.default||(i.default={}),e.data.modules&&(i.default.modules=e.data.modules),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),o(r({},i)),d({show:!0,msg:h("Modules refreshed")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?d({show:!0,msg:S(h("Modules refresh failed Cause: %s. please try again"),e.data.data||e.data)}):d({show:!0,msg:h("Modules refresh failed. please try again")});n(!1)}).catch(()=>n(!1))},J=(t,a,o,n,d,l)=>{const e=r({},o),i=t===0?e.module:e.relatedlists[t-1].module;if(!i)return;d(!0);const s={formID:a,module:i,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};p(s,"bitforms_zcrm_refresh_layouts").then(u=>{var f,m;if(u&&u.success){if(u.data.layouts){e.default.layouts||(e.default.layouts={}),e.default.layouts[i]=u.data.layouts;const g=[...Object.keys(u.data.layouts)];g.length===1&&(t===0?([e.layout]=g,e.field_map=y(t,e),Object.keys(u.data.layouts[g].fileUploadFields).length>0&&(e.upload_field_map=y(t,e,!0))):([e.relatedlists[t-1].layout]=g,e.relatedlists[t-1].field_map=y(t,e),Object.keys(u.data.layouts[g].fileUploadFields).length>0&&(e.relatedlists[t-1].upload_field_map=y(t,e,!0))),(f=e.default.tags)!=null&&f[i]||E(t,a,e,n,d,l))}u.data.tokenDetails&&(e.tokenDetails=u.data.tokenDetails),n(r({},e)),l({show:!0,msg:h("Layouts refreshed")})}else(m=u==null?void 0:u.data)!=null&&m.data||!u.success&&typeof u.data=="string"?l({show:!0,msg:S(h("Layouts refresh failed Cause: %s. please try again"),u.data.data||u.data)}):l({show:!0,msg:h("Layouts refresh failed. please try again")});d(!1)}).catch(()=>d(!1))},N=(t,a,o,n,d)=>{if(!a.module)return;n(!0);const l={formID:t,module:a.module,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};p(l,"bitforms_zcrm_get_related_lists").then(e=>{var i;if(e&&e.success){const s=r({},a);e.data.relatedLists&&(s.default.relatedlists||(s.default.relatedlists={}),s.default.relatedlists[s.module]=r({},e.data.relatedLists)),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),o(r({},s)),d({show:!0,msg:h("RelatedLists refreshed")})}else(i=e==null?void 0:e.data)!=null&&i.data||!e.success&&typeof e.data=="string"?d({show:!0,msg:`${h("RelatedLists refresh failed Cause:")}${e.data.data||e.data}. ${h("please try again")}`}):d({show:!0,msg:h("RelatedLists refresh failed. please try again")});n(!1)}).catch(()=>n(!1))},E=(t,a,o,n,d,l)=>{const e=t===0?o.module:o.relatedlists[t-1].module;if(!e)return;d(!0);const i={formID:a,module:e,dataCenter:o.dataCenter,clientId:o.clientId,clientSecret:o.clientSecret,tokenDetails:o.tokenDetails};p(i,"bitforms_zcrm_get_tags").then(s=>{var u;if(s!=null&&s.success){const f=r({},o);s.data.tags&&(f.default.tags||(f.default.tags={}),f.default.tags[e]=r({},s.data.tags)),s.data.tokenDetails&&(f.tokenDetails=s.data.tokenDetails),n(r({},f)),l({show:!0,msg:h("Tags refreshed")})}else(u=s==null?void 0:s.data)!=null&&u.data||!s.success&&typeof s.data=="string"?l({show:!0,msg:`${h("Tags refresh failed Cause:")}${s.data.data||s.data}. ${h("please try again")}`}):l({show:!0,msg:h("Tags refresh failed. please try again")});d(!1)}).catch(()=>d(!1))},X=(t,a,o,n,d)=>{n(!0);const l={formID:t,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};p(l,"bitforms_zcrm_get_users").then(e=>{if(e!=null&&e.success){const i=r({},a);i.default.crmOwner=e.data.users,e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),o(r({},i)),d({show:!0,msg:h("Owners refreshed")})}else d({show:!0,msg:h("Owners refresh failed. please try again")});n(!1)}).catch(()=>n(!1))},Y=(t,a,o,n,d)=>{const l=t===0?a.module:a.relatedlists[t-1].module;if(!l)return;n(!0);const e={module:l,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};p(e,"bitforms_zcrm_get_assignment_rules").then(i=>{if(i!=null&&i.success){const s=r({},a);s.default.assignmentRules||(s.default.assignmentRules={}),i.data.tokenDetails&&(s.tokenDetails=i.data.tokenDetails),s.default.assignmentRules[l]=r({},i.data.assignmentRules),o(r({},s)),d({show:!0,msg:h("Assignment Rules refreshed")})}else d({show:!0,msg:h("Assignment Rules refresh failed. please try again")});n(!1)}).catch(()=>n(!1))},y=(t,a,o)=>{const n=t===0?a.module:a.relatedlists[t-1].module,d=t===0?a.layout:a.relatedlists[t-1].layout;return o?a.default.layouts[n][d].requiredFileUploadFields.length>0?a.default.layouts[n][d].requiredFileUploadFields.map(l=>({formField:"",zohoFormField:l})):[{formField:"",zohoFormField:""}]:a.default.layouts[n][d].required.length>0?a.default.layouts[n][d].required.map(l=>({formField:"",zohoFormField:l})):[{formField:"",zohoFormField:""}]},C=t=>{const a=t!=null&&t.field_map?t.field_map.filter(l=>{var e,i,s,u;return!l.formField&&l.zohoFormField&&((u=(s=(i=(e=t==null?void 0:t.default)==null?void 0:e.layouts)==null?void 0:i[t.module])==null?void 0:s[t.layout])==null?void 0:u.required.indexOf(l.zohoFormField))!==-1}):[],o=t!=null&&t.upload_field_map?t.upload_field_map.filter(l=>!l.formField&&l.zohoFormField&&t.default.layouts[t.module][t.layout].requiredFileUploadFields.indexOf(l.zohoFormField)!==-1):[],n=t.relatedlists.map(l=>l.field_map.filter(e=>!e.formField&&e.zohoFormField)),d=t.relatedlists.map(l=>l.upload_field_map.filter(e=>!e.formField&&e.zohoFormField));return!(a.length>0||o.length>0||n.some(l=>l.length)||d.some(l=>l.length))},b=(t,a,o,n,d,l)=>{if(!t.dataCenter||!t.clientId||!t.clientSecret){o({dataCenter:t.dataCenter?"":h("Data center cann't be empty"),clientId:t.clientId?"":h("Client ID cann't be empty"),clientSecret:t.clientSecret?"":h("Secret key cann't be empty")});return}const e=v(P);d(!0);const i="ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.users.Read,zohocrm.files.CREATE",s=`https://accounts.zoho.${t.dataCenter}/oauth/v2/auth?scope=${i}&response_type=code&client_id=${t.clientId}&prompt=Consent&access_type=offline&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(e.zohoRedirectURL)}`,u=window.open(s,"zohoCRM","width=400,height=609,toolbar=off"),f=setInterval(()=>{if(console.log({authWindow:u}),u.closed){clearInterval(f);let m={},g=!1;const F=localStorage.getItem("__bitforms_zohoCRM");if(F&&(g=!0,m=JSON.parse(F),localStorage.removeItem("__bitforms_zohoCRM")),!m.code||m.error||!m||!g){const c=m.error?`Cause: ${m.error}`:"";l({show:!0,msg:`${h("Authorization failed")} ${c}. ${h("please try again")}`}),d(!1)}else{const c=r({},t);c.accountServer=m["accounts-server"],W(m,c,a,n,d,l)}}},500)},W=(t,a,o,n,d,l)=>{const e=v(P),i=r({},t);i.dataCenter=a.dataCenter,i.clientId=a.clientId,i.clientSecret=a.clientSecret,i.redirectURI=encodeURIComponent(e.zohoRedirectURL),p(i,"bitforms_zcrm_generate_token").then(s=>s).then(s=>{if(s&&s.success){const u=r({},a);u.tokenDetails=s.data,o(u),n(!0),l({show:!0,msg:h("Authorized Successfully")})}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?l({show:!0,msg:`${h("Authorization failed Cause:")}${s.data.data||s.data}. ${h("please try again")}`}):l({show:!0,msg:h("Authorization failed. please try again")});d(!1)})};export{E as a,X as b,C as c,Q as d,J as e,N as f,V as g,K as h,b as i,Y as r};
