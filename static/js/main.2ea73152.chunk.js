(this["webpackJsonpjet-style"]=this["webpackJsonpjet-style"]||[]).push([[0],[,,,function(e,t,n){e.exports={AddBook:"AddBook_AddBook__3YRJo",form__button:"AddBook_form__button__3EZ5g",alone__button:"AddBook_alone__button__2OQe7"}},function(e,t,n){e.exports={BookList:"BookList_BookList__3nHmY",no_books:"BookList_no_books__3GMmm",alone__button:"BookList_alone__button__msbQA"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(6),r=n.n(a),s=(n(11),n(2)),l=(n(12),n(3)),j=n.n(l),i=n(0),u=function(e){var t=Object(o.useState)(""),n=Object(s.a)(t,2),c=n[0],a=n[1],r=Object(o.useState)(""),l=Object(s.a)(r,2),u=l[0],b=l[1],O=Object(o.useState)(!1),d=Object(s.a)(O,2),f=d[0],m=d[1],h=Object(o.useState)(!1),x=Object(s.a)(h,2),_=x[0],k=x[1];Object(o.useEffect)((function(){var t=Object.keys(localStorage).map((function(e){return JSON.parse(localStorage.getItem(e))}));e.setBook(t)}),[]);var p=function(t){if(t.preventDefault(),""===u&&""===c)k(!0);else{var n=Math.floor(1e5*Math.random()),o=Object.keys(localStorage).map((function(e){return JSON.parse(localStorage.getItem(e))}));console.log(o),e.setBook(o);var r={name:c,title:u};localStorage.setItem(n,JSON.stringify(r)),a(""),b(""),m(!0),k(!1)}},g=_?Object(i.jsx)("p",{children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043e\u0431\u0430 \u043f\u043e\u043b\u044f"}):null,v=f?Object(i.jsx)("button",{className:j.a.form__button,onClick:function(e){return p(e)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443"}):Object(i.jsx)("button",{className:j.a.form__button,onClick:function(e){return p(e)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"});return Object(i.jsxs)("div",{className:j.a.AddBook,children:[Object(i.jsx)("h1",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443"}),Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{children:"\u0418\u043c\u044f:"}),Object(i.jsx)("input",{name:"name",type:"text",value:c,onChange:function(e){return a(e.target.value)}}),Object(i.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438:"}),Object(i.jsx)("input",{name:"title",type:"text",value:u,onChange:function(e){return b(e.target.value)}}),v,g]})]})},b=n(4),O=n.n(b),d=function(e){var t=Object(o.useState)(!1),n=Object(s.a)(t,2),c=n[0],a=n[1],r=Object(o.useState)(""),l=Object(s.a)(r,2),j=l[0],u=l[1],b=Object(o.useState)(""),d=Object(s.a)(b,2),f=d[0],m=d[1],h=Object(o.useState)(""),x=Object(s.a)(h,2),_=x[0],k=x[1],p=Object(o.useState)(!1),g=Object(s.a)(p,2),v=g[0],S=g[1],B=Object.keys(localStorage).map((function(t){var n=JSON.parse(localStorage.getItem(t));return Object(i.jsxs)("li",{children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"\u0418\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430: "})," ",n.name]}),Object(i.jsxs)("p",{children:[" ",Object(i.jsx)("strong",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438: "})," ",n.title]}),Object(i.jsx)("button",{onClick:function(){return function(t,n){localStorage.removeItem(t),e.setBook(n)}(t,n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(i.jsx)("button",{onClick:function(e){return function(e,t){a(!0),u(t.name),m(t.title),k(e)}(t,n)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]},t)}));if(0===B.length)return Object(i.jsxs)("div",{className:O.a.no_books,children:[Object(i.jsx)("h1",{children:"\u041f\u043e\u0445\u043e\u0436\u0435 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u043a\u043d\u0438\u0433..."}),Object(i.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0430\u0440\u043e\u0447\u043a\u0443"})]});console.log(B);var y=v?Object(i.jsx)("p",{children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043e\u0431\u0430 \u043f\u043e\u043b\u044f"}):null,N=Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{children:"\u0418\u043c\u044f:"}),Object(i.jsx)("input",{name:"name",type:"text",value:j,onChange:function(e){return u(e.target.value)}}),Object(i.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438:"}),Object(i.jsx)("input",{name:"title",type:"text",value:f,onChange:function(e){return m(e.target.value)}}),Object(i.jsx)("button",{className:O.a.form__button,onClick:function(e){return function(e){if(e.preventDefault(),""===f&&""===j)S(!0);else{var t={name:j,title:f};localStorage.setItem(_,JSON.stringify(t)),u(""),m(""),S(!1),a(!1)}}(e)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),y]});return Object(i.jsxs)("ul",{className:O.a.BookList,children:[Object(i.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043d\u0438\u0433"}),c?N:B]})};var f=function(){var e=Object(o.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)("div",{className:"App",children:[n&&Object(i.jsx)(d,{book:n,setBook:c}),Object(i.jsx)(u,{setBook:c})]})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.2ea73152.chunk.js.map