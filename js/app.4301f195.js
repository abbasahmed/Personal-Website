(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],d=0,v=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"19e2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"transparent",dark:"",id:"toolbar"}},[n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:{name:"home"},tag:"span"}},[n("v-img",{staticClass:"mx-2",attrs:{"max-height":"40","max-width":"40",src:a("d443")}})],1),n("v-toolbar-title",{staticClass:"d-none d-sm-flex"},[n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:{name:"home"},tag:"span"}},[n("v-btn",{attrs:{text:""}},[t._v("Abbas Ahmed")])],1)],1),n("v-spacer"),n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:{name:"about"},tag:"span"}},[n("v-btn",{attrs:{text:""}},[t._v("About")])],1),n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:{name:"skills"},tag:"span"}},[n("v-btn",{attrs:{text:""}},[t._v("Skills")])],1),n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:{name:"work"},tag:"span"}},[n("v-btn",{attrs:{text:""}},[t._v("Work")])],1),n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:{name:"contact"},tag:"span"}},[n("v-btn",{attrs:{text:""}},[t._v("Contact")])],1)],1)},r=[],i={name:"AppNavigation"},o=i,s=(a("eb01"),a("2877")),l=a("6544"),c=a.n(l),u=a("40dc"),d=a("8336"),v=a("adda"),m=a("2fa4"),f=a("2a7f"),p=Object(s["a"])(o,n,r,!1,null,"1b67e7cc",null);e["default"]=p.exports;c()(p,{VAppBar:u["a"],VBtn:d["a"],VImg:v["a"],VSpacer:m["a"],VToolbarTitle:f["a"]})},"1d48":function(t,e,a){},2851:function(t,e,a){"use strict";var n=a("6569"),r=a.n(n);r.a},"3a70":function(t,e,a){"use strict";var n=a("f88b"),r=a.n(n);r.a},"3aa8":function(t,e,a){},4679:function(t,e,a){"use strict";var n=a("851c"),r=a.n(n);r.a},"4f30":function(t,e,a){"use strict";var n=a("6423"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("4160"),a("d3b7"),a("ac1f"),a("5319"),a("1276"),a("159b"),a("ddb0"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[t.$route.meta.hideNavigation?t._e():a("AppNavigation"),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),t.$route.meta.hideNavigation?t._e():a("AppFooter")],1)},i=[],o=a("19e2"),s=a("f657"),l={name:"App",components:{AppNavigation:o["default"],AppFooter:s["default"]},data:function(){return{name:["Hi!","Abbas Ahmed"]}}},c=l,u=(a("4679"),a("2877")),d=a("6544"),v=a.n(d),m=a("7496"),f=Object(u["a"])(c,r,i,!1,null,"172dd5aa",null),p=f.exports;v()(f,{VApp:m["a"]});var h=a("98c9"),b=a("8103"),g=a.n(b),_=a("bba4"),y=a.n(_),k=(a("bf40"),a("f309"));n["a"].use(k["a"]);var x=new k["a"]({}),w=a("8cb8"),S=a("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-particles",{staticClass:"bg",staticStyle:{margin:"auto"},attrs:{color:"#ea00a6",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),n("v-img",{attrs:{id:"avatar",src:a("f653")}}),n("NameTyper",{attrs:{id:"center",strings:t.name}}),n("p",{attrs:{id:"desc"}},[t._v(" "+t._s(t.description)+" ")]),n("v-btn",{attrs:{outlined:"",dark:"","x-large":"",id:"resume",to:{name:"resume"}}},[t._v(" Resume "),n("v-icon",[t._v("mdi-file-document-outline")])],1)],1)},C=[],j=a("abbe"),I={name:"Home",components:{NameTyper:j["default"]},data:function(){return{resume:"resume.pdf",name:["Hi!","Abbas Ahmed"],description:"Student. Engineer. Developer. Traveler."}}},V=I,O=(a("8b9e"),a("8336")),E=a("132d"),N=a("adda"),T=Object(u["a"])(V,A,C,!1,null,"85da9cc4",null),$=T.exports;v()(T,{VBtn:O["a"],VIcon:E["a"],VImg:N["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"work"}},[a("span",{staticClass:"bg"}),a("h1",[t._v("My Work")]),a("v-divider",{attrs:{dark:"",color:"white"}}),t._m(0)],1)},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"content"}},[a("p",[t._v(" Work in Progress! As much as I love working on my website, I'm currently a little busy with my coursework so as soon as I get the chance this will be updated! ")])])}],P=(a("2851"),a("ce7e")),F={},L=Object(u["a"])(F,M,D,!1,null,"17dc15b8",null),B=L.exports;v()(L,{VDivider:P["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"skills"}},[a("span",{staticClass:"bg"}),a("h1",[t._v("My Skills")]),a("v-divider",{attrs:{dark:"",color:"white"}}),a("p",[t._v(" Over the years I have acquired these skills and I look forward to mastering them and learning more! ")]),a("v-layout",[a("v-flex",{attrs:{id:"my-card"}},[a("v-card",[a("v-card-text",[a("p",{staticClass:"title text--primary"},[t._v(" Languages ")]),a("v-simple-table",{attrs:{dense:"",id:"my-table"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Name")]),a("th",{staticClass:"text-left"},[t._v("Experience")])])]),a("tbody",t._l(t.languages,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),a("td",[a("v-rating",{attrs:{color:"#4124d1","half-increments":"",readonly:"",value:e.rating}})],1)])})),0)]},proxy:!0}])})],1)],1)],1),a("v-flex",{attrs:{id:"my-card"}},[a("v-card",[a("v-card-text",[a("p",{staticClass:"title text--primary"},[t._v(" Frameworks/Technologies ")]),a("v-simple-table",{attrs:{dense:"",id:"my-table"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Name")]),a("th",{staticClass:"text-left"},[t._v("Experience")])])]),a("tbody",t._l(t.technologies,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),a("td",[a("v-rating",{attrs:{color:"#4124d1","half-increments":"",readonly:"",value:e.rating}})],1)])})),0)]},proxy:!0}])})],1)],1)],1),a("v-flex",{attrs:{id:"my-card"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.otherSkills,expression:"otherSkills"}]},[a("v-card-text",[a("p",{staticClass:"title text--primary"},[t._v(" Other Skills ")]),a("v-simple-table",{attrs:{dense:"",id:"my-table"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Name")]),a("th",{staticClass:"text-left"},[t._v("Experience")])])]),a("tbody",t._l(t.others,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),a("td",[a("v-rating",{attrs:{color:"#4124d1","half-increments":"",readonly:"",value:e.rating}})],1)])})),0)]},proxy:!0}])})],1)],1),a("v-btn",{attrs:{rounded:"",id:"hide-button"},on:{click:function(e){return t.otherSkillsDisplay()}}},[t.otherSkills?[t._v(" Hide ")]:[t._v(" Show Other Skills ")]],2)],1)],1)],1)},R=[],W={name:"Skills",data:function(){return{languages:[{name:"Python",rating:4.5},{name:"Java",rating:4.5},{name:"Javascript",rating:4.5},{name:"HTML5/CSS3",rating:4.5},{name:"Node.js/Express.js",rating:4},{name:"C",rating:4},{name:"SQL",rating:4},{name:"Ruby",rating:3},{name:"MATLAB",rating:3}],technologies:[{name:"Vue/Vuex",rating:4.5},{name:"D3.js/Chart.js",rating:4.5},{name:"Flask",rating:4.5},{name:"ElasticSearch",rating:4},{name:"Ajax",rating:3},{name:"Sinatra",rating:3},{name:"Redis",rating:2.5},{name:"Postgres & MongoDB",rating:2.5},{name:"Git",rating:4.5}],others:[{name:"Adobe Photoshop",rating:4.5},{name:"Leadership",rating:4.5},{name:"Communication",rating:4.5},{name:"Creativitiy",rating:4.5},{name:"Dedication",rating:4.5},{name:"Attention to Detail",rating:4.5}],otherSkills:!1}},methods:{otherSkillsDisplay:function(){this.otherSkills?this.otherSkills=!1:this.otherSkills=!0}}},z=W,J=(a("cc0f"),a("b0af")),U=a("99d9"),q=a("0e8f"),Q=a("a722"),G=a("1d4d"),K=a("1f4f"),X=Object(u["a"])(z,H,R,!1,null,"ec137c2a",null),Y=X.exports;v()(X,{VBtn:O["a"],VCard:J["a"],VCardText:U["a"],VDivider:P["a"],VFlex:q["a"],VLayout:Q["a"],VRating:G["a"],VSimpleTable:K["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("span",{staticClass:"bg"}),a("h1",[t._v("About Me")]),a("v-divider",{attrs:{dark:"",color:"white"}}),t._m(0)],1)},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"content"}},[a("p",[t._v(" Hi there! I'm Abbas and welcome to my website! I'm currently a senior at The "),a("b",[t._v("University of Pittsburgh")]),t._v(" and I enjoy being a student here! I get to learn a lot new everyday and work on cool stuff. I enjoy Computer Science so much that it's hard to pin down which field I like the most, but I've mostly been enjoying working in "),a("b",[t._v("Front-End")]),t._v(" and "),a("b",[t._v("Back-End development")]),t._v(". I gained interest in computer science when I first attended a workshop at CMU Qatar, where I built an Arduino remote controlled car and I also learnt about some of the algorithms used in search engines. After that, I bought some books right away and started to learn how to code! ")]),a("p",[t._v(" I've also been taking classes and working on projects in the fields of "),a("b",[t._v("Data Science, Artificial Intelligence, Computer Vision and Machine Learning ")]),t._v(" as I'm thoroughly interested in diving into these fields as well! ")]),a("p",[t._v(" I am very keen on attending and organizing "),a("b",[t._v("hackathons")]),t._v(" as it helps me to stay connected and experiment with all the latest technologies and I get to meet a lot of amazing people. Apart from that, I like to "),a("b",[t._v("travel, take pictures and explore new cuisines")]),t._v(". So far, I've been to "),a("b",[t._v("9 countries")]),t._v(" and I'm looking forward to traveling more with my friends and family! I also enjoy "),a("b",[t._v("graphic designing")]),t._v(", which really helps bring out my creative side in front-end development. I also play a lot of "),a("b",[t._v("Soccer")]),t._v(" and I am a huge "),a("b",[t._v("Real Madrid fan")]),t._v(". ")]),a("p",{attrs:{id:"quote"}},[a("em",[t._v("“"),a("b",[t._v("Self-reverence")]),t._v(", "),a("b",[t._v("self-knowledge")]),t._v(", "),a("b",[t._v("self control")]),t._v(" — these three alone lead to "),a("b",[t._v("power")]),t._v(".” ")]),a("br"),t._v(" – Alfred, Lord Tennyson ")])])}],et=(a("f7c4"),{}),at=Object(u["a"])(et,Z,tt,!1,null,"2a6a7841",null),nt=at.exports;v()(at,{VDivider:P["a"]});var rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"bg"})])}],ot=(a("ed6c"),{}),st=Object(u["a"])(ot,rt,it,!1,null,"4b18bf72",null),lt=st.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("v-btn",{attrs:{fixed:"",dark:"",fab:"",top:"",left:"",color:"black",to:{name:"home"}}},[a("v-icon",[t._v("mdi-arrow-left-bold")])],1),a("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://docs.google.com/gview?url=https://github.com/abbasahmed/Personal-Website/raw/master/src/assets/resume.pdf&embedded=true",frameborder:"0"}})],1)},ut=[],dt={name:"Resume"},vt=dt,mt=(a("3a70"),Object(u["a"])(vt,ct,ut,!1,null,"2f228f21",null)),ft=mt.exports;v()(mt,{VBtn:O["a"],VIcon:E["a"]}),n["a"].use(S["a"]);var pt=new S["a"]({mode:"history",routes:[{path:"/",name:"home",component:$},{path:"/Work",name:"work",component:B,props:!0},{path:"/skills",name:"skills",component:Y},{path:"/about",name:"about",component:nt},{path:"/contact",name:"contact",component:lt},{path:"/resume",name:"resume",meta:{hideNavigation:!0},component:ft}]});n["a"].config.productionTip=!0;var ht=a("953f");ht.keys().forEach((function(t){var e=ht(t),a=g()(y()(t.split("/").pop().replace(/\.\w+$/,"")));n["a"].component(a,e.default||e)})),n["a"].use(h["a"]),n["a"].use(w["default"]),new n["a"]({vuetify:x,router:pt,render:function(t){return t(p)}}).$mount("#app")},6423:function(t,e,a){},6569:function(t,e,a){},"71b9":function(t,e,a){},"742d":function(t,e,a){},"851c":function(t,e,a){},"8b9e":function(t,e,a){"use strict";var n=a("3aa8"),r=a.n(n);r.a},"953f":function(t,e,a){var n={"./AppFooter.vue":"f657","./AppNavigation.vue":"19e2","./NameTyper.vue":"abbe"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="953f"},a791:function(t,e,a){},abbe:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-typed-js",{attrs:{strings:["Hi!","Nice to meet ya!","I am Abbas Ahmed!"],showCursor:!1,typeSpeed:70}},[a("h1",{staticClass:"typing"})])},r=[],i={name:"NameTyper",props:{strings:{type:Array,required:!0}}},o=i,s=(a("eab0"),a("2877")),l=Object(s["a"])(o,n,r,!1,null,"642905b9",null);e["default"]=l.exports},cc0f:function(t,e,a){"use strict";var n=a("1d48"),r=a.n(n);r.a},d443:function(t,e,a){t.exports=a.p+"img/memoji.ea3e38eb.jpg"},eab0:function(t,e,a){"use strict";var n=a("eb09"),r=a.n(n);r.a},eb01:function(t,e,a){"use strict";var n=a("742d"),r=a.n(n);r.a},eb09:function(t,e,a){},ed6c:function(t,e,a){"use strict";var n=a("a791"),r=a.n(n);r.a},f653:function(t,e,a){t.exports=a.p+"img/Abbas.8c9a204b.png"},f657:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",color:"black",absolute:""}},[a("v-card",{staticClass:"black text-center",attrs:{flat:"",tile:"",width:"100%"}},[a("v-card-text",[a("v-row",{attrs:{justify:"space-around"}},[a("v-btn",{attrs:{text:"",href:"https://github.com/abbasahmed"}},[a("v-icon",{attrs:{color:"rgb(62.1%, 0%, 90.9%)"}},[t._v("mdi-github-circle")])],1),a("v-btn",{attrs:{text:"",href:"https://linkedin.com/in/abbaszahmed"}},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-linkedin")])],1),a("v-btn",{attrs:{text:"",href:"https://twitter.com/ab_bas27"}},[a("v-icon",{attrs:{color:"light-blue"}},[t._v("mdi-twitter")])],1),a("v-btn",{attrs:{text:"",href:"mailto:abbaszahmed@gmail.com"}},[a("v-icon",{attrs:{color:"red"}},[t._v("mdi-email")])],1)],1)],1),a("v-divider"),a("v-card-text",[t._v(" Copyright © 4019 ")])],1)],1)},r=[],i={name:"AppFooter"},o=i,s=(a("4f30"),a("2877")),l=a("6544"),c=a.n(l),u=a("8336"),d=a("b0af"),v=a("99d9"),m=a("ce7e"),f=a("553a"),p=a("132d"),h=a("0fd9"),b=Object(s["a"])(o,n,r,!1,null,"86af67a2",null);e["default"]=b.exports;c()(b,{VBtn:u["a"],VCard:d["a"],VCardText:v["a"],VDivider:m["a"],VFooter:f["a"],VIcon:p["a"],VRow:h["a"]})},f7c4:function(t,e,a){"use strict";var n=a("71b9"),r=a.n(n);r.a},f88b:function(t,e,a){}});
//# sourceMappingURL=app.4301f195.js.map