(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{163:function(e,t,a){},204:function(e,t,a){},210:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(76),o=a.n(s),r=a(26),i=a(21),c=a(41),l=a(18),u=a(168),d=a(169),j=a(148),p=a.n(j),b=new(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"getProfile",value:function(){return p()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return p()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),m=(a(159),a(241)),h=(a(204),a(4));var x=function(){console.log("NAV TABS!!!!!!!");var e=Object(n.useState)("home"),t=Object(r.a)(e,2),a=t[0],s=t[1],o=window.location.pathname,i=("/"===o||o.substr(1),function(e,t){var a=t.name;return s(a)});return Object(h.jsx)("div",{className:"nav-bar-home",style:{borderBottomStyle:"outset"},children:Object(h.jsxs)(m.a,{pointing:!0,secondary:!0,children:[Object(h.jsx)(m.a.Item,{className:"home",style:{color:"#fdd05a",fontSize:"3vw",textShadow:"-1px 1px 2px #000",fontFamily:"sans-serif"},name:"home",active:"home"===a,onClick:i,as:c.b,to:"/"}),Object(h.jsxs)(m.a.Menu,{position:"right",children:[Object(h.jsx)(m.a.Item,{className:"login",style:{color:"#fdd05a",fontSize:"3vw",textShadow:"-1px 1px 2px #000",fontFamily:"sans-serif"},name:"login",active:"login"===a,onClick:i,as:c.b,to:"/login"}),Object(h.jsx)(m.a.Item,{className:"signup",style:{color:"#fdd05a",fontSize:"3vw",textShadow:"-1px 1px 2px #000",fontFamily:"sans-serif"},name:"signup",active:"signup"===a,onClick:i,as:c.b,to:"/signup"})]})]})})},O=a(247);a(210);var f,g,v,w=function(){return Object(h.jsxs)("div",{style:{margin:"0",maxHeight:"100%",backgroundColor:"#1c2529",width:"100%"},className:"HomePage",children:[Object(h.jsx)(O.a,{style:{maxWidth:"100%"},children:Object(h.jsx)("img",{style:{borderBottomStyle:"outset",margin:"0 0 -5 0",maxWidth:"100%",maxHeight:"100%"},className:"display-3",src:"https://i.imgur.com/hkVYvd3.jpg"})}),Object(h.jsx)("h1",{className:"about",style:{textShadow:"-1px 1px 2px #000",margin:"-5% 35% 0 35%",fontFamily:"sans-serif",color:"#fdd05a",fontSize:"10vw"}}),Object(h.jsx)("p",{style:{textShadow:"-5px 1px 2px #000",fontFamily:"sans-serif",color:"#fdd05a",textAlign:"center",fontSize:"25px",margin:"5% 15% 10% 15%"},children:"How far away take root and flourish preserve and cherish that pale blue dot finite but unbounded are creatures of the cosmos realm of the galaxies. Sea of Tranquility with pretty stories for which there's little good evidence with pretty stories for which there's little good evidence globular star cluster stirred by starlight concept of the number one? Paroxysm of global death hearts of the stars at the edge of forever hearts of the stars inconspicuous motes of rock and gas with pretty stories for which there's little good evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions."})]})},y=a(56),S=a.n(y),k=a(94),I=a(39),C=a(240),N=a(248),E=a(251),P=a(101),D=a(243),z=Object(D.a)(f||(f=Object(P.a)(["\nmutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    token\n    user {\n      _id\n    username\n    \n    }\n  }\n}\n"]))),V=Object(D.a)(g||(g=Object(P.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n       \n      }\n    }\n  }\n"]))),T=Object(D.a)(v||(v=Object(P.a)(["\n  mutation addPost($postInput: PostInput! ) {\n  addPost(postInput: $postInput)\n       {\n        _id\n            username\n            email\n            post{\n              _id\n              instrument\n              description\n                genre\n                image\n                title\n           }\n          } }\n  "])));a(163);var $=function(e){var t,a=Object(n.useState)({email:"",password:""}),s=Object(r.a)(a,2),o=s[0],c=s[1],l=Object(E.a)(z,{update:function(t,a){console.log(a),e.history.push("/dashboard")},variable:Object(i.a)({},o)}),u=Object(r.a)(l,2),d=u[0],j=u[1].loading,p=function(e){var t=e.target,a=t.name,n=t.value;c(Object(i.a)(Object(i.a)({},o),{},Object(I.a)({},a,n)))},m=function(){var e=Object(k.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,d({variables:Object(i.a)({},o)});case 6:a=e.sent,n=a.data,console.log("data!! from mutation attempt",n),b.login(n.login.token),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("WE HAVE ERRR from mutation thing",e.t0),console.error(e.t0);case 16:c({email:"",password:""});case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"form-container",children:Object(h.jsxs)(C.a,(t={onSubmit:m,noValidate:!0},Object(I.a)(t,"noValidate",!0),Object(I.a)(t,"className",j?"loading":""),Object(I.a)(t,"children",[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)(C.a.Input,{label:"Email",placholder:"Your email address..",name:"email",type:"email",value:o.email,onChange:p}),Object(h.jsx)(C.a.Input,{label:"Password",placholder:"Your password..",name:"password",type:"password",value:o.password,onChange:p}),Object(h.jsx)(N.a,{disabled:!(o.email&&o.password),type:"submit",primary:!0,variant:"success",children:"Submit"})]),t))})};var F=function(e){var t=Object(n.useState)({}),a=Object(r.a)(t,2),s=a[0],o=a[1],c=Object(n.useState)({username:"",email:"",password:""}),l=Object(r.a)(c,2),u=l[0],d=l[1],j=Object(E.a)(V,{update:function(t,a){console.log(a),e.history.push("/dashboard")},onError:function(e){o(e.graphQLErrors[0].extensions.exception.errors),console.log(e.graphQLErrors[0].extensions.exception.errors)},variable:Object(i.a)({},u)}),p=Object(r.a)(j,2),m=p[0],x=p[1].loading,O=function(e){var t=e.target,a=t.name,n=t.value;d(Object(i.a)(Object(i.a)({},u),{},Object(I.a)({},a,n)))},f=function(){var e=Object(k.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,m({variables:Object(i.a)({},u)});case 6:a=e.sent,n=a.data,console.log("data!! from mutation attempt",n),b.login(n.addUser.token),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("WE HAVE ERRR from mutation thing",e.t0),console.error(e.t0);case 16:d({username:"",email:"",password:""});case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)(C.a,{onSubmit:function(e){f(e)},className:x?"loading":"classless",children:[Object(h.jsx)("h1",{children:"Sign Up"}),Object(h.jsx)(C.a.Input,{label:"Username",placholder:"Your username..",name:"username",type:"username",value:u.username,onChange:O}),Object(h.jsx)(C.a.Input,{label:"Email",placholder:"Your email address..",name:"email",type:"email",value:u.email,onChange:O}),Object(h.jsx)(C.a.Input,{label:"Password",placholder:"Your password..",name:"password",type:"password",value:u.password,onChange:O}),Object(h.jsx)(N.a,{disabled:!(u.username&&u.email&&u.password),type:"submit",primary:!0,variant:"success",children:"Submit"})]}),Object.keys(s).length>0&&Object(h.jsx)("div",{className:"ui error message",children:Object(h.jsx)("ul",{className:"List",children:Object.values(s).map((function(e){return Object(h.jsx)("li",{children:e},e)}))})})]})};var _=function(e){console.log("NAV HOME!!!");var t=Object(n.useState)("home"),a=Object(r.a)(t,2),s=a[0],o=a[1],i=window.location.pathname,l=("/"===i||i.substr(1),function(e,t){var a=t.name;return o(a)});return e.loggedIn,Object(h.jsx)("div",{style:{backgroundColor:"#1c2529"},children:Object(h.jsxs)(m.a,{pointing:!0,secondary:!0,children:[Object(h.jsx)(m.a.Item,{style:{color:"#fdd05a",fontSize:"2vw",textShadow:"-1px 1px 2px #000",fontFamily:"sans-serif"},name:"Dashboard",active:"dashboard"===s,onClick:l,as:c.b,to:"/dashboard"}),Object(h.jsxs)(m.a.Menu,{position:"right",children:[Object(h.jsx)(m.a.Item,{style:{color:"#fdd05a",fontSize:"2vw",textShadow:"-1px 1px 2px #000",fontFamily:"sans-serif"},name:"View All Posts",active:"viewallposts"===s,onClick:l,as:c.b,to:"/viewallposts"}),Object(h.jsx)(m.a.Item,{style:{color:"#fdd05a",fontSize:"2vw",textShadow:"-1px 1px 2px #000",fontFamily:"sans-serif"},name:"View My Posts",active:"viewmyposts"===s,onClick:l,as:c.b,to:"/viewmyposts"}),Object(h.jsx)(m.a.Item,{style:{color:"#fdd05a",fontSize:"2vw",textShadow:"-1px 1px 2px #000",fontFamily:"sans-serif"},name:"Create Post",active:"createpost"===s,onClick:l,as:c.b,to:"/createpost"}),Object(h.jsx)(m.a.Item,{className:"login",style:{color:"#fdd05a",fontSize:"2vw",textShadow:"-1px 1px 2px #000",fontFamily:"sans-serif"},name:"logout",active:"logout"===s,onClick:b.logout,as:c.b,to:"/"})]})]})})};var H,A=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Dashboard"})})},R=a(246),Y=Object(D.a)(H||(H=Object(P.a)(["\n  query posts {\n    posts {\n     _id\n     instrument\n     description\n     genre\n     image\n     title\n    }\n  }\n "]))),B=a(245),M=a(180);var U=function(){var e=Object(R.a)(Y).data,t=Object(n.useState)([]),a=Object(r.a)(t,2),s=a[0],o=a[1];return Object(n.useEffect)((function(){e&&(console.log("Checking all posts",e),o(e.posts))}),[e]),Object(h.jsxs)("div",{children:[" "," ",s.map((function(e,t){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(B.a,{children:[Object(h.jsxs)(B.a.Content,{children:["  ",Object(h.jsx)(M.a,{floated:"right",size:"mini",src:"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/016/522/original/download.jpeg?1630679706"}),Object(h.jsxs)(B.a.Header,{children:["Title: ",e.title]}),Object(h.jsxs)(B.a.Description,{children:["Instrument: ",e.instrument]}),Object(h.jsxs)(B.a.Description,{children:["Genre: ",e.genre]}),Object(h.jsxs)(B.a.Description,{children:["Description: ",e.description]})]}),Object(h.jsx)(B.a.Content,{extra:!0,children:Object(h.jsx)("div",{className:"ui two buttons",children:Object(h.jsx)(N.a,{basic:!0,color:"green",children:"Save Post"})})})]})},t)}))]})};var L=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"View My Posts"})})};a(219);var W=function(){var e=Object(n.useState)({instrument:"",genre:"",title:"",description:""}),t=Object(r.a)(e,2),a=t[0],s=t[1],o=Object(E.a)(T),c=Object(r.a)(o,2),l=c[0],u=c[1].loading,d=function(){var e=Object(k.a)(S.a.mark((function e(t){var n,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{n=l({variables:Object(i.a)({},a)}),s=n.data,console.log(s)}catch(o){console.error(o)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,o=t.value;("username"===n&&o.length<=280||"username"!==n)&&s(Object(i.a)(Object(i.a)({},a),{},Object(I.a)({},n,o)))};return Object(h.jsx)("div",{className:"form-container",children:Object(h.jsx)(C.a,{onSubmit:d,noValidate:!0,className:u?"loading":"",children:Object(h.jsxs)(C.a.Field,{children:[Object(h.jsx)("h1",{children:"Create a Post:"}),Object(h.jsx)(C.a.Input,{label:"Instrument",placholder:"Instrument..",name:"instrument",value:a.instrument,onChange:j}),Object(h.jsx)(C.a.Input,{label:"Genre",placholder:"Genre..",name:"genre",value:a.genre,onChange:j}),Object(h.jsx)(C.a.Input,{label:"Title",placholder:"Title..",name:"title",value:a.title,onChange:j}),Object(h.jsx)(C.a.Input,{className:"discription-form",label:"Description",placholder:"Description..",name:"description",value:a.description,onChange:j}),Object(h.jsx)(N.a,{className:"button-form",disabled:!Object(i.a)({},a),type:"submit",variant:"success",children:"Save Post"})]})})})},q=a(179),G=a(242),J=a(244),Q=a(239),K=a(178),X=Object(q.a)({uri:"/graphql"}),Z=Object(K.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),ee=new G.a({link:Z.concat(X),cache:new J.a});var te=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){var e=b.loggedIn();s(e)}),[]),Object(h.jsx)(Q.a,{client:ee,children:Object(h.jsxs)(c.a,{children:[a?Object(h.jsx)(_,{}):Object(h.jsx)(x,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",component:w}),Object(h.jsx)(l.a,{exact:!0,path:"/dashboard",component:A}),Object(h.jsx)(l.a,{exact:!0,path:"/viewallposts",component:U}),Object(h.jsx)(l.a,{exact:!0,path:"/viewmyposts",component:L}),Object(h.jsx)(l.a,{exact:!0,path:"/createpost",component:W}),Object(h.jsx)(l.a,{exact:!0,path:"/login",component:$}),Object(h.jsx)(l.a,{exact:!0,path:"/signup",component:F})]})]})})};o.a.render(Object(h.jsx)(te,{}),document.getElementById("root"))}},[[220,1,2]]]);
//# sourceMappingURL=main.1dd0ffaa.chunk.js.map