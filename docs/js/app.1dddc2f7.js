(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b39":function(t,e,n){"use strict";n("2279")},1490:function(t,e){(function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-t)),r=window.setTimeout((function(){e(n+i)}),i);return t=n+i,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})})()},2279:function(t,e,n){},2913:function(t,e,n){"use strict";n("5df9")},"2b70":function(t,e,n){},"322c":function(t,e,n){t.exports=n.p+"img/seal.dcbfcd04.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=n("2b27"),a=n.n(r),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wedding"},[n("Editor")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"editor",staticClass:"wedding-editor"},[t._m(0),n("p",{staticClass:"code"},[t._v("Last login: "),n("span",[t._v(t._s(t.startDate))]),t._v(" on ttys001")]),n("pre",[t._v("    "),n("code",{domProps:{innerHTML:t._s(t.highlightedCode)}}),t._v("\n  ")]),!t.canStart&&!t.hasClosed||t.canOpen?t._e():n("div",{staticClass:"editor-open",on:{click:function(e){t.canOpen=!0}}},[n("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[n("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}}),n("line",{attrs:{x1:"9",y1:"3",x2:"9",y2:"21"}})])]),!t.canStart&&!t.hasClosed||t.canOpen?t._e():n("div",{staticClass:"open-site",on:{click:t.jumpUrl}},[t._v("逛")]),n("Executions",{attrs:{canExecute:t.canExecute},on:{onUpdating:t.scrollToBottom,onFinish:function(e){t.canOpen=!0}}}),n("invitation",{attrs:{canOpen:t.canOpen},on:{onClose:function(e){t.canOpen=!1,t.hasClosed=!0},sendBarrage:t.onAfterSending}}),n("Barrage",{attrs:{wish:t.wish,canStart:t.canStart}})],1)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"editor-header"},[n("a",{attrs:{href:"javascript:;"}}),n("a",{staticClass:"minimum",attrs:{href:"javascript:;"}}),n("a",{staticClass:"maximum",attrs:{href:"javascript:;"}})])}],l=n("c197"),d=n.n(l),f=(n("fa97"),n("1490"),$cookies.get("lastvalue")||""),p={code:"\n// 今天心情大好\n// 我给你表演写代码\n// 我要开始写啦\nconst { 😊 , 😋 } = 😘;\n😊.say('嫁给我吧!🎈');\n😋.response('好的，只要你带我吃好吃的😝！');\nUtils.marry(😊,😋);\nUtils.generateInvitation(😊,😋);\n// 好了我写完了\n// 我要开始运行啦",executions:[{name:"初始化",time:"",duration:0,visible:!1},{name:"解压中",time:"",duration:0,visible:!1},{name:"组装中",time:"",duration:0,visible:!1},{name:"打包中",time:"",duration:0,visible:!1},{name:"微笑🙂",time:"",duration:0,visible:!1},{name:"大笑😄",time:"",duration:0,visible:!1},{name:"编译中...",time:"",visible:!1}],barrages:[f,"祝百年好合！","新婚快乐，早生贵子","你的邀请函真是美","人美心更美😘😘","你们是最棒的","哇哇哇~😋","祝幸福美满、白头偕老.","新婚大喜呀~~","两个幸福的人！😝😝","祝你俩幸福美满!!","如此般配的一对儿~","😗 😙 😚 😋 ","甜甜蜜蜜！夫妻恩恩爱爱到永远😊"]},m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"executions"},[t._l(t.executions,(function(e,i){return n("p",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"execution.visible"}],key:i,staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),n("span",{staticClass:"time"},[t._v(t._s(e.time))]),t._v("]\n    "),n("span",{staticClass:"task"},[t._v(t._s(e.name))]),void 0!==e.duration?n("span",{staticClass:"duration"},[t._v(t._s(e.duration)+" ms")]):t._e()])})),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isProcessed,expression:"isProcessed"}],staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    "+t._s(t.progressBarText)+"\n    "),n("span",{staticClass:"percentage"},[t._v(t._s(t.percentage)+"%")])]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.endExecution.visible,expression:"endExecution.visible"}],staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),n("span",{staticClass:"time"},[t._v(t._s(t.endExecution.time))]),t._v("]\n    "),n("span",{staticClass:"task"},[t._v(t._s(t.endExecution.name))])])],2)},v=[],h=(n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("7f7f"),n("6b54"),n("a481"),n("96cf"),n("3b8d"));n("28a5");function g(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=b(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){o=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw a}}}}function b(t,e){if(t){if("string"===typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var _={name:"Executions",props:["canExecute"],data:function(){return{executions:p.executions,isProcessed:!1,isFinished:!1,progressBarText:"--------------------------",endExecution:{name:"打开中...",time:"",visible:!1}}},computed:{percentage:function(){var t=this.progressBarText.split("").filter((function(t){return"#"===t})).length,e=this.progressBarText.length;return Math.floor(100*t/e)}},watch:{canExecute:function(t){!0===t&&this.runExecutions()}},updated:function(){this.$emit("onUpdating")},methods:{runExecutions:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e,n,i,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=g(this.executions),t.prev=1,e.s();case 3:if((n=e.n()).done){t.next=9;break}return i=n.value,t.next=7,this.progressivelyRun(i);case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),e.e(t.t0);case 14:return t.prev=14,e.f(),t.finish(14);case 17:return t.next=19,this.successProcessing(1e3);case 19:return t.next=21,this.progressivelyRun(this.endExecution).then((function(){setTimeout((function(){r.isFinished=!0,r.$emit("onFinish")}),500)}));case 21:case"end":return t.stop()}}),t,this,[[1,11,14,17]])})));function e(){return t.apply(this,arguments)}return e}(),progressivelyRun:function(t,e){return new Promise((function(n){var i=new Date,r=e||50*Math.random()+250,a=function(){t.time=i.toLocaleTimeString(),t.duration=void 0!==t.duration?r.toFixed(2):void 0,t.visible=!0,n()};setTimeout(a,r)}))},successProcessing:function(t){var e=this;return new Promise((function(n){var i,r=null,a=0;e.isProcessed=!0;var s=function s(o){var c;null===r&&(r=o),c=o-r,a%3===0&&(e.progressBarText=e.progressBarText.replace("-","#")),a++,c<t?i=requestAnimationFrame(s):(n(),e.progressBarText=e.progressBarText.replace(/-/g,"#"),cancelAnimationFrame(i))};i=requestAnimationFrame(s)}))}}},x=_,y=(n("6af3"),n("2877")),C=Object(y["a"])(x,m,v,!1,null,null,null),O=C.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wedding-invitation",class:{"invitation-bounce":t.canOpen}},[i("div",{staticClass:"invitation-container",class:{"invitation-down":t.isOpening}},[i("div",{staticClass:"invitation-cover"},[i("div",{staticClass:"cover-content",class:{"invitation-up":t.isOpening}},[i("div",{staticClass:"content-inside"},[i("img",{staticClass:"content-inside-photo",attrs:{src:n("fbfa")}}),i("p",[t._v("我们结婚啦！")]),t._m(0),i("p",[t._v("时间：2021年4月24日, 星期六")]),t._m(1),i("div",{staticClass:"content-inside-bless"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.wish,expression:"wish"}],ref:"wishInput",attrs:{placeholder:"写下你的祝福"},domProps:{value:t.wish},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendBarrage(e)},focus:function(e){t.isFocused=!0},blur:function(e){t.isFocused=!1,t.hasEntered=!1},input:function(e){e.target.composing||(t.wish=e.target.value)}}}),!t.wish&&t.isFocused&&t.hasEntered?i("p",[t._v("请输入祝福哦")]):t._e(),i("div",[i("button",{on:{click:t.sendBarrage}},[t._v("发送祝福弹幕")]),i("button",{on:{click:t.closeInvitation}},[t._v("关闭")])]),i("div",{staticClass:"jump"},[i("button",{on:{click:t.jumpUrl}},[t._v("去网站逛逛")])])])])]),i("div",{staticClass:"cover-inside-left",class:{opening:t.isOpening}}),i("div",{staticClass:"cover-inside-right",class:{opening:t.isOpening}}),i("img",{staticClass:"cover-inside-seal",class:{"invitation-flight":t.isOpening},attrs:{src:n("322c")},on:{click:t.openInvitation}})])])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("b",[t._v("李坤 & 谢东苡")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("地点："),n("b",[t._v("济南罗芙威宫酒店 米兰宴会厅")])])}],S={props:["canOpen"],data:function(){return{isOpening:!1,wish:"",isFocused:!1,hasEntered:!1}},methods:{openInvitation:function(){this.isOpening=!0},closeInvitation:function(){var t=this;this.isOpening=!1,setTimeout((function(){t.$emit("onClose")}),660)},sendBarrage:function(){var t=this;this.$nextTick((function(){t.hasEntered=!0,t.wish&&(t.isOpening=!1,t.$refs.wishInput.blur(),setTimeout((function(){t.$emit("sendBarrage",t.wish),$cookies.set("lastvalue",t.wish,2592e3)}),660))}))},jumpUrl:function(){window.location.href="http://lkxdy.com/"}}},T=S,j=(n("bddb"),Object(y["a"])(T,k,E,!1,null,null,null)),F=j.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"barrage",staticClass:"wedding-barrage",style:{opacity:t.canStart?1:0}},[n("div",{domProps:{innerHTML:t._s(t.codeInStyleTag)}}),n("p",{ref:"barrageFirst",staticClass:"code barrage-0",style:{transform:"translate("+t.initialOffset+"px)",top:"10px"}},[n("span",{staticClass:"mine"},[t._v(t._s(t.wish))]),t._l(t.filterBarrage(t.barrages,0),(function(e,i){return n("span",{key:i},[t._v(t._s(e))])}))],2),n("p",{ref:"barrageSecond",staticClass:"code barrage-1",style:{transform:"translate("+t.initialOffset+"px)",top:"40px"}},t._l(t.filterBarrage(t.barrages,1),(function(e,i){return n("span",{key:i},[t._v(t._s(e))])})),0),n("p",{ref:"barrageThird",staticClass:"code barrage-2",style:{transform:"translate("+t.initialOffset+"px)",top:"70px"}},t._l(t.filterBarrage(t.barrages,2),(function(e,i){return n("span",{key:i},[t._v(t._s(e))])})),0),n("p",{ref:"barrageFourth",staticClass:"code barrage-3",style:{transform:"translate("+t.initialOffset+"px)",top:"100px"}},t._l(t.filterBarrage(t.barrages,3),(function(e,i){return n("span",{key:i},[t._v(t._s(e))])})),0),n("div",{staticClass:"barrage-space"})])},B=[],$={props:["wish","canStart"],data:function(){return{barrages:p.barrages,animationStyle:"",initialOffset:0}},computed:{codeInStyleTag:function(){return"<style>".concat(this.animationStyle,"</style>")}},watch:{canStart:function(t){!0===t&&this.barrageAnimationStart()}},methods:{barrageAnimationStart:function(){var t=this,e=this.getWidth(this.$refs.barrage),n=[this.getWidth(this.$refs.barrageFirst),this.getWidth(this.$refs.barrageSecond),this.getWidth(this.$refs.barrageThird),this.getWidth(this.$refs.barrageFourth)];this.initialOffset=e+15,n.map((function(n,i){t.animationStyle+="\n          .barrage-".concat(i,"{\n            animation: barrage-").concat(i," ").concat(n/40,"s linear infinite;\n            -webkit-animation: barrage-").concat(i," ").concat(n/40,"s linear infinite;\n          }\n          @keyframes barrage-").concat(i," {\n            from {\n              transform:translate3d(").concat(e+15,"px,0,0);\n              -webkit-transform:translate3d(").concat(e+15,"px,0,0);\n            }\n            to {\n              transform:translate3d(-").concat(n+15,"px,0,0);\n              -webkit-transform:translate3d(-").concat(n+15,"px,0,0);\n            }\n          }")}))},getWidth:function(t){return window.getComputedStyle(t,null).width.replace("px","")-0},filterBarrage:function(t,e){if(t)return t.filter((function(t,n){if(n%4===e)return t}))}}},P=$,I=(n("2913"),Object(y["a"])(P,A,B,!1,null,null,null)),M=I.exports,q={name:"Editor",components:{Executions:O,Invitation:F,Barrage:M},data:function(){return{startDate:"",code:p.code,currentCode:"",isCursorVisible:1,canExecute:!1,canOpen:!1,wish:"",hasClosed:!1,canStart:!1}},created:function(){this.startDate=(new Date).toDateString(),this.progressivelyTyping()},updated:function(){this.scrollToBottom()},computed:{highlightedCode:function(){var t=d.a.highlight(this.currentCode,d.a.languages.javascript),e="".concat(t,'<span style="opacity:').concat(this.isCursorVisible,'"> ▍</span>');return e}},methods:{scrollToBottom:function(){this.$refs.editor.scrollTop=1e5},progressivelyTyping:function(){var t=this;return new Promise((function(e){var n,i=0,r=0,a=function a(){var s=Math.round(6*Math.random());i%2===0&&s%4===0&&(t.currentCode=t.code.substring(0,r),r++),i%24===0&&(t.isCursorVisible=0===t.isCursorVisible?1:0),i++,r<=t.code.length?n=requestAnimationFrame(a):(e(),t.canExecute=!0,cancelAnimationFrame(n))};n=requestAnimationFrame(a)}))},onAfterSending:function(t){var e=this;this.wish=t,this.canOpen=!1,setTimeout((function(){e.canStart=!0}),800)},jumpUrl:function(){window.location.href="http://lkxdy.com/"}}},U=q,D=(n("8164"),Object(y["a"])(U,c,u,!1,null,null,null)),R=D.exports,W={props:[],components:{Editor:R},name:"Wedding"},L=W,N=(n("0b39"),Object(y["a"])(L,s,o,!1,null,null,null)),V=N.exports;i["a"].use(a.a),new i["a"]({el:"#app",render:function(t){return t(V)}})},"5df9":function(t,e,n){},"6af3":function(t,e,n){"use strict";n("2b70")},8164:function(t,e,n){"use strict";n("b1f4")},b1f4:function(t,e,n){},bddb:function(t,e,n){"use strict";n("d0b9")},d0b9:function(t,e,n){},fbfa:function(t,e,n){t.exports=n.p+"img/o1.8432f683.jpg"}});
//# sourceMappingURL=app.1dddc2f7.js.map