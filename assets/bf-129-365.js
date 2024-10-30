var F=Object.defineProperty;var _=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var I=(i,e,t)=>e in i?F(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,o=(i,e)=>{for(var t in e||(e={}))k.call(e,t)&&I(i,t,e[t]);if(_)for(var t of _(e))A.call(e,t)&&I(i,t,e[t]);return i};import{_ as l,c as p,q as $,ea as y}from"./main-700.js";const M=(i,e,t,r,n,d,a,s,c)=>{let u=o({},e);if(a){const m=o({},s);m[i.target.name]="",c(o({},m))}switch(u[i.target.name]=i.target.value,i.target.name){case"listId":u=D(u,r,t,n,d);break}t(o({},u))},b=i=>!((i!=null&&i.address_field?i.address_field.filter(t=>!t.formField&&t.mailChimpAddressField&&t.required):[]).length>0),D=(i,e,t,r,n)=>{var a,s;const d=$(i);return d.field_map=[{formField:"",mailChimpField:""}],(s=(a=d==null?void 0:d.default)==null?void 0:a.fields)!=null&&s[i.listId]||(R(e,d,t,r,n),q(e,d,t,r,n)),d},P=(i,e,t,r,n)=>{r(!0);const d={formID:i,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};p(d,"bitforms_mChimp_refresh_audience").then(a=>{if(a&&a.success){const s=o({},e);s.default||(s.default={}),a.data.audiencelist&&(s.default.audiencelist=a.data.audiencelist),a.data.tokenDetails&&(s.tokenDetails=a.data.tokenDetails),n({show:!0,msg:l("Audience list refreshed")}),t(o({},s))}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?n({show:!0,msg:y(l("Audience list refresh failed Cause: %s. please try again"),a.data.data||a.data)}):n({show:!0,msg:l("Audience list failed. please try again")});r(!1)}).catch(()=>r(!1))},R=(i,e,t,r,n)=>{r(!0);const d={formID:i,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,listId:e.listId};p(d,"bitforms_mChimp_refresh_tags").then(a=>{if(a&&a.success){const s=o({},e);a.data.audienceTags&&(s.default.audienceTags=a.data.audienceTags),n({show:!0,msg:l("Audience tags refreshed")}),t(o({},s))}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?n({show:!0,msg:y(l("Audience tags refresh failed Cause: %s. please try again"),a.data.data||a.data)}):n({show:!0,msg:l("Audience tags failed. please try again")});r(!1)}).catch(()=>r(!1))},q=(i,e,t,r,n)=>{const{listId:d}=e;if(!d)return;r(!0);const a={formID:i,listId:d,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};p(a,"bitforms_mChimp_refresh_fields").then(s=>{if(s&&s.success){const c=o({},e);s.data.audienceField&&(c.default.fields||(c.default.fields={}),c.default.fields[d]=s.data.audienceField),s.data.tokenDetails&&(c.tokenDetails=s.data.tokenDetails),n({show:!0,msg:l("Fields refreshed")}),t(o({},c))}else n({show:!0,msg:l("Fields refresh failed. please try again")});r(!1)}).catch(()=>r(!1))},C=i=>{const e={},r=window.location.href.replace(`${window.opener.location.href}`,"").split("&");r&&r.forEach(n=>{const d=n.split("=");d[1]&&(e[d[0]]=d[1])}),localStorage.setItem(`__bitforms_${i}`,JSON.stringify(e)),window.close()},E=(i,e,t,r,n,d,a,s)=>{if(!t.clientId||!t.clientSecret){n({clientId:t.clientId?"":l("Client ID cann't be empty"),clientSecret:t.clientSecret?"":l("Secret key cann't be empty")});return}a(!0);const c=`https://login.mailchimp.com/oauth2/authorize?client_id=${t.clientId}&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code`,u=window.open(c,i,"width=400,height=609,toolbar=off"),m=setInterval(()=>{if(u.closed){clearInterval(m);let f={},g=!1;const w=localStorage.getItem(`__bitforms_${i}`);if(w&&(g=!0,f=JSON.parse(w),localStorage.removeItem(`__bitforms_${i}`),f.code.search("#"))){const[h]=f.code.split("#");f.code=h}if(!f.code||f.error||!f||!g){const h=f.error?`Cause: ${f.error}`:"";s({show:!0,msg:`${l("Authorization failed")} ${h}. ${l("please try again")}`}),a(!1)}else{const h=o({},t);h.accountServer=f["accounts-server"],S(e,f,h,r,d,a,s)}}},500)},S=(i,e,t,r,n,d,a)=>{const s=o({},e);s.clientId=t.clientId,s.clientSecret=t.clientSecret,s.redirectURI=window.location.href,p(s,`bitforms_${i}_generate_token`).then(c=>c).then(c=>{if(c&&c.success){const u=o({},t);u.tokenDetails=c.data,r(u),n(!0),a({show:!0,msg:l("Authorized Successfully")})}else c&&c.data&&c.data.data||!c.success&&typeof c.data=="string"?a({show:!0,msg:`${l("Authorization failed Cause:")}${c.data.data||c.data}. ${l("please try again")}`}):a({show:!0,msg:l("Authorization failed. please try again")});d(!1)})},U=i=>!((i.field_map?i.field_map.filter(t=>!t.formField&&!t.mailChimpField):[]).length>0);export{R as a,E as b,b as c,U as d,M as h,P as r,C as s};
