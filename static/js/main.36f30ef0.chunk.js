(this["webpackJsonpprotons-react-test"]=this["webpackJsonpprotons-react-test"]||[]).push([[0],{29:function(e,a,t){e.exports=t(63)},34:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(8),s=t.n(l),i=(t(34),t(23)),r=t(24),m=t(28),o=t(26),u=t(27),d=t(2),p=t(25),E=t.n(p),v=t(4),b=t.n(v),N=t(6),f=t(9),h=function(e){var a=e.currentUser,t=e.updateUser,l=e.setModalIsOpen,s=Object(n.useState)(a),i=Object(d.a)(s,2),r=i[0],m=i[1],o=function(e){var a=e.target,t=a.name,n=a.value,c=Object(f.a)(Object(f.a)({},r),{},Object(N.a)({},t,n));console.log("Hell",r),m(c),console.log("checking",c),console.log("checking2",n)};return Object(n.useEffect)((function(){console.log("Hello Check")}),[]),c.a.createElement("div",{className:"model_box"},c.a.createElement("div",{className:"model_box_right"},c.a.createElement("h5",{className:"center"},"Edit User",c.a.createElement("span",{className:"btn-floating pulse right cancel-btn",onClick:function(){l(!1)}},c.a.createElement("i",{className:"material-icons right"},"cancel")," "))),c.a.createElement("div",{className:"row"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r.id,r),console.log("Testing SUbmit",r.id)},className:"col s12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{placeholder:"Name",type:"text",className:"validate",name:"name",value:r.name,onChange:o})),c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{placeholder:"E-mail",type:"email",className:"validate",name:"email",value:r.email,onChange:o})),c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{placeholder:"Phone",type:"text",className:"validate",name:"phone",value:r.phone,onChange:o})),c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{placeholder:"Website",type:"text",className:"validate",name:"website",value:r.website,onChange:o})),c.a.createElement("button",{className:"btn waves-effect waves-light modal-submit modal-buttons",type:"submit",name:"action"},"Submit",c.a.createElement("i",{className:"material-icons right"},"send")),c.a.createElement("button",{onClick:function(){return l(!1)},className:"btn waves-effect waves-light modal-cancel modal-buttons",type:"submit",name:"action"},"Cancel",c.a.createElement("i",{className:"material-icons"},"cancel"))))))},g=function(){return c.a.createElement("div",{className:"spinner center"},c.a.createElement("div",{className:"dot1"}),c.a.createElement("div",{className:"dot2"}))};b.a.setAppElement("#root");var O=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)(!1),i=Object(d.a)(s,2),r=i[0],m=i[1],o=Object(n.useState)(!1),p=Object(d.a)(o,2),v=(p[0],p[1]),N=Object(n.useState)([]),f=Object(d.a)(N,2),O=f[0],j=f[1],w=Object(n.useState)({id:null,name:"",email:"",phone:"",website:""}),y=Object(d.a)(w,2),k=y[0],C=y[1];Object(n.useEffect)((function(){E.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){console.log(e),l(e.data.slice(0,10))}))}),[]);var S=t.length?t.map((function(e){return c.a.createElement("div",{className:"col s12 m3"},c.a.createElement("div",{className:"card checking",key:e.id},c.a.createElement("div",{className:"card-content"},c.a.createElement("img",{src:"https://avatars.dicebear.com/v2/avataaars/".concat(e.username,".svg?options[mood][]=happy")}),c.a.createElement("p",{className:"user_name"},e.name),c.a.createElement("p",{className:"user_details"},c.a.createElement("i",{className:"tiny material-icons"},"email")," ",e.email),c.a.createElement("p",{className:"user_details"},c.a.createElement("i",{className:"tiny material-icons"},"phone")," ",e.phone),c.a.createElement("p",{className:"user_details"},c.a.createElement("i",{className:"tiny material-icons"},"web")," ",e.website)),c.a.createElement("div",{className:"card-action center"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col s4"},c.a.createElement("span",{className:"like-icon icons",onClick:function(){!function(e){var a=O.includes(e);j(a?O.filter((function(a){return e!==a})):[].concat(Object(u.a)(O),[e])),console.log(O)}(e.id)}},c.a.createElement("i",{className:O.includes(e.id)?"material-icons red-text":"material-icons"},"favorite"))),c.a.createElement("div",{class:"col s4"},c.a.createElement("span",{className:"edit-icon icons",onClick:function(){!function(e){m(!0),v(!0),C(e)}(e)}},c.a.createElement("i",{className:"material-icons"},"edit"))),c.a.createElement("div",{class:"col s4"},c.a.createElement("span",{className:"delete-icon icons",onClick:function(){var a;a=e.id,l(t.filter((function(e){return e.id!==a})))}},c.a.createElement("i",{className:"material-icons"},"delete")))))))})):c.a.createElement(g,null);return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement("div",{className:"row"},S,c.a.createElement(b.a,{className:"modal-box-con",isOpen:r,shouldCloseOnOverlayClick:!0,onRequestClose:function(){return m(!1)}},c.a.createElement(h,{setModalIsOpen:m,setEditing:v,currentUser:k,updateUser:function(e,a){m(!1),v(!1),l(t.map((function(t){return t.id===e?a:t})))}})))))},j=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(O,null))}}]),t}(n.Component);s.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.36f30ef0.chunk.js.map