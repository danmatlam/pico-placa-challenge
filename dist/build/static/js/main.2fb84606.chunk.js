(this["webpackJsonppico-and-placa"]=this["webpackJsonppico-and-placa"]||[]).push([[0],{131:function(e,n,t){e.exports=t.p+"static/media/landing.6e810a12.png"},144:function(e,n,t){e.exports=t(230)},149:function(e,n,t){},151:function(e,n,t){},230:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(6),l=t.n(c),o=(t(149),t(150),t(151),t(40)),i=t(233),u=t(234),d=t(237),s=t(38),m=t(240),f=t(13),h=t.n(f),p=(t(153),function(e){return r.a.createElement("div",{style:{padding:".9em",borderBottom:"1px solid #f5f5f5"}},e.children)}),g=t(236),E=[{day:1,endings:[1,2]},{day:2,endings:[3,4]},{day:3,endings:[5,6]},{day:4,endings:[7,8]},{day:5,endings:[9,20]}],b=function(e,n,t){var a=h()(e,"hh:mm"),r=h()(n,"hh:mm");return h()(t,"hh:mm").isBetween(a,r)},v=function(e,n,t){var a=h()(n).day();if(0===a||6===a)return!1;var r=E[a-1].endings,c=e.charAt(e.length-1),l=!!r.find((function(e){return e===parseInt(c,0)})),o=function(e){return b("6:59","9:31",e)||b("15:59","19:31",e)}(t);return l&&o},y=t(238),x=function(e){var n=e.setVisible,t=e.setResponse,c=e.handleSubmit,l=Object(a.useState)("PCB1046"),i=Object(o.a)(l,2),u=i[0],d=i[1],m=Object(a.useState)(h()().format("YYYY/MM/DD")),f=Object(o.a)(m,2),E=f[0],b=f[1],x=Object(a.useState)(h()(new Date,"HH:mm")),w=Object(o.a)(x,2),j=w[0],O=w[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={placa:u,fecha:E,hora:h()(j).format("HH:mm"),isLocked:v(u,E,j)};console.log(a),n(!0),t(a),c(a)}},r.a.createElement(p,null,r.a.createElement(g.a,{placeholder:"Placa",value:u,onChange:function(e){return d(e.target.value)}})),r.a.createElement(p,null,r.a.createElement(g.a,{placeholder:"Fecha",value:E,onChange:function(e){return b(e.target.value)}})),r.a.createElement(p,null,r.a.createElement(y.a,{value:j,onChange:function(e){return O(e)},format:"HH:mm"})),r.a.createElement(p,null,r.a.createElement(s.a,{htmlType:"submit"},"Consultar")))},w=function(e){var n=function(e){var n=e.charAt(e.length-1);n=parseInt(n,0);var t=E.find((function(e){return e.endings[0]===n||e.endings[1]===n}));return h()().day(t.day+7)}(e.placa);return r.a.createElement("div",null,"Bloqueo m\xe1s cercano:   ",h()(n).format("dddd DD/MM/YYYY"))},j=t(39),O=t(65);function C(){var e=Object(j.a)(["\n  border-radius:0 0 9px 9px;\n  flex:3;\n  font-size: 1.8rem;\n  background-color:#fafafc;\n  border-bottom: 3px solid #000000;\n  border-left: 3px solid #000000;\n  border-right: 3px solid #000000;\n  padding:.21em;\n\n"]);return C=function(){return e},e}function k(){var e=Object(j.a)(["\n  border-radius:9px 9px 0 0;\n  flex:1;\n  font-size: .9rem;\n  background-color:#000000;\n  border: 3px solid #000000;\n  color:#ffffff;\n  padding:.21rem;\n"]);return k=function(){return e},e}function S(){var e=Object(j.a)(["\n    display:flex;\n    flex-direction:column;\n    text-align: center;\n    border-radius:12px;\n    width:100%;\n\n    @media only screen and  (min-width: 0)   and (max-width: 480px)  {\n        width:60%;\n    }\n    @media only screen and  (min-width: 480px)   and (max-width: 576px)  {\n        width:60%;\n    }\n    @media only screen and  (min-width: 576px)   and (max-width: 768px)  {\n        width:60%;\n    }\n    @media only screen and  (min-width: 768px)    {\n        width:60%;\n    }\n\n     \n"]);return S=function(){return e},e}function Y(){var e=Object(j.a)(["\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    /* padding:.9em; */\n"]);return Y=function(){return e},e}var D=function(e){var n=e.placa,t=n.substring(0,n.length-1),a=n.charAt(n.length-1);return r.a.createElement($,null,r.a.createElement(I,null,r.a.createElement(L,null,"ECUADOR"),r.a.createElement(B,null,t,r.a.createElement("span",{style:{fontWeight:700}},a))))},$=O.a.div(Y()),I=O.a.div(S()),L=O.a.span(k()),B=O.a.span(C()),M=t(131),H=t.n(M),A=t(83),F=t(63);function R(){var e=Object(j.a)(["{\n        GetConsultas{\n            id,\n            placa,\n            fecha,\n            hora,\n            isLocked\n        }\n}"]);return R=function(){return e},e}function z(){var e=Object(j.a)(["\nmutation(\n  $placa: String!\n  $fecha: String!\n  $hora: String!\n  $isLocked: Boolean!\n) {\n    CreateConsulta(\n        placa: $placa\n        fecha: $fecha\n        hora: $hora\n        isLocked: $isLocked\n    ) {\n        id\n        placa\n        fecha\n        hora\n    }\n}"]);return z=function(){return e},e}var P=Object(F.b)(z()),W=Object(F.b)(R()),q=t(235),G=t(239),J=function(e){var n=e.consultas,t=n.data,a=n.loading;n.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null,r.a.createElement("h1",null,"Ultimas Consultas")),r.a.createElement(q.a,{itemLayout:"horizontal",dataSource:t&&t.GetConsultas,loading:a&&a,renderItem:function(e){return r.a.createElement(q.a.Item,{style:{padding:"1em"}},r.a.createElement(q.a.Item.Meta,{title:r.a.createElement("a",{href:"https://ant.design"},e.placa),description:"".concat(e.fecha," - ").concat(e.hora)}),e.isLocked?r.a.createElement(G.a,{color:"red"},"locked"):r.a.createElement(G.a,{color:"green"},"free"))}}))},U=function(e){h.a.locale("es");var n=Object(a.useState)(null),t=Object(o.a)(n,2),c=t[0],l=t[1],f=Object(a.useState)(!1),g=Object(o.a)(f,2),E=g[0],b=g[1],v=Object(A.b)(W),y=Object(A.a)(P),j=Object(o.a)(y,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null,r.a.createElement("h1",null,"Consulta tu pico y placa")),r.a.createElement(i.a,null,r.a.createElement(u.a,{xs:24,sm:24,md:12,lg:12,style:{display:"flex",justifyContent:"center"}},r.a.createElement("img",{src:H.a,style:{width:"72%"}})),r.a.createElement(u.a,{xs:24,sm:24,md:12,lg:12},r.a.createElement(x,{setVisible:b,setResponse:l,handleSubmit:function(e){j({variables:e}).then((function(e){e.data,e.onCompleted;v.refetch()})).catch((function(e){return console.log(e)}))}}))),r.a.createElement(i.a,null,r.a.createElement(J,{consultas:v})),r.a.createElement(d.a,{visible:E,onCancel:function(){return b(!1)},footer:r.a.createElement(s.a,{key:"submit",type:"primary",onClick:function(){return b(!1)}},"Regresar")},c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null," ",r.a.createElement(D,{placa:c.placa})),r.a.createElement(p,null,"Consulta: ".concat(h()(c.fecha).format("dddd DD/MM/YYYY")," ").concat(c.hora)),r.a.createElement(p,null,c.isLocked?r.a.createElement(m.a,{message:"No puede circular",type:"error",showIcon:!0}):r.a.createElement(m.a,{message:"Puede circular",type:"success",showIcon:!0})),r.a.createElement(p,null,r.a.createElement(w,{placa:c.placa})))))},V=t(24),N=new F.a({uri:"/graphql"}),T=function(){return r.a.createElement(V.a,{client:N},r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[144,1,2]]]);
//# sourceMappingURL=main.2fb84606.chunk.js.map