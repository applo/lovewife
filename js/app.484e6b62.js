(function(t){function s(s){for(var e,c,r=s[0],o=s[1],l=s[2],v=0,f=[];v<r.length;v++)c=r[v],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);u&&u(s);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,s=0;s<i.length;s++){for(var a=i[s],e=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(e=!1)}e&&(i.splice(s--,1),t=c(c.s=a[0]))}return t}var e={},n={app:0},i=[];function c(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=e,c.d=function(t,s,a){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)c.d(a,e,function(s){return t[s]}.bind(null,e));return a},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"034f":function(t,s,a){"use strict";a("85ec")},"162c":function(t,s,a){},"173c":function(t,s,a){t.exports=a.p+"img/result.e064ea5d.png"},3247:function(t,s,a){"use strict";a("ca46")},"3b8e":function(t,s,a){t.exports=a.p+"img/cy.c7f6bb9f.png"},4571:function(t,s,a){"use strict";a("aa97")},"48fd":function(t,s,a){},5033:function(t){t.exports=JSON.parse('{"count":70483,"imgCount":3306,"voiceCount":590,"loveWord":{"老婆":276,"爱你":405,"小宝":414},"longMsg":{"content":"收到你的信啦！今天我还跟胡雨伦讲到三亚的事情，晚上你给我写的信就是关于三亚的照片的，真的还想再去一次养老旅游呀，还想喝椰子，吃海鲜炒饭，还想穿好多好多美美的衣服！！！要穿着拖鞋，和老公在路上踢踏踢踏地走，然后偷偷到角落里面去亲亲mua！","time":"2021-12-16 16:56:34"},"latestMsg":{"content":"啊，小宝好厉害，剩下那张卡片被你找到啦，今天早早起来啦，哭唧唧","user":"老公大人","time":"2021-09-29 05:20:20","hour":5},"mostWord":{"content":"捂脸","count":2343},"monthGroup":[[1,4738],[2,3413],[3,5357],[4,6044],[5,6901],[6,4163],[7,3976],[8,2939],[9,8691],[10,7510],[11,8746],[12,6677]],"hourGroup":[[0,343],[1,56],[2,72],[3,4],[4,1],[5,53],[6,255],[7,1495],[8,2007],[9,2650],[10,3283],[11,6739],[12,7462],[13,5348],[14,3747],[15,3512],[16,4840],[17,6354],[18,6310],[19,4865],[20,4673],[21,2880],[22,2273],[23,1260]]}')},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"},on:{"!click":function(s){return s.stopPropagation(),t.next.apply(null,arguments)}}},[t.isMobile?[1===t.step?a("FirstPage",{staticClass:"delay box",on:{start:t.next}}):t._e(),2===t.step?a("SecondPage",{staticClass:"delay box",nativeOn:{click:function(s){return t.next.apply(null,arguments)}}}):t._e(),3===t.step?a("ThirdPage",{staticClass:"delay box",on:{next:t.next}}):t._e(),4===t.step?a("ForthPage",{staticClass:"delay box",on:{next:t.next}}):t._e(),5===t.step?a("FifthPage",{staticClass:"delay box",on:{next:t.next}}):t._e(),6===t.step?a("SixthPage",{staticClass:"delay box",on:{next:t.next}}):t._e(),7===t.step?a("SeventhPage",{staticClass:"delay box",on:{next:t.next}}):t._e(),8===t.step?a("EighthPage",{staticClass:"delay box",on:{next:t.next}}):t._e(),9===t.step?a("NinthPage",{staticClass:"delay box",on:{next:t.next}}):t._e(),9!==t.step?a("div",{staticClass:"footer"}):t._e(),a("div",{class:t.handleMask})]:[t._v(" 请用手机查看 ")]],2)},i=[],c=(a("ac1f"),a("00b4"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"box"},[t._m(0),t._m(1),a("div",{staticClass:"star"},[a("div",{staticClass:"circle",on:{click:function(s){return t.$emit("start")}}},[a("div",{staticClass:"left",on:{click:function(s){return t.$emit("start")}}},[t._v("→")])]),a("div",{staticClass:"label",on:{click:function(s){return t.$emit("start")}}},[t._v("点击开启")])])])}),r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"title"},[a("div",{staticClass:"a"},[t._v("2021")]),a("div",{staticClass:"b"},[t._v(" WECHAT "),a("br"),t._v(" REPORT ")]),a("div",{staticClass:"c"},[t._v("年度聊天报告")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"human"},[e("div",{staticClass:"boy"},[e("img",{staticClass:"a",attrs:{src:a("980c")}}),e("img",{staticClass:"b",attrs:{src:a("8771")}})]),e("div",{staticClass:"girl"},[e("img",{staticClass:"a",attrs:{src:a("aedd")}}),e("img",{staticClass:"b",attrs:{src:a("991c")}})])])}],o={},l=o,u=(a("d4b6"),a("2877")),v=Object(u["a"])(l,c,r,!1,null,"b82f994e",null),f=v.exports,d=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"a"},[t._v("我们又在一起了一年")]),a("div",{staticClass:"b"},[t._v("年年有我，岁岁有我")]),a("div",{staticClass:"c"},[t._v("出发去看看我们的2021吧~")])])}],p={},h=p,b=(a("4571"),Object(u["a"])(h,d,_,!1,null,"1ac34a22",null)),m=b.exports,C=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"a"},[t._v(" 今年我们一共发了 "),a("span",{staticClass:"value"},[t._v(" "+t._s(t.count)+" ")]),t._v(" 条消息 ")]),a("div",{staticClass:"b"},[t._v(" 其中有 "),a("span",{staticClass:"value"},[t._v(" "+t._s(t.imgCount)+" ")]),t._v(" 是表情  其中有 "),a("span",{staticClass:"value"},[t._v(" "+t._s(t.voiceCount)+" ")]),t._v(" 是视频 ")]),a("div",{staticClass:"c"},[t._l(t.loveWord,(function(s,e,n){return a("div",{key:n},[t._v(" 说"+t._s(e)+" "),a("span",{staticClass:"value"},[t._v(" "+t._s(s)+" ")]),t._v("次 ")])})),a("div",[t._v("...")])],2),t._m(0)])},g=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"d"},[t._v("比起网络"),a("br"),t._v("我们更喜欢在现实表达爱意")])}],x=a("5530"),y=a("5033"),O={data:function(){return Object(x["a"])({},y)}},P=O,j=(a("60e6"),Object(u["a"])(P,C,g,!1,null,"ca7d3b68",null)),E=j.exports,S=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"a"},[t._v(" 这一年 我们说过最长的一句话 "),a("span",{staticClass:"value"},[t._v(t._s(t.content.length))]),t._v("字 ")]),a("div",{staticClass:"b"},[t._v(" "+t._s(t.content.substring(0,100))+" ")]),a("div",{staticClass:"c"},[t._v("...")]),a("div",{staticClass:"d"},[t._v(" "+t._s(t.time)+" ")])])},w=[],M={data:function(){return Object(x["a"])({},y["longMsg"])}},$=M,k=(a("3247"),Object(u["a"])($,S,w,!1,null,"6c3eee52",null)),A=k.exports,T=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"a"},[t._v(" 这一年 我们说过最晚的一句话 "),a("br"),t._v(" 在凌晨 "),a("span",{staticClass:"value"},[t._v(" "+t._s(t.hour)+" ")]),t._v(" 点 ")]),a("div",{staticClass:"b"},[a("span",{staticStyle:{"font-size":"3.6vw"}},[t._v(" "+t._s(t.user)+": ")]),t._v(" "+t._s(t.content)+" ")]),a("div",{staticClass:"c"},[t._v("...")]),a("div",{staticClass:"d"},[t._v(" "+t._s(t.time)+" ")]),a("div",{staticClass:"e",staticStyle:{"padding-top":"5vh","font-size":"5vw"}},[t._v("那天在做什么还能记起来吗")])])},N=[],W={data:function(){return Object(x["a"])({},y["latestMsg"])}},G=W,I=(a("de80"),Object(u["a"])(G,T,N,!1,null,"38b99058",null)),F=I.exports,D=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"a",staticStyle:{"padding-top":"15vh"}},[t._v(" 这一年 我们说过最多的词是 "),a("span",{staticClass:"value",staticStyle:{"font-size":"5vw"}},[t._v(" "+t._s(t.content)+" ")]),t._v(" 居然有 "),a("span",{staticClass:"value"},[t._v(" "+t._s(t.count)+"次")])]),t._m(0)])},L=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"b"},[e("img",{attrs:{src:a("3b8e")}})])}],z={data:function(){return Object(x["a"])({},y["mostWord"])}},R=z,H=(a("c2f5"),Object(u["a"])(R,D,L,!1,null,"109abf35",null)),J=H.exports,B=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"a"},[t._v(" 这一年我们 "),a("span",{staticClass:"value"},[t._v(" "+t._s(t.maxMonth[0])+" ")]),t._v("月 说的话最多 有"),a("span",{staticClass:"value"},[t._v(" "+t._s(t.maxMonth[1])+" ")]),t._v("条 ")]),a("div",{ref:"chart",staticClass:"chart"})])},K=[],U=a("b85c"),V=a("313e"),Z={data:function(){return{myChart:void 0,arr:y["monthGroup"]}},computed:{maxMonth:function(){var t,s=this.arr[0],a=Object(U["a"])(this.arr);try{for(a.s();!(t=a.n()).done;){var e=t.value;e[1]>s[1]&&(s=e)}}catch(n){a.e(n)}finally{a.f()}return s}},mounted:function(){this.myChart=V["a"](this.$refs.chart),this.myChart.setOption({tooltip:{},xAxis:{},yAxis:{},series:[{type:"bar",data:this.arr,itemStyle:{color:"#ebf45f"},clip:!1}]})}},q=Z,Q=(a("73ff"),Object(u["a"])(q,B,K,!1,null,"0601a1af",null)),X=Q.exports,Y=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"a"},[t._v(" 这一年我们最喜欢在 "),a("span",{staticClass:"value"},[t._v(" "+t._s(t.maxMonth[0])+" ")]),t._v("点聊天 说的话 有"),a("span",{staticClass:"value"},[t._v(" "+t._s(t.maxMonth[1])+" ")]),t._v("条 ")]),a("div",{ref:"chart",staticClass:"chart"})])},tt=[],st={data:function(){return{myChart:void 0,arr:y["hourGroup"]}},computed:{maxMonth:function(){var t,s=this.arr[0],a=Object(U["a"])(this.arr);try{for(a.s();!(t=a.n()).done;){var e=t.value;e[1]>s[1]&&(s=e)}}catch(n){a.e(n)}finally{a.f()}return s}},mounted:function(){this.myChart=V["a"](this.$refs.chart),this.myChart.setOption({tooltip:{},xAxis:{},yAxis:{},series:[{type:"line",data:this.arr,itemStyle:{color:"#d5cede"},clip:!1,symbol:"none"}],animationDuration:5e3})}},at=st,et=(a("6faa"),Object(u["a"])(at,Y,tt,!1,null,"6721cfb1",null)),nt=et.exports,it=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"v"},[a("div",{staticClass:"a"},[a("div",{staticClass:"b"},[t._v("#2021")]),a("div",{staticClass:"c"},[t._v("年度聊天报告")]),a("div",{staticClass:"d"},[t._v("关键词")]),a("div",{staticClass:"e"},[t._v("吃")]),a("div",{staticClass:"f"}),a("div",{staticClass:"d"},[t._v("爱意词")]),a("div",{staticClass:"e"},[t._v(t._s(t.b))]),a("div",{staticClass:"f"}),a("div",{staticClass:"d"},[t._v("话痨月")]),a("div",{staticClass:"e",staticStyle:{"font-size":"5vw"}},[t._v(t._s(t.c)+"月")]),a("div",{staticClass:"f"}),t._m(0),a("div",{staticClass:"j"},[t._v("再见")]),a("div",{staticClass:"i"},[t._v("2021")])])])},ct=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"h"},[e("img",{staticClass:"p",attrs:{src:a("173c")}}),e("img",{staticClass:"y",attrs:{src:a("991c")}})])}],rt=(a("d3b7"),a("159b"),a("b64b"),{data:function(){var t,s=y.loveWord,a=y.mostWord,e=y.monthGroup,n=e[0],i=Object(U["a"])(e);try{for(i.s();!(t=i.n()).done;){var c=t.value;c[1]>n[1]&&(n=c)}}catch(l){i.e(l)}finally{i.f()}var r={w:"",c:0};Object.keys(s).forEach((function(t){var a=s[t];a>r.c&&(r={w:t,c:a})}));var o={w:"",c:0};return Object.keys(a).forEach((function(t){var s=a[t];s>o.c&&(o={w:t,c:s})})),{a:o.w,b:r.w,c:n[0]}}}),ot=rt,lt=(a("d3b0"),Object(u["a"])(ot,it,ct,!1,null,"4c5e150c",null)),ut=lt.exports,vt={name:"App",components:{FirstPage:f,SecondPage:m,ThirdPage:E,ForthPage:A,FifthPage:F,SixthPage:J,SeventhPage:X,EighthPage:nt,NinthPage:ut},data:function(){return{step:1,mask:!0}},computed:{handleMask:function(){return{mask:this.mask}},isMobile:function(){return/AppleWebKit.*Mobile/i.test(navigator.userAgent)||/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)}},watch:{step:function(){var t=this;this.mask=!1,setTimeout((function(){t.mask=!0}))}},methods:{next:function(){9!==this.step&&this.step++}}},ft=vt,dt=(a("034f"),a("7922"),Object(u["a"])(ft,n,i,!1,null,"7725176c",null)),_t=dt.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(_t)}}).$mount("#app")},"60e6":function(t,s,a){"use strict";a("48fd")},"689a":function(t,s,a){},"6faa":function(t,s,a){"use strict";a("7312")},7151:function(t,s,a){},7312:function(t,s,a){},"73ff":function(t,s,a){"use strict";a("689a")},7922:function(t,s,a){"use strict";a("a602")},"85ec":function(t,s,a){},8771:function(t,s,a){t.exports=a.p+"img/cloud1.c1599773.png"},"980c":function(t,s,a){t.exports=a.p+"img/boy.6cb9ac8f.png"},"991c":function(t,s,a){t.exports=a.p+"img/cloud2.794b62cd.png"},a602:function(t,s,a){},aa97:function(t,s,a){},aedd:function(t,s,a){t.exports=a.p+"img/girl.40b358d4.png"},c2f5:function(t,s,a){"use strict";a("ddcc")},ca46:function(t,s,a){},d3b0:function(t,s,a){"use strict";a("f5b1")},d4b6:function(t,s,a){"use strict";a("162c")},ddcc:function(t,s,a){},de80:function(t,s,a){"use strict";a("7151")},f5b1:function(t,s,a){}});
//# sourceMappingURL=app.484e6b62.js.map