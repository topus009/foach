(this.webpackJsonpfoach=this.webpackJsonpfoach||[]).push([[1],{21:function(e,t,n){"use strict";var a=n(31),r=n.n(a);t.a=r()({PENDING:null,GETWORKERS:null,GETWORKERSERROR:null,TOGGLEVACATIONCOMPLETED:null})},22:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(20),c=n(116),i=n(65),u=n(10),l=n(26),s=n.n(l),f=n(11),d=n(110),m=Object(d.a)((function(e){return Object(f.a)({loader:{display:"flex",alignItems:"center",justifyContent:"center",height:"calc(100vh - 80px)"},circle:{float:"left",marginLeft:12,backgroundColor:e.palette.colors.loader_circle_bg_color,animationName:"$bounce_circle",animationDuration:".6775s",animationIterationCount:"infinite",animationDirection:"normal",borderRadius:"50%",width:"24px",height:"24px"},c_1:{animationDelay:".1s"},c_2:{animationDelay:".2s"},c_3:{animationDelay:".3s"}},"@keyframes bounce_circle",{"50%":{backgroundColor:e.palette.colors.loader_circle_bounce_bg_color}})})),b=function(){var e=m();return r.a.createElement("div",{className:e.loader},r.a.createElement("div",{className:s()(e.circle,e.c_1)}),r.a.createElement("div",{className:s()(e.circle,e.c_2)}),r.a.createElement("div",{className:s()(e.circle,e.c_3)}))},h=n(113),p=n(115),_=Object(d.a)({root:{alignItems:"flex-end",justifyContent:"center",marginBottom:"20px",height:"50px"},user:{marginRight:"10px"}}),g=function(e){var t=e.user,n=_();return r.a.createElement(h.a,{position:"static",className:n.root},t&&r.a.createElement(p.a,{variant:"h6",className:n.user},t.UserName))},E=function(e){return Object(o.b)((function(e){return{authenticated:e.auth.authenticated}}))((function(t){return t.authenticated?r.a.createElement(e,t):r.a.createElement(i.a,{to:"/"})}))},O=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,168))})),v=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,166))})),T=function(){return r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:O}),r.a.createElement(i.b,{exact:!0,path:"/workers",component:E(v)}))},k=n(64),R=n(19),U="white",y="#4a4a4a",j="#bababa",w="black",N="#00be73",A="green",I="#5f19aa",x="red",D="#00adeb",M="#00bdff",S=Object(k.a)({overrides:{MuiOutlinedInput:{input:{padding:"5px",height:"1rem",margin:"5px 0 !important"}},MuiInputLabel:{outlined:{transform:"translate(13px, 13px) scale(1)"}},MuiFormControl:{root:{marginBottom:"10px"}}},typography:{fontSize:12},palette:{colors:{worker_color:w,worker_hover_bg_color:j,worker_checked_bg_color:M,worker_checked_hover_bg_color:D,worker_status_color:x,worker_status_completed_color:A,workers_header_status_btn_color:U,workers_header_status_btn_bg_color:y,loader_circle_bg_color:I,loader_circle_bounce_bg_color:N}}}),H=Object(R.a)({"@global":{body:{margin:0}}})((function(){return null}));n.d(t,"b",(function(){return C}));var C=Object(u.a)();t.a=Object(o.b)((function(e){return{user:e.auth.user}}))((function(e){var t=e.user;return r.a.createElement(c.a,{theme:S},r.a.createElement(i.c,{history:C,basename:"/green-todo"},r.a.createElement(H,null),r.a.createElement(a.Suspense,{fallback:r.a.createElement(b,null)},r.a.createElement(g,{user:t}),r.a.createElement(T,null))))}))},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="https://fakerestapi.azurewebsites.net/api",r="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTVlZTUxOWQ3NDg4MzAwMTIzMzRmZDgiLCJpYXQiOjE1NzMzNDA5NDIyNDMsImV4cCI6MTU3NTkzMjk0MjI0M30.itWcbMuYF3rvfQH4FDNSDtiaLRksg_TEPhMiOQN1k0M"},36:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(7),o=n(21),c=o.a.GETWORKERS,i=o.a.PENDING,u=o.a.TOGGLEVACATIONCOMPLETED,l=o.a.GETWORKERSERROR,s={workers:{},loading:!1};var f=n(4),d=f.a.AUTH_TOKEN,m=f.a.AUTH_ERROR,b=f.a.AUTH_USER,h=f.a.AUTH_REQUEST,p={loading:!1};t.default=Object(a.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;return a===h?Object(r.a)({},e,{loading:!0}):a===d?Object(r.a)({},e,{authenticated:!0,loading:!1,error:""}):a===b?Object(r.a)({},e,{user:n}):a===m?Object(r.a)({},e,{loading:!1,error:n}):e},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;if(a===c){var o={};return n.forEach((function(e){o[e.ID]=Object(r.a)({},e,{Title:e.Title.replace("Activity ","\u0420\u0430\u0431\u043e\u0442\u043d\u0438\u043a_")})})),Object(r.a)({},e,{workers:o,loading:!1})}if(a===i)return Object(r.a)({},e,{loading:!0});if(a===l)return Object(r.a)({},e,{loading:!1});if(a===u){var f=e.workers,d=Object(r.a)({},f);return n.forEach((function(e){d[e]=Object(r.a)({},d[e],{Completed:!d[e].Completed})})),Object(r.a)({},e,{workers:d})}return e}})},37:function(e,t,n){"use strict";var a={};n.r(a),n.d(a,"auth",(function(){return u})),n.d(a,"workers",(function(){return l}));var r=n(62),o=n.n(r),c=n(32),i=o.a.create({baseURL:c.a}),u={signUp:function(e){return i.post("/Users",e).then((function(){}))},getUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return i.get("/Users/".concat(e)).then((function(e){return e.data}))}},l={getWorkers:function(){return i.get("/Activities").then((function(e){return e.data}))}};t.a=a},4:function(e,t,n){"use strict";var a=n(31),r=n.n(a);t.a=r()({AUTH_TOKEN:null,AUTH_USER:null,AUTH_ERROR:null,AUTH_REQUEST:null})},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d}));var a=n(37),r=n(32),o=n(4),c=o.a.AUTH_TOKEN,i=o.a.AUTH_USER,u=o.a.AUTH_ERROR,l=o.a.AUTH_REQUEST;function s(e){return{type:u,payload:e}}function f(e){var t=e.email,n=e.password;return function(e){e({type:l}),a.a.auth.signUp({UserName:t,Password:n}).then((function(){localStorage.setItem("token",r.b),e({type:c})})).catch((function(t){return e(s(t))}))}}function d(){return function(e){a.a.auth.getUser().then((function(t){e({type:i,payload:t})})).catch((function(t){e(s(t))}))}}},58:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var a=n(13),r=n(59),o=n(60),c=n(36),i=n(61),u=n(63),l=a.d;function s(t){var s,f=Object(r.createLogger)(),d=Object(a.e)(c.default,t,l(Object(a.a)(o.a,f,i.a,u.a)));return null===(s=e.hot)||void 0===s||s.accept("../reducers",(function(){var e=n(36);d.replaceReducer(e)})),d}}).call(this,n(44)(e))},61:function(e,t,n){"use strict";var a=n(4),r=n(46),o=a.a.AUTH_TOKEN;t.a=function(e){return function(t){return function(n){if(n.type===o){var a=localStorage.getItem("token");a&&e.dispatch(Object(r.a)(a))}return t(n)}}}},63:function(e,t,n){"use strict";var a=n(4),r=n(22),o=a.a.AUTH_USER;t.a=function(){return function(e){return function(t){return t.type===o&&"/workers"!==r.b.location.pathname&&r.b.push("/workers"),e(t)}}}},70:function(e,t,n){e.exports=n(96)},96:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),i=n(20),u=n(22).a,l=n(58).a,s=n(4).a.AUTH_TOKEN,f=l();localStorage.getItem("token")&&f.dispatch({type:s});var d=function(){return r.a.createElement(i.a,{store:f},r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,2,3]]]);
//# sourceMappingURL=main.b6cce406.chunk.js.map