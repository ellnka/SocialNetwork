(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],{111:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(29),a=n(7),s=n(68),u=s.a.messagesPage,c=function(e){return function(t){t({type:"messages/SEND-MESSAGE",data:e})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"messages/SEND-MESSAGE":var n={id:e.messages.length,text:t.data};return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(37),a=n(38),s=n(70),u=n.n(s),c="https://api.myjson.com/bins/gkloi",o=u.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d03460cc-dd7f-425e-86ff-ef080fabbdfa"}}),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"getUsers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return o.get("users?page=".concat(e,"&count=").concat(t))}},{key:"getAuthUser",value:function(){return o.get("auth/me")}},{key:"loginUser",value:function(e,t,n){return o.post("auth/login",{email:e,password:t,rememberMe:n})}},{key:"logoutUser",value:function(){return o.delete("auth/login")}},{key:"getUserProfile",value:function(e){return o.get("profile/".concat(e))}},{key:"putUserProfile",value:function(e){return o.put("profile",e)}},{key:"getUserProfileStatus",value:function(e){return o.get("profile/status/".concat(e))}},{key:"putUserProfileStatus",value:function(e){return o.put("profile/status/",{status:e})}},{key:"getUserFollow",value:function(e){return o.get("follow/".concat(e))}},{key:"postUserFollow",value:function(e){return o.post("follow/".concat(e),{userId:e})}},{key:"deleteUserFollow",value:function(e){return o.delete("follow/".concat(e),{userId:e})}},{key:"getPosts",value:function(){return u.a.get(c)}},{key:"putPosts",value:function(e){return u.a.put(c,{data:e})}}]),e}()},165:function(e,t,n){e.exports=n(563)},251:function(e,t,n){},34:function(e,t,n){"use strict";var r=n(1),a=n.n(r);t.a=function(){return a.a.createElement("div",{className:"spinner-border",role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading..."))}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(5),a=n.n(r),s=n(10),u=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s,u){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(r(!0,u)),e.next=3,n(u);case 3:(c=e.sent).data&&0===c.data.resultCode&&t(s(u)),t(r(!1,u));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a,s){return e.apply(this,arguments)}}()},563:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n.n(r),s=n(1),u=n.n(s),c=n(11),o=n(134),i=n(133),l=n(135),f=n(97),p=n(68).a.navbarPage,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e},m=n(98),v=n(111),h=n(99),g=n(7),b=n(5),E=n.n(b),O=n(10),S=n(12),w=n(24),y=function(e){return{type:"auth/SET-USER-DATA",data:e}},j=function(e){return{type:"auth/SET-IS-FETCHING",isFetching:e}},T={userData:null,isAuth:!1,isFetching:!1},N=function(){var e=Object(O.a)(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0)),e.prev=1,e.next=4,S.a.getAuthUser();case 4:n=e.sent,r=n.data&&n.data.resultCode,t(y(0===r?{userData:n.data.data,isAuth:!0}:{userData:{},isAuth:!1}));case 7:return e.prev=7,t(j(!1)),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){return function(e){N(e)}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"auth/SET-USER-DATA":return Object(g.a)({},e,{},t.data);case"auth/SET-IS-AUTH":return Object(g.a)({},e,{isAuth:t.isAuth});case"auth/SET-IS-FETCHING":return Object(g.a)({},e,{isFetching:t.isFetching});default:return e}},P={isInit:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"app/SET-INIT":return Object(g.a)({},e,{isInit:t.isInit});default:return e}},k=Object(c.combineReducers)({profilePage:f.d,postsPage:m.c,messagesPage:v.a,usersPage:h.a,navbarPage:d,auth:U,app:x,form:i.a}),F=Object(l.composeWithDevTools)({}),A=Object(c.createStore)(k,F(Object(c.applyMiddleware)(o.a)));window.reduxStore=A;var C=A,L=n(25),D=n(13),R=n(37),G=n(38),H=n(65),M=n(63),W=n(66),z=n(31),_=(n(251),n(34)),J=function(e){return function(t){return u.a.createElement(u.a.Suspense,{fallback:u.a.createElement(_.a,null)},u.a.createElement(e,t))}},Y=n(45),K=function(e){var t=e.userData,n=e.isAuth,r=e.handleLogout;return u.a.createElement("header",{className:"app-header"},u.a.createElement("div",{className:"login-box"},u.a.createElement(Y.i,{className:"m1-auto top-nav"},u.a.createElement("nav",{className:"nav"},u.a.createElement("li",{className:"nav-item"},u.a.createElement("span",{className:"nav-item-title"}," ",t&&t.login," "))),u.a.createElement("nav",null,u.a.createElement("li",{className:"nav-item"},n&&u.a.createElement(Y.a,{color:"secondary",onClick:r},"Logout"))),u.a.createElement("nav",null,u.a.createElement("li",{className:"nav-item"},!n&&u.a.createElement(L.b,{to:"/login"},"Login"))))))},B=function(){return u.a.createElement("div",null," ")},q=Object(D.b)((function(e){return{userData:e.auth.userData,isAuth:e.auth.isAuth}}),{setUserData:y,getAuthUser:I,logoutUser:function(){return function(){var e=Object(O.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logoutUser();case 2:n=e.sent,0===n.data.resultCode&&t(y({userData:null,isAuth:!1}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.userData,n=e.isAuth,r=e.logoutUser;return u.a.createElement("div",null,u.a.createElement(B,{userData:t,handleLogout:r}),u.a.createElement(K,{userData:t,handleLogout:r,isAuth:n}))})),Q=function(e){return u.a.createElement("div",{className:"site-logo-bar"},u.a.createElement(L.b,{to:"/",className:"navbar-brand"},e.logo&&u.a.createElement("img",{src:e.logo,alt:""}),e.logoText&&u.a.createElement("span",{className:"logo-text"},e.logoText)))},V=function(){return u.a.createElement("li",{className:"nav-item nav-item-spacer"})},X=n(94),Z=function(e){var t="/"===e.item.link.charAt(0)?e.item.link:"/".concat(e.item.link),n=e.item.icon&&X[e.item.icon]?X[e.item.icon]:null;return u.a.createElement("li",{className:"nav-item"},u.a.createElement(L.b,{to:t,activeClassName:"active"},e.item.icon&&n&&u.a.createElement(n,{className:"side-nav-icon"}),u.a.createElement("span",{className:"nav-item-label"},e.item.title)))},$=function(e){function t(e){var n;return Object(R.a)(this,t),(n=Object(H.a)(this,Object(M.a)(t).call(this))).state={menu:e.menu},n}return Object(W.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){var e=this.state.menu.items.map((function(e,t){return u.a.createElement("div",{key:t},u.a.createElement(Z,{item:e}),u.a.createElement(V,null))}));return u.a.createElement("nav",{className:"app-sidebar"},u.a.createElement(Q,{logo:"https://www.freelogodesign.org/Content/img/logo-ex-7.png",logoText:"this is a logo"}),e)}}]),t}(s.Component),ee=Object(D.b)((function(e){return{menu:e.navbarPage.menu}}),null)($),te=Object(D.b)((function(e){return{menu:e.navbarPage.menu}}),null)(ee),ne=n(132),re=n(73),ae=function(e){var t=e.fieldName,n=e.placeholder,r=e.validate,a=e.label,s=void 0===a?"":a,c=e.type,o=void 0===c?"input":c;return u.a.createElement("div",{className:"form-group row"},s&&u.a.createElement("label",{htmlFor:t,className:"col-md-4 col-form-label text-md-right"},s),u.a.createElement("div",{className:"col-md-6"},Object(re.a)(n,t,r,{type:o})))},se=function(e){var t=e.fieldName,n=e.label,r=void 0===n?"":n;return u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-md-6 offset-md-4"},u.a.createElement("div",{className:"checkbox"},u.a.createElement("label",null,Object(re.a)("",t,[],{type:"checkbox"})," ",r))))},ue=function(e){var t=e.error;return u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-md-6 offset-md-4"},u.a.createElement("p",{className:"text-danger"}," ",t," ")))},ce=function(e){var t=e.name;return u.a.createElement("div",{className:"col-md-6 offset-md-4"},u.a.createElement("button",{type:"submit",className:"btn btn-primary"},t))},oe=Object(ne.a)({form:"login"})((function(e){for(var t=e.error,n=e.handleSubmit,r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return u.a.createElement("form",{onSubmit:function(){n()}},u.a.createElement(ae,Object.assign({fieldName:"email",type:"input",placeholder:"Email",validate:[],label:"E-Mail Address"},a)),u.a.createElement(ae,Object.assign({fieldName:"password",placeholder:"Password",type:"password",validate:[],label:"Password"},a)),u.a.createElement(se,{fieldName:"rememberMe",label:"Remember Me"}),t&&u.a.createElement(ue,{error:t}),u.a.createElement(ce,{name:"Login"}))})),ie=function(e){var t=e.handleLoginUser;return u.a.createElement("main",{className:"login-form"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row justify-content-center"},u.a.createElement("div",{className:"col-md-8"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-header"},"Login"),u.a.createElement("div",{className:"card-body"},u.a.createElement(oe,{onSubmit:function(e){e.email&&e.password&&t(e.email,e.password,!!e.rememberMe)}})))))))},le=Object(D.b)((function(e){return{userData:e.usersPage.userData,isAuth:e.auth.isAuth,isFetching:e.auth.isFetching}}),{setUserData:y,getAuthUser:I,loginUser:function(e,t,n){return function(){var r=Object(O.a)(E.a.mark((function r(a){var s,u;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(j(!0)),r.next=3,S.a.loginUser(e,t,n);case 3:s=r.sent,0===(s.data&&s.data.resultCode)?N(a):(u=s.data.messages.length?s.data.messages[0]:"Something wrong...",a(Object(w.b)("login",{_error:u})));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.loginUser,n=e.isFetching,r=e.isAuth;return n?u.a.createElement(_.a,null):r?null:u.a.createElement(ie,{handleLoginUser:t})})),fe=u.a.lazy((function(){return n.e(4).then(n.bind(null,570))})),pe=u.a.lazy((function(){return n.e(6).then(n.bind(null,573))})),de=u.a.lazy((function(){return n.e(3).then(n.bind(null,572))})),me=u.a.lazy((function(){return n.e(5).then(n.bind(null,571))})),ve=function(e){function t(){return Object(R.a)(this,t),Object(H.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.isInit?u.a.createElement(u.a.Suspense,{fallback:u.a.createElement(_.a,null)},u.a.createElement("div",{className:"app-body"},u.a.createElement(te,null),u.a.createElement("div",{className:"page-content"},u.a.createElement(q,null),u.a.createElement("div",{className:"primary-content",role:"main",tabIndex:"-1"},u.a.createElement(z.b,{path:"/login",render:function(){return u.a.createElement(le,null)}}),u.a.createElement(z.b,{path:"/profile/:userId",render:J(fe)}),u.a.createElement(z.b,{path:"/myprofile/",render:J(fe)}),u.a.createElement(z.b,{path:"/posts",render:J(pe)}),u.a.createElement(z.b,{path:"/messages",render:J(de)}),u.a.createElement(z.b,{path:"/users",render:J(me)}))))):u.a.createElement(_.a,null)}}]),t}(u.a.Component),he=Object(c.compose)(z.f,Object(D.b)((function(e){return{isInit:e.app.isInit}}),{initialize:function(){return function(e){var t=e(I());Promise.all([t]).then(e({type:"app/SET-INIT",isInit:!0}))}}}))(ve),ge=function(){a.a.render(u.a.createElement(L.a,{basename:"/SocialNetwork"},u.a.createElement(D.a,{store:C},u.a.createElement(he,null))),document.getElementById("root"))};C.subscribe(ge),ge()},68:function(e,t,n){"use strict";var r={navbarPage:{menu:{items:[{title:"Profile",link:"/myprofile"},{title:"Posts",link:"/posts"},{title:"Messages",link:"/messages"},{title:"Users",link:"/users"}]}},messagesPage:{dialogs:[{id:1,user:"John"},{id:2,user:"Mark"},{id:3,user:"Helen"},{id:4,user:"Lucy"}],messages:[{id:"1",text:"Hello"},{id:"2",text:"How are you?"},{id:"3",text:"Do you know React?"}]},profilePage:{posts:[{id:"1",text:"my post 1"},{id:"2",text:"my post 2"},{id:"3",text:"my post 3"},{id:"4",text:"my post 4"}],newPostText:""},usersPage:{users:[{id:1,name:"John Doe"},{id:2,name:"Anna Miles"},{id:3,name:"Kate Smith"},{id:4,name:"Jack Jackson"}]}};t.a=r,window.state=r},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(71),a=n(1),s=n.n(a),u=n(88),c=n(45),o=function(e){e.input;var t=e.meta,n=Object(r.a)(e,["input","meta"]),a=t.touched&&t.error;return s.a.createElement("div",null,n.children,a&&s.a.createElement("div",{className:"inline m-b-none m-t-none abs invalid-feedback"},t.error))},i=function(e){var t=e.input,n=(e.meta,e.children,Object(r.a)(e,["input","meta","children"]));return s.a.createElement(o,e,s.a.createElement(c.h,Object.assign({},t,n)))},l=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return s.a.createElement("div",null,s.a.createElement(u.a,Object.assign({component:i,name:t,placeholder:e,validate:n},r))," ",a)}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"h",(function(){return y})),n.d(t,"g",(function(){return j})),n.d(t,"b",(function(){return T})),n.d(t,"f",(function(){return N})),n.d(t,"c",(function(){return U})),n.d(t,"e",(function(){return P})),n.d(t,"i",(function(){return x}));var r=n(7),a=n(5),s=n.n(a),u=n(10),c=n(12),o=n(24),i=n(44),l="profileDataForm",f="profile/FOLLOW",p="profile/UNFOLLOW",d=function(e){return{type:"profile/SET-USER-ID",userId:e}},m=function(e){return{type:"profile/SET-IS-FETCHING",isFetching:e}},v=function(e){return{type:"profile/SET-IS-FETCHING",isUpdating:e}},h=function(e){return{type:"profile/SET-STATUS",status:e}},g=function(e){return{type:"profile/SET-IS-FOLLOW-STATUS-FETCHING",isFollowStatusFetching:e}},b=function(e){return{type:f,userId:e}},E=function(e){return{type:p,userId:e}},O={isProfileFetching:!1,isUpdating:!1,userProfile:{},userId:2,followed:!1,isFollowStatusFetching:!1,status:""},S=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(m(!0)),e.next=4,c.a.getUserProfile(t);case 4:r=e.sent,n({type:"profile/SET-USER-PROFILE",userProfile:r.data}),n(d(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("get profile error",e.t0);case 12:return e.prev=12,n(m(!1)),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(g(!0)),e.prev=1,e.next=4,c.a.getUserFollow(t);case 4:e.sent.data?n(b()):n(E());case 6:return e.prev=6,n(g(!1)),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(e){return function(t){t({type:"profile/RESET-PROFILE"}),S(e,t),w(e,t)}},j=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.getUserProfileStatus(e);case 3:r=t.sent,n(h(r.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("get status error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.putUserProfileStatus(e);case 3:n(h(e)),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error("put status",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},N=function(){return function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(m(!0)),e.prev=1,e.next=4,c.a.getAuthUser();case 4:(n=e.sent).data&&0===n.data.resultCode&&(r=n.data&&n.data.data,S(r.id,t));case 6:return e.prev=6,t(m(!1)),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(t){return e.apply(this,arguments)}}()},I=function(e){var t=e.match(/(?<=->).+?(?=\))/g);if(t.length){var n={};return n[t[0].toLowerCase()]=e,{contacts:n}}return null},U=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n){var r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v(!0)),t.prev=1,t.next=4,c.a.putUserProfile(e);case 4:(r=t.sent).data&&0===r.data.resultCode?S(e.userId,n):(a=r.data&&r.data.messages&&r.data.messages.map((function(e){return I(e)})),n(Object(o.b)(l,a[0])));case 6:return t.prev=6,n(v(!1)),t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[1,,6,9]])})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(i.a)(n,c.a.postUserFollow,g,b,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(i.a)(n,c.a.deleteUserFollow,g,E,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"profile/SET-IS-FETCHING":return Object(r.a)({},e,{isProfileFetching:t.isFetching});case"profile/SET-IS-UPDATING":return Object(r.a)({},e,{isUpdating:t.isUpdating});case"profile/SET-USER-PROFILE":return Object(r.a)({},e,{userProfile:t.userProfile});case"profile/SET-USER-ID":return Object(r.a)({},e,{userId:t.userId});case"profile/SET-STATUS":return Object(r.a)({},e,{status:t.status});case"profile/SET-IS-FOLLOW-STATUS-FETCHING":return Object(r.a)({},e,{isFollowStatusFetching:t.isFollowStatusFetching});case f:return Object(r.a)({},e,{followed:!0});case p:return Object(r.a)({},e,{followed:!1});case"profile/RESET-PROFILE":return Object(r.a)({},e,{followed:!1,userProfile:null,userId:null,status:null});default:return e}}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return E})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return S}));var r=n(7),a=n(29),s=n(5),u=n.n(s),c=n(10),o=n(110),i=n.n(o),l=n(12),f=n(24),p="profileNewPost",d=function(e){return{type:"posts/SET-POSTS",posts:e}},m=function(e){return{type:"posts/SET-IS-FETCHING",isFetching:e}},v={posts:[],arePostsFetching:!1},h=function(e){return{id:"f".concat((+new Date).toString(16)),text:e,datetime:i()().format("YYYY-MM-DD HH:mm")}},g=function(){var e=Object(c.a)(u.a.mark((function e(t,n,r){var a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.putPosts(n);case 3:a=e.sent,t(m(!1)),s=a.data.data.posts,t(d({posts:s})),r&&t(Object(f.a)(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("put posts error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(m(!0)),e.next=4,l.a.getPosts();case 4:return n=e.sent,r=[],n.data&&n.data.data&&(t(m(!1)),r=n.data.data.posts),e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),console.error("get posts error",e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(function(){var e=Object(c.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,t(d({posts:n}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(function(){var n=Object(c.a)(u.a.mark((function n(r){var s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(r);case 2:(s=n.sent)&&g(r,{userId:t,posts:[].concat(Object(a.a)(s),[h(e)])},p);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(function(){var n=Object(c.a)(u.a.mark((function n(r){var s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(r);case 2:(s=n.sent)&&(s=s.filter((function(t){return t.id!==e})),g(r,{userId:t,posts:Object(a.a)(s)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},e);switch(t.type){case"posts/SET-POSTS":return Object(r.a)({},e,{},t.posts);case"posts/ADD-POST":return Object(r.a)({},e,{posts:[].concat(Object(a.a)(e.posts),[{id:e.posts.length,text:t.post}])});case"posts/EDIT-NEW-POST":return n.newPostText=t.post.text,n;case"posts/SET-IS-FETCHING":return Object(r.a)({},e,{arePostsFetching:t.isFetching});default:return e}}},99:function(e,t,n){"use strict";var r=n(29),a=n(7),s=n(5),u=n.n(s),c=n(10),o=n(12),i=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(a.a)({},e,{},r):e}))},l=n(44);n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return S})),n.d(t,"b",(function(){return w})),n.d(t,"f",(function(){return y}));var f="users/FOLLOW",p=function(e){return{type:"users/SET-USERS",users:e}},d=function(e){return{type:"users/SET-TOTAL-USER-COUNT",totalUserCount:e}},m=function(e){return{type:"users/SET-PAGE-COUNT",pageCount:e}},v=function(e){return{type:"users/SET-CURRENT-PAGE",currentPage:e}},h=function(e){return{type:"users/SET-IS-FETCHING",isFetching:e}},g=function(e,t){return{type:"users/SET_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},b=function(e){return{type:f,userId:e}},E=function(e){return{type:"users/UNFOLLOW",userId:e}},O={users:[],pageSize:50,totalUserCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},S=function(e,t){return function(){var n=Object(c.a)(u.a.mark((function n(r){var a,s,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(h(!0)),r(p([])),r(d(0)),n.next=5,o.a.getUsers(e,t);case 5:(a=n.sent).data&&(s=a.data.totalCount||0,c=Math.ceil(s/t),r(p(a.data.items)),r(d(s)),r(m(c)),r(v(e)),r(h(!1)));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(l.a)(n,o.a.postUserFollow,g,b,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(l.a)(n,o.a.deleteUserFollow,g,E,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"users/SET-USERS":return Object(a.a)({},e,{users:t.users});case"users/SET-TOTAL-USER-COUNT":return Object(a.a)({},e,{totalUserCount:t.totalUserCount});case"users/SET-PAGE-COUNT":return Object(a.a)({},e,{pageCount:t.pageCount});case"users/SET-CURRENT-PAGE":return Object(a.a)({},e,{currentPage:t.currentPage});case"users/SET-IS-FETCHING":return Object(a.a)({},e,{isFetching:t.isFetching});case f:return Object(a.a)({},e,{users:i(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(a.a)({},e,{users:i(e.users,t.userId,"id",{followed:!1})});case"users/SET_IS_FOLLOWING_PROGRESS":return Object(a.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(r.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.0912c347.chunk.js.map