(self.webpackChunk=self.webpackChunk||[]).push([[935],{981:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(645),r=i.n(n)()((function(e){return e[1]}));r.push([e.id,".progress-ring__circle{transition:stroke-dashoffset .35s;transform:rotate(-90deg);transform-origin:center}",""]);const s=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(r[o]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);n&&r[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),t.push(c))}},t}},379:(e,t,i)=>{"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),o=[];function a(e){for(var t=-1,i=0;i<o.length;i++)if(o[i].identifier===e){t=i;break}return t}function c(e,t){for(var i={},n=[],r=0;r<e.length;r++){var s=e[r],c=t.base?s[0]+t.base:s[0],u=i[c]||0,l="".concat(c," ").concat(u);i[c]=u+1;var d=a(l),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(m)):o.push({identifier:l,updater:v(m,t),references:1}),n.push(l)}return n}function u(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function m(e,t,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var s=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function h(e,t,i){var n=i.css,r=i.media,s=i.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,p=0;function v(e,t){var i,n,r;if(t.singleton){var s=p++;i=f||(f=u(t)),n=m.bind(null,i,s,!1),r=m.bind(null,i,s,!0)}else i=u(t),n=h.bind(null,i,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var i=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var r=a(i[n]);o[r].references--}for(var s=c(e,t),u=0;u<i.length;u++){var l=a(i[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}i=s}}}},934:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(166),r={x:"50%",y:"50%","text-anchor":"middle",class:"stroke-current fill-current","stroke-width":"1px",dy:".3em"};const s={props:{width:Number,percent:Number,stroke:Number,color:String},computed:{radius:function(){return this.width/2-2*this.stroke},circumference:function(){return 2*this.radius*Math.PI}},methods:{setProgress:function(e){return 0==e?this.circumference-e/100*this.circumference+1:this.circumference-e/100*this.circumference}}};var o=i(379),a=i.n(o),c=i(981),u={insert:"head",singleton:!1};a()(c.Z,u);c.Z.locals;s.render=function(e,t,i,s,o,a){return(0,n.wg)(),(0,n.j4)("svg",{class:["progress-ring relative",i.color],width:i.width,height:i.width},[(0,n.Wm)("g",null,[(0,n.Wm)("circle",{class:"progress-ring__circle absolute stroke-current text-gray-400 text-opacity-25","stroke-width":i.stroke/2,fill:"transparent",r:a.radius,cx:i.width/2,cy:i.width/2},null,8,["stroke-width","r","cx","cy"]),(0,n.Wm)("text",r,(0,n.zw)(i.percent)+"% ",1),(0,n.Wm)("circle",{"stroke-linejoin":"round","stroke-linecap":"round",class:"progress-ring__circle absolute stroke-current",style:"stroke-dasharray: ".concat(a.circumference,",").concat(a.circumference,";stroke-dashoffset :").concat(a.setProgress(i.percent)),"stroke-width":i.stroke,fill:"transparent",r:a.radius,cx:i.width/2,cy:i.width/2},null,12,["stroke-width","r","cx","cy"])])],10,["width","height"])};const l=s},935:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>q});var n=i(166),r={class:"grid grid-cols-1 md:grid-cols-3 gap-6 my-10"},s={class:"md:col-span-2"},o={class:"p-4 relative shadow"},a={class:"text-2xl"},c={key:0,class:"my-4"},u={class:"flex my-2 items-center"},l=(0,n.Wm)("svg",{fill:"none",class:"w-6 mr-6",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})],-1),d={class:"flex my-2 items-center"},m=(0,n.Wm)("svg",{fill:"none",class:"w-6 mr-6",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),h={class:"my-4"},f=(0,n.Wm)("div",{class:"text-lg font-semibold"}," Before you start ",-1),p={key:0,class:"my-4"},v=(0,n.Wm)("div",{class:"text-xs w-full text-gray-400"}," Time remaining ",-1),g={class:"text-6xl text-purple-600 font-bold"},w={key:0,class:"p-4 md:p-8"},y=(0,n.Wm)("div",{class:"border-b-2 border-gray-300 border-opacity-50"},null,-1),b={class:"p-4 md:p-8"},x={class:"my-4 flex flex-col"},k={class:"text-xs text-gray-400"},Q={class:"text-xl font-semibold"},W={class:"font-bold mr-4"},z={key:0,class:"ml-auto w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},j=(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),_={key:1,class:"absolute top-0 left-0 h-full w-full z-50 flex items-center justify-center bg-gray-100 bg-opacity-75"},C=(0,n.uE)('<div class="space-y-4 w-9/12 animate-pulse"><div class="h-4 bg-purple-300 rounded"></div><div class="h-4 bg-purple-300 rounded w-3/6"></div><div class="h-4 bg-purple-300 rounded w-5/6"></div><div class="h-4 bg-purple-300 rounded w-6/6"></div><div class="h-4 bg-purple-300 rounded w-2/6"></div></div>',1),M={class:"flex space-x-4 py-4"},D={class:"md:col-span-1 md:max-h-screen overflow-y-auto md:sticky md:top-2"},T={key:0,class:"w-full bg-gray-200 flex items-center justify-center text-gray-600 h-48 rounded"},S={class:"text-white mr-2"};const N={components:{ProgressCircle:i(934).Z},data:function(){return{Topics:[],QuizDetails:{topic:null,q_count:0,time_limit:0},Questions:[],Question:0,numbering:["A","B","C","D","E","F","G","H"],loading:!0}},mounted:function(){var e=this;this.$http.get("/quizes/").then((function(t){e.Topics=t.data})),this.$http.get("/quizes/".concat(this.$route.params.id)).then((function(t){e.QuizDetails=t.data[0],e.Questions=t.data[1],e.loading=!1}))},methods:{next:function(e,t){var i=this;this.Question||(this.QuizDetails.time_limit&&window.setInterval((function(){i.QuizDetails.time_limit-=1}),1e3),window.addEventListener("beforeunload",this.b4u),this.Question+=1),this.Question<=this.Questions.length&&e?(this.loading=!0,this.$http.post("/quiz/answer/".concat(this.$route.params.id),{question_id:this.Questions[t].id,answer_id:e.id}).then((function(e){i.loading=!1,i.Question+=1})).catch((function(e){i.bus.emit("toast",{title:"Error",text:e.response.data.message,type:"error"})}))):this.Question+1>this.Questions.length&&(window.removeEventListener("beforeunload",this.b4u),this.$router.push("/quiz/my"),this.bus.emit("toast",{title:"Success",text:"Quiz completed & saved :D",type:"success"}))},answer:function(e,t){this.Questions[t].answer=e.id,this.next(e,t)},b4u:function(e){e.preventDefault(),e.returnValue=""}},computed:{minutes:function(){return this.QuizDetails.time_limit?Math.floor(this.QuizDetails.time_limit/60).toString().padStart(2,"0"):"00"},seconds:function(){return this.QuizDetails.time_limit?Math.floor(this.QuizDetails.time_limit%60).toString().padStart(2,"0"):"00"}},beforeRouteLeave:function(e,t,i){this.Question<this.Questions.length?confirm("Chnages you made may not be saved.")&&i():i()},render:function(e,t,i,N,q,H){var L=(0,n.up)("progress-circle");return(0,n.wg)(),(0,n.j4)("div",r,[(0,n.Wm)("div",s,[(0,n.Wm)("div",o,[(0,n.Wm)("div",a,(0,n.zw)(q.QuizDetails.topic),1),(0,n.Wm)(n.uT,{name:"fade"},{default:(0,n.w5)((function(){return[q.Question?(0,n.ry)("",!0):((0,n.wg)(),(0,n.j4)("div",c,[(0,n.Wm)("div",u,[l,(0,n.Wm)("span",null,(0,n.zw)(q.QuizDetails.q_count)+" multiple choice questions ",1)]),(0,n.Wm)("div",d,[m,(0,n.Wm)("span",null,(0,n.zw)(q.QuizDetails.time_limit?"".concat(q.QuizDetails.time_limit/60," Minutes"):"No time limits"),1)]),(0,n.Wm)("div",h,[f,(0,n.Wm)("div",{innerHTML:q.QuizDetails.desc},null,8,["innerHTML"])])]))]})),_:1}),q.Question&&q.QuizDetails.time_limit?((0,n.wg)(),(0,n.j4)("div",p,[v,(0,n.Wm)("div",g,(0,n.zw)(H.minutes)+" : "+(0,n.zw)(H.seconds),1)])):(0,n.ry)("",!0),(0,n.Wm)(n.W3,{name:"fade"},{default:(0,n.w5)((function(){return[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(q.Questions,(function(e,t){return(0,n.wy)(((0,n.wg)(),(0,n.j4)("div",{key:t},[e.details?((0,n.wg)(),(0,n.j4)("div",w,[(0,n.Wm)("div",{innerHTML:e.details},null,8,["innerHTML"])])):(0,n.ry)("",!0),y,(0,n.Wm)("div",b,[(0,n.Wm)("div",null,[(0,n.Wm)("div",x,[(0,n.Wm)("div",k,"Question "+(0,n.zw)(q.Question)+" of "+(0,n.zw)(q.Questions.length),1),(0,n.Wm)("div",Q,(0,n.zw)(e.question),1)]),((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.answers,(function(i,r){return(0,n.wg)(),(0,n.j4)("div",{key:r,onClick:function(e){return H.answer(i,t)},class:[i.id===e.answer?"border-purple-600":"","flex items-center px-4 h-14 my-1 font-semibold bg-transparent text-purple-600 hover:text-white hover:bg-purple-600 rounded border hover:border-purple-600 cursor-pointer"]},[(0,n.Wm)("div",W,(0,n.zw)(q.numbering[r]),1),(0,n.Wm)("div",null,(0,n.zw)(i.answer),1),i.id===e.answer?((0,n.wg)(),(0,n.j4)("svg",z,[j])):(0,n.ry)("",!0)],10,["onClick"])})),128))])])],512)),[[n.F8,t+1==q.Question]])})),128))]})),_:1}),q.loading?((0,n.wg)(),(0,n.j4)("div",_,[C])):(0,n.ry)("",!0),(0,n.Wm)("div",M,[(0,n.Wm)("button",{onClick:t[1]||(t[1]=function(e){return H.next(void 0,0)}),class:["px-6 py-3 inline-block font-semibold text-white bg-purple-600 rounded cursor-pointer disabled:opacity-75",q.Question?"ml-auto":"mx-auto"]},(0,n.zw)(q.Question?q.Question+1>q.Questions.length?"Finish":"Next Question":"Start Quiz"),3)])])]),(0,n.Wm)("div",D,[q.Topics.length?((0,n.wg)(!0),(0,n.j4)(n.HY,{key:1},(0,n.Ko)(q.Topics,(function(e,t){return(0,n.wg)(),(0,n.j4)("a",{href:"/exams/5/subjects/1/quizes/".concat(e.id),key:t,class:"flex items-center justify-between border-b-2 border-white bg-purple-600 rounded p-2 mb-2"},[(0,n.Wm)("div",S,(0,n.zw)(e.name),1),(0,n.Wm)(L,{width:50,stroke:4,text:!1,color:"text-white text-sm",percent:e.progress},null,8,["percent"])],8,["href"])})),128)):((0,n.wg)(),(0,n.j4)("div",T," No Quizes "))])])}},q=N}}]);