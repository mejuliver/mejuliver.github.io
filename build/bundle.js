var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return null==t?"":t}function i(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function m(){return u(" ")}function v(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){t.value=null==e?"":e}let b;function h(t){b=t}function g(){if(!b)throw new Error("Function called outside component initialization");return b}function y(t){g().$$.on_mount.push(t)}const w=[],$=[],x=[],S=[],E=Promise.resolve();let k=!1;function I(t){x.push(t)}let A=!1;const L=new Set;function M(){if(!A){A=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];h(e),O(e.$$)}for(h(null),w.length=0;$.length;)$.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];L.has(e)||(L.add(e),e())}x.length=0}while(w.length);for(;S.length;)S.pop()();k=!1,A=!1,L.clear()}}function O(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const _=new Set;function C(t,e){t&&t.i&&(_.delete(t),t.i(e))}function T(t,e,n,s){if(t&&t.o){if(_.has(t))return;_.add(t),undefined.c.push((()=>{_.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function q(t){t&&t.c()}function H(t,n,o,l){const{fragment:i,on_mount:r,on_destroy:c,after_update:d}=t.$$;i&&i.m(n,o),l||I((()=>{const n=r.map(e).filter(a);c?c.push(...n):s(n),t.$$.on_mount=[]})),d.forEach(I)}function j(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(w.push(t),k||(k=!0,E.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(e,a,o,l,i,r,d,u=[-1]){const m=b;h(e);const v=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:a.context||[]),callbacks:n(),dirty:u,skip_bound:!1,root:a.target||m.$$.root};d&&d(v.root);let p=!1;if(v.ctx=o?o(e,a.props||{},((t,n,...s)=>{const a=s.length?s[0]:n;return v.ctx&&i(v.ctx[t],v.ctx[t]=a)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](a),p&&F(e,t)),n})):[],v.update(),p=!0,s(v.before_update),v.fragment=!!l&&l(v.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);v.fragment&&v.fragment.l(t),t.forEach(c)}else v.fragment&&v.fragment.c();a.intro&&C(e.$$.fragment),H(e,a.target,a.anchor,a.customElement),M()}h(m)}class N{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const R=[];const U=function(e,n=t){let s;const a=new Set;function l(t){if(o(e,t)&&(e=t,s)){const t=!R.length;for(const t of a)t[1](),R.push(t,e);if(t){for(let t=0;t<R.length;t+=2)R[t][0](R[t+1]);R.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(o,i=t){const r=[o,i];return a.add(r),1===a.size&&(s=n(l)||t),o(e),()=>{a.delete(r),0===a.size&&(s(),s=null)}}}}("home");function D(e){let n;return{c(){n=d("main"),n.innerHTML='<section class="section" id="home"><div class="container"><div class="row hv-100 align-items-center justify-content-center "><div class="col-12"><a href="#" class="logo-wrapper animate__animated animate__fadeIn svelte-1kz0ud7"><img src="img/logo164.png" alt="Juliver Galleto" class="logo svelte-1kz0ud7"/></a> \n\t\t\t\t\t<div class="scroll-down mt44 text-center"><p class="font12">SCROLL DOWN</p> \n\t\t\t\t\t\t<a href="#about" class="arrow-bounce svelte-1kz0ud7"><i class="ti-angle-double-down font24"></i></a></div></div></div></div></section>'},m(t,e){r(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class J extends N{constructor(t){super(),z(this,t,null,D,o,{})}}function Q(e){let n,s,a,o,l,u,v,f,b,h;return{c(){n=d("main"),s=d("section"),a=d("div"),o=d("div"),l=d("div"),u=d("div"),u.innerHTML='<div class="col-12 mb32"><h2>HELLO, I&#39;M JULIVER</h2> \n\t\t\t\t\t\t\t<p>FULL STACK WEB ENGINEER</p></div>',v=m(),f=d("div"),b=d("div"),h=d("p"),h.textContent=`Since beginning my journey as a freelance designer nearly ${P} years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually improving my chops.`,p(u,"class","row"),p(h,"class","mb16"),p(b,"class","col-12"),p(f,"class","row"),p(l,"class","col-12"),p(o,"class","row hv-100 align-items-center justify-content-center "),p(a,"class","container"),p(s,"class","section text-center"),p(s,"id","about")},m(t,e){r(t,n,e),i(n,s),i(s,a),i(a,o),i(o,l),i(l,u),i(l,v),i(l,f),i(f,b),i(b,h)},p:t,i:t,o:t,d(t){t&&c(n)}}}let P=8;class K extends N{constructor(t){super(),z(this,t,null,Q,o,{})}}function B(e){let n;return{c(){n=d("main"),n.innerHTML='<section class="section" id="skills"><div class="container"><div class="row hv-100 align-items-center justify-content-center "><div class="col-12"><div class="row text-center"><div class="col-12 mb32"><h3>SKILLS</h3></div></div> \n\t\t\t\t\t<div class="row text-center"><div class="col-12 mb16"><p class="mb16">My work is something I do with lot of honesty, appetite and commitment. Over the past years I had the opportunity to drive and do hands-on work for some amazing brands from all over the world.</p></div></div> \n\t\t\t\t\t<div class="row"><div class="col-12 col-md-6 mb16"><div class="mb16 skill svelte-bl9s81" data-type="html5"><p class="mb0 svelte-bl9s81">HTML 5</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="css3"><p class="mb0 svelte-bl9s81">CSS 3</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="js"><p class="mb0 svelte-bl9s81">Vanilla Javascript</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="jquery"><p class="mb0 svelte-bl9s81">jQuery</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="vuejs"><p class="mb0 svelte-bl9s81">VueJS</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="svelte"><p class="mb0 svelte-bl9s81">Svelte</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="nodejs"><p class="mb0 svelte-bl9s81">NodeJS (ExpressJS,SocketIO,...)</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="php"><p class="mb0 svelte-bl9s81">PHP</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="laravel"><p class="mb0 svelte-bl9s81">Laravel</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="codeigniter"><p class="mb0 svelte-bl9s81">Codeigniter</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="database"><p class="mb0 svelte-bl9s81">Database (MYSQL, MongoDB, RethinkDB)</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="electronjs"><p class="mb0 svelte-bl9s81">ElectronJS</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div> \n\t\t\t\t\t\t\t<div class="mb16 skill svelte-bl9s81" data-type="design"><p class="mb0 svelte-bl9s81">UI/UX/Design</p> \n\t\t\t\t\t\t\t\t<div class="progress svelte-bl9s81"><div class="progress-bar svelte-bl9s81" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div></div> \n\t\t\t\t\t\t<div class="col-12 col-md-6 text-md-right text-center mb16"><img src="img/web-maintenance.png" alt="" class="mt64"/></div></div></div></div></div></section>'},m(t,e){r(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class Y extends N{constructor(t){super(),z(this,t,null,B,o,{})}}function V(t){let e;return{c(){e=d("div"),e.innerHTML='<div class="col-12 mb16"><div class="alert alert-danger svelte-eikam6">Unable to send email. Kindly directly mail me at juliver.galleto@gmail.com</div></div>',p(e,"class","row")},m(t,n){r(t,e,n)},d(t){t&&c(e)}}}function G(e){let n,a,o,l,u,b,h,g,y,w,$,x,S,E,k,I,A,L,M,O,_,C,T,q,H,j,F=e[4]&&V();return{c(){n=d("main"),a=d("section"),o=d("div"),l=d("div"),u=d("div"),b=d("div"),h=d("div"),h.innerHTML='<h3 class="mb32">Contact me, lets make your idea to reality</h3> \n\t\t\t\t\t\t\t<p class="mb12"><i class="ti-email mr8"></i>juliver.galleto@gmail.com</p> \n\t\t\t\t\t\t\t<p class="mb12"><i class="ti-mobile mr8"></i>639653065060</p>',g=m(),y=d("div"),F&&F.c(),w=m(),$=d("form"),x=d("div"),S=d("input"),E=m(),k=d("div"),I=d("input"),A=m(),L=d("div"),M=d("input"),O=m(),_=d("div"),C=d("textarea"),T=m(),q=d("div"),q.innerHTML='<button class="btn btn-block svelte-eikam6">SUBMIT</button>',p(h,"class","col-12 col-md-6 mb16"),p(S,"type","text"),p(S,"placeholder","First name"),p(S,"class","form-control svelte-eikam6"),p(x,"class","col-12 col-md-6 mb16"),p(I,"type","text"),p(I,"placeholder","Last name"),p(I,"class","form-control svelte-eikam6"),p(k,"class","col-12 col-md-6 mb16"),p(M,"type","text"),p(M,"placeholder","Email"),p(M,"class","form-control svelte-eikam6"),p(L,"class","col-12 col-md-12 mb16"),p(C,"placeholder","Message"),p(C,"cols","30"),p(C,"rows","10"),p(C,"class","form-control svelte-eikam6"),p(_,"class","col-12 col-md-12 mb24"),p(q,"class","col-12 col-md-12 mb16"),p($,"action",""),p($,"class","row"),p(y,"class","col-12 col-md-6 mb16"),p(b,"class","row"),p(u,"class","col-12"),p(l,"class","row hv-100 align-items-center justify-content-center "),p(o,"class","container"),p(a,"class","section"),p(a,"id","contact")},m(t,s){var c;r(t,n,s),i(n,a),i(a,o),i(o,l),i(l,u),i(u,b),i(b,h),i(b,g),i(b,y),F&&F.m(y,null),i(y,w),i(y,$),i($,x),i(x,S),f(S,e[0]),i($,E),i($,k),i(k,I),f(I,e[1]),i($,A),i($,L),i(L,M),f(M,e[2]),i($,O),i($,_),i(_,C),f(C,e[3]),i($,T),i($,q),H||(j=[v(S,"input",e[6]),v(I,"input",e[7]),v(M,"input",e[8]),v(C,"input",e[9]),v($,"submit",(c=e[5],function(t){return t.preventDefault(),c.call(this,t)}))],H=!0)},p(t,[e]){t[4]?F||(F=V(),F.c(),F.m(y,w)):F&&(F.d(1),F=null),1&e&&S.value!==t[0]&&f(S,t[0]),2&e&&I.value!==t[1]&&f(I,t[1]),4&e&&M.value!==t[2]&&f(M,t[2]),8&e&&f(C,t[3])},i:t,o:t,d(t){t&&c(n),F&&F.d(),H=!1,s(j)}}}function W(t,e,n){let s="",a="",o="",l="",i=!1;return[s,a,o,l,i,function(){n(4,i=!0)},function(){s=this.value,n(0,s)},function(){a=this.value,n(1,a)},function(){o=this.value,n(2,o)},function(){l=this.value,n(3,l)}]}class X extends N{constructor(t){super(),z(this,t,W,G,o,{})}}function Z(t,e,n){const s=t.slice();return s[2]=e[n],s}function tt(t){let e,n,s,a,o,v,f=t[2].text+"";return{c(){e=d("a"),n=d("span"),s=u(f),a=m(),p(n,"class","font12 svelte-19slzss"),p(e,"href",o="#"+t[2].id),p(e,"class",v=l(t[2].active?"active":"")+" svelte-19slzss")},m(t,o){r(t,e,o),i(e,n),i(n,s),i(e,a)},p(t,n){1&n&&f!==(f=t[2].text+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(s,f),1&n&&o!==(o="#"+t[2].id)&&p(e,"href",o),1&n&&v!==(v=l(t[2].active?"active":"")+" svelte-19slzss")&&p(e,"class",v)},d(t){t&&c(e)}}}function et(e){let n,s,a=e[0],o=[];for(let t=0;t<a.length;t+=1)o[t]=tt(Z(e,a,t));return{c(){n=d("div"),s=d("div");for(let t=0;t<o.length;t+=1)o[t].c();p(s,"class","menu-container animate__animated animate__slideInRight svelte-19slzss"),p(n,"class","menu-wrapper svelte-19slzss")},m(t,e){r(t,n,e),i(n,s);for(let t=0;t<o.length;t+=1)o[t].m(s,null)},p(t,[e]){if(1&e){let n;for(a=t[0],n=0;n<a.length;n+=1){const l=Z(t,a,n);o[n]?o[n].p(l,e):(o[n]=tt(l),o[n].c(),o[n].m(s,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=a.length}},i:t,o:t,d(t){t&&c(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function nt(t,e,n){let s=[{text:"Home",id:"home",active:!0,hoverd:!1},{text:"About",id:"about",active:!1,hoverd:!1},{text:"Skills",id:"skills",active:!1,hoverd:!1},{text:"Contact",id:"contact",active:!1,hoverd:!1}];const a=U.subscribe((t=>{let e=s.findIndex((e=>e.id==t));-1!=e&&(-1!=s.findIndex((t=>t.active))&&n(0,s[s.findIndex((t=>t.active))].active=!1,s),n(0,s[e].active=!0,s))}));var o;return y((()=>{s.forEach((t=>{let e=document.querySelector("#"+t.id);new window.IntersectionObserver((([e])=>{if(e.isIntersecting)return window.history.pushState({},"",window.location.origin+"#"+t.id),void U.update((()=>t.id))}),{root:null,threshold:.1}).observe(e)}))})),o=()=>{a()},g().$$.on_destroy.push(o),[s]}class st extends N{constructor(t){super(),z(this,t,nt,et,o,{})}}var at="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
var ot,lt=(function(t,e){var n,s,a,o,l,i,r,c,d;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),s=this;do{for(e=n.length;0<=--e&&n.item(e)!==s;);}while(e<0&&(s=s.parentElement));return s}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}(),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var s=(new Date).getTime(),a=Math.max(0,16-(s-t)),o=window.setTimeout((function(){e(s+a)}),a);return t=s+a,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),n=void 0!==at?at:"undefined"!=typeof window?window:at,t.exports=(s=n,a={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},o=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t},l=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),s=n.length,a=-1,o="",l=n.charCodeAt(0);++a<s;){if(0===(e=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=1<=e&&e<=31||127==e||0===a&&48<=e&&e<=57||1===a&&48<=e&&e<=57&&45===l?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+o},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t){return t?(e=t,parseInt(s.getComputedStyle(e).height,10)+t.offsetTop):0;var e},c=function(t,e,n){0===t&&document.body.focus(),n||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),s.scrollTo(0,e))},d=function(t,e,n,a){if(e.emitEvents&&"function"==typeof s.CustomEvent){var o=new CustomEvent(t,{bubbles:!0,detail:{anchor:n,toggle:a}});document.dispatchEvent(o)}},function(t,e){var n,u,m,v,p={cancelScroll:function(t){cancelAnimationFrame(v),v=null,t||d("scrollCancel",n)},animateScroll:function(t,e,l){p.cancelScroll();var u=o(n||a,l||{}),f="[object Number]"===Object.prototype.toString.call(t),b=f||!t.tagName?null:t;if(f||b){var h=s.pageYOffset;u.header&&!m&&(m=document.querySelector(u.header));var g,y,w,$,x,S,E,k,I=r(m),A=f?t:function(t,e,n,a){var o=0;if(t.offsetParent)for(;o+=t.offsetTop,t=t.offsetParent;);return o=Math.max(o-e-n,0),a&&(o=Math.min(o,i()-s.innerHeight)),o}(b,I,parseInt("function"==typeof u.offset?u.offset(t,e):u.offset,10),u.clip),L=A-h,M=i(),O=0,_=(g=L,w=(y=u).speedAsDuration?y.speed:Math.abs(g/1e3*y.speed),y.durationMax&&w>y.durationMax?y.durationMax:y.durationMin&&w<y.durationMin?y.durationMin:parseInt(w,10)),C=function(n){var a,o,l;$||($=n),O+=n-$,S=h+L*(o=x=1<(x=0===_?0:O/_)?1:x,"easeInQuad"===(a=u).easing&&(l=o*o),"easeOutQuad"===a.easing&&(l=o*(2-o)),"easeInOutQuad"===a.easing&&(l=o<.5?2*o*o:(4-2*o)*o-1),"easeInCubic"===a.easing&&(l=o*o*o),"easeOutCubic"===a.easing&&(l=--o*o*o+1),"easeInOutCubic"===a.easing&&(l=o<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1),"easeInQuart"===a.easing&&(l=o*o*o*o),"easeOutQuart"===a.easing&&(l=1- --o*o*o*o),"easeInOutQuart"===a.easing&&(l=o<.5?8*o*o*o*o:1-8*--o*o*o*o),"easeInQuint"===a.easing&&(l=o*o*o*o*o),"easeOutQuint"===a.easing&&(l=1+--o*o*o*o*o),"easeInOutQuint"===a.easing&&(l=o<.5?16*o*o*o*o*o:1+16*--o*o*o*o*o),a.customEasing&&(l=a.customEasing(o)),l||o),s.scrollTo(0,Math.floor(S)),function(n,a){var o=s.pageYOffset;if(n==a||o==a||(h<a&&s.innerHeight+o)>=M)return p.cancelScroll(!0),c(t,a,f),d("scrollStop",u,t,e),!(v=$=null)}(S,A)||(v=s.requestAnimationFrame(C),$=n)};0===s.pageYOffset&&s.scrollTo(0,0),E=t,k=u,f||history.pushState&&k.updateURL&&history.pushState({smoothScroll:JSON.stringify(k),anchor:E.id},document.title,E===document.documentElement?"#top":"#"+E.id),"matchMedia"in s&&s.matchMedia("(prefers-reduced-motion)").matches?c(t,Math.floor(A),!1):(d("scrollStart",u,t,e),p.cancelScroll(!0),s.requestAnimationFrame(C))}}},f=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(u=e.target.closest(t))&&"a"===u.tagName.toLowerCase()&&!e.target.closest(n.ignore)&&u.hostname===s.location.hostname&&u.pathname===s.location.pathname&&/#/.test(u.href)){var a,o;try{a=l(decodeURIComponent(u.hash))}catch(e){a=l(u.hash)}if("#"===a){if(!n.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(a);(o=o||"#top"!==a?o:document.documentElement)&&(e.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var e=s.location.hash;e=e||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:e||s.pageYOffset},document.title,e||s.location.href)}}(n),p.animateScroll(o,u))}},b=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(n)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(l(history.state.anchor)))||p.animateScroll(e,null,{updateURL:!1})}};return p.destroy=function(){n&&(document.removeEventListener("click",f,!1),s.removeEventListener("popstate",b,!1),p.cancelScroll(),v=m=u=n=null)},function(){if(!("querySelector"in document&&"addEventListener"in s&&"requestAnimationFrame"in s&&"closest"in s.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),n=o(a,e||{}),m=n.header?document.querySelector(n.header):null,document.addEventListener("click",f,!1),n.updateURL&&n.popstate&&s.addEventListener("popstate",b,!1)}(),p})}(ot={exports:{}},ot.exports),ot.exports);function it(e){let n,s,a,o,l,u,v,p,f,b,h;return s=new J({}),o=new K({}),u=new Y({}),p=new X({}),b=new st({}),{c(){n=d("main"),q(s.$$.fragment),a=m(),q(o.$$.fragment),l=m(),q(u.$$.fragment),v=m(),q(p.$$.fragment),f=m(),q(b.$$.fragment)},m(t,e){r(t,n,e),H(s,n,null),i(n,a),H(o,n,null),i(n,l),H(u,n,null),i(n,v),H(p,n,null),i(n,f),H(b,n,null),h=!0},p:t,i(t){h||(C(s.$$.fragment,t),C(o.$$.fragment,t),C(u.$$.fragment,t),C(p.$$.fragment,t),C(b.$$.fragment,t),h=!0)},o(t){T(s.$$.fragment,t),T(o.$$.fragment,t),T(u.$$.fragment,t),T(p.$$.fragment,t),T(b.$$.fragment,t),h=!1},d(t){t&&c(n),j(s),j(o),j(u),j(p),j(b)}}}function rt(t){return y((()=>{new lt('a[href*="#"]',{speed:500,speedAsDuration:!0})})),[]}return new class extends N{constructor(t){super(),z(this,t,rt,it,o,{})}}({target:document.querySelector("#app")})}();
//# sourceMappingURL=bundle.js.map
