(self.webpackChunk=self.webpackChunk||[]).push([[714],{616:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(645),r=n.n(i)()((function(e){return e[1]}));r.push([e.id,".progress-ring__circle{transition:stroke-dashoffset .35s;transform:rotate(-90deg);transform-origin:center}",""]);const s=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(r[o]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],r=0;r<e.length;r++){var s=e[r],l=t.base?s[0]+t.base:s[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=a(u),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(m)):o.push({identifier:u,updater:v(m,t),references:1}),i.push(u)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function m(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var s=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function h(e,t,n){var i=n.css,r=n.media,s=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,p=0;function v(e,t){var n,i,r;if(t.singleton){var s=p++;n=f||(f=c(t)),i=m.bind(null,n,s,!1),r=m.bind(null,n,s,!0)}else n=c(t),i=h.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=a(n[i]);o[r].references--}for(var s=l(e,t),c=0;c<n.length;c++){var u=a(n[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=s}}}},714:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var i=n(166),r={class:"grid grid-cols-1 md:grid-cols-3 gap-6 my-10"},s={class:"md:col-span-2"},o={class:"p-4 relative shadow"},a={key:0,class:"text-2xl"},l={key:0,class:"my-4"},c={class:"flex my-2 items-center"},u=(0,i.Wm)("svg",{fill:"none",class:"w-6 mr-6",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,i.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})],-1),d={class:"flex my-2 items-center"},m=(0,i.Wm)("svg",{fill:"none",class:"w-6 mr-6",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,i.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),h=(0,i.Wm)("div",{class:"my-4"},[(0,i.Wm)("div",{class:"text-lg font-semibold"}," Before you start "),(0,i.Wm)("ul",{class:"list-disc list-inside"},[(0,i.Wm)("li",null," You must complete this assessment in one session — make sure your internet is reliable. "),(0,i.Wm)("li",null," If you don’t earn a badge this time, you can retake this assessment once more. "),(0,i.Wm)("li",null," We won’t show your results to anyone without your permission. ")])],-1),f={key:1,class:"my-4"},p=(0,i.Wm)("div",{class:"text-xs w-full text-gray-400"}," Time remaining ",-1),v={class:"text-6xl text-purple-600 font-bold"},w={key:0,class:"p-4 md:p-8"},g=(0,i.Wm)("div",{class:"border-b-2 border-gray-300 border-opacity-50"},null,-1),y={class:"p-4 md:p-8"},b={class:"my-4 flex flex-col"},x={class:"text-xs text-gray-400"},k={class:"text-xl font-semibold"},W={class:"font-bold mr-4"},Q={key:0,class:"ml-auto w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},z=(0,i.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),j={key:2,class:"absolute top-0 left-0 h-full w-full z-50 flex items-center justify-center bg-gray-100 bg-opacity-75"},C=(0,i.uE)('<div class="space-y-4 w-9/12 animate-pulse"><div class="h-4 bg-purple-300 rounded"></div><div class="h-4 bg-purple-300 rounded w-3/6"></div><div class="h-4 bg-purple-300 rounded w-5/6"></div><div class="h-4 bg-purple-300 rounded w-6/6"></div><div class="h-4 bg-purple-300 rounded w-2/6"></div></div>',1),_={class:"flex space-x-4 py-4"},M={class:"md:col-span-1 md:h-screen overflow-y-auto md:sticky md:top-2"},D={class:"text-txl text-white mr-2"};const T={props:{width:Number,percent:Number,stroke:Number,color:String},computed:{radius:function(){return this.width/2-2*this.stroke},circumference:function(){return 2*this.radius*Math.PI}},methods:{setProgress:function(e){return this.circumference-e/100*this.circumference}}};var S=n(379),N=n.n(S),H=n(616),B={insert:"head",singleton:!1};N()(H.Z,B);H.Z.locals;T.render=function(e,t,n,r,s,o){return(0,i.wg)(),(0,i.j4)("svg",{class:"progress-ring relative",width:n.width,height:n.width},[(0,i.Wm)("circle",{class:"progress-ring__circle absolute stroke-current text-white text-opacity-25","stroke-width":n.stroke,fill:"transparent",r:o.radius,cx:n.width/2,cy:n.width/2},null,8,["stroke-width","r","cx","cy"]),(0,i.Wm)("circle",{class:["progress-ring__circle absolute","stroke-current ".concat(n.color)],style:"stroke-dasharray: ".concat(o.circumference,",").concat(o.circumference,";stroke-dashoffset :").concat(o.setProgress(n.percent)),"stroke-width":n.stroke,fill:"transparent",r:o.radius,cx:n.width/2,cy:n.width/2},null,14,["stroke-width","r","cx","cy"])],8,["width","height"])};const E={components:{ProgressCircle:T},data:function(){return{Topics:[],QuizDetails:{topic:null,q_count:0,time_limit:0},Questions:[],Question:0,numbering:["A","B","C","D","E","F","G","H"],loading:!0}},mounted:function(){var e=this;this.$http.get("/subjects/".concat(this.$route.params.subject)).then((function(t){e.Topics=t.data})),this.$http.get("/topics/".concat(this.$route.params.id)).then((function(t){e.QuizDetails=t.data[0],e.Questions=t.data[1],e.loading=!1}))},methods:{next:function(){var e=this;this.Question||(this.QuizDetails.time_limit&&window.setInterval((function(){e.QuizDetails.time_limit-=1}),1e3),window.addEventListener("beforeunload",(function(e){e.preventDefault(),e.returnValue="Why tho ?"}))),this.Question+1<=this.Questions.length?(this.loading=!0,setTimeout((function(){e.loading=!1}),1e3),this.Question+=1):this.bus.emit("toast",{title:"Success",text:"Quiz completed but not saved. Under development :D",type:"success"})},answer:function(e,t){this.Questions[t].answer=e,this.next()}},computed:{minutes:function(){return this.QuizDetails.time_limit?Math.floor(this.QuizDetails.time_limit/60).toString().padStart(2,"0"):"00"},seconds:function(){return this.QuizDetails.time_limit?Math.floor(this.QuizDetails.time_limit%60).toString().padStart(2,"0"):"00"}},beforeRouteLeave:function(e,t,n){this.Question?confirm("Chnages you made may not be saved.")&&n():n()},render:function(e,t,n,T,S,N){var H=(0,i.up)("progress-circle");return(0,i.wg)(),(0,i.j4)("div",r,[(0,i.Wm)("div",s,[(0,i.Wm)("div",o,[S.Topics.length?((0,i.wg)(),(0,i.j4)("div",a,(0,i.zw)(S.QuizDetails.topic),1)):(0,i.ry)("",!0),(0,i.Wm)(i.uT,{name:"fade"},{default:(0,i.w5)((function(){return[S.Question?(0,i.ry)("",!0):((0,i.wg)(),(0,i.j4)("div",l,[(0,i.Wm)("div",c,[u,(0,i.Wm)("span",null,(0,i.zw)(S.QuizDetails.q_count)+" multiple choice questions ",1)]),(0,i.Wm)("div",d,[m,(0,i.Wm)("span",null,(0,i.zw)(S.QuizDetails.time_limit?"".concat(S.QuizDetails.time_limit/60," Minutes"):"No time limits"),1)]),h]))]})),_:1}),S.Question&&S.QuizDetails.time_limit?((0,i.wg)(),(0,i.j4)("div",f,[p,(0,i.Wm)("div",v,(0,i.zw)(N.minutes)+" : "+(0,i.zw)(N.seconds),1)])):(0,i.ry)("",!0),(0,i.Wm)(i.W3,{name:"fade"},{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(S.Questions,(function(e,t){return(0,i.wy)(((0,i.wg)(),(0,i.j4)("div",{key:t},[e.details?((0,i.wg)(),(0,i.j4)("div",w,[(0,i.Wm)("div",{innerHTML:e.details},null,8,["innerHTML"])])):(0,i.ry)("",!0),g,(0,i.Wm)("div",y,[(0,i.Wm)("div",null,[(0,i.Wm)("div",b,[(0,i.Wm)("div",x,"Question "+(0,i.zw)(S.Question)+" of "+(0,i.zw)(S.Questions.length),1),(0,i.Wm)("div",k,(0,i.zw)(e.question),1)]),((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(e.answers,(function(n,r){return(0,i.wg)(),(0,i.j4)("div",{key:r,onClick:function(e){return N.answer(n,t)},class:[n===e.answer?"border-purple-600":"","flex items-center px-4 h-14 my-1 font-semibold bg-transparent text-purple-600 hover:text-white hover:bg-purple-600 rounded border hover:border-purple-600 cursor-pointer"]},[(0,i.Wm)("div",W,(0,i.zw)(S.numbering[r]),1),(0,i.Wm)("div",null,(0,i.zw)(n),1),n===e.answer?((0,i.wg)(),(0,i.j4)("svg",Q,[z])):(0,i.ry)("",!0)],10,["onClick"])})),128))])])],512)),[[i.F8,t+1==S.Question]])})),128))]})),_:1}),S.loading?((0,i.wg)(),(0,i.j4)("div",j,[C])):(0,i.ry)("",!0),(0,i.Wm)("div",_,[(0,i.Wm)("button",{onClick:t[1]||(t[1]=function(){return N.next&&N.next.apply(N,arguments)}),class:["px-6 py-3 inline-block font-semibold text-white bg-purple-600 rounded cursor-pointer disabled:opacity-75",S.Question?"ml-auto":"mx-auto"]},(0,i.zw)(S.Question?"Next Question":"Start Quiz"),3)])])]),(0,i.Wm)("div",M,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(S.Topics,(function(e,t){return(0,i.wg)(),(0,i.j4)("a",{href:"/exams/5/subjects/1/quizes/".concat(e.id),key:t,class:"flex items-center justify-between border-b-2 border-white bg-purple-600 rounded p-2 mb-2"},[(0,i.Wm)("div",D,(0,i.zw)(e.name),1),(0,i.Wm)(H,{width:50,stroke:4,color:"text-white",percent:e.percent},null,8,["percent"])],8,["href"])})),128))])])}},L=E}}]);