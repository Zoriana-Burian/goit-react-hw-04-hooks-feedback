(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={stat:"Statistics_stat__2PcYh"}},,,function(e,t,n){e.exports={container:"FeedbackOptions_container__3AWgd",button:"FeedbackOptions_button__30N90"}},,function(e,t,n){e.exports={text:"Section_text__3PVQG"}},function(e,t,n){e.exports={message:"Notification_message__3l-Co"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),i=n.n(s),o=(n(13),n(3)),r=(n(14),n(2)),b=n.n(r),d=n(0),u=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{className:b.a.stat,children:["Good: ",t]}),Object(d.jsxs)("p",{className:b.a.stat,children:["Neutral: ",n]}),Object(d.jsxs)("p",{className:b.a.stat,children:["Bad: ",a]}),Object(d.jsxs)("p",{className:b.a.stat,children:["Total: ",c]}),Object(d.jsxs)("p",{className:b.a.stat,children:["Positive feedback: ",s," %"]})]})},j=n(5),l=n.n(j),h=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(d.jsxs)("div",{className:l.a.container,children:[" ",t.map((function(e){return Object(d.jsx)("button",{className:l.a.button,type:"button",onClick:function(){return n(e)},children:e},e)}))]})},O=n(7),x=n.n(O);var f=function(e){var t=e.title,n=e.children;return Object(d.jsxs)("div",{children:[t&&Object(d.jsx)("h2",{className:x.a.text,children:t}),n]})},p=n(8),g=n.n(p),v=function(e){var t=e.message;return Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:g.a.message,children:t})})};function k(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),i=Object(o.a)(s,2),r=i[0],b=i[1],j=Object(a.useState)(0),l=Object(o.a)(j,2),O=l[0],x=l[1],p=function(){return O+n+r};return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{title:"Please leave feedback",children:Object(d.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":c(n+1);break;case"neutral":b(r+1);break;case"bad":x(O+1);break;default:return}}})}),0===p()?Object(d.jsx)(v,{message:"No feedback given"}):Object(d.jsx)(f,{title:"Statistics",children:Object(d.jsx)(u,{good:n,neutral:r,bad:O,total:p(),positivePercentage:Math.round(100*n/p())})}),";"]})}var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),m()}],[[16,1,2]]]);
//# sourceMappingURL=main.4da5d540.chunk.js.map