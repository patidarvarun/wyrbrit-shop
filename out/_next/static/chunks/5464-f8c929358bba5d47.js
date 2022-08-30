"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5464],{25464:function(e,t,r){r.d(t,{Z:function(){return C}});var n=r(87462),o=r(63366),i=r(67294),a=(r(59864),r(86010)),s=r(94780),l=r(84118),c=r(55113),u=r(14564),p=r(90948),f=r(2734),d=r(71657),h=r(34867);function m(e){return(0,h.Z)("MuiMenu",e)}(0,r(1588).Z)("MuiMenu",["root","paper","list"]);var v=r(85893);const g=["onEntering"],Z=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],b={vertical:"top",horizontal:"right"},P={vertical:"top",horizontal:"left"},y=(0,p.ZP)(u.ZP,{shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),w=(0,p.ZP)(c.Z,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),M=(0,p.ZP)(l.Z,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0});var C=i.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiMenu"}),{autoFocus:l=!0,children:c,disableAutoFocusItem:u=!1,MenuListProps:p={},onClose:h,open:C,PaperProps:x={},PopoverClasses:E,transitionDuration:k="auto",TransitionProps:{onEntering:T}={},variant:D="selectedMenu"}=r,F=(0,o.Z)(r.TransitionProps,g),R=(0,o.Z)(r,Z),z=(0,f.Z)(),O="rtl"===z.direction,S=(0,n.Z)({},r,{autoFocus:l,disableAutoFocusItem:u,MenuListProps:p,onEntering:T,PaperProps:x,transitionDuration:k,TransitionProps:F,variant:D}),I=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],paper:["paper"],list:["list"]},m,t)})(S),N=l&&!u&&C,j=i.useRef(null);let L=-1;return i.Children.map(c,((e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===D&&e.props.selected||-1===L)&&(L=t))})),(0,v.jsx)(y,(0,n.Z)({classes:E,onClose:h,anchorOrigin:{vertical:"bottom",horizontal:O?"right":"left"},transformOrigin:O?b:P,PaperProps:(0,n.Z)({component:w},x,{classes:(0,n.Z)({},x.classes,{root:I.paper})}),className:I.root,open:C,ref:t,transitionDuration:k,TransitionProps:(0,n.Z)({onEntering:(e,t)=>{j.current&&j.current.adjustStyleForScrollbar(e,z),T&&T(e,t)}},F),ownerState:S},R,{children:(0,v.jsx)(M,(0,n.Z)({onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),h&&h(e,"tabKeyDown"))},actions:j,autoFocus:l&&(-1===L||u),autoFocusItem:N,variant:D},p,{className:(0,a.Z)(I.list,p.className),children:c}))}))}))},84118:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),o=r(63366),i=r(67294),a=(r(59864),r(8038)),s=r(78462),l=r(95806).Z,c=r(51705),u=r(58974),p=r(85893);const f=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function d(e,t,r){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:r?null:e.firstChild}function h(e,t,r){return e===t?r?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:r?null:e.lastChild}function m(e,t){if(void 0===t)return!0;let r=e.innerText;return void 0===r&&(r=e.textContent),r=r.trim().toLowerCase(),0!==r.length&&(t.repeating?r[0]===t.keys[0]:0===r.indexOf(t.keys.join("")))}function v(e,t,r,n,o,i){let a=!1,s=o(e,t,!!t&&r);for(;s;){if(s===e.firstChild){if(a)return!1;a=!0}const t=!n&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&m(s,i)&&!t)return s.focus(),!0;s=o(e,s,r)}return!1}var g=i.forwardRef((function(e,t){const{actions:r,autoFocus:g=!1,autoFocusItem:Z=!1,children:b,className:P,disabledItemsFocusable:y=!1,disableListWrap:w=!1,onKeyDown:M,variant:C="selectedMenu"}=e,x=(0,o.Z)(e,f),E=i.useRef(null),k=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,u.Z)((()=>{g&&E.current.focus()}),[g]),i.useImperativeHandle(r,(()=>({adjustStyleForScrollbar:(e,t)=>{const r=!E.current.style.width;if(e.clientHeight<E.current.clientHeight&&r){const r=`${l((0,a.Z)(e))}px`;E.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=r,E.current.style.width=`calc(100% + ${r})`}return E.current}})),[]);const T=(0,c.Z)(E,t);let D=-1;i.Children.forEach(b,((e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===C&&e.props.selected||-1===D)&&(D=t))}));const F=i.Children.map(b,((e,t)=>{if(t===D){const t={};return Z&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===C&&(t.tabIndex=0),i.cloneElement(e,t)}return e}));return(0,p.jsx)(s.Z,(0,n.Z)({role:"menu",ref:T,className:P,onKeyDown:e=>{const t=E.current,r=e.key,n=(0,a.Z)(t).activeElement;if("ArrowDown"===r)e.preventDefault(),v(t,n,w,y,d);else if("ArrowUp"===r)e.preventDefault(),v(t,n,w,y,h);else if("Home"===r)e.preventDefault(),v(t,null,w,y,d);else if("End"===r)e.preventDefault(),v(t,null,w,y,h);else if(1===r.length){const o=k.current,i=r.toLowerCase(),a=performance.now();o.keys.length>0&&(a-o.lastTime>500?(o.keys=[],o.repeating=!0,o.previousKeyMatched=!0):o.repeating&&i!==o.keys[0]&&(o.repeating=!1)),o.lastTime=a,o.keys.push(i);const s=n&&!o.repeating&&m(n,o);o.previousKeyMatched&&(s||v(t,n,!1,y,d,o))?e.preventDefault():o.previousKeyMatched=!1}M&&M(e)},tabIndex:g?0:-1},x,{children:F}))}))},14564:function(e,t,r){r.d(t,{ZP:function(){return T}});var n=r(87462),o=r(63366),i=r(67294),a=r(86010),s=r(94780),l=r(90948),c=r(71657),u=r(57144),p=r(8038),f=r(5340),d=r(51705),h=r(96514),m=r(99964),v=r(55113),g=r(34867);function Z(e){return(0,g.Z)("MuiPopover",e)}(0,r(1588).Z)("MuiPopover",["root","paper"]);var b=r(85893);const P=["onEntering"],y=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function w(e,t){let r=0;return"number"===typeof t?r=t:"center"===t?r=e.height/2:"bottom"===t&&(r=e.height),r}function M(e,t){let r=0;return"number"===typeof t?r=t:"center"===t?r=e.width/2:"right"===t&&(r=e.width),r}function C(e){return[e.horizontal,e.vertical].map((e=>"number"===typeof e?`${e}px`:e)).join(" ")}function x(e){return"function"===typeof e?e():e}const E=(0,l.ZP)(m.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),k=(0,l.ZP)(v.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0});var T=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiPopover"}),{action:l,anchorEl:m,anchorOrigin:v={vertical:"top",horizontal:"left"},anchorPosition:g,anchorReference:T="anchorEl",children:D,className:F,container:R,elevation:z=8,marginThreshold:O=16,open:S,PaperProps:I={},transformOrigin:N={vertical:"top",horizontal:"left"},TransitionComponent:j=h.Z,transitionDuration:L="auto",TransitionProps:{onEntering:H}={}}=r,_=(0,o.Z)(r.TransitionProps,P),K=(0,o.Z)(r,y),$=i.useRef(),A=(0,d.Z)($,I.ref),W=(0,n.Z)({},r,{anchorOrigin:v,anchorReference:T,elevation:z,marginThreshold:O,PaperProps:I,transformOrigin:N,TransitionComponent:j,transitionDuration:L,TransitionProps:_}),B=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],paper:["paper"]},Z,t)})(W),V=i.useCallback((()=>{if("anchorPosition"===T)return g;const e=x(m),t=(e&&1===e.nodeType?e:(0,p.Z)($.current).body).getBoundingClientRect();return{top:t.top+w(t,v.vertical),left:t.left+M(t,v.horizontal)}}),[m,v.horizontal,v.vertical,g,T]),U=i.useCallback((e=>({vertical:w(e,N.vertical),horizontal:M(e,N.horizontal)})),[N.horizontal,N.vertical]),X=i.useCallback((e=>{const t={width:e.offsetWidth,height:e.offsetHeight},r=U(t);if("none"===T)return{top:null,left:null,transformOrigin:C(r)};const n=V();let o=n.top-r.vertical,i=n.left-r.horizontal;const a=o+t.height,s=i+t.width,l=(0,f.Z)(x(m)),c=l.innerHeight-O,u=l.innerWidth-O;if(o<O){const e=o-O;o-=e,r.vertical+=e}else if(a>c){const e=a-c;o-=e,r.vertical+=e}if(i<O){const e=i-O;i-=e,r.horizontal+=e}else if(s>u){const e=s-u;i-=e,r.horizontal+=e}return{top:`${Math.round(o)}px`,left:`${Math.round(i)}px`,transformOrigin:C(r)}}),[m,T,V,U,O]),Y=i.useCallback((()=>{const e=$.current;if(!e)return;const t=X(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}),[X]);i.useEffect((()=>{S&&Y()})),i.useImperativeHandle(l,(()=>S?{updatePosition:()=>{Y()}}:null),[S,Y]),i.useEffect((()=>{if(!S)return;const e=(0,u.Z)((()=>{Y()})),t=(0,f.Z)(m);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[m,S,Y]);let q=L;"auto"!==L||j.muiSupportAuto||(q=void 0);const G=R||(m?(0,p.Z)(x(m)).body:void 0);return(0,b.jsx)(E,(0,n.Z)({BackdropProps:{invisible:!0},className:(0,a.Z)(B.root,F),container:G,open:S,ref:t,ownerState:W},K,{children:(0,b.jsx)(j,(0,n.Z)({appear:!0,in:S,onEntering:(e,t)=>{H&&H(e,t),Y()},timeout:q},_,{children:(0,b.jsx)(k,(0,n.Z)({elevation:z},I,{ref:A,className:(0,a.Z)(B.paper,I.className),children:D}))}))}))}))},8038:function(e,t,r){var n=r(57094);t.Z=n.Z},69921:function(e,t){var r=60103,n=60106,o=60107,i=60108,a=60114,s=60109,l=60110,c=60112,u=60113,p=60120,f=60115,d=60116,h=60121,m=60122,v=60117,g=60129,Z=60131;if("function"===typeof Symbol&&Symbol.for){var b=Symbol.for;r=b("react.element"),n=b("react.portal"),o=b("react.fragment"),i=b("react.strict_mode"),a=b("react.profiler"),s=b("react.provider"),l=b("react.context"),c=b("react.forward_ref"),u=b("react.suspense"),p=b("react.suspense_list"),f=b("react.memo"),d=b("react.lazy"),h=b("react.block"),m=b("react.server.block"),v=b("react.fundamental"),g=b("react.debug_trace_mode"),Z=b("react.legacy_hidden")}function P(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case a:case i:case u:case p:return e;default:switch(e=e&&e.$$typeof){case l:case c:case d:case f:case s:return e;default:return t}}case n:return t}}}t.isContextConsumer=function(e){return P(e)===l}},59864:function(e,t,r){e.exports=r(69921)}}]);