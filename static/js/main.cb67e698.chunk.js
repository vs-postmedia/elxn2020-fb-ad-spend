(this["webpackJsonpad-spend-tracker"]=this["webpackJsonpad-spend-tracker"]||[]).push([[0],{115:function(t,a,e){t.exports=e(151)},137:function(t,a,e){},138:function(t,a,e){},140:function(t,a,e){},141:function(t,a,e){},142:function(t,a,e){},143:function(t,a,e){},144:function(t,a,e){},145:function(t,a,e){},146:function(t,a,e){t.exports=e.p+"static/media/Shift-Bold.cdd38a86.otf"},147:function(t,a,e){t.exports=e.p+"static/media/BentonSansCond-Regular.43cd4ac7.otf"},148:function(t,a,e){t.exports=e.p+"static/media/BentonSansCond-RegItalic.69a4217c.otf"},149:function(t,a,e){t.exports=e.p+"static/media/BentonSansCond-Bold.6f6753fd.otf"},150:function(t,a,e){t.exports=e.p+"static/media/BentonSansCond-BoldItalic.a6640d89.otf"},151:function(t,a,e){"use strict";e.r(a);var n=e(0),o=e.n(n),r=e(36),c=e.n(r),i=e(37),s=e(38),l=e(43),d=e(41),u=e(39),p=e.n(u),m=["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."],f={numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},map:function(t,a,e,n,o){return(t-a)*(o-n)/(e-a)+n},getPostmediaMonth:function(t){return m[t]}},h=(e(137),function(t){return o.a.createElement("div",{className:"stat"},o.a.createElement("p",{className:"big-num ".concat(t.data.party.toLowerCase())},"$".concat(f.numberWithCommas(t.data.total))),o.a.createElement("p",{className:"label"},t.data.party))}),y=(e(138),function(t){var a=t.data,e=t.lastUpdate.split("-"),n=f.getPostmediaMonth(parseInt(e[1])-1),r=e[2];return o.a.createElement("div",{className:"summary-box"},o.a.createElement("div",{className:"stat-box"},a.map((function(t,a){return o.a.createElement(h,{data:t,key:a})}))),o.a.createElement("p",{className:"last-update"},"From Sept. 21 to ".concat(n," ").concat(r)))}),b=e(2),g=e.n(b),v=e(14),w=e(40),k=e(3),x=e(42),E=e(6),_=(e(140),E.a("%B %d"));var B,C,F,S,j=function(t){var a=t.path[0].__data__.total,e=t.path[0].__data__.date;return'\n\t\t<div class="tooltip-content">\n\t\t\t<p class="date">'.concat(_(e),'</p>\n\t\t\t<p class="total-amount">$').concat(f.numberWithCommas(a),"</p>\n\t\t</div>\n\t")},N=(e(141),Object(x.a)()),O={top:15,right:25,bottom:40,left:25};function A(){return(A=Object(w.a)(g.a.mark((function t(a){var e,n,o,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:e=t.sent,n=k.f("#charts"),o=n.node().getBoundingClientRect(),B=(o.height-O.bottom-O.top)/3,C=o.width-O.left,window.innerWidth>600&&(B=o.height,C=o.width/3-O.left-O.right),M(B,O),(r=n.selectAll("svg").data(e).enter().append("svg").attr("class",(function(t){return t.party.toLowerCase()})).style("height","".concat(B,"px")).style("width","".concat(C+O.left,"px")).append("g").attr("transform","translate(".concat(O.left,", ").concat(O.top,")"))).append("text").text((function(t){return t.party})).attr("class",(function(t){return"".concat(t.party.toLowerCase()," label-text")})),F=U(e[0].values),S=L(e[0].values),r.append("g").call($),r.append("g").call(J),r.append("g").selectAll("rect").data((function(t){return t.values})).enter().append("rect").attr("x",(function(t){return F(t.date)})).attr("y",(function(t){return S(t.total)})).attr("height",(function(t){return S(0)-S(t.total)})).attr("width",F.bandwidth()).on("mouseover touchstart",I).on("mouseout touchend",W);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var W=function(){N.hide()},I=function(t){console.log(t),t.preventDefault(),t.stopPropagation(),N.point(t.clientX,t.clientY),N.html(j(t)),N.draw()},D=function(t){var a=t.data,e=t.order;return a.forEach((function(t){t.values.forEach((function(t){t.date=k.h("%Y-%m-%d")(t.date)}))})),[].concat(Object(v.a)(a.filter((function(t){return t.party===e[0]}))),Object(v.a)(a.filter((function(t){return t.party===e[1]}))),Object(v.a)(a.filter((function(t){return t.party===e[2]}))))},M=function(t,a){return[{className:"annotation-text",data:{x:"09/21/2020"},note:{align:"middle",title:"Election called"},subject:{y1:a.top+25,y2:t-a.bottom},y:a.top-15}]},$=function(t){var a=F.domain();t.attr("transform","translate(0, ".concat(B-O.bottom,")")).attr("class","x-axis axis").call(k.a(F).tickSize(0).tickFormat(k.g("%b. %d")).tickPadding([10]).tickValues([a[0],a[a.length-1]]))},J=function(t){t.attr("class","y-axis axis").call(k.b(S).ticks(5).tickSize(-C).tickFormat((function(t){return"$".concat(f.numberWithCommas(t/1e3))}))).call((function(t){return t.select(".domain").remove()}))},L=function(t){return k.e().domain([0,k.c(t,(function(t){return parseInt(t.total)}))]).nice().range([B-O.bottom,O.top])},U=function(t){return k.d().rangeRound([0,C],.5).padding(.1).domain(t.map((function(t){return t.date})))},P=function(t){return A.apply(this,arguments)},R=(e(142),function(t){return Object(n.useEffect)((function(){P(t)})),o.a.createElement("div",{className:"daily-charts"},o.a.createElement("h2",null,"Daily Facebook ad spend ",o.a.createElement("span",{classame:"h2-small"},"($000\u2019s)")),o.a.createElement("div",{id:"charts"}),o.a.createElement("p",{className:"source"},"Source: ",o.a.createElement("a",{href:"https://www.facebook.com/ads/library/",target:"_blank",rel:"noopener noreferrer"},"Facebook Ad Library")," \u2022 Data only includes spending by the official Facebook pages for each party, except the Liberals, which also includes ads run under the \u201cAndrew Wilkinson for B.C.\u201d Facebook page. The minimum daily total provided by Facebook is $100, so parties may have spent less on those days. Data includes ads placed on Facebook, Instagram, WhatsApp and Messenger."))}),z=(e(143),function(t){Object(l.a)(e,t);var a=Object(d.a)(e);function e(){var t;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=a.call.apply(a,[this].concat(o))).state={party_data:[],party_daily:[]},t}return Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;p.a.get(this.props.dataUrl).then((function(a){t.setState({last_update:a.data.lastUpdate,party_data:a.data.party_total,party_daily:a.data.party_daily,party_order:a.data.party_total.map((function(t){return t.party}))})}))}},{key:"render",value:function(){return this.state.party_data.length>0?o.a.createElement(n.Fragment,null,o.a.createElement(y,{className:"summary-box",data:this.state.party_data,lastUpdate:this.state.last_update}),o.a.createElement(R,{data:this.state.party_daily,order:this.state.party_order})):o.a.createElement(n.Fragment,null)}}]),e}(n.Component));e(144);var T=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"This is how much each party has spent on Facebook ads since the election was called"),o.a.createElement(z,{dataUrl:"https://vs-postmedia-data.sfo2.digitaloceanspaces.com/elxn/ad-spend.json"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));e(145),e(146),e(35),e(147),e(148),e(149),e(150);c.a.render(o.a.createElement(T,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},35:function(t,a,e){t.exports=e.p+"static/media/Shift-BoldItalic.5c3edbfd.otf"}},[[115,1,2]]]);
//# sourceMappingURL=main.cb67e698.chunk.js.map