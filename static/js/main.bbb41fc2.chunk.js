(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(74),l=a.n(s),i=(a(81),a(2)),c=a(3),o=a(5),u=a(4),p=a(6),m=(a(82),a(91),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SelectDates"},r.a.createElement("form",null,r.a.createElement("div",{className:"starting"},r.a.createElement("label",null,"Start date:"),r.a.createElement("input",{type:"text"})),r.a.createElement("div",{className:"ending"},r.a.createElement("label",null,"End date:"),r.a.createElement("input",{type:"text"})),r.a.createElement("div",{className:"button-container"},r.a.createElement("input",{type:"submit",value:"Let's go!"}))))}}]),t}(n.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="",t=this.props.year;return 0===this.props.month&&(e="January"),1===this.props.month&&(e="February"),2===this.props.month&&(e="March"),3===this.props.month&&(e="April"),4===this.props.month&&(e="May"),5===this.props.month&&(e="June"),6===this.props.month&&(e="July"),7===this.props.month&&(e="August"),8===this.props.month&&(e="September"),9===this.props.month&&(e="October"),10===this.props.month&&(e="November"),11===this.props.month&&(e="December"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,e," ",t),r.a.createElement("div",{className:"days-of-week"},r.a.createElement("h3",null,"Sun"),r.a.createElement("h3",null,"Mon"),r.a.createElement("h3",null,"Tue"),r.a.createElement("h3",null,"Wed"),r.a.createElement("h3",null,"Thu"),r.a.createElement("h3",null,"Fri"),r.a.createElement("h3",null,"Sat")))}}]),t}(n.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.saturday?"day invalid saturday":"day invalid";return r.a.createElement("div",{className:e},r.a.createElement("span",null))}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.props.isValid){var e=(this.props.isWeekend?"day weekend":"day weekday")+" "+(this.props.isFirst?"first":"")+" "+(6===this.props.dayOfWeek?"saturday":"");if(this.props.isFirst){var t,a=[];for(t=0;t<this.props.dayOfWeek;t++)a.push("invalid");return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{month:this.props.month,year:this.props.year}),a.map(function(e,t){return r.a.createElement(d,null)}),r.a.createElement("div",{className:e},r.a.createElement("span",null,this.props.dayOfMonth)))}if(this.props.isLast){var n,s=[];for(n=this.props.dayOfWeek;n<6;n++)s.push("invalid");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e},r.a.createElement("span",null,this.props.dayOfMonth)),s.map(function(e,t){return s.length===t+1?r.a.createElement(d,{key:t,saturday:!0}):r.a.createElement(d,{key:t})}),r.a.createElement("div",{class:"bottom-border"}))}return r.a.createElement("div",{className:e},r.a.createElement("span",null,this.props.dayOfMonth))}return r.a.createElement("div",{className:"day invalid"},r.a.createElement("span",null))}}]),t}(n.Component),b=a(7),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={dates:[new Date(2019,2,20),new Date(2019,2,21),new Date(2019,2,22),new Date(2019,2,23),new Date(2019,2,24),new Date(2019,2,25),new Date(2019,2,26),new Date(2019,2,27),new Date(2019,2,28),new Date(2019,2,29),new Date(2019,2,30),new Date(2019,2,31),new Date(2019,3,1),new Date(2019,3,2),new Date(2019,3,3),new Date(2019,3,4),new Date(2019,3,5),new Date(2019,3,6),new Date(2019,3,7),new Date(2019,3,8),new Date(2019,3,9),new Date(2019,3,10)]},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.dates[0],t=this.state.dates[this.state.dates.length-1];return console.log(t),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Calendar generator"),r.a.createElement(m,null),r.a.createElement("div",{className:"result"},this.state.dates.map(function(a,n){return r.a.createElement(y,{index:n,isValid:Object(b.isDate)(a),dayOfWeek:Object(b.getDay)(a),isWeekend:Object(b.isWeekend)(a),dayOfMonth:Object(b.getDate)(a),isFirst:Object(b.isFirstDayOfMonth)(a)||a===e,isLast:Object(b.isLastDayOfMonth)(a)||a===t,month:Object(b.getMonth)(a),year:Object(b.getYear)(a)})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,a){e.exports=a(194)},81:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.bbb41fc2.chunk.js.map