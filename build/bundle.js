var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function a(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let o,i;function l(e,t){return o||(o=document.createElement("a")),o.href=t,e===o.href}function c(e){return null==e?"":e}function d(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function g(){return f(" ")}function h(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.data!==t&&(e.data=t)}function y(e,t){e.value=null==t?"":t}function k(e){i=e}function x(){if(!i)throw new Error("Function called outside component initialization");return i}function S(e){x().$$.on_mount.push(e)}const $=[],q=[];let j=[];const E=[],A=Promise.resolve();let L=!1;function O(e){j.push(e)}const M=new Set;let C=0;function I(){if(0!==C)return;const e=i;do{try{for(;C<$.length;){const e=$[C];C++,k(e),_(e.$$)}}catch(e){throw $.length=0,C=0,e}for(k(null),$.length=0,C=0;q.length;)q.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];M.has(t)||(M.add(t),t())}j.length=0}while($.length);for(;E.length;)E.pop()();L=!1,M.clear(),k(e)}function _(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const T=new Set;let N;function P(e,t){e&&e.i&&(T.delete(e),e.i(t))}function Q(e,t,n,s){if(e&&e.o){if(T.has(e))return;T.add(e),N.c.push((()=>{T.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}function F(e){e&&e.c()}function z(e,n,r,o){const{fragment:i,after_update:l}=e.$$;i&&i.m(n,r),o||O((()=>{const n=e.$$.on_mount.map(t).filter(a);e.$$.on_destroy?e.$$.on_destroy.push(...n):s(n),e.$$.on_mount=[]})),l.forEach(O)}function H(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];j.forEach((s=>-1===e.indexOf(s)?t.push(s):n.push(s))),n.forEach((e=>e())),j=t}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function R(e,t){-1===e.$$.dirty[0]&&($.push(e),L||(L=!0,A.then(I)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(t,a,r,o,l,c,d,m=[-1]){const p=i;k(t);const v=t.$$={fragment:null,ctx:[],props:c,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(p?p.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:a.target||p.$$.root};d&&d(v.root);let f=!1;if(v.ctx=r?r(t,a.props||{},((e,n,...s)=>{const a=s.length?s[0]:n;return v.ctx&&l(v.ctx[e],v.ctx[e]=a)&&(!v.skip_bound&&v.bound[e]&&v.bound[e](a),f&&R(t,e)),n})):[],v.update(),f=!0,s(v.before_update),v.fragment=!!o&&o(v.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);v.fragment&&v.fragment.l(e),e.forEach(u)}else v.fragment&&v.fragment.c();a.intro&&P(t.$$.fragment),z(t,a.target,a.anchor,a.customElement),I()}k(p)}class V{$destroy(){H(this,1),this.$destroy=e}$on(t,n){if(!a(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const U=[];const J=function(t,n=e){let s;const a=new Set;function o(e){if(r(t,e)&&(t=e,s)){const e=!U.length;for(const e of a)e[1](),U.push(e,t);if(e){for(let e=0;e<U.length;e+=2)U[e][0](U[e+1]);U.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(r,i=e){const l=[r,i];return a.add(l),1===a.size&&(s=n(o)||e),r(t),()=>{a.delete(l),0===a.size&&s&&(s(),s=null)}}}}("home");function B(t){let n;return{c(){n=v("main"),n.innerHTML='<section class="section" id="home"><div class="container"><div class="row hv-100 align-items-center justify-content-center "><div class="col-12"><a href="#" class="logo-wrapper animate__animated animate__fadeIn svelte-1kz0ud7"><img src="img/logo164.png" alt="Juliver Galleto" class="logo svelte-1kz0ud7"/></a> \n\t\t\t\t\t<div class="scroll-down mt44 text-center"><p class="font12">SCROLL DOWN</p> \n\t\t\t\t\t\t<a href="#about" class="arrow-bounce svelte-1kz0ud7"><i class="ti-angle-double-down font24"></i></a></div></div></div></div></section>'},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}class W extends V{constructor(e){super(),D(this,e,null,B,r,{})}}function K(t){let n;return{c(){n=v("main"),n.innerHTML='<section class="section text-center" id="about"><div class="container"><div class="row hv-100 align-items-center justify-content-center "><div class="col-12"><div class="row"><div class="col-12 mb32"><h2>HELLO, I&#39;M JULIVER</h2> \n\t\t\t\t\t\t\t<p>FULL STACK WEB DEVELOPER</p></div></div> \n\t\t\t\t\t<div class="row"><div class="col-12"><p class="mb16">A full-stack web developer with almost 8 years of experience, I have a diverse set of skills ranging from Nodejs, SASS, Javascript, VueJS, Nuxt, Svelte, Electron wordpress, all the way to Cordova, LAMP, Laravel, Lumen, Codeigniter, RethinkDB, MongoDB, custom development ready for you. I’m a team player and enthusiastic on both the frontend and backend and always on discovering and learning new and cutting edge development tools and languages. I am passionate about being a web developer. I find it really easy to get involved in the projects I work on. You get into the system, find a way to build it/change it/fix it, and then release it to whoever needs it. It’s a fun cycle.</p></div></div></div></div></div></section>'},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}class Y extends V{constructor(e){super(),D(this,e,null,K,r,{})}}function G(e,t,n){const s=e.slice();return s[9]=t[n],s}function X(e,t,n){const s=e.slice();return s[9]=t[n],s[13]=n,s}function Z(e){let t,n,s,a,r,o,i,l,p=e[9].name+"";function y(){return e[6](e[13])}return{c(){t=v("li"),n=v("a"),s=f(p),o=g(),w(n,"href",a="#"+e[9].name),w(n,"class",r=c(e[9].active?"active":"")+" svelte-1pbs0yk"),w(t,"class","svelte-1pbs0yk")},m(e,a){m(e,t,a),d(t,n),d(n,s),d(t,o),i||(l=h(n,"click",y),i=!0)},p(t,o){e=t,2&o&&p!==(p=e[9].name+"")&&b(s,p),2&o&&a!==(a="#"+e[9].name)&&w(n,"href",a),2&o&&r!==(r=c(e[9].active?"active":"")+" svelte-1pbs0yk")&&w(n,"class",r)},d(e){e&&u(t),i=!1,l()}}}function ee(e){let t,n,s,a,r,o,i,c,p,y,k,x,S,$,q,j,E,A,L,O,M,C,I,_,T,N,P,Q,F,z,H,R,D,V,U,J,B=e[9].name+"",W=e[9].url+"",K=e[9].type+"",Y=e[9].frameworks.join(", ")+"",G=e[9].works+"",X=e[9].name+"";function Z(){return e[7](e[9])}return{c(){t=v("div"),n=v("div"),s=v("div"),a=v("img"),i=g(),c=v("div"),p=v("p"),y=f("Name: "),k=f(B),x=g(),S=v("p"),$=f("Url: "),q=v("a"),j=f(W),A=g(),L=v("p"),O=f("Type: "),M=f(K),C=g(),I=v("p"),_=f("Frameworks: "),T=f(Y),N=g(),P=v("p"),Q=f("Works: "),F=f(G),z=g(),H=v("div"),R=v("p"),D=f(X),V=g(),l(a.src,r=e[9].img)||w(a,"src",r),w(a,"alt",o=e[9].name),w(a,"class","svelte-1pbs0yk"),w(s,"class","img-slider d-flex align-items-center svelte-1pbs0yk"),w(p,"class","mb8 svelte-1pbs0yk"),w(q,"href",E=e[9].url),w(q,"class","svelte-1pbs0yk"),w(S,"class","mb8 svelte-1pbs0yk"),w(L,"class","mb8 svelte-1pbs0yk"),w(I,"class","mb8 svelte-1pbs0yk"),w(P,"class","mb8 svelte-1pbs0yk"),w(c,"class","details svelte-1pbs0yk"),w(R,"class","m00 svelte-1pbs0yk"),w(H,"class","caption svelte-1pbs0yk"),w(n,"class","box svelte-1pbs0yk"),w(t,"class","col-12 col-md-4 mb16")},m(e,r){m(e,t,r),d(t,n),d(n,s),d(s,a),d(n,i),d(n,c),d(c,p),d(p,y),d(p,k),d(c,x),d(c,S),d(S,$),d(S,q),d(q,j),d(c,A),d(c,L),d(L,O),d(L,M),d(c,C),d(c,I),d(I,_),d(I,T),d(c,N),d(c,P),d(P,Q),d(P,F),d(n,z),d(n,H),d(H,R),d(R,D),d(t,V),U||(J=h(c,"click",Z),U=!0)},p(t,n){e=t,1&n&&!l(a.src,r=e[9].img)&&w(a,"src",r),1&n&&o!==(o=e[9].name)&&w(a,"alt",o),1&n&&B!==(B=e[9].name+"")&&b(k,B),1&n&&W!==(W=e[9].url+"")&&b(j,W),1&n&&E!==(E=e[9].url)&&w(q,"href",E),1&n&&K!==(K=e[9].type+"")&&b(M,K),1&n&&Y!==(Y=e[9].frameworks.join(", ")+"")&&b(T,Y),1&n&&G!==(G=e[9].works+"")&&b(F,G),1&n&&X!==(X=e[9].name+"")&&b(D,X)},d(e){e&&u(t),U=!1,J()}}}function te(e){let t,n=e[9].active&&ee(e);return{c(){n&&n.c(),t=f("")},m(e,s){n&&n.m(e,s),m(e,t,s)},p(e,s){e[9].active?n?n.p(e,s):(n=ee(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&u(t)}}}function ne(t){let n,s,a,r,o,i,c,f,b,y,k,x,S,$,q,j,E,A,L,O,M,C,I,_,T,N,P,Q,F=t[1],z=[];for(let e=0;e<F.length;e+=1)z[e]=Z(X(t,F,e));let H=t[0],R=[];for(let e=0;e<H.length;e+=1)R[e]=te(G(t,H,e));return{c(){n=v("main"),s=v("section"),a=v("div"),r=v("div"),o=v("div"),i=v("div"),i.innerHTML='<div class="col-12 mb44"><h3>Works</h3></div>',c=g(),f=v("div"),b=v("div"),y=v("ul");for(let e=0;e<z.length;e+=1)z[e].c();k=g(),x=v("div");for(let e=0;e<R.length;e+=1)R[e].c();S=g(),$=v("div"),j=g(),E=v("div"),A=v("div"),L=v("i"),O=g(),M=v("div"),C=v("div"),I=v("div"),_=v("img"),w(i,"class","row text-center"),w(y,"class","p00 m00 works-menu svelte-1pbs0yk"),w(b,"class","col-12 mb16 d-flex justify-content-center"),w(f,"class","row"),w(x,"class","row"),w(o,"class","col-12"),w(r,"class","row hv-100 align-items-center justify-content-center "),w(a,"class","container"),w(s,"class","section"),w(s,"id","works"),w($,"class",q="justmodal-shadow "+(t[2]?"active":"")),w(L,"class","ti ti-close justmodal-close"),l(_.src,T=t[3])||w(_,"src",T),w(_,"class","svelte-1pbs0yk"),w(I,"class","col-12 mt44 mb24"),w(C,"class","row"),w(M,"class","justmodal-content"),w(A,"class","justmodal-container p00"),w(E,"class",N="justmodal-wrapper "+(t[2]?"active":""))},m(e,l){m(e,n,l),d(n,s),d(s,a),d(a,r),d(r,o),d(o,i),d(o,c),d(o,f),d(f,b),d(b,y);for(let e=0;e<z.length;e+=1)z[e]&&z[e].m(y,null);d(o,k),d(o,x);for(let e=0;e<R.length;e+=1)R[e]&&R[e].m(x,null);d(n,S),d(n,$),d(n,j),d(n,E),d(E,A),d(A,L),d(A,O),d(A,M),d(M,C),d(C,I),d(I,_),P||(Q=h(L,"click",t[8]),P=!0)},p(e,[t]){if(34&t){let n;for(F=e[1],n=0;n<F.length;n+=1){const s=X(e,F,n);z[n]?z[n].p(s,t):(z[n]=Z(s),z[n].c(),z[n].m(y,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=F.length}if(17&t){let n;for(H=e[0],n=0;n<H.length;n+=1){const s=G(e,H,n);R[n]?R[n].p(s,t):(R[n]=te(s),R[n].c(),R[n].m(x,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=H.length}4&t&&q!==(q="justmodal-shadow "+(e[2]?"active":""))&&w($,"class",q),8&t&&!l(_.src,T=e[3])&&w(_,"src",T),4&t&&N!==(N="justmodal-wrapper "+(e[2]?"active":""))&&w(E,"class",N)},i:e,o:e,d(e){e&&u(n),p(z,e),p(R,e),P=!1,Q()}}}function se(e,t,n){let s=[{name:"Pharmacy POS Cashier",img:"img/ibotika-cashier.jpg",url:"",type:"POS",frameworks:["Electron","Node","Vue","Lumen","Socketio","SQLite"],works:"POS cashier",active:!0},{name:"Pharmacy POS Order",img:"img/ibotika-tender.jpg",url:"",type:"POS",frameworks:["Electron","Node","Vue","Lumen","Socketio","SQLite"],works:"POS order",active:!0},{name:"RFID QR Attendance App",img:"img/rfid-qr-scanner.jpg",url:"",type:"POS",frameworks:["Electron","Node","Vue","Lumen","Socketio","Raspberry pi","Python"],works:"RFID and QR scanner, attendance system",active:!0},{name:"Pharmacy Mobile App",img:"img/ibotika-tender-mobile.jpg",url:"",type:"Mobile App",frameworks:["Cordova","Onsen","Socketio","Android"],works:"Mobile App, POS order",active:!0},{name:"Allanapp Mobile App",img:"img/allanapp.jpg",url:"https://play.google.com/store/apps/details?id=com.allanapp.app",type:"Mobile app",frameworks:["Cordova","Onsen","Vue","Socketio","Android"],works:"Mobile App",active:!0},{name:"Connectnigeria Mobile App",img:"img/connectnigeriaapp.jpg",url:"",type:"Mobile app",frameworks:["Cordova","Onsen","Vue","Socketio","Android"],works:"Mobile App",active:!0},{name:"SMS App",img:"img/bmap-sms.jpg",url:"",type:"POS",frameworks:["Electron","Node","Vue","Lumen","Socketio","Serialport"],works:"POS order",active:!0},{name:"interoptive",img:"img/interoptive.jpg",url:"interoptive.com",type:"Form Survey",frameworks:["Laravel","jQuery"],works:"surveys, form, database, globel authentication, workspace, plans",active:!0},{name:"aipromptshelp",img:"img/aipromptshelp.jpg",url:"aipromptshelp.com",type:"Search",frameworks:["Laravel","Vue","Chatgpt"],works:"search, prompts, folders, admin, account",active:!0},{name:"vaccine app",img:"img/vax.jpg",url:"",type:"Search",frameworks:["Laravel","Vue","jQuery","RethinkDB","Node","Socketio"],works:"search, import/export, statistics",active:!0},{name:"yeahshui",img:"img/yeahshui.jpg",url:"yeahshui.shop",type:"Ecommerce",frameworks:["Opencart","jQuery"],works:"theme, backend",active:!0},{name:"manifestapparel",img:"img/manifestapparel.jpg",url:"http://manifestapparel.com",type:"Ecommerce",frameworks:["Opencart","jQuery"],works:"theme, backend",active:!0},{name:"everready",img:"img/everready.jpg",url:"http://nextdayhost.com/demo/web/everready/",type:"Ecommerce",frameworks:["Opencart","jQuery"],works:"theme, backend",active:!0},{name:"jovadi",img:"img/jovadi.jpg",url:"https://jovadi.com",type:"Ecommerce",frameworks:["Laravel","Opencart","Nuxt","Vue","Stripe","jQuery","Nuxt"],works:"admin, products, orders, purchases, theme, backend",active:!0},{name:"nextdaysite",img:"img/nextdaysite.jpg",url:"nextdaysite.com",type:"company website",frameworks:["Wordpress","jQuery","Vue"],works:"theme",active:!0},{name:"Connectnigeria Articles Blog",img:"img/articles-blog.jpg",url:"https://articles.connectnigeria.com/",type:"blog",frameworks:["Wordpress","jQuery"],works:"theme",active:!0},{name:"Connectnigeria TV Blog",img:"img/cntv-blog.jpg",url:"https://cntv.connectnigeria.com",type:"blog",frameworks:["Wordpress","jQuery"],works:"theme",active:!0},{name:"Cybastion",img:"img/cybastion-blog.jpg",url:"http://nextdayhost.com/demo/web/cybastion/",type:"blog",frameworks:["Wordpress","jQuery"],works:"theme",active:!0},{name:"Bizfair",img:"img/bizfair.jpg",url:"https://bizfair.connectnigeria.com/2021/",type:"event",frameworks:["Codeigniter","Vue"],works:"database, admin, pages, voting",active:!0},{name:"JF",img:"img/jf.jpg",url:"http://cpv2.johnfoord.com",type:"valuation site",frameworks:["Laravel","Vue","MS Dynamics 365"],works:"admin, valuations, search, microsoft dynamics",active:!0},{name:"hfintech21",img:"img/hfintech21.jpg",url:"hfintech21.com",type:"social",frameworks:["Laravel","Vue","Nuxt"],works:"admin, post, blog, messaging",active:!0},{name:"Kiosk",img:"img/kiosk.jpg",url:"http://kiosk.iligan.gov.ph",type:"kiosk",frameworks:["Html","jQuery"],works:"kiosk",active:!0}],a=[...new Set(s.map((e=>e.frameworks)).flat())].map((e=>({name:e,active:!0}))),r=!1,o="";function i(e){n(2,r=!0),n(3,o=e)}function l(e){a[e].active?n(1,a[e].active=!1,a):n(1,a[e].active=!0,a),n(0,s=s.map((e=>{let t=e.frameworks.filter((e=>-1!=a.findIndex((t=>t.active&&t.name==e))));return e.active=t.length>0,e})))}return[s,a,r,o,i,l,e=>l(e),e=>{i(e.img)},()=>{n(2,r=!1)}]}class ae extends V{constructor(e){super(),D(this,e,se,ne,r,{})}}function re(t){let n;return{c(){n=v("main"),n.innerHTML='<section class="section" id="skills"><div class="container"><div class="row hv-100 align-items-center justify-content-center "><div class="col-12"><div class="row text-center"><div class="col-12 mb32"><h3>SKILLS</h3></div></div> \n\t\t\t\t\t<div class="row text-center"><div class="col-12 mb16"><p class="mb16">My work is something I do with lot of honesty, appetite and commitment. Over the past years I had the opportunity to drive and do hands-on work for some amazing brands from all over the world.</p></div></div> \n\t\t\t\t\t<div class="row"><div class="col-12 col-md-6 mb16"><div class="mb16 skill svelte-1q6w6gf" data-type="html5"><p class="mb0 svelte-1q6w6gf">HTML 5</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="css3"><p class="mb0 svelte-1q6w6gf">CSS 3</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="js"><p class="mb0 svelte-1q6w6gf">Vanilla Javascript</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="jquery"><p class="mb0 svelte-1q6w6gf">jQuery</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="vuejs"><p class="mb0 svelte-1q6w6gf">VueJS</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="svelte"><p class="mb0 svelte-1q6w6gf">Svelte</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="nodejs"><p class="mb0 svelte-1q6w6gf">NodeJS</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="react"><p class="mb0 svelte-1q6w6gf">React</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="php"><p class="mb0 svelte-1q6w6gf">PHP</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="laravel"><p class="mb0 svelte-1q6w6gf">Laravel</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="codeigniter"><p class="mb0 svelte-1q6w6gf">Codeigniter</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="database"><p class="mb0 svelte-1q6w6gf">Database (MYSQL, MongoDB, RethinkDB)</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="electronjs"><p class="mb0 svelte-1q6w6gf">ElectronJS</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-1q6w6gf" data-type="design"><p class="mb0 svelte-1q6w6gf">UI/UX/Design</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-1q6w6gf"><div class="progress-bar svelte-1q6w6gf" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div></div> \n\t\t\t\t\t\t<div class="col-12 col-md-6 text-md-right text-center mb16"><img src="img/web-maintenance.png" alt="" class="mt64"/></div></div></div></div></div></section>'},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}class oe extends V{constructor(e){super(),D(this,e,null,re,r,{})}}function ie(e){let t;return{c(){t=v("div"),t.innerHTML='<div class="col-12 mb16"><div class="alert alert-danger svelte-1naxuz6">Unable to send email. Kindly directly mail me at juliver.galleto@gmail.com</div></div>',w(t,"class","row")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function le(t){let n,a,r,o,i,l,c,p,f,b,k,x,S,$,q,j,E,A,L,O,M,C,I,_,T,N,P,Q,F=t[4]&&ie();return{c(){n=v("main"),a=v("section"),r=v("div"),o=v("div"),i=v("div"),l=v("div"),c=v("div"),c.innerHTML='<h3 class="mb32">Contact me, lets make your idea to reality</h3> \n\t\t\t\t\t\t\t<p class="mb12"><i class="ti-email mr8"></i>juliver.galleto@gmail.com</p> \n\t\t\t\t\t\t\t<p class="mb12"><i class="ti-mobile mr8"></i>639694637058</p>',p=g(),f=v("div"),F&&F.c(),b=g(),k=v("form"),x=v("div"),S=v("input"),$=g(),q=v("div"),j=v("input"),E=g(),A=v("div"),L=v("input"),O=g(),M=v("div"),C=v("textarea"),I=g(),_=v("div"),_.innerHTML='<button class="btn btn-block svelte-1naxuz6">SUBMIT</button>',T=g(),N=v("div"),N.innerHTML='<h3 class="text-center">&quot;Crafting Digital Experiences, One Pixel at a Time&quot;</h3> \n\t\t\t\t\t\t\t<a href="https://docs.google.com/document/d/1MlpqiYFTgqrOb98MEs3KR8N7DFPJUk51n91WwWY3o5w/edit?usp=share_link" target="__BLANK" class="btn mt16 svelte-1naxuz6">Download Resume</a>',w(c,"class","col-12 col-md-6 mb16"),w(S,"type","text"),w(S,"placeholder","First name"),w(S,"class","form-control svelte-1naxuz6"),w(x,"class","col-12 col-md-6 mb16"),w(j,"type","text"),w(j,"placeholder","Last name"),w(j,"class","form-control svelte-1naxuz6"),w(q,"class","col-12 col-md-6 mb16"),w(L,"type","text"),w(L,"placeholder","Email"),w(L,"class","form-control svelte-1naxuz6"),w(A,"class","col-12 col-md-12 mb16"),w(C,"placeholder","Message"),w(C,"cols","30"),w(C,"rows","10"),w(C,"class","form-control svelte-1naxuz6"),w(M,"class","col-12 col-md-12 mb24"),w(_,"class","col-12 col-md-12 mb16"),w(k,"action",""),w(k,"class","row"),w(f,"class","col-12 col-md-6 mb16"),w(N,"class","col-12 mt44 text-center"),w(l,"class","row"),w(i,"class","col-12"),w(o,"class","row hv-100 align-items-center justify-content-center "),w(r,"class","container"),w(a,"class","section"),w(a,"id","contact")},m(e,s){var u;m(e,n,s),d(n,a),d(a,r),d(r,o),d(o,i),d(i,l),d(l,c),d(l,p),d(l,f),F&&F.m(f,null),d(f,b),d(f,k),d(k,x),d(x,S),y(S,t[0]),d(k,$),d(k,q),d(q,j),y(j,t[1]),d(k,E),d(k,A),d(A,L),y(L,t[2]),d(k,O),d(k,M),d(M,C),y(C,t[3]),d(k,I),d(k,_),d(l,T),d(l,N),P||(Q=[h(S,"input",t[6]),h(j,"input",t[7]),h(L,"input",t[8]),h(C,"input",t[9]),h(k,"submit",(u=t[5],function(e){return e.preventDefault(),u.call(this,e)}))],P=!0)},p(e,[t]){e[4]?F||(F=ie(),F.c(),F.m(f,b)):F&&(F.d(1),F=null),1&t&&S.value!==e[0]&&y(S,e[0]),2&t&&j.value!==e[1]&&y(j,e[1]),4&t&&L.value!==e[2]&&y(L,e[2]),8&t&&y(C,e[3])},i:e,o:e,d(e){e&&u(n),F&&F.d(),P=!1,s(Q)}}}function ce(e,t,n){let s="",a="",r="",o="",i=!1;return[s,a,r,o,i,function(){n(4,i=!0)},function(){s=this.value,n(0,s)},function(){a=this.value,n(1,a)},function(){r=this.value,n(2,r)},function(){o=this.value,n(3,o)}]}class de extends V{constructor(e){super(),D(this,e,ce,le,r,{})}}function me(e,t,n){const s=e.slice();return s[2]=t[n],s}function ue(e){let t,n,s,a,r,o,i=e[2].text+"";return{c(){t=v("a"),n=v("span"),s=f(i),a=g(),w(n,"class","font12 svelte-19slzss"),w(t,"href",r="#"+e[2].id),w(t,"class",o=c(e[2].active?"active":"")+" svelte-19slzss")},m(e,r){m(e,t,r),d(t,n),d(n,s),d(t,a)},p(e,n){1&n&&i!==(i=e[2].text+"")&&b(s,i),1&n&&r!==(r="#"+e[2].id)&&w(t,"href",r),1&n&&o!==(o=c(e[2].active?"active":"")+" svelte-19slzss")&&w(t,"class",o)},d(e){e&&u(t)}}}function pe(t){let n,s,a=t[0],r=[];for(let e=0;e<a.length;e+=1)r[e]=ue(me(t,a,e));return{c(){n=v("div"),s=v("div");for(let e=0;e<r.length;e+=1)r[e].c();w(s,"class","menu-container animate__animated animate__slideInRight svelte-19slzss"),w(n,"class","menu-wrapper svelte-19slzss")},m(e,t){m(e,n,t),d(n,s);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(s,null)},p(e,[t]){if(1&t){let n;for(a=e[0],n=0;n<a.length;n+=1){const o=me(e,a,n);r[n]?r[n].p(o,t):(r[n]=ue(o),r[n].c(),r[n].m(s,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=a.length}},i:e,o:e,d(e){e&&u(n),p(r,e)}}}function ve(e,t,n){let s=[{text:"Home",id:"home",active:!0,hoverd:!1},{text:"About",id:"about",active:!1,hoverd:!1},{text:"Works",id:"works",active:!1,hoverd:!1},{text:"Skills",id:"skills",active:!1,hoverd:!1},{text:"Contact",id:"contact",active:!1,hoverd:!1}];const a=J.subscribe((e=>{let t=s.findIndex((t=>t.id==e));-1!=t&&(-1!=s.findIndex((e=>e.active))&&n(0,s[s.findIndex((e=>e.active))].active=!1,s),n(0,s[t].active=!0,s))}));var r;return S((()=>{s.forEach((e=>{let t=document.querySelector("#"+e.id);new window.IntersectionObserver((([t])=>{if(t.isIntersecting)return window.history.pushState({},"",window.location.origin+"#"+e.id),void J.update((()=>e.id))}),{root:null,threshold:.1}).observe(t)}))})),r=()=>{a()},x().$$.on_destroy.push(r),[s]}class fe extends V{constructor(e){super(),D(this,e,ve,pe,r,{})}}var ge="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
var he,we,be=(he=function(e,t){var n,s,a,r,o,i,l,c,d;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),s=this;do{for(t=n.length;0<=--t&&n.item(t)!==s;);}while(t<0&&(s=s.parentElement));return s}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var s=(new Date).getTime(),a=Math.max(0,16-(s-e)),r=window.setTimeout((function(){t(s+a)}),a);return e=s+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),n=void 0!==ge?ge:"undefined"!=typeof window?window:ge,e.exports=(s=n,a={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},r=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),s=n.length,a=-1,r="",o=n.charCodeAt(0);++a<s;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===o?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},l=function(e){return e?(t=e,parseInt(s.getComputedStyle(t).height,10)+e.offsetTop):0;var t},c=function(e,t,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),s.scrollTo(0,t))},d=function(e,t,n,a){if(t.emitEvents&&"function"==typeof s.CustomEvent){var r=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:a}});document.dispatchEvent(r)}},function(e,t){var n,m,u,p,v={cancelScroll:function(e){cancelAnimationFrame(p),p=null,e||d("scrollCancel",n)},animateScroll:function(e,t,o){v.cancelScroll();var m=r(n||a,o||{}),f="[object Number]"===Object.prototype.toString.call(e),g=f||!e.tagName?null:e;if(f||g){var h=s.pageYOffset;m.header&&!u&&(u=document.querySelector(m.header));var w,b,y,k,x,S,$,q,j=l(u),E=f?e:function(e,t,n,a){var r=0;if(e.offsetParent)for(;r+=e.offsetTop,e=e.offsetParent;);return r=Math.max(r-t-n,0),a&&(r=Math.min(r,i()-s.innerHeight)),r}(g,j,parseInt("function"==typeof m.offset?m.offset(e,t):m.offset,10),m.clip),A=E-h,L=i(),O=0,M=(w=A,y=(b=m).speedAsDuration?b.speed:Math.abs(w/1e3*b.speed),b.durationMax&&y>b.durationMax?b.durationMax:b.durationMin&&y<b.durationMin?b.durationMin:parseInt(y,10)),C=function(n){var a,r,o;k||(k=n),O+=n-k,S=h+A*(r=x=1<(x=0===M?0:O/M)?1:x,"easeInQuad"===(a=m).easing&&(o=r*r),"easeOutQuad"===a.easing&&(o=r*(2-r)),"easeInOutQuad"===a.easing&&(o=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===a.easing&&(o=r*r*r),"easeOutCubic"===a.easing&&(o=--r*r*r+1),"easeInOutCubic"===a.easing&&(o=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===a.easing&&(o=r*r*r*r),"easeOutQuart"===a.easing&&(o=1- --r*r*r*r),"easeInOutQuart"===a.easing&&(o=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===a.easing&&(o=r*r*r*r*r),"easeOutQuint"===a.easing&&(o=1+--r*r*r*r*r),"easeInOutQuint"===a.easing&&(o=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),a.customEasing&&(o=a.customEasing(r)),o||r),s.scrollTo(0,Math.floor(S)),function(n,a){var r=s.pageYOffset;if(n==a||r==a||(h<a&&s.innerHeight+r)>=L)return v.cancelScroll(!0),c(e,a,f),d("scrollStop",m,e,t),!(p=k=null)}(S,E)||(p=s.requestAnimationFrame(C),k=n)};0===s.pageYOffset&&s.scrollTo(0,0),$=e,q=m,f||history.pushState&&q.updateURL&&history.pushState({smoothScroll:JSON.stringify(q),anchor:$.id},document.title,$===document.documentElement?"#top":"#"+$.id),"matchMedia"in s&&s.matchMedia("(prefers-reduced-motion)").matches?c(e,Math.floor(E),!1):(d("scrollStart",m,e,t),v.cancelScroll(!0),s.requestAnimationFrame(C))}}},f=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(m=t.target.closest(e))&&"a"===m.tagName.toLowerCase()&&!t.target.closest(n.ignore)&&m.hostname===s.location.hostname&&m.pathname===s.location.pathname&&/#/.test(m.href)){var a,r;try{a=o(decodeURIComponent(m.hash))}catch(t){a=o(m.hash)}if("#"===a){if(!n.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(a);(r=r||"#top"!==a?r:document.documentElement)&&(t.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=s.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||s.pageYOffset},document.title,t||s.location.href)}}(n),v.animateScroll(r,m))}},g=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(n)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||v.animateScroll(t,null,{updateURL:!1})}};return v.destroy=function(){n&&(document.removeEventListener("click",f,!1),s.removeEventListener("popstate",g,!1),v.cancelScroll(),p=u=m=n=null)},function(){if(!("querySelector"in document&&"addEventListener"in s&&"requestAnimationFrame"in s&&"closest"in s.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";v.destroy(),n=r(a,t||{}),u=n.header?document.querySelector(n.header):null,document.addEventListener("click",f,!1),n.updateURL&&n.popstate&&s.addEventListener("popstate",g,!1)}(),v})},he(we={exports:{}},we.exports),we.exports);function ye(t){let n,s,a,r,o,i,l,c,p,f,h,w,b;return s=new W({}),r=new Y({}),i=new ae({}),c=new oe({}),f=new de({}),w=new fe({}),{c(){n=v("main"),F(s.$$.fragment),a=g(),F(r.$$.fragment),o=g(),F(i.$$.fragment),l=g(),F(c.$$.fragment),p=g(),F(f.$$.fragment),h=g(),F(w.$$.fragment)},m(e,t){m(e,n,t),z(s,n,null),d(n,a),z(r,n,null),d(n,o),z(i,n,null),d(n,l),z(c,n,null),d(n,p),z(f,n,null),d(n,h),z(w,n,null),b=!0},p:e,i(e){b||(P(s.$$.fragment,e),P(r.$$.fragment,e),P(i.$$.fragment,e),P(c.$$.fragment,e),P(f.$$.fragment,e),P(w.$$.fragment,e),b=!0)},o(e){Q(s.$$.fragment,e),Q(r.$$.fragment,e),Q(i.$$.fragment,e),Q(c.$$.fragment,e),Q(f.$$.fragment,e),Q(w.$$.fragment,e),b=!1},d(e){e&&u(n),H(s),H(r),H(i),H(c),H(f),H(w)}}}function ke(e){return S((()=>{new be('a[href*="#"]',{speed:500,speedAsDuration:!0})})),[]}return new class extends V{constructor(e){super(),D(this,e,ke,ye,r,{})}}({target:document.querySelector("#app")})}();
//# sourceMappingURL=bundle.js.map
