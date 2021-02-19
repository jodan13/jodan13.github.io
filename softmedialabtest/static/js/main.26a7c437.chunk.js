(this["webpackJsonpmessage-template-editor"]=this["webpackJsonpmessage-template-editor"]||[]).push([[0],{195:function(e,a,c){},196:function(e,a,c){"use strict";c.r(a);var t=c(0),s=c(37),n=c.n(s),r=c(11),l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,206)).then((function(a){var c=a.getCLS,t=a.getFID,s=a.getFCP,n=a.getLCP,r=a.getTTFB;c(e),t(e),s(e),n(e),r(e)}))},o=(c(93),c(22)),i=c(2),j=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Monthly salary"})})})})},m=function(){return Object(i.jsx)("footer",{className:"footer mt-auto py-3 bg-light",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("span",{className:"text-muted",children:"Developed by Eugene"})})})},b=c(21),d=c(203),u=c(202),p=c(205),h=c(201),x=(c(95),function(e){var a=e.referenceElement,c=e.isVisible,s=Object(t.useRef)(null),n=Object(t.useRef)(null),r=0;s.current&&a.current&&(r=s.current.offsetWidth/2);var l=Object(h.a)(a.current,s.current,{modifiers:[{name:"arrow",options:{element:n.current}},{name:"offset",options:{offset:[r,10]}}]}),j=l.styles,m=l.attributes;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",Object(o.a)(Object(o.a)({ref:s,className:"popper",style:j.popper,"data-show":c},m.popper),{},{children:["\u041c\u0420\u041e\u0422 \u2014 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043f\u043b\u0430\u0442\u044b \u0442\u0440\u0443\u0434\u0430. \u0420\u0430\u0437\u043d\u044b\u0439 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432.",Object(i.jsx)("div",{ref:n,style:j.arrow,className:"arrow"})]}))})}),O=function(){var e=Object(t.useState)(!1),a=Object(b.a)(e,2),c=a[0],s=a[1],n=Object(t.useState)(!1),r=Object(b.a)(n,2),l=r[0],j=r[1],m=Object(t.useState)({}),d=Object(b.a)(m,2),u=d[0],p=d[1],h=Object(t.useRef)(null);return Object(t.useEffect)((function(){p(l?{className:"bi bi-x-circle icon"}:{className:"bi bi-info-circle icon",onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}})}),[l]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("i",Object(o.a)({ref:h,onClick:function(){return j(!l)}},u)),Object(i.jsx)(x,{referenceElement:h,isVisible:c})]})},y=(c(96),Object(u.a)({form:"salary"})((function(e){var a=e.handleSubmit,c=e.personalIncomeTax,s=void 0===c?"":c,n=e.paymentType,r=e.salary,l=void 0===r?"":r,o=e.change,j=Object(t.useState)({salaryIncomeTax:"0",salaryEmployee:"0",salary:"0"}),m=Object(b.a)(j,2),u=m[0],p=m[1];return Object(t.useEffect)((function(){var e=Number(l.replace(/ /g,""));if(e>0){var a=s?e/.87-e:.13*e,c={salary:s?(e+a).toFixed(0):e.toFixed(0),salaryIncomeTax:a.toFixed(0),salaryEmployee:s?e.toFixed(0):(e-a).toFixed(0)};p(c)}else p({salaryIncomeTax:"0",salaryEmployee:"0",salary:"0"})}),[s,l]),Object(t.useEffect)((function(){switch(n){case"monthly salary":o("salary","80000");break;case"minimal salary":o("salary","30000");break;case"payment per day":o("salary","4000");break;case"payment per hour":o("salary","500")}}),[n,o]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container h-100",children:Object(i.jsx)("div",{className:"row justify-content-center row-cols-auto h-100",children:Object(i.jsxs)("div",{className:"col mt-5",children:[Object(i.jsx)("p",{className:"lead",children:"\u0421\u0443\u043c\u043c\u0430"}),Object(i.jsxs)("form",{onSubmit:a,children:[Object(i.jsx)("div",{className:"form-check",children:Object(i.jsxs)("label",{className:"form-check-label",children:[Object(i.jsx)(d.a,{className:"form-check-input",type:"radio",name:"paymentType",value:"monthly salary",component:"input"}),"\u041e\u043a\u043b\u0430\u0434 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446"]})}),Object(i.jsxs)("div",{className:"form-check",children:[Object(i.jsxs)("label",{className:"form-check-label",children:[Object(i.jsx)(d.a,{className:"form-check-input",type:"radio",name:"paymentType",value:"minimal salary",component:"input"}),"\u041c\u0420\u041e\u0422"]}),Object(i.jsx)(O,{})]}),Object(i.jsx)("div",{className:"form-check",children:Object(i.jsxs)("label",{className:"form-check-label",children:[Object(i.jsx)(d.a,{className:"form-check-input",type:"radio",name:"paymentType",value:"payment per day",component:"input"}),"\u041e\u043f\u043b\u0430\u0442\u0430 \u0437\u0430 \u0434\u0435\u043d\u044c"]})}),Object(i.jsx)("div",{className:"form-check mb-3",children:Object(i.jsxs)("label",{className:"form-check-label",children:[Object(i.jsx)(d.a,{className:"form-check-input",type:"radio",name:"paymentType",value:"payment per hour",component:"input"}),"\u041e\u043f\u043b\u0430\u0442\u0430 \u0437\u0430 \u0447\u0430\u0441"]})}),Object(i.jsxs)("div",{className:"d-flex personalIncomeTax",children:[Object(i.jsx)("span",{className:s?"text-muted":"",children:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0441 \u041d\u0414\u0424\u041b"}),Object(i.jsx)("div",{className:"form-check form-switch mb-3",children:Object(i.jsxs)("label",{className:"form-check-label",children:[Object(i.jsx)(d.a,{className:"form-check-input",type:"checkbox",name:"personalIncomeTax",component:"input"}),Object(i.jsx)("span",{className:s?"":"text-muted",children:"\u0411\u0435\u0437 \u041d\u0414\u0424\u041b"})]})})]}),Object(i.jsxs)("div",{className:"d-flex mb-3 salary",children:[Object(i.jsx)(d.a,{type:"text",name:"salary",className:"form-control",component:"input",onChange:function(){return console.log("onChange",e)}}),Object(i.jsx)("span",{className:"",children:"\u20bd \u0432 \u0434\u0435\u043d\u044c"})]})]}),"monthly salary"===n&&Object(i.jsx)("div",{className:"card",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("p",{className:"card-text",children:[Object(i.jsxs)("b",{children:[u.salaryEmployee," \u20bd"]})," \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043d\u0430 \u0440\u0443\u043a\u0438"]}),Object(i.jsxs)("p",{className:"card-text",children:[Object(i.jsxs)("b",{children:[u.salaryIncomeTax," \u20bd"]})," \u041d\u0414\u0424\u041b, 13% \u043e\u0442 \u043e\u043a\u043b\u0430\u0434\u0430"]}),Object(i.jsxs)("p",{className:"card-text",children:[Object(i.jsxs)("b",{children:[u.salary," \u20bd"]})," \u0437\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430 \u043e\u0442 \u043e\u043a\u043b\u0430\u0434\u0430"]})]})})]})})})})}))),f=Object(p.a)("salary"),N=Object(r.b)((function(e){return{initialValues:{paymentType:"monthly salary",personalIncomeTax:!0,salary:"60000"},personalIncomeTax:f(e,"personalIncomeTax"),salary:f(e,"salary"),paymentType:f(e,"paymentType")}}))(y),v=(c(195),Object(r.b)(null)((function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(N,Object(o.a)({onSubmit:function(e){console.log(e)}},e)),Object(i.jsx)(m,{})]})}))),g=c(6),k=c(204),T=Object(g.b)({form:k.a}),F=Object(g.c)(T);n.a.render(Object(i.jsx)(r.a,{store:F,children:Object(i.jsx)(v,{})}),document.getElementById("root")),l()},93:function(e,a,c){},95:function(e,a,c){},96:function(e,a,c){}},[[196,1,2]]]);
//# sourceMappingURL=main.26a7c437.chunk.js.map