import{S as X,i as Y,s as Z,k as w,a as C,q as H,U as x,w as ee,G as te,l as y,h,c as I,m as E,r as M,V as ae,x as le,n as k,p as ie,C as u,b as A,y as ne,u as K,f as se,t as oe,D as Q,z as re,o as ce,j as fe,e as D,F as he,W as F,B as me}from"../../../../chunks/index-1f49ef0e.js";import{F as pe}from"../../../../chunks/footer-94d0e1c2.js";import{l as ue}from"../../../../chunks/markmap-d7dea953.js";const _e=ue([{type:"script",data:{src:"https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js"}},{type:"script",data:{src:"https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js"}}]);function z(o,a,n){const s=o.slice();return s[9]=a[n],s}function G(o,a,n){const s=o.slice();return s[12]=a[n],s}function de(o){let a,n,s=o[9].title+"",l,e,t,r=o[9].path===o[0].path&&o[2]&&O(o);return{c(){a=w("li"),n=w("a"),l=H(s),e=C(),r&&r.c(),t=D(),this.h()},l(i){a=y(i,"LI",{class:!0});var c=E(a);n=y(c,"A",{href:!0});var g=E(n);l=M(g,s),g.forEach(h),c.forEach(h),e=I(i),r&&r.l(i),t=D(),this.h()},h(){k(n,"href",o[9].path),F(n,"active",o[9].path===o[0].path),k(a,"class","toc-item")},m(i,c){A(i,a,c),u(a,n),u(n,l),A(i,e,c),r&&r.m(i,c),A(i,t,c)},p(i,c){c&17&&F(n,"active",i[9].path===i[0].path),i[9].path===i[0].path&&i[2]?r?r.p(i,c):(r=O(i),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},d(i){i&&h(a),i&&h(e),r&&r.d(i),i&&h(t)}}}function ge(o){let a,n=o[9].title+"",s,l;return{c(){a=w("li"),s=H(n),l=C(),this.h()},l(e){a=y(e,"LI",{class:!0});var t=E(a);s=M(t,n),l=I(t),t.forEach(h),this.h()},h(){k(a,"class","toc-sep")},m(e,t){A(e,a,t),u(a,s),u(a,l)},p:me,d(e){e&&h(a)}}}function O(o){let a,n=o[2],s=[];for(let l=0;l<n.length;l+=1)s[l]=R(G(o,n,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();a=D()},l(l){for(let e=0;e<s.length;e+=1)s[e].l(l);a=D()},m(l,e){for(let t=0;t<s.length;t+=1)s[t].m(l,e);A(l,a,e)},p(l,e){if(e&12){n=l[2];let t;for(t=0;t<n.length;t+=1){const r=G(l,n,t);s[t]?s[t].p(r,e):(s[t]=R(r),s[t].c(),s[t].m(a.parentNode,a))}for(;t<s.length;t+=1)s[t].d(1);s.length=n.length}},d(l){Q(s,l),l&&h(a)}}}function R(o){let a,n,s=o[12].title+"",l,e,t,r;return{c(){a=w("li"),n=w("a"),l=H(s),t=C(),this.h()},l(i){a=y(i,"LI",{class:!0,style:!0});var c=E(a);n=y(c,"A",{href:!0});var g=E(n);l=M(g,s),g.forEach(h),t=I(c),c.forEach(h),this.h()},h(){k(n,"href",e=`#${o[12].id}`),F(n,"active",o[12]===o[3]),k(a,"class","toc-item toc-heading"),k(a,"style",r=`padding-left: ${8*o[12].depth}px`)},m(i,c){A(i,a,c),u(a,n),u(n,l),u(a,t)},p(i,c){c&4&&s!==(s=i[12].title+"")&&K(l,s),c&4&&e!==(e=`#${i[12].id}`)&&k(n,"href",e),c&12&&F(n,"active",i[12]===i[3]),c&4&&r!==(r=`padding-left: ${8*i[12].depth}px`)&&k(a,"style",r)},d(i){i&&h(a)}}}function W(o){let a;function n(e,t){return e[9].type==="sep"?ge:de}let l=n(o)(o);return{c(){l.c(),a=D()},l(e){l.l(e),a=D()},m(e,t){l.m(e,t),A(e,a,t)},p(e,t){l.p(e,t)},d(e){l.d(e),e&&h(a)}}}function ke(o){var B,J;let a,n,s,l,e,t,r,i,c,g=((B=o[0].frontmatter)==null?void 0:B.title)+"",q,_,m,T=o[0].html+"",$,L,S;document.title=a=((J=o[0].frontmatter)==null?void 0:J.title)+" - markmap docs";let N=o[4],p=[];for(let f=0;f<N.length;f+=1)p[f]=W(z(o,N,f));return L=new pe({}),{c(){n=w("meta"),s=C(),l=w("main"),e=w("aside"),t=w("ul");for(let f=0;f<p.length;f+=1)p[f].c();r=C(),i=w("div"),c=w("h1"),q=H(g),_=C(),m=new x(!1),$=C(),ee(L.$$.fragment),this.h()},l(f){const v=te("svelte-sm1cyn",document.head);n=y(v,"META",{name:!0,content:!0}),v.forEach(h),s=I(f),l=y(f,"MAIN",{class:!0});var b=E(l);e=y(b,"ASIDE",{class:!0,style:!0});var U=E(e);t=y(U,"UL",{class:!0});var d=E(t);for(let P=0;P<p.length;P+=1)p[P].l(d);d.forEach(h),U.forEach(h),r=I(b),i=y(b,"DIV",{class:!0});var j=E(i);c=y(j,"H1",{});var V=E(c);q=M(V,g),V.forEach(h),_=I(j),m=ae(j,!1),$=I(j),le(L.$$.fragment,j),j.forEach(h),b.forEach(h),this.h()},h(){k(n,"name","Description"),k(n,"content","The documentation of markmap packages."),k(t,"class","toc"),k(e,"class","bg-gray-100 p-4 hidden lg:block overflow-auto"),ie(e,"width","240px"),m.a=$,k(i,"class","markdown flex-1 min-w-0 p-4 lg:pr-12 overflow-auto"),k(l,"class","flex md:fs")},m(f,v){u(document.head,n),A(f,s,v),A(f,l,v),u(l,e),u(e,t);for(let b=0;b<p.length;b+=1)p[b].m(t,null);u(l,r),u(l,i),u(i,c),u(c,q),u(i,_),m.m(T,i),u(i,$),ne(L,i,null),o[5](i),S=!0},p(f,[v]){var b,U;if((!S||v&1)&&a!==(a=((b=f[0].frontmatter)==null?void 0:b.title)+" - markmap docs")&&(document.title=a),v&29){N=f[4];let d;for(d=0;d<N.length;d+=1){const j=z(f,N,d);p[d]?p[d].p(j,v):(p[d]=W(j),p[d].c(),p[d].m(t,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=N.length}(!S||v&1)&&g!==(g=((U=f[0].frontmatter)==null?void 0:U.title)+"")&&K(q,g),(!S||v&1)&&T!==(T=f[0].html+"")&&m.p(T)},i(f){S||(se(L.$$.fragment,f),S=!0)},o(f){oe(L.$$.fragment,f),S=!1},d(f){h(n),f&&h(s),f&&h(l),Q(p,f),re(L),o[5](null)}}}function ve(o,a,n){let s,{data:l}=a,e,t,r;const i=[{title:"markmap",path:"markmap"},{title:"JSON options",path:"json-options"},{title:"faq",path:"faq"},{title:"Packages",type:"sep"},{title:"markmap-lib",path:"packages--markmap-lib"},{title:"markmap-view",path:"packages--markmap-view"},{title:"markmap-cli",path:"packages--markmap-cli"},{title:"coc-markmap",path:"packages--coc-markmap"}];function c(){if(!t)return;let _;for(const m of t){if(m.el.getBoundingClientRect().top>100)break;_=m}n(3,r=_||t[0])}function g(){if(!e)return;n(2,t=Array.from(e.querySelectorAll("h2,h3"),m=>({el:m,id:m.id,title:m.textContent,depth:+m.tagName.toLowerCase().slice(1)}))),s=!1;const{Prism:_}=window;if(_){const m=window.location.hash;m&&(window.location.hash=""),_.highlightAllUnder(e),m&&(window.location.hash=m)}c()}ce(()=>(_e.then(g),e.addEventListener("scroll",c),()=>e.removeEventListener("scroll",c))),fe(()=>{s&&e&&(e.scrollTo(0,0),g())});function q(_){he[_?"unshift":"push"](()=>{e=_,n(1,e)})}return o.$$set=_=>{"data"in _&&n(0,l=_.data)},o.$$.update=()=>{o.$$.dirty&1&&(s=!!l)},[l,e,t,r,i,q]}class Ee extends X{constructor(a){super(),Y(this,a,ve,ke,Z,{data:0})}}export{Ee as default};