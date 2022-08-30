(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6678],{89572:function(e,r,t){"use strict";var n=t(95318);r.Z=void 0;var i=n(t(64938)),a=t(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");r.Z=o},96547:function(e,r,t){"use strict";var n=t(95318);r.Z=void 0;var i=n(t(64938)),a=t(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"Timelapse");r.Z=o},62177:function(e,r,t){"use strict";var n=t(95318);r.Z=void 0;var i=n(t(64938)),a=t(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");r.Z=o},86886:function(e,r,t){"use strict";t.d(r,{ZP:function(){return w}});var n=t(63366),i=t(87462),a=t(67294),o=t(86010),s=t(95408),l=t(39707),c=t(94780),d=t(90948),u=t(71657);var m=a.createContext(),x=t(34867);function p(e){return(0,x.Z)("MuiGrid",e)}const f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var h=(0,t(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...f.map((e=>`grid-xs-${e}`)),...f.map((e=>`grid-sm-${e}`)),...f.map((e=>`grid-md-${e}`)),...f.map((e=>`grid-lg-${e}`)),...f.map((e=>`grid-xl-${e}`))]),g=t(85893);const b=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function v(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function j(e,r,t={}){if(!r||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[t[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:n,sm:i,md:a,lg:o,xl:s}=e;return[Number(n)>0&&(t[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`),Number(i)>0&&(t[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(a)>0&&(t[`spacing-md-${String(a)}`]||`spacing-md-${String(a)}`),Number(o)>0&&(t[`spacing-lg-${String(o)}`]||`spacing-lg-${String(o)}`),Number(s)>0&&(t[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const Z=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{container:t,direction:n,item:i,lg:a,md:o,sm:s,spacing:l,wrap:c,xl:d,xs:u,zeroMinWidth:m}=e.ownerState;return[r.root,t&&r.container,i&&r.item,m&&r.zeroMinWidth,...j(l,t,r),"row"!==n&&r[`direction-xs-${String(n)}`],"wrap"!==c&&r[`wrap-xs-${String(c)}`],!1!==u&&r[`grid-xs-${String(u)}`],!1!==s&&r[`grid-sm-${String(s)}`],!1!==o&&r[`grid-md-${String(o)}`],!1!==a&&r[`grid-lg-${String(a)}`],!1!==d&&r[`grid-xl-${String(d)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:r}){const t=(0,s.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},t,(e=>{const r={flexDirection:e};return 0===e.indexOf("column")&&(r[`& > .${h.item}`]={maxWidth:"none"}),r}))}),(function({theme:e,ownerState:r}){const{container:t,rowSpacing:n}=r;let i={};if(t&&0!==n){const r=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},r,(r=>{const t=e.spacing(r);return"0px"!==t?{marginTop:`-${v(t)}`,[`& > .${h.item}`]:{paddingTop:v(t)}}:{}}))}return i}),(function({theme:e,ownerState:r}){const{container:t,columnSpacing:n}=r;let i={};if(t&&0!==n){const r=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},r,(r=>{const t=e.spacing(r);return"0px"!==t?{width:`calc(100% + ${v(t)})`,marginLeft:`-${v(t)}`,[`& > .${h.item}`]:{paddingLeft:v(t)}}:{}}))}return i}),(function({theme:e,ownerState:r}){let t;return e.breakpoints.keys.reduce(((n,a)=>{let o={};if(r[a]&&(t=r[a]),!t)return n;if(!0===t)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=(0,s.P$)({values:r.columns,breakpoints:e.breakpoints.values}),c="object"===typeof l?l[a]:l;if(void 0===c||null===c)return n;const d=Math.round(t/c*1e8)/1e6+"%";let u={};if(r.container&&r.item&&0!==r.columnSpacing){const t=e.spacing(r.columnSpacing);if("0px"!==t){const e=`calc(${d} + ${v(t)})`;u={flexBasis:e,maxWidth:e}}}o=(0,i.Z)({flexBasis:d,flexGrow:0,maxWidth:d},u)}return 0===e.breakpoints.values[a]?Object.assign(n,o):n[e.breakpoints.up(a)]=o,n}),{})}));var w=a.forwardRef((function(e,r){const t=(0,u.Z)({props:e,name:"MuiGrid"}),s=(0,l.Z)(t),{className:d,columns:x,columnSpacing:f,component:h="div",container:v=!1,direction:w="row",item:y=!1,lg:S=!1,md:C=!1,rowSpacing:O,sm:$=!1,spacing:P=0,wrap:k="wrap",xl:z=!1,xs:R=!1,zeroMinWidth:M=!1}=s,L=(0,n.Z)(s,b),N=O||P,W=f||P,I=a.useContext(m),V=v?x||12:I,B=(0,i.Z)({},s,{columns:V,container:v,direction:w,item:y,lg:S,md:C,sm:$,rowSpacing:N,columnSpacing:W,wrap:k,xl:z,xs:R,zeroMinWidth:M}),G=(e=>{const{classes:r,container:t,direction:n,item:i,lg:a,md:o,sm:s,spacing:l,wrap:d,xl:u,xs:m,zeroMinWidth:x}=e,f={root:["root",t&&"container",i&&"item",x&&"zeroMinWidth",...j(l,t),"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==d&&`wrap-xs-${String(d)}`,!1!==m&&`grid-xs-${String(m)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==o&&`grid-md-${String(o)}`,!1!==a&&`grid-lg-${String(a)}`,!1!==u&&`grid-xl-${String(u)}`]};return(0,c.Z)(f,p,r)})(B);return(0,g.jsx)(m.Provider,{value:V,children:(0,g.jsx)(Z,(0,i.Z)({ownerState:B,className:(0,o.Z)(G.root,d),as:h,ref:r},L))})}))},81458:function(e,r,t){"use strict";t.d(r,{Z:function(){return L}});var n=t(63366),i=t(87462),a=t(67294),o=t(86010),s=t(94780),l=t(70917),c=t(41796),d=t(98216),u=t(2734),m=t(90948),x=t(71657),p=t(34867);function f(e){return(0,p.Z)("MuiLinearProgress",e)}(0,t(1588).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var h=t(85893);const g=["className","color","value","valueBuffer","variant"];let b,v,j,Z,w,y,S=e=>e;const C=(0,l.F4)(b||(b=S`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),O=(0,l.F4)(v||(v=S`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),$=(0,l.F4)(j||(j=S`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),P=(e,r)=>"inherit"===r?"currentColor":"light"===e.palette.mode?(0,c.$n)(e.palette[r].main,.62):(0,c._j)(e.palette[r].main,.5),k=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${(0,d.Z)(t.color)}`],r[t.variant]]}})((({ownerState:e,theme:r})=>(0,i.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:P(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"}))),z=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,d.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>{const t=P(r,e.color);return(0,i.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(Z||(Z=S`
    animation: ${0} 3s infinite linear;
  `),$)),R=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${(0,d.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})((({ownerState:e,theme:r})=>(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":r.palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(w||(w=S`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),C))),M=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${(0,d.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})((({ownerState:e,theme:r})=>(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":r.palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:P(r,e.color),transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(y||(y=S`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),O)));var L=a.forwardRef((function(e,r){const t=(0,x.Z)({props:e,name:"MuiLinearProgress"}),{className:a,color:l="primary",value:c,valueBuffer:m,variant:p="indeterminate"}=t,b=(0,n.Z)(t,g),v=(0,i.Z)({},t,{color:l,variant:p}),j=(e=>{const{classes:r,variant:t,color:n}=e,i={root:["root",`color${(0,d.Z)(n)}`,t],dashed:["dashed",`dashedColor${(0,d.Z)(n)}`],bar1:["bar",`barColor${(0,d.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,d.Z)(n)}`,"buffer"===t&&`color${(0,d.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(i,f,r)})(v),Z=(0,u.Z)(),w={},y={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==c){w["aria-valuenow"]=Math.round(c),w["aria-valuemin"]=0,w["aria-valuemax"]=100;let e=c-100;"rtl"===Z.direction&&(e=-e),y.bar1.transform=`translateX(${e}%)`}else 0;if("buffer"===p)if(void 0!==m){let e=(m||0)-100;"rtl"===Z.direction&&(e=-e),y.bar2.transform=`translateX(${e}%)`}else 0;return(0,h.jsxs)(k,(0,i.Z)({className:(0,o.Z)(j.root,a),ownerState:v,role:"progressbar"},w,{ref:r},b,{children:["buffer"===p?(0,h.jsx)(z,{className:j.dashed,ownerState:v}):null,(0,h.jsx)(R,{className:j.bar1,ownerState:v,style:y.bar1}),"determinate"===p?null:(0,h.jsx)(M,{className:j.bar2,ownerState:v,style:y.bar2})]}))}))},71569:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/logistics",function(){return t(79450)}])},77309:function(e,r,t){"use strict";t.d(r,{k:function(){return i}});var n=t(5152),i=t.n(n)()((function(){return Promise.all([t.e(5279),t.e(7229)]).then(t.bind(t,47229))}),{loadableGenerated:{webpack:function(){return[47229]}},ssr:!1})},28919:function(e,r,t){"use strict";t.d(r,{I:function(){return c}});var n=t(85893),i=t(45697),a=t.n(i);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=(0,t(90948).ZP)("span")((function(e){var r=e.theme,t=e.ownerState;return{alignItems:"center",backgroundColor:r.palette[t.color].main,borderRadius:12,color:r.palette[t.color].contrastText,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(12),lineHeight:2,fontWeight:600,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingLeft:r.spacing(1),paddingRight:r.spacing(1),textTransform:"uppercase",whiteSpace:"nowrap"}})),c=function(e){var r=e.color,t=void 0===r?"primary":r,i=e.children,a=s(e,["color","children"]),c={color:t};return(0,n.jsx)(l,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({ownerState:c},a,{children:i}))};c.propTypes={children:a().node,color:a().oneOf(["primary","secondary","error","info","warning","success"])}},5708:function(e,r,t){"use strict";t.d(r,{U:function(){return i}});var n=t(85893),i=(0,t(82066).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download")},78891:function(e,r,t){"use strict";t.d(r,{A:function(){return i}});var n=t(85893),i=(0,t(82066).Z)((0,n.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V7.414C15.9999 6.88361 15.7891 6.37499 15.414 6L12 2.586C11.625 2.2109 11.1164 2.00011 10.586 2H6ZM8 12C8 11.7348 7.89464 11.4804 7.70711 11.2929C7.51957 11.1054 7.26522 11 7 11C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12V15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16C7.26522 16 7.51957 15.8946 7.70711 15.7071C7.89464 15.5196 8 15.2652 8 15V12ZM10 9C10.2652 9 10.5196 9.10536 10.7071 9.29289C10.8946 9.48043 11 9.73478 11 10V15C11 15.2652 10.8946 15.5196 10.7071 15.7071C10.5196 15.8946 10.2652 16 10 16C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9ZM14 8C14 7.73478 13.8946 7.48043 13.7071 7.29289C13.5196 7.10536 13.2652 7 13 7C12.7348 7 12.4804 7.10536 12.2929 7.29289C12.1054 7.48043 12 7.73478 12 8V15C12 15.2652 12.1054 15.5196 12.2929 15.7071C12.4804 15.8946 12.7348 16 13 16C13.2652 16 13.5196 15.8946 13.7071 15.7071C13.8946 15.5196 14 15.2652 14 15V8Z"})}),"Reports")},79450:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return K}});var n=t(85893),i=t(67294),a=t(9008),o=t.n(a),s=t(87357),l=t(53156),c=t(86886),d=t(15861),u=t(11057),m=t(63118),x=t(5621),p=t(66242),f=t(87952),h=t(41796),g=t(89572),b=t(96547),v=t(62177);function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Z=function(e){return(0,n.jsxs)(c.ZP,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){j(e,r,t[r])}))}return e}({container:!0,spacing:4},e,{children:[(0,n.jsx)(c.ZP,{item:!0,lg:3,md:6,xs:12,children:(0,n.jsxs)(p.Z,{sx:{p:3},children:[(0,n.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",mb:1},children:[(0,n.jsx)(f.Z,{sx:{backgroundColor:"transparent",mr:1},variant:"rounded",children:(0,n.jsx)(s.Z,{sx:{animation:"pulse ease 750ms infinite",borderRadius:"50%",p:.5,"@keyframes pulse":{"0%":{boxShadow:"none"},"100%":{boxShadow:function(e){return"0px 0px 0px 6px ".concat((0,h.Fq)(e.palette.error.main,.1))}}}},children:(0,n.jsx)(s.Z,{sx:{backgroundColor:"error.main",borderRadius:"50%",height:12,width:12}})})}),(0,n.jsx)(d.Z,{variant:"h5",children:"38"})]}),(0,n.jsx)(d.Z,{color:"textSecondary",variant:"body2",children:"On route vehicles"})]})}),(0,n.jsx)(c.ZP,{item:!0,lg:3,md:6,xs:12,children:(0,n.jsxs)(p.Z,{sx:{p:3},children:[(0,n.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",mb:1},children:[(0,n.jsx)(f.Z,{variant:"rounded",sx:{backgroundColor:function(e){return(0,h.Fq)(e.palette.error.main,.1)},color:"error.main",mr:1},children:(0,n.jsx)(v.Z,{fontSize:"small"})}),(0,n.jsx)(d.Z,{variant:"h5",children:"2"})]}),(0,n.jsx)(d.Z,{color:"textSecondary",variant:"body2",children:"Vehicles with errors"})]})}),(0,n.jsx)(c.ZP,{item:!0,lg:3,md:6,xs:12,children:(0,n.jsxs)(p.Z,{sx:{p:3},children:[(0,n.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",mb:1},children:[(0,n.jsx)(f.Z,{variant:"rounded",sx:{backgroundColor:function(e){return(0,h.Fq)(e.palette.warning.main,.1)},color:"warning.main",mr:1},children:(0,n.jsx)(g.Z,{fontSize:"small"})}),(0,n.jsx)(d.Z,{variant:"h5",children:"1"})]}),(0,n.jsx)(d.Z,{color:"textSecondary",variant:"body2",children:"Vehicles deviated from route"})]})}),(0,n.jsx)(c.ZP,{item:!0,lg:3,md:6,xs:12,children:(0,n.jsxs)(p.Z,{sx:{p:3},children:[(0,n.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",mb:1},children:[(0,n.jsx)(f.Z,{variant:"rounded",sx:{backgroundColor:function(e){return(0,h.Fq)(e.palette.primary.main,.1)},color:"primary.main",mr:1},children:(0,n.jsx)(b.Z,{fontSize:"small"})}),(0,n.jsx)(d.Z,{variant:"h5",children:"2"})]}),(0,n.jsx)(d.Z,{color:"textSecondary",variant:"body2",children:"Late vehicles"})]})})]}))},w=t(78445),y=t(67720),S=t(78462),C=t(19294),O=t(2734),$=t(77309);function P(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var k={series:[{color:"#688eff",data:38,label:"On route"},{color:"#4CAF50",data:50,label:"Available"},{color:"#FF9800",data:12,label:"Out of service"}]},z=function(e){var r=(0,O.Z)(),t={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:k.series.map((function(e){return e.color})),fill:{opacity:1},labels:["On route","Available","Out of service"],plotOptions:{radialBar:{track:{background:r.palette.background.default}}},theme:{mode:r.palette.mode}},i=k.series.map((function(e){return e.data}));return(0,n.jsxs)(p.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){P(e,r,t[r])}))}return e}({sx:{height:"100%"}},e,{children:[(0,n.jsx)(w.Z,{title:"Total Vehicles"}),(0,n.jsx)(y.Z,{}),(0,n.jsxs)(c.ZP,{container:!0,spacing:3,sx:{p:3},children:[(0,n.jsx)(c.ZP,{item:!0,md:6,xs:12,children:(0,n.jsx)($.k,{height:300,options:t,series:i,type:"radialBar"})}),(0,n.jsxs)(c.ZP,{item:!0,md:6,xs:12,children:[(0,n.jsx)(d.Z,{color:"textSecondary",variant:"body2",children:"Total"}),(0,n.jsx)(d.Z,{variant:"h5",children:"100"}),(0,n.jsx)(y.Z,{sx:{mt:1}}),(0,n.jsx)(S.Z,{disablePadding:!0,children:k.series.map((function(e,r){return(0,n.jsxs)(C.ZP,{disableGutters:!0,divider:r+1<k.series.length,sx:{display:"flex"},children:[(0,n.jsx)(s.Z,{sx:{border:3,borderColor:e.color,borderRadius:"50%",height:16,mr:1,width:16}}),(0,n.jsx)(d.Z,{color:"textSecondary",variant:"body2",children:e.label}),(0,n.jsx)(s.Z,{sx:{flexGrow:1}}),(0,n.jsx)(d.Z,{variant:"subtitle2",children:e.data})]},e.label)}))})]})]})]}))};function R(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function M(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){R(e,r,t[r])}))}return e}var L=[{color:"#4CAF50",label:"Very good",subtitle:"Excellent",value:85},{color:"#FF9800",label:"Good",subtitle:"Good condition",value:10},{color:"#F44336",label:"Needs attention ",subtitle:"Needs attention",value:5}],N=function(e){var r=(0,O.Z)(),t={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},fill:{opacity:1},labels:["Health"],plotOptions:{radialBar:{dataLabels:{name:{show:!0,color:r.palette.text.secondary,fontSize:"12px",fontWeight:400,offsetY:20},value:{color:r.palette.text.primary,fontSize:"18px",fontWeight:600,offsetY:-20}},hollow:{size:"60%"},track:{background:r.palette.background.default}}},states:{active:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}}},theme:{mode:r.palette.mode}};return(0,n.jsxs)(p.Z,M({},e,{children:[(0,n.jsx)(w.Z,{title:"Vehicles Condition"}),(0,n.jsx)(y.Z,{}),(0,n.jsx)(c.ZP,{container:!0,spacing:3,sx:{p:3},children:L.map((function(e){return(0,n.jsx)(c.ZP,{item:!0,md:4,xs:12,children:(0,n.jsxs)(p.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",p:2},variant:"outlined",children:[(0,n.jsx)(d.Z,{sx:{color:e.color},variant:"h6",children:e.label}),(0,n.jsx)($.k,{height:200,options:M({},t,{colors:[e.color]}),series:[e.value],type:"radialBar"}),(0,n.jsx)(d.Z,{variant:"h6",children:e.value}),(0,n.jsx)(d.Z,{color:"textSecondary",variant:"body2",children:e.subtitle})]})},e.label)}))})]}))},W=t(7906),I=t(53184),V=t(68509),B=t(53252),G=t(295),F=t(81458),D=t(99338),E=t(52377),A=t(28919),_=[{id:"VOL-653CD1",endingRoute:"Cleveland, Ohio, USA",startingRoute:"Cleveland, Ohio, USA",status:"success",temperature:8,temperatureLabel:"Very Good"},{id:"VOL-653CD2",endingRoute:"Cleveland, Ohio, USA",startingRoute:"Cleveland, Ohio, USA",status:"warning",temperature:8,temperatureLabel:"Very Good",warning:"Temperature not optimal"},{id:"VOL-653CD3",endingRoute:"Cleveland, Ohio, USA",startingRoute:"Cleveland, Ohio, USA",status:"error",temperature:8,temperatureLabel:"Very Good",warning:"ECU not responding"},{id:"VOL-653CD4",endingRoute:"Cleveland, Ohio, USA",startingRoute:"Cleveland, Ohio, USA",status:"success",temperature:8,temperatureLabel:"Very Good"}],T=function(){return(0,n.jsxs)(p.Z,{children:[(0,n.jsx)(w.Z,{title:"On Route Vehicles",subheader:"Condition and temperature"}),(0,n.jsx)(E.L,{children:(0,n.jsx)(s.Z,{sx:{minWidth:1200},children:(0,n.jsxs)(W.Z,{children:[(0,n.jsx)(I.Z,{children:(0,n.jsxs)(V.Z,{children:[(0,n.jsx)(B.Z,{children:"Location"}),(0,n.jsx)(B.Z,{children:"Ending Route"}),(0,n.jsx)(B.Z,{children:"Starting Route"}),(0,n.jsx)(B.Z,{children:"Warnings"}),(0,n.jsx)(B.Z,{children:"Refrigerator Temperature"})]})}),(0,n.jsx)(G.Z,{children:_.map((function(e){return(0,n.jsxs)(V.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,n.jsx)(B.Z,{children:(0,n.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,n.jsx)(f.Z,{sx:{mr:2},children:(0,n.jsx)(D._,{fontSize:"small"})}),(0,n.jsx)(d.Z,{variant:"subtitle2",children:e.id})]})}),(0,n.jsx)(B.Z,{children:(0,n.jsx)(d.Z,{variant:"body2",children:e.endingRoute})}),(0,n.jsx)(B.Z,{children:(0,n.jsx)(d.Z,{variant:"body2",children:e.startingRoute})}),(0,n.jsx)(B.Z,{children:(0,n.jsx)(A.I,{color:e.status,children:e.warning||"No warnings"})}),(0,n.jsxs)(B.Z,{children:[(0,n.jsx)(F.Z,{value:e.temperature,variant:"determinate"}),(0,n.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",mt:2},children:[(0,n.jsx)(d.Z,{color:"inherit",variant:"inherit",children:e.temperatureLabel}),(0,n.jsx)(s.Z,{sx:{flexGrow:1}}),(0,n.jsxs)(d.Z,{color:"textSecondary",variant:"inherit",children:[e.temperature,"\xb0C"]})]})]})]},e.id)}))})]})})})]})},q=t(71191),U=t(5708),H=t(78891),X=t(13869),Y=function(){return(0,i.useEffect)((function(){X.w.push({event:"page_view"})}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o(),{children:(0,n.jsx)("title",{children:"Dashboard: Logistics | Material Kit Pro"})}),(0,n.jsx)(s.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,n.jsxs)(l.Z,{maxWidth:"xl",children:[(0,n.jsx)(s.Z,{sx:{mb:4},children:(0,n.jsxs)(c.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,n.jsx)(c.ZP,{item:!0,children:(0,n.jsx)(d.Z,{variant:"h4",children:"Logistics"})}),(0,n.jsxs)(c.ZP,{item:!0,sx:{alignItems:"center",display:"flex",flexWrap:"wrap",m:-1},children:[(0,n.jsx)(u.Z,{startIcon:(0,n.jsx)(H.A,{fontSize:"small"}),sx:{m:1},variant:"outlined",children:"Reports"}),(0,n.jsx)(u.Z,{startIcon:(0,n.jsx)(q.O,{fontSize:"small"}),sx:{m:1},variant:"outlined",children:"Settings"}),(0,n.jsx)(u.Z,{startIcon:(0,n.jsx)(U.U,{fontSize:"small"}),sx:{m:1},variant:"contained",children:"Export"})]})]})}),(0,n.jsx)(Z,{}),(0,n.jsx)(s.Z,{sx:{mt:4},children:(0,n.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,n.jsx)(c.ZP,{item:!0,xl:6,xs:12,children:(0,n.jsx)(z,{})}),(0,n.jsx)(c.ZP,{item:!0,xl:6,xs:12,children:(0,n.jsx)(N,{})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(T,{})})]})})]})})]})};Y.getLayout=function(e){return(0,n.jsx)(m.a,{children:(0,n.jsx)(x.c,{children:e})})};var K=Y}},function(e){e.O(0,[8926,7531,5464,135,8762,2141,2058,8619,9368,2078,2453,5152,2305,6039,9774,2888,179],(function(){return r=71569,e(e.s=r);var r}));var r=e.O();_N_E=r}]);