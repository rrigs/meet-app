(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{191:function(t,e,n){},192:function(t,e,n){},387:function(t,e,n){},388:function(t,e,n){"use strict";n.r(e);var a=n(3),r=n(1),s=n.n(r),c=n(57),o=n.n(c),i=(n(191),n(9)),u=n(14),l=n(11),h=n(10),f=(n(192),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={show:!1,showButton:"show details"},t.showDetails=function(){!0===t.state.show?t.setState({show:!1,showButton:"show details"}):t.setState({show:!0,showButton:"hide details"})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsx)("div",{className:"summary",children:Object(a.jsx)("h1",{children:t.summary})}),Object(a.jsxs)("div",{className:"eventInfo_collapsed",children:[Object(a.jsxs)("span",{className:"startDateTime",children:[t.start.dateTime," (",t.start.timeZone," Standard Time)"]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"location",children:["@",t.summary," | ",t.location]})]}),this.state.show&&Object(a.jsxs)("div",{className:"detailInfo",children:[Object(a.jsx)("h2",{children:"About event:"}),Object(a.jsx)("div",{className:"description",children:t.description}),Object(a.jsx)("a",{className:"eventLink",target:"_blank",rel:"noreferrer",href:t.htmlLink,children:"See details on Google Calender"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"showDetails",onClick:this.showDetails,children:this.state.showButton})})]})}}]),n}(r.Component)),d=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("ul",{className:"EventList",children:this.props.events.map((function(t){return Object(a.jsx)("li",{children:Object(a.jsx)(f,{event:t})},t.id)}))})}}]),n}(r.Component),v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).getStyle=function(){return{color:a.color}},a.color=null,a.className=null,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),className:this.className,children:this.props.text})})}}]),n}(r.Component),j=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).color="blue",a.className="info",a}return n}(v),b=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).getStyle=function(){return{color:a.color,fontWeight:"600"}},a.color="red",a.className="error",a}return n}(v),p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).getStyle=function(){return{color:a.color,fontWeight:"600",fontSize:"180px"}},a.color="orange",a.className="warning",a}return n}(v),m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={locations:t.props.locations,query:"",suggestions:[],showSuggestions:!1},t.handleInputChanged=function(e){t.setState({showSuggestions:!0});var n=e.target.value,a=t.props.locations.filter((function(t){return t.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return t.setState({query:n,suggestions:a,infoText:"",warningText:""});t.setState({query:n,warningText:"",infoText:"We can not find the city you are looking for. Please try another city"}),(n.includes("5678")||n.includes("1234"))&&t.setState({query:n,warningText:"Warning!",infoText:""})},t.handleItemClicked=function(e){t.setState({query:e,suggestions:[],showSuggestions:!1,infoText:"",warningText:""}),t.props.updateEvents(e)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)(j,{className:"info",text:this.state.infoText}),Object(a.jsx)(p,{className:"warning",text:this.state.warningText}),Object(a.jsx)("label",{children:"Name of city: "}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{label:"City name",type:"text",className:"citySearchInput",value:this.state.query,onChange:this.handleInputChanged}),Object(a.jsxs)("ul",{className:this.state.showSuggestions?"suggestions showSuggestions":"display-none",children:[this.state.suggestions.map((function(e){return Object(a.jsx)("li",{className:"suggestionCity",onClick:function(){return t.handleItemClicked(e)},children:e},e)})),Object(a.jsx)("li",{onClick:function(){return t.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})})]})]})]})}}]),n}(r.Component),O=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={numberOfEvents:32},t.submitNumber=function(e){var n=e.target.value;n>32||n<1||""===n?t.setState({infoText:"Please enter number between 1 ~ 32",warningText:"",numberOfEvents:n}):isNaN(n)?(t.setState({infoText:"Please enter number",numberOfEvents:n,warningText:""}),(n.includes("efgh")||n.includes("abcd"))&&t.setState({numberOfEvents:n,warningText:"Warning!",infoText:""})):(t.props.updateEvents(null,n),t.setState({numberOfEvents:n,infoText:"",warningText:""}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"numberOfEvents",children:[Object(a.jsx)(b,{text:this.state.infoText}),Object(a.jsx)(p,{text:this.state.warningText}),Object(a.jsx)("label",{children:"Number of Events: "}),Object(a.jsx)("input",{type:"text",className:"numberInput",value:this.state.numberOfEvents,onChange:this.submitNumber})]})}}]),n}(r.Component),g=n(163),x=n(12),w=function(t){var e=t.events;Object(r.useEffect)((function(){o((function(){return u()}))}),[e]);var n=Object(r.useState)([]),s=Object(g.a)(n,2),c=s[0],o=s[1],i=["#5ed3f3","#f7df1e","#6ab848","#1068ad","#de2938"],u=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(t){var n=e.filter((function(e){return e.summary.split(" ").includes(t)})).length;return{name:t,value:n}}))};return Object(a.jsx)(x.e,{height:400,children:Object(a.jsx)(x.d,{width:400,height:400,children:Object(a.jsx)(x.c,{data:u(),cx:120,cy:180,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(t){var e=t.name,n=t.percent;return"".concat(e," ").concat((100*n).toFixed(0),"%")},children:c.map((function(t,e){return Object(a.jsx)(x.b,{fill:i[e]},e)}))})})})},y=n(21),k=n.n(y),S=n(44),N=n(164),E=n(89),C=n.n(E),T=n(90),I=n.n(T),W=function(t){var e=t.map((function(t){return t.location}));return Object(N.a)(new Set(e))},A=function(){var t=Object(S.a)(k.a.mark((function t(){var e,n,a,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return I.a.start(),t.next=3,L();case 3:if(!(e=t.sent)){t.next=13;break}return D(),n="https://t5q4tkizkc.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(e,"/32"),t.next=9,C.a.get(n);case 9:return(a=t.sent).data&&(r=W(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),I.a.done(),t.abrupt("return",{events:a.data.events,locations:r});case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=Object(S.a)(k.a.mark((function t(){var e,n,a,r,s,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("access_token"),t.t0=e,!t.t0){t.next=6;break}return t.next=5,q(e);case 5:t.t0=t.sent;case 6:if(n=t.t0,e&&n){t.next=21;break}return t.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),t.next=13,a.get("code");case 13:if(r=t.sent){t.next=20;break}return t.next=17,C.a.get("https://t5q4tkizkc.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=t.sent,c=s.data.authUrl,t.abrupt("return",window.location.href=c);case 20:return t.abrupt("return",r&&U(r));case 21:return t.abrupt("return",e);case 22:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q=function(){var t=Object(S.a)(k.a.mark((function t(e){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(e)).then((function(t){return t.json()})).catch((function(t){return t.json()}));case 2:return n=t.sent,t.abrupt("return",!n.error);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(){if(window.history.pushState&&window.location.pathname){var t=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",t)}else t=window.location.protocol+"//"+window.location.host,window.history.pushState("","",t)},U=function(){var t=Object(S.a)(k.a.mark((function t(e){var n,a,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D(),n=encodeURIComponent(e),t.next=4,fetch("https://t5q4tkizkc.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(t){return t.json()})).catch((function(t){return t}));case 4:return a=t.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=(n(387),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:32},t.getData=function(){var e=t.state,n=e.locations,a=e.events;return n.map((function(t){var e=a.filter((function(e){return e.location===t})).length;return{city:t.split(", ").shift(),number:e}}))},t.updateEvents=function(e,n){var a=t.state,r=a.currentLocation,s=a.numberOfEvents;e?A().then((function(n){var a=("all"===e?n.events:n.events.filter((function(t){return t.location===e}))).slice(0,s);return t.setState({events:a,currentLocation:e,locations:n.locations})})):A().then((function(e){var a=("all"===r?e.events:e.events.filter((function(t){return t.location===r}))).slice(0,n);return t.setState({events:a,numberOfEvents:n,locations:e.locations})}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.mounted=!0,A().then((function(e){t.mounted&&t.setState({events:e.events,locations:e.locations})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var t=this.getData().sort((function(t,e){return t.city>e.city?1:-1}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(m,{updateEvents:this.updateEvents,locations:this.state.locations}),Object(a.jsx)(O,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(a.jsxs)("div",{className:"data-vis-wrapper",children:[Object(a.jsx)(x.e,{height:400,children:Object(a.jsx)(w,{events:this.state.events})}),Object(a.jsx)(x.e,{height:400,children:Object(a.jsxs)(x.g,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(a.jsx)(x.a,{}),Object(a.jsx)(x.i,{type:"category",dataKey:"city",name:"City"}),Object(a.jsx)(x.j,{type:"number",dataKey:"number",name:"Number of events",allowDecimals:!1}),Object(a.jsx)(x.h,{cursor:{strokeDasharray:"3 3"}}),Object(a.jsx)(x.f,{data:t,fill:"#8884d8"})]})})]}),Object(a.jsx)(d,{events:this.state.events})]})}}]),n}(r.Component)),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var J=n(162);o.a.render(Object(a.jsxs)(s.a.StrictMode,{children:[Object(a.jsx)("h1",{children:"Meet App"}),Object(a.jsx)(z,{})]}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/meetv2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/meetv2","/service-worker.js");_?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):B(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(e,t)}))}}(),J.config("2acc39fb1afe48cea16db5a46310390a").install()}},[[388,1,2]]]);
//# sourceMappingURL=main.5af8d99e.chunk.js.map