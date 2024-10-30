import{w as $,h as I,a1 as O,q as L,r as S,j as e,m as _,_ as l,g as j,bn as K,aA as q,ag as G}from"./main-700.js";import{B as V}from"./bf-748-73.js";import{B as J}from"./bf-783-86.js";import"./bf-420-76.js";import"./bf-335-109.js";import"./bf-968-110.js";import"./bf-622-112.js";import"./bf-519-136.js";import"./bf-497-85.js";import"./bf-606-117.js";import"./bf-645-111.js";import"./bf-348-113.js";import"./bf-13-114.js";import"./bf-571-115.js";import"./bf-173-116.js";import"./bf-848-118.js";import"./bf-212-75.js";function he(){var b,v,f,H,N,w,P,A,B;const{formID:W,formType:k,fieldKey:c}=$(),[R,E]=I(K),T=O(q),[m,y]=I(G),s=L(m[c]),[z,x]=S.useState(((b=s==null?void 0:s.style)==null?void 0:b.height)||"");S.useState(((v=s==null?void 0:s.style)==null?void 0:v.width)||"");const u=t=>Object.entries(t).filter(h=>h[1].typ==="paypal").length;if(m&&u(m)&&c===null){const o=Object.entries(m).filter(n=>n[1].typ==="paypal");o.length&&T(o[0][0])}const p=(t,o)=>{if(o?s.style[t]=o:delete s.style[t],t==="layout"){const n=L(R),h=n.lg.findIndex(d=>d.i===c),F=n.md.findIndex(d=>d.i===c),C=n.sm.findIndex(d=>d.i===c),a=n.lg[h],i=n.md[F],r=n.sm[C];o==="vertical"?(a.h=4,a.minH=3,a.maxH=7,a.w=2,a.minW=2,i.h=5,i.minH=3,i.maxH=7,i.w=4,i.minW=2,r.h=4,r.minH=4,r.maxH=6,r.w=2,r.minW=2):o==="horizontal"?(a.h=2,a.minH=2,a.maxH=4,a.w=3,a.minW=3,i.h=2,i.minH=2,i.maxH=4,i.w=3,i.minW=3,r.h=1,r.minH=1,r.maxH=2,r.w=2,r.minW=2):o==="standalone"&&(a.h=1,a.minH=1,a.maxH=2,a.w=2,a.minW=2,i.h=1,i.minH=1,i.maxH=2,i.w=2,i.minW=2,r.h=1,r.minH=1,r.maxH=2,r.w=2,r.minW=2),n.lg.splice(h,1,a),n.md.splice(F,1,i),n.sm.splice(C,1,r),E(n)}t==="layout"&&o==="standalone"&&(s.style.payBtn="PAYPAL"),t==="payBtn"&&o==="CARD"&&(s.style.color="white"),y(n=>j(n,h=>{h[c]=s}))},g=t=>{t>=25&&t<=55&&(s.style.height=t,y(o=>j(o,n=>{n[c]=s}))),x(t)},Y=t=>{t>=25&&t<=55?(s.style.height=t,x(t)):t<25?(s.style.height=25,x(25)):(s.style.height=55,x(55)),y(o=>j(o,n=>{n[c]=s}))};return e.jsxs("div",{className:"mt-2",children:[e.jsx(_,{to:`/form/builder/${k}/${W}/style/fl`,children:e.jsxs("h4",{className:"w-9 m-a flx txt-dp",children:[e.jsx("button",{className:"icn-btn",type:"button","aria-label":"back btn",children:e.jsx(V,{})}),e.jsxs("div",{className:"flx w-10",children:[e.jsx("span",{children:l("Back")}),e.jsx("div",{className:"txt-center w-10 f-5",children:l("Paypal Style")})]})]})}),e.jsx("div",{className:"w-9 m-a",children:m===null||!u(m)?e.jsx("div",{className:"mt-2",children:l("There is no paypal field in your form.")}):c===null&&u(m)>1?e.jsxs("div",{className:"mt-2",style:{fontSize:16,lineHeight:1.5},children:[l("There is more than one paypal field in your form. please select the style icon"),e.jsx(J,{style:{height:15,width:20}})," ",l("in paypal field to customize the style.")]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-2",children:e.jsxs("label",{htmlFor:"recap-thm",children:[e.jsx("b",{children:l("Layout")}),e.jsxs("select",{onChange:t=>p(t.target.name,t.target.value),name:"layout",value:(f=s==null?void 0:s.style)==null?void 0:f.layout,className:"btcd-paper-inp mt-1",children:[e.jsx("option",{value:"vertical",children:l("Vertical")}),e.jsx("option",{value:"horizontal",children:l("Horizontal")}),e.jsx("option",{value:"standalone",children:l("Standalone")})]})]})}),((H=s==null?void 0:s.style)==null?void 0:H.layout)==="standalone"&&e.jsx("div",{className:"mt-2",children:e.jsxs("label",{htmlFor:"recap-thm",children:[e.jsx("b",{children:l("Pay Button")}),e.jsxs("select",{onChange:t=>p(t.target.name,t.target.value),name:"payBtn",value:s.payBtn,className:"btcd-paper-inp mt-1",children:[e.jsx("option",{value:"PAYPAL",children:l("PAYPAL")}),e.jsx("option",{value:"PAYLATER",children:l("PAYLATER")}),e.jsx("option",{value:"CARD",children:l("CARD")})]})]})}),e.jsx("div",{className:"mt-2",children:e.jsxs("label",{htmlFor:"recap-thm",children:[e.jsx("b",{children:l("Color")}),e.jsxs("select",{onChange:t=>p(t.target.name,t.target.value),name:"color",value:(N=s==null?void 0:s.style)==null?void 0:N.color,className:"btcd-paper-inp mt-1",children:[((w=s==null?void 0:s.style)==null?void 0:w.payBtn)!=="CARD"&&e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"gold",children:l("Gold")}),e.jsx("option",{value:"blue",children:l("Blue")}),e.jsxs("option",{value:"silver",children:[l("Silver")," "]})]}),e.jsx("option",{value:"white",children:l("White")}),e.jsx("option",{value:"black",children:l("Black")})]})]})}),e.jsx("div",{className:"mt-2",children:e.jsxs("label",{htmlFor:"recap-thm",children:[e.jsx("b",{children:l("Shape")}),e.jsxs("select",{onChange:t=>p(t.target.name,t.target.value),name:"shape",value:(P=s==null?void 0:s.style)==null?void 0:P.shape,className:"btcd-paper-inp mt-1",children:[e.jsx("option",{value:"rect",children:l("Rectangle")}),e.jsx("option",{value:"pill",children:l("Pill")})]})]})}),e.jsx("div",{className:"mt-2",children:e.jsxs("label",{htmlFor:"recap-thm",children:[e.jsx("b",{children:l("Paypal Button Text")}),e.jsxs("select",{onChange:t=>p(t.target.name,t.target.value),name:"label",value:(A=s==null?void 0:s.style)==null?void 0:A.label,className:"btcd-paper-inp mt-1",children:[e.jsx("option",{value:"paypal",children:l("Paypal")}),e.jsx("option",{value:"checkout",children:l("Paypal Checkout")}),e.jsx("option",{value:"buynow",children:l("Paypal Buy Now")}),e.jsx("option",{value:"pay",children:l("Pay with Paypal")})]})]})}),e.jsx("div",{className:"mt-2",children:e.jsxs("div",{className:"flx flx-between mt-1 inp-grp",children:[e.jsx("b",{className:"icn br-50 mr-1",children:l("Height")}),e.jsx("input",{title:l("Height"),className:"btc-range mr-1",type:"range",min:"25",max:"55",onChange:t=>g(t.target.value),value:((B=s==null?void 0:s.style)==null?void 0:B.height)||""}),e.jsx("input",{className:"ml-1 btcd-paper-inp",type:"number",placeholder:"auto",onBlur:t=>Y(t.target.value),onChange:t=>g(t.target.value),min:"25",max:"55",value:z})]})})]})})]})}export{he as default};
