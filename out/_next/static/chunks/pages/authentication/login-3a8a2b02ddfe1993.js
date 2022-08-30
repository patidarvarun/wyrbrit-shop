(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7667],{27287:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication/login",function(){return n(72475)}])},92163:function(e,r,n){"use strict";n.d(r,{U:function(){return p}});var t=n(85893),s=n(41664),i=n.n(s),a=n(87357),o=n(53156),l=n(87918),c=n(15861),u=n(50122),d=n(34386),h="/static/icons/amplify.svg",m="/static/icons/auth0.svg",f="/static/icons/firebase.svg",x="/static/icons/jwt.svg",p=function(){return(0,t.jsx)(a.Z,{sx:{backgroundColor:"background.paper",borderBottom:1,borderColor:"divider",py:1},children:(0,t.jsx)(o.Z,{maxWidth:"md",children:(0,t.jsxs)(a.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,t.jsx)(l.Z,{color:"primary",label:"NEW",sx:{mr:2},size:"small"}),(0,t.jsxs)(c.Z,{variant:"subtitle2",children:["Visit our"," ",(0,t.jsx)(i(),{href:"/docs/welcome",passHref:!0,children:(0,t.jsx)(u.Z,{variant:"subtitle2",children:"docs"})})," ","and find out how to switch between"]}),(0,t.jsxs)(a.Z,{sx:{alignItems:"center",display:"flex","& img":{height:30,m:1}},children:[(0,t.jsx)(d.Z,{title:"Amplify",children:(0,t.jsx)("img",{alt:"Amplify",src:h})}),(0,t.jsx)(d.Z,{title:"Auth0",children:(0,t.jsx)("img",{alt:"Auth0",src:m})}),(0,t.jsx)(d.Z,{title:"Firebase",children:(0,t.jsx)("img",{alt:"Firebase",src:f})}),(0,t.jsx)(d.Z,{title:"JSON Web Token",children:(0,t.jsx)("img",{alt:"JWT",src:x})})]})]})})})}},97545:function(e,r,n){"use strict";n.d(r,{A:function(){return c}});var t=n(85893),s=n(67294),i=n(11163),a=n(45697),o=n.n(a),l=n(72662),c=function(e){var r=e.children,n=(0,l.a)(),a=(0,i.useRouter)(),o=(0,s.useState)(!1),c=o[0],u=o[1],d=a.query.disableGuard;return(0,s.useEffect)((function(){a.isReady&&(n.isAuthenticated&&"true"!==d?a.push("/dashboard").catch(console.error):u(!0))}),[a.isReady]),c?(0,t.jsx)(t.Fragment,{children:r}):null};c.propTypes={children:o().node}},72662:function(e,r,n){"use strict";n.d(r,{a:function(){return i}});var t=n(67294),s=n(52926),i=function(){return(0,t.useContext)(s.Vo)}},38242:function(e,r,n){"use strict";n.d(r,{s:function(){return s}});var t=n(67294),s=function(){var e=(0,t.useRef)(!1);return(0,t.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),(0,t.useCallback)((function(){return e.current}),[])}},72475:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return D}});var t=n(85893),s=n(67294),i=n(9008),a=n.n(i),o=n(41664),l=n.n(o),c=n(11163),u=n(87357),d=n(53156),h=n(15861),m=n(66242),f=n(67720),x=n(50122),p=n(97545),v=n(92163),b=n(34051),j=n.n(b),g=n(74231),w=n(82580),y=n(50135),Z=n(56815),S=n(11057),P=n(46901),O=n(72662),k=n(38242);function C(e,r,n,t,s,i,a){try{var o=e[i](a),l=o.value}catch(c){return void n(c)}o.done?r(l):Promise.resolve(l).then(t,s)}function E(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var W=function(e){var r=(0,k.s)(),n=(0,c.useRouter)(),s=(0,O.a)().login,i=(0,w.TA)({initialValues:{email:"demo@devias.io",password:"Password123!",submit:null},validationSchema:g.Ry({email:g.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e,t=(e=j().mark((function e(t,i){var a;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(t.email,t.password);case 3:r()&&(a=n.query.returnUrl||"/dashboard",n.push(a).catch(console.error)),e.next=17;break;case 6:if(e.prev=6,e.t0=e.catch(0),console.error(e.t0),!r()){e.next=17;break}if("UserNotConfirmedException"!==e.t0.code){e.next=14;break}return sessionStorage.setItem("username",t.email),n.push("/authentication/verify-code").catch(console.error),e.abrupt("return");case 14:i.setStatus({success:!1}),i.setErrors({submit:e.t0.message}),i.setSubmitting(!1);case 17:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var r=this,n=arguments;return new Promise((function(t,s){var i=e.apply(r,n);function a(e){C(i,t,s,a,o,"next",e)}function o(e){C(i,t,s,a,o,"throw",e)}a(void 0)}))});return function(e,r){return t.apply(this,arguments)}}()});return(0,t.jsxs)("form",function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){E(e,r,n[r])}))}return e}({noValidate:!0,onSubmit:i.handleSubmit},e,{children:[(0,t.jsx)(y.Z,{autoFocus:!0,error:Boolean(i.touched.email&&i.errors.email),fullWidth:!0,helperText:i.touched.email&&i.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:i.handleBlur,onChange:i.handleChange,type:"email",value:i.values.email}),(0,t.jsx)(y.Z,{error:Boolean(i.touched.password&&i.errors.password),fullWidth:!0,helperText:i.touched.password&&i.errors.password,label:"Password",margin:"normal",name:"password",onBlur:i.handleBlur,onChange:i.handleChange,type:"password",value:i.values.password}),i.errors.submit&&(0,t.jsx)(u.Z,{sx:{mt:3},children:(0,t.jsx)(Z.Z,{error:!0,children:i.errors.submit})}),(0,t.jsx)(u.Z,{sx:{mt:2},children:(0,t.jsx)(S.Z,{disabled:i.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Log In"})}),(0,t.jsx)(u.Z,{sx:{mt:3},children:(0,t.jsx)(P.Z,{severity:"info",children:(0,t.jsxs)("div",{children:["You can use"," ",(0,t.jsx)("b",{children:"demo@devias.io"})," ","and password"," ",(0,t.jsx)("b",{children:"Password123!"})]})})})]}))};function A(e,r,n,t,s,i,a){try{var o=e[i](a),l=o.value}catch(c){return void n(c)}o.done?r(l):Promise.resolve(l).then(t,s)}function B(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var T=function(e){var r=(0,k.s)(),n=(0,c.useRouter)(),i=(0,O.a)().loginWithRedirect,a=(0,s.useState)(null),o=a[0],l=a[1],d=function(){var e,t=(e=j().mark((function e(){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i({returnUrl:n.query.returnUrl||"/dashboard"});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),r()&&l(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var r=this,n=arguments;return new Promise((function(t,s){var i=e.apply(r,n);function a(e){A(i,t,s,a,o,"next",e)}function o(e){A(i,t,s,a,o,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,t.jsxs)("div",function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){B(e,r,n[r])}))}return e}({},e,{children:[o&&(0,t.jsx)(u.Z,{sx:{my:3},children:(0,t.jsx)(Z.Z,{error:!0,children:o})}),(0,t.jsx)(u.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,t.jsx)(S.Z,{onClick:d,variant:"contained",children:"Log In"})})]}))};function _(e,r,n,t,s,i,a){try{var o=e[i](a),l=o.value}catch(c){return void n(c)}o.done?r(l):Promise.resolve(l).then(t,s)}function q(e){return function(){var r=this,n=arguments;return new Promise((function(t,s){var i=e.apply(r,n);function a(e){_(i,t,s,a,o,"next",e)}function o(e){_(i,t,s,a,o,"throw",e)}a(void 0)}))}}function R(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var I=function(e){var r=(0,k.s)(),n=(0,c.useRouter)(),s=(0,O.a)(),i=s.signInWithEmailAndPassword,a=s.signInWithGoogle,o=(0,w.TA)({initialValues:{email:"demo@devias.io",password:"Password123!",submit:null},validationSchema:g.Ry({email:g.Z_().email("Must be a valid email").max(255).required("Email is required"),password:g.Z_().max(255).required("Password is required")}),onSubmit:function(){var e=q(j().mark((function e(t,s){var a;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(t.email,t.password);case 3:r()&&(a=n.query.returnUrl||"/dashboard",n.push(a).catch(console.error)),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),r()&&(s.setStatus({success:!1}),s.setErrors({submit:e.t0.message}),s.setSubmitting(!1));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r,n){return e.apply(this,arguments)}}()}),l=function(){var e=q(j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a();case 3:r()&&(t=n.query.returnUrl||"/dashboard",n.push(t).catch(console.error)),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return(0,t.jsxs)("div",function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){R(e,r,n[r])}))}return e}({},e,{children:[(0,t.jsxs)(S.Z,{fullWidth:!0,onClick:l,size:"large",sx:{backgroundColor:"common.white",color:"common.black","&:hover":{backgroundColor:"common.white",color:"common.black"}},variant:"contained",children:[(0,t.jsx)(u.Z,{alt:"Google",component:"img",src:"/static/icons/google.svg",sx:{mr:1}}),"Google"]}),(0,t.jsxs)(u.Z,{sx:{alignItems:"center",display:"flex",mt:2},children:[(0,t.jsx)(u.Z,{sx:{flexGrow:1},children:(0,t.jsx)(f.Z,{orientation:"horizontal"})}),(0,t.jsx)(h.Z,{color:"textSecondary",sx:{m:2},variant:"body1",children:"OR"}),(0,t.jsx)(u.Z,{sx:{flexGrow:1},children:(0,t.jsx)(f.Z,{orientation:"horizontal"})})]}),(0,t.jsxs)("form",{noValidate:!0,onSubmit:o.handleSubmit,children:[(0,t.jsx)(y.Z,{error:Boolean(o.touched.email&&o.errors.email),fullWidth:!0,helperText:o.touched.email&&o.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:o.handleBlur,onChange:o.handleChange,type:"email",value:o.values.email}),(0,t.jsx)(y.Z,{error:Boolean(o.touched.password&&o.errors.password),fullWidth:!0,helperText:o.touched.password&&o.errors.password,label:"Password",margin:"normal",name:"password",onBlur:o.handleBlur,onChange:o.handleChange,type:"password",value:o.values.password}),o.errors.submit&&(0,t.jsx)(u.Z,{sx:{mt:3},children:(0,t.jsx)(Z.Z,{error:!0,children:o.errors.submit})}),(0,t.jsx)(u.Z,{sx:{mt:2},children:(0,t.jsx)(S.Z,{disabled:o.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Log In"})}),(0,t.jsx)(u.Z,{sx:{mt:2},children:(0,t.jsx)(P.Z,{severity:"info",children:(0,t.jsxs)("div",{children:["You can use"," ",(0,t.jsx)("b",{children:"demo@devias.io"})," ","and password"," ",(0,t.jsx)("b",{children:"Password123!"})]})})})]})]}))};function G(e,r,n,t,s,i,a){try{var o=e[i](a),l=o.value}catch(c){return void n(c)}o.done?r(l):Promise.resolve(l).then(t,s)}function U(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var F=function(e){var r=(0,k.s)(),n=(0,c.useRouter)(),s=(0,O.a)().login,i=(0,w.TA)({initialValues:{email:"demo@devias.io",password:"Password123!",submit:null},validationSchema:g.Ry({email:g.Z_().email("Must be a valid email").max(255).required("Email is required"),password:g.Z_().max(255).required("Password is required")}),onSubmit:function(){var e,t=(e=j().mark((function e(t,i){var a;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(t.email,t.password);case 3:r()&&(a=n.query.returnUrl||"/dashboard",n.push(a).catch(console.error)),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),r()&&(i.setStatus({success:!1}),i.setErrors({submit:e.t0.message}),i.setSubmitting(!1));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var r=this,n=arguments;return new Promise((function(t,s){var i=e.apply(r,n);function a(e){G(i,t,s,a,o,"next",e)}function o(e){G(i,t,s,a,o,"throw",e)}a(void 0)}))});return function(e,r){return t.apply(this,arguments)}}()});return(0,t.jsxs)("form",function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){U(e,r,n[r])}))}return e}({noValidate:!0,onSubmit:i.handleSubmit},e,{children:[(0,t.jsx)(y.Z,{autoFocus:!0,error:Boolean(i.touched.email&&i.errors.email),fullWidth:!0,helperText:i.touched.email&&i.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:i.handleBlur,onChange:i.handleChange,type:"email",value:i.values.email}),(0,t.jsx)(y.Z,{error:Boolean(i.touched.password&&i.errors.password),fullWidth:!0,helperText:i.touched.password&&i.errors.password,label:"Password",margin:"normal",name:"password",onBlur:i.handleBlur,onChange:i.handleChange,type:"password",value:i.values.password}),i.errors.submit&&(0,t.jsx)(u.Z,{sx:{mt:3},children:(0,t.jsx)(Z.Z,{error:!0,children:i.errors.submit})}),(0,t.jsx)(u.Z,{sx:{mt:2},children:(0,t.jsx)(S.Z,{disabled:i.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Log In"})}),(0,t.jsx)(u.Z,{sx:{mt:2},children:(0,t.jsx)(P.Z,{severity:"info",children:(0,t.jsxs)("div",{children:["Use"," ",(0,t.jsx)("b",{children:"demo@devias.io"})," ","and password"," ",(0,t.jsx)("b",{children:"Password123!"})]})})})]}))},N=n(52540),V=n(13869),z={Amplify:"/static/icons/amplify.svg",Auth0:"/static/icons/auth0.svg",Firebase:"/static/icons/firebase.svg",JWT:"/static/icons/jwt.svg"},L=function(){var e=(0,c.useRouter)(),r=(0,O.a)().platform,n=e.query.disableGuard;return(0,s.useEffect)((function(){V.w.push({event:"page_view"})}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a(),{children:(0,t.jsx)("title",{children:"Login | Material Kit Pro"})}),(0,t.jsxs)(u.Z,{component:"main",sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:[(0,t.jsx)(v.U,{}),(0,t.jsxs)(d.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:[(0,t.jsxs)(u.Z,{sx:{alignItems:"center",backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.900":"neutral.100"},borderColor:"divider",borderRadius:1,borderStyle:"solid",borderWidth:1,display:"flex",flexWrap:"wrap",justifyContent:"space-between",mb:4,p:2,"& > img":{height:32,width:"auto",flexGrow:0,flexShrink:0}},children:[(0,t.jsxs)(h.Z,{color:"textSecondary",variant:"caption",children:["The app authenticates via ",r]}),(0,t.jsx)("img",{alt:"Auth platform",src:z[r]})]}),(0,t.jsxs)(m.Z,{elevation:16,sx:{p:4},children:[(0,t.jsxs)(u.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,t.jsx)(l(),{href:"/",passHref:!0,children:(0,t.jsx)("a",{children:(0,t.jsx)(N.T,{sx:{height:40,width:40}})})}),(0,t.jsx)(h.Z,{variant:"h4",children:"Log in"}),(0,t.jsx)(h.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Sign in on the internal platform"})]}),(0,t.jsxs)(u.Z,{sx:{flexGrow:1,mt:3},children:["Amplify"===r&&(0,t.jsx)(W,{}),"Auth0"===r&&(0,t.jsx)(T,{}),"Firebase"===r&&(0,t.jsx)(I,{}),"JWT"===r&&(0,t.jsx)(F,{})]}),(0,t.jsx)(f.Z,{sx:{my:3}}),(0,t.jsx)("div",{children:(0,t.jsx)(l(),{href:n?"/authentication/register?disableGuard=".concat(n):"/authentication/register",passHref:!0,children:(0,t.jsx)(x.Z,{color:"textSecondary",variant:"body2",children:"Create new account"})})}),"Amplify"===r&&(0,t.jsx)(u.Z,{sx:{mt:1},children:(0,t.jsx)(l(),{href:n?"/authentication/password-recovery?disableGuard=".concat(n):"/authentication/password-recovery",passHref:!0,children:(0,t.jsx)(x.Z,{color:"textSecondary",variant:"body2",children:"Forgot password"})})})]})]})]})]})};L.getLayout=function(e){return(0,t.jsx)(p.A,{children:e})};var D=L}},function(e){e.O(0,[8926,5464,135,939,551,4233,2930,9774,2888,179],(function(){return r=27287,e(e.s=r);var r}));var r=e.O();_N_E=r}]);