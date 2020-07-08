(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",secondary:"Cards_secondary__1wkdG",infected:"Cards_infected__-adYp",active:"Cards_active__1mwzX",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),o=a.n(c),s=(a(92),a(6)),u=a.n(s),l=a(10),i=a(74),d=a(75),p=a(84),m=a(83),v=(a(48),a(226)),f=a(230),h=a(227),b=a(228),E=a(11),g=a.n(E),y=a(23),x=a.n(y),C=a(24),_=a.n(C),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{class:g.a.container},r.a.createElement(v.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(v.a,{item:!0,component:f.a,xs:12,md:3,className:_()(g.a.card,g.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,null,"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{className:g.a.secondary,variant:"body2"},new Date(o).toUTCString()))),r.a.createElement(v.a,{item:!0,component:f.a,xs:12,md:3,className:_()(g.a.card,g.a.active)},r.a.createElement(h.a,null,r.a.createElement(b.a,null,"Active"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value-n.value-c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{gutterBottom:!0},((a.value-n.value-c.value)/a.value*100).toFixed(2),"%"))),r.a.createElement(v.a,{item:!0,component:f.a,xs:12,md:3,className:_()(g.a.card,g.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,null,"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{gutterBottom:!0},(n.value/a.value*100).toFixed(2),"%"))),r.a.createElement(v.a,{item:!0,component:f.a,xs:12,md:3,className:_()(g.a.card,g.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,null,"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{gutterBottom:!0},(c.value/a.value*100).toFixed(2),"%"))))):"Loading..."},w=a(33),O=a(34),k=a.n(O),A="https://covid19.mathdro.id/api",D=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n,r,c,o,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=A,t&&(a="".concat(A,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(A,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(A,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),F=a(45),B=a(81),L=a.n(B),S=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,i=Object(n.useState)([]),d=Object(w.a)(i,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=p.length?r.a.createElement(F.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgb(255, 7, 58)",fill:!1},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgb(107, 117, 126)",fill:!1}]},options:{title:{display:!0,text:"Global COVID Cases and Deaths"},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{gridLines:{display:!1}}]}}}):null,f=a?r.a.createElement(F.a,{data:{labels:["Infected","Active (".concat(((a.value-c.value-o.value)/a.value*100).toFixed(2),"%)"),"Recovered (".concat((c.value/a.value*100).toFixed(2),"%)"),"Deaths (".concat((o.value/a.value*100).toFixed(2),"%)")],datasets:[{label:"People",borderColor:["rgb(255, 7, 58)","rgb(45, 176, 246)","rgb(0,176,72)","rgb(107, 117, 126)"],borderWidth:2,backgroundColor:["rgba(255, 7, 58, 0.5)","rgba(45, 176, 246, 0.5)","rgba(0,176,72, 0.5)","rgba(107, 117, 126, 0.5)"],data:[a.value,a.value-c.value-o.value,c.value,o.value]}]},options:{legend:{display:!1},responsive:!0,title:{display:!0,text:"Current state in ".concat(s)},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{gridLines:{display:!1}}]}}}):null;return r.a.createElement("div",{className:L.a.container},s?f:v)},U=a(231),G=a(229),R=a(82),z=a.n(R),P=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(U.a,{variant:"outlined",className:z.a.formControl},r.a.createElement(G.a,{variant:"outlined",style:{color:"rgb(107, 117, 126)",borderBottom:"1px solid rgb(107, 117, 126)"},default:"",onChange:function(e){t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},J=a(46),M=a.n(J),Q=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,console.log(n),e.setState({data:n,country:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:M.a.container},r.a.createElement("h1",{className:M.a.heading},"COVID-19 Tracker"),r.a.createElement(P,{handleCountryChange:this.handleCountryChange}),r.a.createElement(S,{data:this.state.data,country:this.state.country}),r.a.createElement(j,{data:this.state.data}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Q,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1MQN3"}},81:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},82:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},87:function(e,t,a){e.exports=a(208)}},[[87,1,2]]]);
//# sourceMappingURL=main.5b070aba.chunk.js.map