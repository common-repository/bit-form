var k=Object.defineProperty;var y=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var z=(t,a,l)=>a in t?k(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,h=(t,a)=>{for(var l in a||(a={}))I.call(a,l)&&z(t,l,a[l]);if(y)for(var l of y(a))U.call(a,l)&&z(t,l,a[l]);return t};import{_ as f,P as w,$ as R,c as u,ea as g}from"./main-700.js";const O=(t,a,l,n,o,s,e,i,d,m)=>{let _=h({},l);if(a===0){if(i){const p=h({},d);p[t.target.name]="",m(h({},p))}_[t.target.name]=t.target.value}else _.relatedlists[a-1][t.target.name]=t.target.value;switch(t.target.name){case"module":_=$(a,_,o,n,s,e);break}n(h({},_))},P=(t,a,l,n,o,s,e)=>{var i,d;t&&!((d=(i=l==null?void 0:l.default)==null?void 0:i.relatedlists)!=null&&d[l.module])&&q(o,l,n,s,e),a(t)},$=(t,a,l,n,o,s)=>{var d,m;const e=h({},a),i=t===0?e.module:e.relatedlists[t-1].module;return t===0?(e.actions={},e.field_map=[{formField:"",zohoFormField:""}],e.upload_field_map=[{formField:"",zohoFormField:""}],t&&(e.relatedlists[t-1]={})):(e.relatedlists[t-1].field_map=[{formField:"",zohoFormField:""}],e.relatedlists[t-1].upload_field_map=[{formField:"",zohoFormField:""}],e.relatedlists[t-1].actions={}),(m=(d=e.default)==null?void 0:d.moduleData)!=null&&m[i]?t===0?(e.field_map=c(t,e),Object.keys(e.default.moduleData[i].fileUploadFields).length>0&&(e.upload_field_map=c(t,e,!0))):(e.relatedlists[t-1].field_map=c(t,e),Object.keys(e.default.moduleData[i].fileUploadFields).length>0&&(e.relatedlists[t-1].upload_field_map=c(t,e,!0))):S(t,l,e,n,o,s),e},N=(t,a,l,n,o)=>{n(!0);const s={formID:t,id:a.id,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};u(s,"bitforms_zrecruit_refresh_modules").then(e=>{if(e&&e.success){const i=h({},a);i.default||(i.default={}),e.data.modules&&(i.default.modules=e.data.modules),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),l(h({},i)),o({show:!0,msg:f("Modules refreshed")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?o({show:!0,msg:g(f("Modules refresh failed Cause: %s. please try again"),e.data.data||e.data)}):o({show:!0,msg:f("Modules refresh failed. please try again")});n(!1)}).catch(()=>n(!1))},j=(t,a,l,n,o)=>{n(!0);const s={formID:t,id:a.id,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};u(s,"bitforms_zrecruit_refresh_notetypes").then(e=>{if(e&&e.success){const i=h({},a);i.default||(i.default={}),e.data.noteTypes&&(i.default.noteTypes=e.data.noteTypes),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),l(h({},i)),o({show:!0,msg:f("Note Types refreshed")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?o({show:!0,msg:g(f("Note Types refresh failed Cause: %s. please try again"),e.data.data||e.data)}):o({show:!0,msg:f("Note Types refresh failed. please try again")});n(!1)}).catch(()=>n(!1))},q=(t,a,l,n,o)=>{if(!a.module)return;n(!0);const s={formID:t,module:a.module,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};u(s,"bitforms_zrecruit_refresh_related_lists").then(e=>{var i;if(e&&e.success){const d=h({},a);e.data.related_modules&&(d.default.relatedlists||(d.default.relatedlists={}),d.default.relatedlists[d.module]=e.data.related_modules),e.data.tokenDetails&&(d.tokenDetails=e.data.tokenDetails),l(h({},d)),o({show:!0,msg:f("RelatedLists refreshed")})}else(i=e==null?void 0:e.data)!=null&&i.data||!e.success&&typeof e.data=="string"?o({show:!0,msg:g(f("RelatedLists refresh failed Cause: %s. please try again"),e.data.data||e.data)}):o({show:!0,msg:f("RelatedLists refresh failed. please try again")});n(!1)}).catch(()=>n(!1))},S=(t,a,l,n,o,s)=>{const e=t===0?l.module:l.relatedlists[t-1].module;if(!e)return;o(!0);const i={formID:a,module:e,dataCenter:l.dataCenter,clientId:l.clientId,clientSecret:l.clientSecret,tokenDetails:l.tokenDetails};u(i,"bitforms_zrecruit_get_fields").then(d=>{if(d&&d.success){const m=h({},l);d.data.fieldDetails&&(m.default.moduleData||(m.default.moduleData={}),m.default.moduleData[e]=d.data.fieldDetails,t===0?(m.field_map=c(t,m),Object.keys(m.default.moduleData[e].fileUploadFields).length>0&&(m.upload_field_map=c(t,m,!0))):(m.relatedlists[t-1].field_map=c(t,m),Object.keys(m.default.moduleData[e].fileUploadFields).length>0&&(m.relatedlists[t-1].upload_field_map=c(t,m,!0)))),d.data.tokenDetails&&(m.tokenDetails=d.data.tokenDetails),n(h({},m))}else s({show:!0,msg:f("Fields refresh failed. please try again")});o(!1)}).catch(()=>o(!1))},c=(t,a,l)=>{var o,s;const n=t===0?a.module:a.relatedlists[t-1].module;return l?a.default.moduleData[n].requiredFileUploadFields.length>0?(o=a.default.moduleData[n].requiredFileUploadFields)==null?void 0:o.map(e=>({formField:"",zohoFormField:e})):[{formField:"",zohoFormField:""}]:a.default.moduleData[n].required.length>0?(s=a.default.moduleData[n].required)==null?void 0:s.map(e=>({formField:"",zohoFormField:e})):[{formField:"",zohoFormField:""}]},x=t=>{const a=t!=null&&t.field_map?t.field_map.filter(s=>{var e,i,d;return!s.formField&&s.zohoFormField&&((d=(i=(e=t==null?void 0:t.default)==null?void 0:e.moduleData)==null?void 0:i[t.module])==null?void 0:d.required.indexOf(s.zohoFormField))!==-1}):[],l=t!=null&&t.upload_field_map?t.upload_field_map.filter(s=>{var e,i,d;return!s.formField&&s.zohoFormField&&((d=(i=(e=t==null?void 0:t.default)==null?void 0:e.moduleData)==null?void 0:i[t.module])==null?void 0:d.requiredFileUploadFields.indexOf(s.zohoFormField))!==-1}):[],n=t.relatedlists.map(s=>s.field_map.filter(e=>!e.formField&&e.zohoFormField)),o=t.relatedlists.map(s=>s.upload_field_map.filter(e=>!e.formField&&e.zohoFormField));return!(a.length>0||l.length>0||n.some(s=>s.length)||o.some(s=>s.length))},Z=(t,a,l,n,o,s)=>{if(!t.dataCenter||!t.clientId||!t.clientSecret){l({dataCenter:t.dataCenter?"":f("Data center cann't be empty"),clientId:t.clientId?"":f("Client ID cann't be empty"),clientSecret:t.clientSecret?"":f("Secret key cann't be empty")});return}const e=w(R);o(!0);const i="ZohoRecruit.users.ALL,ZohoRecruit.modules.all",d=`https://accounts.zoho.${t.dataCenter}/oauth/v2/auth?scope=${i}&response_type=code&client_id=${t.clientId}&prompt=Consent&access_type=offline&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(e.zohoRedirectURL)}`,m=window.open(d,"zohoRecruit","width=400,height=609,toolbar=off"),_=setInterval(()=>{if(m.closed){clearInterval(_);let p={},r=!1;const D=localStorage.getItem("__bitforms_zohoRecruit");if(D&&(r=!0,p=JSON.parse(D),localStorage.removeItem("__bitforms_zohoRecruit")),!p.code||p.error||!p||!r){const F=p.error?`Cause: ${p.error}`:"";s({show:!0,msg:`${f("Authorization failed")} ${F}. ${f("please try again")}`}),o(!1)}else{const F=h({},t);F.accountServer=p["accounts-server"],v(p,F,a,n,o,s)}}},500)},v=(t,a,l,n,o,s)=>{const e=w(R),i=h({},t);i.dataCenter=a.dataCenter,i.clientId=a.clientId,i.clientSecret=a.clientSecret,i.redirectURI=encodeURIComponent(e.zohoRedirectURL),u(i,"bitforms_zrecruit_generate_token").then(d=>d).then(d=>{if(d&&d.success){const m=h({},a);m.tokenDetails=d.data,l(m),n(!0),s({show:!0,msg:f("Authorized Successfully")})}else d&&d.data&&d.data.data||!d.success&&typeof d.data=="string"?s({show:!0,msg:`${f("Authorization failed Cause:")}${d.data.data||d.data}. ${f("please try again")}`}):s({show:!0,msg:f("Authorization failed. please try again")});o(!1)})};export{P as a,q as b,x as c,N as d,Z as e,O as h,j as r};
