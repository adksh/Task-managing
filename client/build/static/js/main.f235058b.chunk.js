(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{177:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),i=c.n(s),a=c(26),r=c.n(a),l=c(4),d=(c(100),c(7)),o=c(6),j=function(){var e=Object(s.useContext)(U),t=e.state,c=e.dispatch,i=Object(d.f)();return Object(n.jsx)("nav",{children:Object(n.jsxs)("div",{className:"nav-wrapper #9575cd deep-purple lighten-1 ",children:[Object(n.jsx)(o.b,{to:t?"/":"/signin",className:"brand-logo left ",children:"Trello"}),Object(n.jsx)("ul",{id:"nav-mobile",className:"right",children:t?[Object(n.jsxs)("li",{children:[" ",Object(n.jsx)("button",{className:"btn waves-effectwaves-light #9575cd red lighten-1",style:{paddingRight:"20px"},onClick:function(){localStorage.clear(),c({type:"CLEAR"}),i.push("/signin")},children:"Log out"})]},"3")]:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/signin",children:"Signin"})},"4"),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/signup",children:"Signup"})},"5")]})]})})},h=c(29),b=c.n(h),u=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1];Object(s.useEffect)((function(){fetch("/myboards",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),i(e)}))}),[]);return Object(n.jsx)("div",{children:c?Object(n.jsx)("div",{children:c.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col s12 m6",children:Object(n.jsx)("div",{className:"card blue-grey darken-1",children:Object(n.jsx)("div",{className:"card-content white-text",children:Object(n.jsx)(o.b,{to:"/board/"+e._id,children:Object(n.jsx)("span",{className:"card-title",children:e.boardtitle})})})})})})})}))}):Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{type:"Bars",color:"#9575cd",height:250,width:250,timeout:3e3,className:"center ",style:{paddingTop:"25px",display:"block"}})})})},p=c(49),x=c(30),O=c(192),f=c(17),m=c.n(f),g=function(){var e=Object(d.f)(),t=Object(s.useState)(""),c=Object(l.a)(t,2),i=c[0],a=c[1];return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"mycard",style:{marginTop:"30px"},children:Object(n.jsxs)("div",{className:"card auth-card ",style:{padding:"25px",maxWidth:"400px",margin:"10px auto"},children:[Object(n.jsx)("div",{className:"card-content black-text center",children:Object(n.jsx)("span",{className:"card-title",children:"Create Board"})}),Object(n.jsx)("input",{type:"text",value:i,placeholder:"title",onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("button",{className:"btn waves-effectwaves-light #9575cd deep-purple lighten-1",onClick:function(){fetch("/createboard",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:i})}).then((function(e){return e.json()})).then((function(t){t.error?m.a.Toast({html:t.error,classes:"#c62828 red darken-3"}):(m.a.toast({html:"Board created successfully",classes:"#43a047 green darken-1"}),e.push("/"))})).catch((function(e){console.log(e)}))},children:"Create"})]})})})},v=function(){var e=Object(s.useContext)(U),t=e.state,c=e.dispatch,i=Object(s.useState)(""),a=Object(l.a)(i,2),r=a[0],d=a[1];console.log(t),Object(s.useEffect)((function(){if(r){var e=new FormData;e.append("file",r),e.append("upload_preset","hackathon"),e.append("cloud_name","mauuu"),fetch("https://api.cloudinary.com/v1_1/mauuu/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){fetch("/uploadpic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(Object(x.a)(Object(x.a)({},t),{},{pic:e.pic}))),c({type:"UPDATEPIC",payload:e.pic})}))})).catch((function(e){console.log(e)}))}}),[r]);return Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{children:[Object(n.jsxs)("div",{style:{display:"flex",alignContent:"space-between",justifyContent:"space-between"},children:[Object(n.jsxs)("div",{style:{width:"60%",display:"flex",flexDirection:"column"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("h4",{children:t?t.name:"Loading"})}),Object(n.jsx)("div",{children:Object(n.jsx)("h6",{children:t?t.email:"Loading"})}),Object(n.jsx)("div",{})]}),Object(n.jsxs)("div",{style:{width:"40%"},children:[Object(n.jsx)("img",{style:Object(p.a)({height:"140px",width:"auto",maxWidth:"100%"},"height","auto"),src:t?t.pic:"loading"}),Object(n.jsx)("div",{class:"file-field input-field",children:Object(n.jsxs)("div",{className:"btn #9575cd deep-purple lighten-1",style:{width:"auto"},children:[Object(n.jsx)("span",{children:"Image"}),Object(n.jsx)("input",{type:"file",onChange:function(e){return t=e.target.files[0],void d(t);var t}})]})})]})]}),Object(n.jsx)("div",{children:Object(n.jsx)(g,{})})]})})},y=function(){return Object(n.jsxs)("div",{className:"main",style:{display:"flex",flexDirection:"row"},children:[Object(n.jsx)("div",{style:{width:"65%",borderRadius:"2.5%",margin:"20px"},children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("div",{className:"top",children:Object(n.jsx)("h3",{children:"Boards"})}),Object(n.jsx)(u,{})]})}),Object(n.jsx)("div",{style:{width:"30%",borderRadius:"2.5%",minWidth:"300px",margin:"20px"},children:Object(n.jsx)(v,{})})]})},w=function(){var e=Object(s.useContext)(U),t=(e.state,e.dispatch),c=Object(d.f)(),i=Object(s.useState)(""),a=Object(l.a)(i,2),r=a[0],j=a[1],h=Object(s.useState)(""),b=Object(l.a)(h,2),u=b[0],p=b[1];return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"mycard",style:{marginTop:"30px"},children:Object(n.jsxs)("div",{className:"card auth-card ",style:{padding:"25px",maxWidth:"400px",margin:"10px auto"},children:[Object(n.jsx)("div",{className:"card-content black-text center",children:Object(n.jsx)("span",{className:"card-title",children:"SignIn"})}),Object(n.jsx)("input",{type:"text",value:r,placeholder:"email",onChange:function(e){return j(e.target.value)}}),Object(n.jsx)("input",{type:"password",value:u,placeholder:"password",onChange:function(e){return p(e.target.value)}}),Object(n.jsx)("button",{className:"btn waves-effectwaves-light #9575cd deep-purple lighten-1",onClick:function(){fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:u})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?(m.a.toast({html:e.error,classes:"#c62828 red darken-3"}),console.log(e.error)):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),m.a.toast({html:e.message,classes:"#43a047 green darken-1",message:"Successfully Signed in"}),c.push("/dashboard"))})).catch((function(e){console.log(e)}))},children:"Signin"}),Object(n.jsx)("h5",{className:"black-text center",children:Object(n.jsx)(o.b,{to:"/signup",children:"Do not have an account"})})]})})})},N=function(){var e=Object(d.f)(),t=Object(s.useState)(""),c=Object(l.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)(""),j=Object(l.a)(r,2),h=j[0],b=j[1],u=Object(s.useState)(""),p=Object(l.a)(u,2),x=p[0],O=p[1];return Object(n.jsx)("div",{className:"mycard",style:{marginTop:"30px"},children:Object(n.jsxs)("div",{className:"card auth-card ",style:{padding:"25px",maxWidth:"400px",margin:"10px auto"},children:[Object(n.jsx)("div",{className:"card-content black-text center",children:Object(n.jsx)("span",{className:"card-title",children:"SignUp"})}),Object(n.jsx)("input",{type:"text",value:i,placeholder:"name",onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("input",{type:"text",value:h,placeholder:"email",onChange:function(e){return b(e.target.value)}}),Object(n.jsx)("input",{type:"password",value:x,placeholder:"password",onChange:function(e){return O(e.target.value)}}),Object(n.jsx)("button",{class:"btn waves-effectwaves-light #9575cd deep-purple lighten-1",onClick:function(){fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,email:h,password:x})}).then((function(e){return e.json()})).then((function(t){t.error?m.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(m.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)}))},children:"SignUp"}),Object(n.jsx)("h5",{className:"black-text center",children:Object(n.jsx)(o.b,{to:"/signin",children:"Already have an account"})})]})})},S=function(e){var t=Object(s.useState)([]),c=Object(l.a)(t,2),i=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("/todocard/".concat(e.result.board._id),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{className:"center ",style:{padding:"2.5%",minWidth:"200px"},children:[Object(n.jsx)("h4",{children:"To-Do"}),i.map((function(t){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{class:"card blue-grey darken-1",style:{margin:"6px",marginBottom:"4px"},children:Object(n.jsxs)("div",{class:"card-content white-text",style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h6",{className:"center",children:t.title}),Object(n.jsx)(o.b,{to:"/card/"+e.result.board._id+"/"+t._id,children:Object(n.jsx)("span",{className:"card-title",children:t.title})})]}),Object(n.jsx)("div",{})]})})})}))]})})},C=function(e){var t=Object(s.useState)([]),c=Object(l.a)(t,2),i=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("/indevcard/".concat(e.result.board._id),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{className:"center ",style:{padding:"2.5%",minWidth:"200px"},children:[Object(n.jsx)("h4",{children:"On-It"}),i.map((function(t){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{class:"card blue-grey darken-1",style:{margin:"6px",marginBottom:"4px"},children:Object(n.jsxs)("div",{class:"card-content white-text",style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h6",{className:"center",children:t.title}),Object(n.jsx)(o.b,{to:"/card/"+e.result.board._id+"/"+t._id,children:Object(n.jsx)("span",{className:"card-title",children:t.title})})]}),Object(n.jsx)("div",{})]})})})}))]})})},k=function(e){var t=Object(s.useState)([]),c=Object(l.a)(t,2),i=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("/torev/".concat(e.result.board._id),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{className:"center ",style:{padding:"2.5%",minWidth:"200px"},children:[Object(n.jsx)("h4",{children:"Review"}),i.map((function(t){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{class:"card blue-grey darken-1",style:{margin:"6px",marginBottom:"4px"},children:Object(n.jsxs)("div",{class:"card-content white-text",style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h6",{className:"center",children:t.title}),Object(n.jsx)(o.b,{to:"/card/"+e.result.board._id+"/"+t._id,children:Object(n.jsx)("span",{className:"card-title",children:t.title})})]}),Object(n.jsx)("div",{})]})})})}))]})})},T=function(e){var t=Object(s.useState)([]),c=Object(l.a)(t,2),i=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("/finished/".concat(e.result.board._id),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{className:"center ",style:{padding:"2.5%",minWidth:"200px"},children:[Object(n.jsx)("h4",{children:"Finished"}),i.map((function(t){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{class:"card blue-grey darken-1",style:{margin:"6px",marginBottom:"4px"},children:Object(n.jsxs)("div",{class:"card-content white-text",style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h6",{className:"center",children:t.title}),Object(n.jsx)(o.b,{to:"/card/"+e.result.board._id+"/"+t._id,children:Object(n.jsx)("span",{className:"card-title",children:t.title})})]}),Object(n.jsx)("div",{})]})})})}))]})})},B=function(e){var t=Object(s.useState)(""),c=Object(l.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)(""),d=Object(l.a)(r,2),o=d[0],j=d[1],h=Object(s.useState)(""),b=Object(l.a)(h,2),u=b[0],p=b[1];return Object(n.jsx)("div",{className:"mycard",style:{marginTop:"30px"},children:Object(n.jsxs)("div",{className:"card auth-card ",style:{padding:"25px",maxWidth:"400px",margin:"10px auto"},children:[Object(n.jsx)("div",{className:"card-content black-text center",children:Object(n.jsx)("span",{className:"card-title",children:"Create Task"})}),Object(n.jsx)("input",{type:"text",value:i,placeholder:"title",onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("input",{type:"text",value:u,placeholder:"description",onChange:function(e){return p(e.target.value)}}),Object(n.jsxs)("select",{style:{display:"block"},value:o,onChange:function(e){return j(e.target.value)},children:[Object(n.jsx)("option",{children:"Click Me"}),Object(n.jsx)("option",{value:"todo",children:"To Do"}),Object(n.jsx)("option",{value:"indevelopment",children:"In Development"}),Object(n.jsx)("option",{value:"inreview",children:"In Review"}),Object(n.jsx)("option",{value:"finished",children:"Finished"})]}),Object(n.jsx)("button",{className:"btn waves-effectwaves-light #9575cd deep-purple lighten-1",onClick:function(){fetch("/createcard/".concat(e.boardid),{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:i,status:o,description:u})}).then((function(e){return e.json()})).then((function(e){e.error?(m.a.toast({html:e.error,classes:"#c62828 red darken-3"}),console.log(e.error)):m.a.toast({html:"Board created successfully",classes:"#43a047 green darken-1"})})).catch((function(e){console.log(e)}))},children:"Create"})]})})},D=c(193),I=c(197),R=c(196),E=c(198),_=function(e){var t=Object(s.useState)(!1),c=Object(l.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)([]),d=Object(l.a)(r,2),o=d[0],j=d[1],h=function(){return a(!1)},b=Object(s.useState)(""),u=Object(l.a)(b,2),p=u[0],x=u[1],O=Object(s.useState)([]),f=Object(l.a)(O,2),m=f[0],g=f[1];Object(s.useEffect)((function(){g(e.result.board.members)}),[m]);var v=Object(D.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}}}}))();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:e.result.boardtitle}),Object(n.jsxs)("div",{className:v.root,children:[Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[m.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(I.a,{style:{padding:"5px"},alt:e.name,src:e.pic})})})),Object(n.jsx)("button",{class:"btn waves-effectwaves-light #9575cd deep-purple lighten-1",onClick:function(){return a(!0)},children:"Add User"})]}),Object(n.jsxs)(R.a,{show:i,onHide:h,animation:!1,children:[Object(n.jsx)(R.a.Header,{closeButton:!0,children:Object(n.jsx)(R.a.Title,{children:"Modal heading"})}),Object(n.jsxs)(R.a.Body,{children:[Object(n.jsx)("input",{type:"text",value:p,placeholder:"Search",onChange:function(e){return t=e.target.value,x(t),void fetch("/search-user",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(e){j(e.user)}));var t}}),Object(n.jsx)("ul",{className:"collection",children:o.map((function(t){return Object(n.jsx)("li",{className:"collection-item",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:t.email}),Object(n.jsx)("div",{children:Object(n.jsx)(E.a,{onClick:function(){return c=t._id,void fetch("/add/".concat(c,"/").concat(e.result.board._id),{method:"put",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e.members),g(e.members),console.log(m)}));var c},children:"Add"})})]})})}))})]}),Object(n.jsx)(R.a.Footer,{children:Object(n.jsx)(E.a,{variant:"secondary",onClick:h,children:"Close"})})]})]})]})},A=function(){var e=Object(d.g)().id,t=Object(s.useState)(""),c=Object(l.a)(t,2),i=c[0],a=c[1];Object(s.useEffect)((function(){fetch("/board/".concat(e),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),console.log(e.board.boardtitle),a(e)}))}),[]);return Object(n.jsx)("div",{children:i?Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"center",children:i.board.boardtitle}),Object(n.jsxs)(O.a,{style:{padding:"0%",margin:"40px"},children:[Object(n.jsx)("div",{children:Object(n.jsx)(_,{result:i})}),Object(n.jsx)("div",{})]}),Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(n.jsxs)(O.a,{className:"#9575cd deep-purple lighten-1 left",style:{width:"75%",marginTop:"5px",padding:"0%",display:"flex",flexDirection:"row",justifyContent:"space-around",minWidth:"950px",marginRight:"10px"},children:[Object(n.jsx)("div",{style:{width:"20%",borderRadius:"2.5%",margin:"20px"},children:Object(n.jsx)(S,{result:i})}),Object(n.jsx)("div",{style:{width:"20%",borderRadius:"2.5%",margin:"20px"},children:Object(n.jsx)(C,{result:i})}),Object(n.jsx)("div",{style:{width:"20%",borderRadius:"2.5%",margin:"20px"},children:Object(n.jsx)(k,{result:i})}),Object(n.jsx)("div",{style:{width:"20%",borderRadius:"2.5%",margin:"20px"},children:Object(n.jsx)(T,{result:i})})]}),Object(n.jsx)("div",{style:{width:"28%",marginTop:"5px",marginRight:"10px",minWidth:"250px"},children:Object(n.jsx)(B,{boardid:e})})]})]}):Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{type:"Bars",color:"#9575cd",height:250,width:250,timeout:3e3,className:"center ",style:{paddingTop:"35px"}})})})},W=function(){var e=Object(d.g)().id;console.log(e);var t=Object(s.useState)(""),c=Object(l.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)([]),o=Object(l.a)(r,2),j=o[0],h=o[1],u=Object(s.useState)(""),p=Object(l.a)(u,2),x=p[0],f=p[1];Object(s.useEffect)((function(){fetch("/card/".concat(e),{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){f(e),console.log(e)})).catch((function(e){console.log(e)}))}),[x]);return Object(n.jsx)("div",{children:x?Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{style:{display:"flex",flexDirection:"row",minWidth:"900px",margin:"20px auto",marginRight:"35px",justifyContent:"space-around"},children:[Object(n.jsx)("div",{class:"card blue-grey darken-1",style:{borderRadius:"2%",width:"60%"},children:Object(n.jsxs)("div",{class:"card-content white-text",children:[Object(n.jsx)("span",{class:"card-title",children:x.card.title}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:x.card.description}),"  ",Object(n.jsx)("br",{}),Object(n.jsx)("span",{class:"card-title",children:"Status"}),Object(n.jsxs)("select",{style:{display:"block"},value:i,onChange:function(e){return a(e.target.value)},children:[Object(n.jsx)("option",{children:"Update Status"}),Object(n.jsx)("option",{value:"todo",children:"To Do"}),Object(n.jsx)("option",{value:"indevelopment",children:"In Development"}),Object(n.jsx)("option",{value:"inreview",children:"In Review"}),Object(n.jsx)("option",{value:"finished",children:"Finished"})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"btn waves-effectwaves-light #9575cd deep-purple lighten-1",onClick:function(){return console.log(i,e),void fetch("/status",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:i})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},children:"update"})})]})}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{class:"card blue-grey darken-1",style:{borderRadius:"2%",width:"30%",minWidth:"300px"},children:Object(n.jsxs)("div",{class:"card-content white-text",children:[Object(n.jsx)("span",{class:"card-title",children:"Discussion"}),Object(n.jsx)("br",{}),Object(n.jsx)("form",{onSubmit:function(t){var c;t.preventDefault(),c=t.target[0].value,fetch("/comment/".concat(e),{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({text:c})}).then((function(e){return e.json()})).then((function(e){console.log(e),h(e.comments)})).catch((function(e){console.log(e)}))},children:Object(n.jsx)("input",{type:"text",placeholder:"Add comment with your name"})}),j.map((function(e){return Object(n.jsx)("li",{className:"collection-item",children:Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:e})})})}))]})})})]})}):Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{type:"Bars",color:"#9575cd",height:250,width:250,timeout:3e3,className:"center ",style:{paddingTop:"35px"}})})})},J=function(e,t){return"USER"==t.type?t.payload:"UPDATEPIC"==t.type?Object(x.a)(Object(x.a)({},e),{},{pic:t.payload}):"CLEAR"==t.type?null:e},U=Object(s.createContext)(),z=function(){var e=Object(d.f)(),t=Object(s.useContext)(U),c=(t.state,t.dispatch);return Object(s.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?(c({type:"USER",payload:t}),e.push("/dashboard")):e.push("/signin")}),[]),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/dashboard",children:Object(n.jsx)(y,{})}),Object(n.jsx)(d.a,{path:"/signin",children:Object(n.jsx)(w,{})}),Object(n.jsx)(d.a,{path:"/signup",children:Object(n.jsx)(N,{})}),Object(n.jsx)(d.a,{path:"/board/:id",children:Object(n.jsx)(A,{})}),Object(n.jsx)(d.a,{path:"/card/:boardid/:id",children:Object(n.jsx)(W,{})})]})};var F=function(){var e=Object(s.useReducer)(J,null),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(n.jsx)(U.Provider,{value:{state:c,dispatch:i},children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(j,{}),Object(n.jsx)(z,{})]})})};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.f235058b.chunk.js.map