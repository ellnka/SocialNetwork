(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[4],{565:function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],r=!0,n=!1,u=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(i){n=!0,u=i}finally{try{r||null==l.return||l.return()}finally{if(n)throw u}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",(function(){return r}))},566:function(e,t,a){e.exports=a.p+"static/media/avatar.0243ad0f.png"},571:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),u=a(9),s=a(12),l=a(29),i=a(94),c=a(70),o=a(566),f=a.n(o),m=a(565),d=function(e){var t=Object(r.useState)(!1),a=Object(m.a)(t,2),u=a[0],s=a[1],l=Object(r.useState)(e.status),i=Object(m.a)(l,2),c=i[0],o=i[1];Object(r.useEffect)((function(){o(e.status)}),[e.status]);return n.a.createElement("div",null,!u&&n.a.createElement("div",null,n.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"Enter your status...")),u&&n.a.createElement("div",null,n.a.createElement("input",{value:c,onBlur:function(){s(!1),e.onStatusChanged(c)},defaultValue:e.status,onChange:function(e){o(e.target.value)}})))},h=Object(u.compose)(Object(s.b)((function(e){return{authUserData:e.auth.userData,status:e.profilePage.status}}),{getStatus:i.d,changeStatus:i.a}),l.f)((function(e){var t=e.authUserData,a=e.status,u=e.getStatus,s=e.changeStatus;return Object(r.useEffect)((function(){t&&t.id&&u(t.id)}),[t,u]),n.a.createElement(d,{userData:t,status:a,onStatusChanged:function(e){s(e)}})})),E=function(e){return n.a.createElement(c.b,{body:!0},n.a.createElement("div",{className:"text-center"},n.a.createElement("div",{className:"m-b"},n.a.createElement("img",{src:e.userProfile.photos.large||f.a,style:{width:100},className:"b-circle",alt:"profile"})),n.a.createElement("div",null,n.a.createElement("h2",{className:"h4"},e.userProfile.fullName),n.a.createElement("div",{className:"h5 text-muted"},e.userProfile.aboutMe),n.a.createElement("hr",null),n.a.createElement("div",{className:"p text-muted"},e.isAuthorizedProfile&&n.a.createElement(h,{status:e.status,onStatusChanged:e.onStatusChanged})),n.a.createElement(c.i,{className:"text-center m-b"},n.a.createElement(c.f,null,n.a.createElement("strong",null,"230"),n.a.createElement("div",{className:"text-muted"},"Followers")),n.a.createElement(c.f,null,n.a.createElement("strong",null,"325"),n.a.createElement("div",{className:"text-muted"},"Following"))),!e.isAuthorizedProfile&&n.a.createElement(c.a,{block:!0},"Follow"))))},g=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement(E,{userProfile:e.userProfile,isAuthorizedProfile:e.isAuthorizedProfile}))},p=a(33),b=function(e){return e.profilePage.userProfile},v=function(e){return e.profilePage.isProfileFetching},P=function(e){return e.auth.isAuth},A=function(e){return e.auth.isFetching};t.default=Object(u.compose)(Object(s.b)((function(e){return{userProfile:b(e),isProfileFetching:v(e),isAuth:P(e),isAuthFetching:A(e)}}),{requestUserProfile:i.e,getAuthUser:i.c}),l.f)((function(e){var t=e.userProfile,a=e.isProfileFetching,u=e.isAuthFetching,s=e.isAuth,i=e.match,c=e.requestUserProfile,o=e.getAuthUser,f=!i.params.userId;Object(r.useEffect)((function(){i.params.userId?c(i.params.userId):o()}),[i.params.userId]);var m=t&&t.fullName,d=i.params.userId&&t&&+i.params.userId!==+t.userId;return a||u||d?n.a.createElement(p.a,null):f&&!s?n.a.createElement(l.a,{to:"/login"}):m?n.a.createElement(g,{userProfile:t,isAuthorizedProfile:f}):null}))}}]);
//# sourceMappingURL=4.88d632f4.chunk.js.map