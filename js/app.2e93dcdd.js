(function(e){function t(t){for(var c,o,i=t[0],s=t[1],u=t[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1771:function(e,t,n){var c={"./download.png":"f6f5","./logo.png":"cf05","./project1.png":"dfe7","./project2.png":"6601","./project3.png":"583e","./project4.png":"8888","./project5.png":"66f5","./project6.png":"2d04","./spinner.gif":"6324","./webdev.png":"d998","./webdev2.png":"6cf5"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=a,e.exports=r,r.id="1771"},2773:function(e,t,n){"use strict";n("c955")},"2d04":function(e,t,n){e.exports=n.p+"img/project6.3524ecaf.png"},"2f01":function(e,t,n){"use strict";n("3877")},3877:function(e,t,n){},5160:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,o){var i=Object(c["x"])("Nav"),s=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["e"])("div",null,[Object(c["h"])(i),Object(c["h"])(s)])}n("ac1f"),n("5319");var a=function(e){return Object(c["t"])("data-v-6d57368c"),e=e(),Object(c["r"])(),e},o={class:"container"},i={class:"nav"},s=Object(c["g"])("Home"),u=Object(c["g"])("Projects"),l=Object(c["g"])("Repos"),f=a((function(){return Object(c["f"])("li",{class:"btn"},[Object(c["f"])("a",{href:"mailto:avalek@student.unipu.hr"},"Contact me")],-1)}));function p(e,t,n,r,a,p){var b=this,d=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["e"])("div",o,[Object(c["f"])("h2",{class:"links",style:{color:"white"},onClick:t[0]||(t[0]=Object(c["D"])((function(e){return b.$router.replace({name:"Home"})}),["prevent"]))},"Alen Valek"),Object(c["f"])("ul",i,[Object(c["f"])("li",null,[Object(c["h"])(d,{class:"links",to:{name:"Home"}},{default:Object(c["C"])((function(){return[s]})),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(d,{class:"links",to:{name:"Projects"}},{default:Object(c["C"])((function(){return[u]})),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(d,{class:"links",to:{name:"Repos"}},{default:Object(c["C"])((function(){return[l]})),_:1})]),f])])}var b={name:"Nav"},d=(n("2f01"),n("6b0d")),j=n.n(d);const O=j()(b,[["render",p],["__scopeId","data-v-6d57368c"]]);var g=O,h={name:"App",components:{Nav:g}};n("fa9a");const m=j()(h,[["render",r]]);var v=m,_=n("6c02"),k=function(e){return Object(c["t"])("data-v-82dafb46"),e=e(),Object(c["r"])(),e},y={class:"github__card"},w=k((function(){return Object(c["f"])("h1",{style:{"text-align":"center"}},"Github information",-1)})),x=["src"],C={key:0,class:"github__card__info__right"},D=k((function(){return Object(c["f"])("span",{style:{color:"rgb(137, 198, 255)","font-weight":"600"}},"Username:",-1)})),P=k((function(){return Object(c["f"])("span",{style:{color:"rgb(137, 198, 255)","font-weight":"600"}},"Public repos:",-1)})),S=k((function(){return Object(c["f"])("span",{style:{color:"rgb(137, 198, 255)","font-weight":"600"}},"Created at:",-1)})),q=k((function(){return Object(c["f"])("span",{style:{color:"rgb(137, 198, 255)","font-weight":"600"}},"Updated at:",-1)})),N={class:"socials"},z={href:"https://www.youtube.com/channel/UCliAJO7-8oBOTjODslSH50A",target:"_blank"},T={href:"https://github.com/alenvalek",target:"_blank"},I={href:"https://instagram.com/alenvalek",target:"_blank"};function H(e,t,n,r,a,o){var i=Object(c["x"])("Hero"),s=Object(c["x"])("fa");return Object(c["q"])(),Object(c["e"])("div",null,[Object(c["h"])(i),Object(c["f"])("div",y,[w,Object(c["f"])("div",{class:"github__card__info",onClick:t[0]||(t[0]=Object(c["D"])((function(){return o.handleClick&&o.handleClick.apply(o,arguments)}),["prevent"]))},[Object(c["f"])("img",{src:a.gitData.avatar_url,style:{height:"100px",width:"100px","border-radius":"50% !important","margin-right":"2rem",border:"2px solid rgb(137, 198, 255)",padding:".2rem"}},null,8,x),a.gitData?(Object(c["q"])(),Object(c["e"])("div",C,[Object(c["f"])("h4",null,[D,Object(c["g"])(" "+Object(c["z"])(a.gitData.login),1)]),Object(c["f"])("h4",null,[P,Object(c["g"])(" "+Object(c["z"])(a.gitData.public_repos),1)]),Object(c["f"])("h4",null,[S,Object(c["g"])(" "+Object(c["z"])(new Date(a.gitData.created_at).toUTCString()),1)]),Object(c["f"])("h4",null,[q,Object(c["g"])(" "+Object(c["z"])(new Date(a.gitData.updated_at).toUTCString()),1)])])):Object(c["d"])("",!0)])]),Object(c["f"])("div",N,[Object(c["f"])("a",z,[Object(c["h"])(s,{class:"youtube",icon:["fab","youtube"]})]),Object(c["f"])("a",T,[Object(c["h"])(s,{class:"github",icon:["fab","github"]})]),Object(c["f"])("a",I,[Object(c["h"])(s,{class:"instagram",icon:["fab","instagram"]})])])])}var A=n("1da1"),M=(n("96cf"),n("6cf5")),R=n.n(M),U=function(e){return Object(c["t"])("data-v-98794960"),e=e(),Object(c["r"])(),e},E={class:"container"},F=U((function(){return Object(c["f"])("div",{class:"container__left"},[Object(c["f"])("h1",{class:"name"},"Alen Valek"),Object(c["f"])("h1",null,[Object(c["g"])("+ Student at "),Object(c["f"])("span",{style:{color:"rgba(100, 255, 255, 1)"}},"Faculty Of Informatics Pula")]),Object(c["f"])("h1",null,[Object(c["g"])("+ "),Object(c["f"])("span",{style:{color:"rgba(255, 255, 100, 1)"}},"Personal website"),Object(c["g"])(" for a Software Engineering course")]),Object(c["f"])("h1",null,"+ Web Dev Connoisseur")],-1)})),J=U((function(){return Object(c["f"])("div",{class:"container__right"},[Object(c["f"])("img",{src:R.a})],-1)})),V=[F,J];function G(e,t,n,r,a,o){return Object(c["q"])(),Object(c["e"])("div",E,V)}var B={name:"Hero"};n("2773");const L=j()(B,[["render",G],["__scopeId","data-v-98794960"]]);var W=L,$=n("bc3a"),K=n.n($),Q={name:"Home",components:{Hero:W},data:function(){return{gitData:null}},methods:{handleClick:function(){window.location="".concat(this.gitData.html_url)}},created:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,K.a.get("https://api.github.com/users/alenvalek");case 2:n=t.sent,e.gitData=n.data;case 4:case"end":return t.stop()}}),t)})))()}};n("a470");const X=j()(Q,[["render",H],["__scopeId","data-v-82dafb46"]]);var Y=X,Z=(n("b0c0"),n("a4d3"),n("e01a"),function(e){return Object(c["t"])("data-v-b5533894"),e=e(),Object(c["r"])(),e}),ee={class:"container"},te=Z((function(){return Object(c["f"])("h1",{style:{color:"white"}},"GitHub repos",-1)})),ne={class:"card__container"},ce={key:0,class:"list__container"},re={key:1},ae=Z((function(){return Object(c["f"])("h1",{style:{color:"white",margin:"10rem"}},"No repos avaliable :/",-1)})),oe=[ae],ie={key:2};function se(e,t,n,r,a,o){var i=Object(c["x"])("Card"),s=Object(c["x"])("fa");return Object(c["q"])(),Object(c["e"])("div",ee,[te,Object(c["f"])("div",ne,[a.repos?(Object(c["q"])(),Object(c["e"])("div",ce,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(a.repos,(function(e){return Object(c["q"])(),Object(c["e"])("ul",{class:"card",key:e.id},[Object(c["h"])(i,{name:e.name,fullName:e.full_name,description:e.description,avatar_url:e.avatar_url,html_url:e.html_url},null,8,["name","fullName","description","avatar_url","html_url"])])})),128))])):0==a.repos.length?(Object(c["q"])(),Object(c["e"])("div",re,oe)):(Object(c["q"])(),Object(c["e"])("div",ie,[Object(c["h"])(s,{style:{"font-size":"10rem",color:"green","margin-top":"5rem"},icon:"spinner",spin:""})]))])])}function ue(e,t,n,r,a,o){return Object(c["q"])(),Object(c["e"])("div",{class:"card",onClick:t[0]||(t[0]=Object(c["D"])((function(){return o.handleClick&&o.handleClick.apply(o,arguments)}),["prevent"]))},[Object(c["f"])("h3",null,Object(c["z"])(n.name),1),Object(c["f"])("h5",null,"Project name: "+Object(c["z"])(n.fullName),1),Object(c["f"])("h5",null,"Description: "+Object(c["z"])(n.description||"-"),1)])}var le={name:"Card",props:{name:String,html_url:String,description:String,fullName:String},methods:{handleClick:function(){window.location="".concat(this.html_url)}}};n("db6d");const fe=j()(le,[["render",ue],["__scopeId","data-v-39a62dc9"]]);var pe=fe,be={name:"Projects",data:function(){return{repos:[]}},components:{Card:pe},created:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,K.a.get("https://api.github.com/users/alenvalek/repos");case 2:n=t.sent,e.repos=n.data;case 4:case"end":return t.stop()}}),t)})))()}};n("f10c");const de=j()(be,[["render",se],["__scopeId","data-v-b5533894"]]);var je=de,Oe={class:"container"};function ge(e,t,n,r,a,o){var i=Object(c["x"])("ProjectCard");return Object(c["q"])(),Object(c["e"])("div",Oe,[Object(c["h"])(i,{link:"https://cryptic-forest-10925.herokuapp.com/",name:"Dev Connector",desc:"Social Media site for developers",img:"project1.png"}),Object(c["h"])(i,{link:"https://minidocs.herokuapp.com/",name:"Mini Docs",desc:"Some google docs clone using SocketsIO",notes:"NOTE: At the moment the mongo cluster is down",img:"project2.png"}),Object(c["h"])(i,{link:"https://elegant-easley-561c00.netlify.app/",name:"TalkIO",desc:"Social Media site in progress",img:"project3.png"}),Object(c["h"])(i,{link:"https://sleepy-stonebraker-7339f3.netlify.app/",name:"Covid Tracker",desc:"College Project - Data Visualisation",img:"project4.png"}),Object(c["h"])(i,{link:"https://stupefied-swartz-c6888b.netlify.app/",name:"Expense Tracker",desc:"Expense tracker frontend mockup",img:"project5.png"}),Object(c["h"])(i,{link:"https://nervous-liskov-f073e5.netlify.app/",name:"Todo App",desc:"Todo app frontend mockup",img:"project6.png"})])}n("9911");var he=["href"],me={class:"container"},ve=["src"];function _e(e,t,r,a,o,i){return Object(c["q"])(),Object(c["e"])("a",{href:r.link,target:"_blank"},[Object(c["f"])("div",me,[Object(c["f"])("h2",null,Object(c["z"])(r.name),1),Object(c["f"])("img",{src:n("1771")("./".concat(r.img))},null,8,ve),Object(c["f"])("p",null,Object(c["z"])(r.desc),1),Object(c["f"])("p",null,[Object(c["f"])("strong",null,Object(c["z"])(r.notes),1)])])],8,he)}var ke={name:"ProjectCard",props:["name","img","desc","link","notes"]};n("8e99");const ye=j()(ke,[["render",_e],["__scopeId","data-v-6fc4d78c"]]);var we=ye,xe={name:"Projects",components:{ProjectCard:we}};n("6734");const Ce=j()(xe,[["render",ge],["__scopeId","data-v-3be19a69"]]);var De=Ce,Pe=function(e){return Object(c["t"])("data-v-c2bcbc34"),e=e(),Object(c["r"])(),e},Se={class:"container"},qe=Pe((function(){return Object(c["f"])("h1",null," 404 ",-1)})),Ne=Pe((function(){return Object(c["f"])("h3",null,"No hidden clues here Sherlock..",-1)})),ze=[qe,Ne];function Te(e,t,n,r,a,o){return Object(c["q"])(),Object(c["e"])("div",Se,ze)}var Ie={name:"NotFound"};n("d72b");const He=j()(Ie,[["render",Te],["__scopeId","data-v-c2bcbc34"]]);var Ae=He,Me=[{path:"/",name:"Home",component:Y},{path:"/repos",name:"Repos",component:je},{path:"/projects",name:"Projects",component:De},{path:"/:catchAll(.*)",component:Ae}],Re=Object(_["a"])({history:Object(_["b"])("/"),routes:Me}),Ue=Re,Ee=n("ecee"),Fe=n("ad3d"),Je=n("c074"),Ve=n("f2d1");Ee["c"].add(Ve["a"],Je["a"]),Object(c["c"])(v).use(Ue).component("fa",Fe["a"]).mount("#app")},"583e":function(e,t,n){e.exports=n.p+"img/project3.59546182.png"},6324:function(e,t,n){e.exports=n.p+"img/spinner.9209e391.gif"},6601:function(e,t,n){e.exports=n.p+"img/project2.9905f0d4.png"},"66f5":function(e,t,n){e.exports=n.p+"img/project5.0874132f.png"},6734:function(e,t,n){"use strict";n("7c02")},"6cf5":function(e,t,n){e.exports=n.p+"img/webdev2.6a20a5a8.png"},7414:function(e,t,n){},"7c02":function(e,t,n){},"881f":function(e,t,n){},8888:function(e,t,n){e.exports=n.p+"img/project4.a848a8b7.png"},"8e99":function(e,t,n){"use strict";n("881f")},"9e93":function(e,t,n){},a470:function(e,t,n){"use strict";n("c343")},c343:function(e,t,n){},c955:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d72b:function(e,t,n){"use strict";n("5160")},d998:function(e,t,n){e.exports=n.p+"img/webdev.b477c1b1.png"},db6d:function(e,t,n){"use strict";n("9e93")},dfe7:function(e,t,n){e.exports=n.p+"img/project1.a14a2c56.png"},eb40:function(e,t,n){},f10c:function(e,t,n){"use strict";n("7414")},f6f5:function(e,t,n){e.exports=n.p+"img/download.7d283556.png"},fa9a:function(e,t,n){"use strict";n("eb40")}});
//# sourceMappingURL=app.2e93dcdd.js.map