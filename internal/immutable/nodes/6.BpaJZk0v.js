import{p as x,g as ee}from"../chunks/index.DQQW55Sl.js";import{B as te,s as P,e as v,t as O,q as le,d as f,f as A,c as g,a as L,D as se,b as R,g as E,i as C,h as r,j as q,k as K,l as ae,E as Q,F as k}from"../chunks/scheduler.BZy1TXPY.js";import{e as W,u as oe,p as F,d as ne}from"../chunks/util.COdJP13i.js";import{S as re,i as ie}from"../chunks/index.DLwqVcQA.js";import{b as U}from"../chunks/paths.DqWVj9Dv.js";import{L as fe}from"../chunks/i18n-svelte.Cy_NFzKh.js";const ce=async p=>(await p.parent(),{posts:Object.values(x).sort((e,s)=>s.createdTs-e.createdTs)}),be=Object.freeze(Object.defineProperty({__proto__:null,load:ce},Symbol.toStringTag,{value:"Module"}));function X(p,e,s){const t=p.slice();t[2]=e[s],t[5]=s;const u=ee(t[2]);return t[3]=u,t}function Y(p){let e;return{c(){e=v("hr")},l(s){e=g(s,"HR",{})},m(s,t){C(s,e,t)},d(s){s&&f(e)}}}function Z(p,e){let s,t,u=F(e[3])+"",b,I,N,w,m=e[2].title+"",_,$,D,h,n,j=F(e[3])+"",S,T,V,l,a=new Date(e[2].createdTs).toLocaleDateString()+"",i,H,y,c=e[5]<e[0].posts.length-1&&Y();return{key:p,first:null,c(){s=v("li"),t=v("span"),b=O(u),I=O("/10"),N=P(),w=v("a"),_=O(m),D=P(),h=v("div"),n=v("span"),S=O(j),T=O("/10"),V=P(),l=v("span"),i=O(a),H=P(),c&&c.c(),y=Q(),this.h()},l(d){s=g(d,"LI",{class:!0});var o=L(s);t=g(o,"SPAN",{class:!0});var M=L(t);b=R(M,u),I=R(M,"/10"),M.forEach(f),N=A(o),w=g(o,"A",{class:!0,href:!0});var G=L(w);_=R(G,m),G.forEach(f),D=A(o),h=g(o,"DIV",{class:!0});var z=L(h);n=g(z,"SPAN",{class:!0});var B=L(n);S=R(B,j),T=R(B,"/10"),B.forEach(f),V=A(z),l=g(z,"SPAN",{});var J=L(l);i=R(J,a),J.forEach(f),z.forEach(f),o.forEach(f),H=A(d),c&&c.l(d),y=Q(),this.h()},h(){E(t,"class","badge me-2 max-md:hidden"),k(t,"red",e[3]<5),k(t,"yellow",e[3]<7),k(t,"green",e[3]<10),E(w,"class","me-4 flex flex-grow"),E(w,"href",$=`${U}/posts/${e[2].createdTs}-${e[2].uri}`),E(n,"class","badge me-2 md:hidden"),k(n,"red",e[3]<5),k(n,"yellow",e[3]<7),k(n,"green",e[3]<10),E(h,"class","flex flex-row justify-between"),E(s,"class","flex flex-col justify-between py-2 md:flex-row"),this.first=s},m(d,o){C(d,s,o),r(s,t),r(t,b),r(t,I),r(s,N),r(s,w),r(w,_),r(s,D),r(s,h),r(h,n),r(n,S),r(n,T),r(h,V),r(h,l),r(l,i),C(d,H,o),c&&c.m(d,o),C(d,y,o)},p(d,o){e=d,o&1&&u!==(u=F(e[3])+"")&&q(b,u),o&1&&k(t,"red",e[3]<5),o&1&&k(t,"yellow",e[3]<7),o&1&&k(t,"green",e[3]<10),o&1&&m!==(m=e[2].title+"")&&q(_,m),o&1&&$!==($=`${U}/posts/${e[2].createdTs}-${e[2].uri}`)&&E(w,"href",$),o&1&&j!==(j=F(e[3])+"")&&q(S,j),o&1&&k(n,"red",e[3]<5),o&1&&k(n,"yellow",e[3]<7),o&1&&k(n,"green",e[3]<10),o&1&&a!==(a=new Date(e[2].createdTs).toLocaleDateString()+"")&&q(i,a),e[5]<e[0].posts.length-1?c||(c=Y(),c.c(),c.m(y.parentNode,y)):c&&(c.d(1),c=null)},d(d){d&&(f(s),f(H),f(y)),c&&c.d(d)}}}function ue(p){let e,s,t,u,b="Pretzels",I,N,w,m,_=[],$=new Map,D,h,n,j=p[1].posts.new.title()+"",S;document.title=e=p[1].posts.title();let T=W(p[0].posts);const V=l=>l[2].uri;for(let l=0;l<T.length;l+=1){let a=X(p,T,l),i=V(a);$.set(i,_[l]=Z(i,a))}return{c(){s=P(),t=v("div"),u=v("h1"),u.textContent=b,I=P(),N=v("hr"),w=P(),m=v("ul");for(let l=0;l<_.length;l+=1)_[l].c();D=P(),h=v("div"),n=v("a"),S=O(j),this.h()},l(l){le("svelte-nkdjjo",document.head).forEach(f),s=A(l),t=g(l,"DIV",{class:!0});var i=L(t);u=g(i,"H1",{"data-svelte-h":!0}),se(u)!=="svelte-vi8xrb"&&(u.textContent=b),I=A(i),N=g(i,"HR",{}),w=A(i),m=g(i,"UL",{class:!0});var H=L(m);for(let d=0;d<_.length;d+=1)_[d].l(H);H.forEach(f),i.forEach(f),D=A(l),h=g(l,"DIV",{class:!0});var y=L(h);n=g(y,"A",{class:!0,href:!0});var c=L(n);S=R(c,j),c.forEach(f),y.forEach(f),this.h()},h(){E(m,"class","list-none"),E(t,"class","mx-auto mt-10 flex flex-grow flex-col px-10"),E(n,"class","p-4"),E(n,"href",`${U}/new`),E(h,"class","flex flex-shrink flex-row justify-end")},m(l,a){C(l,s,a),C(l,t,a),r(t,u),r(t,I),r(t,N),r(t,w),r(t,m);for(let i=0;i<_.length;i+=1)_[i]&&_[i].m(m,null);C(l,D,a),C(l,h,a),r(h,n),r(n,S)},p(l,[a]){a&2&&e!==(e=l[1].posts.title())&&(document.title=e),a&1&&(T=W(l[0].posts),_=oe(_,a,V,1,l,T,$,m,ne,Z,null,X)),a&2&&j!==(j=l[1].posts.new.title()+"")&&q(S,j)},i:K,o:K,d(l){l&&(f(s),f(t),f(D),f(h));for(let a=0;a<_.length;a+=1)_[a].d()}}}function _e(p,e,s){let t;ae(p,fe,b=>s(1,t=b));let{data:u}=e;return p.$$set=b=>{"data"in b&&s(0,u=b.data)},[u,t]}class we extends re{constructor(e){super(),ie(this,e,_e,ue,te,{data:0})}}export{we as component,be as universal};
