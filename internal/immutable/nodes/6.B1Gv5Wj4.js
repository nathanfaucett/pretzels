import{p as R,g as P}from"../chunks/index.DoItBFLi.js";import{A as U,s as S,e as b,t as T,k as B,d as u,l as j,a as k,b as w,m as y,f as L,i as E,g as d,o as D,y as V,p as G}from"../chunks/scheduler.C44hALVJ.js";import{e as q,u as H,p as z,d as J}from"../chunks/util.12Ki2goY.js";import{S as K,i as N}from"../chunks/index.DjE0fdGJ.js";import{b as A}from"../chunks/paths.DK1Y9ZMl.js";import{L as Q}from"../chunks/i18n-svelte.Cuohsm_x.js";const W=async c=>(await c.parent(),{posts:Object.values(R).sort((s,l)=>l.createdTs-s.createdTs)}),le=Object.freeze(Object.defineProperty({__proto__:null,load:W},Symbol.toStringTag,{value:"Module"}));function C(c,s,l){const a=c.slice();return a[2]=s[l],a}function F(c,s){let l,a,i=z(P(s[2]))+"",n,m,h=s[2].title+"",f,_,o=new Date(s[2].createdTs).toLocaleDateString()+"",v,p,g;return{key:c,first:null,c(){l=b("li"),a=b("a"),n=T(i),m=T("/10 - "),f=T(h),_=S(),v=T(o),g=S(),this.h()},l(e){l=k(e,"LI",{});var t=w(l);a=k(t,"A",{href:!0});var r=w(a);n=y(r,i),m=y(r,"/10 - "),f=y(r,h),_=j(r),v=y(r,o),r.forEach(u),g=j(t),t.forEach(u),this.h()},h(){L(a,"href",p=`${A}/posts/${s[2].createdTs}-${s[2].uri}`),this.first=l},m(e,t){E(e,l,t),d(l,a),d(a,n),d(a,m),d(a,f),d(a,_),d(a,v),d(l,g)},p(e,t){s=e,t&1&&i!==(i=z(P(s[2]))+"")&&D(n,i),t&1&&h!==(h=s[2].title+"")&&D(f,h),t&1&&o!==(o=new Date(s[2].createdTs).toLocaleDateString()+"")&&D(v,o),t&1&&p!==(p=`${A}/posts/${s[2].createdTs}-${s[2].uri}`)&&L(a,"href",p)},d(e){e&&u(l)}}}function X(c){let s,l,a,i,n=c[1].posts.new.title()+"",m,h,f,_,o=[],v=new Map;document.title=s=c[1].posts.title();let p=q(c[0].posts);const g=e=>e[2].uri;for(let e=0;e<p.length;e+=1){let t=C(c,p,e),r=g(t);v.set(r,o[e]=F(r,t))}return{c(){l=S(),a=b("div"),i=b("a"),m=T(n),h=S(),f=b("div"),_=b("ul");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){B("svelte-nkdjjo",document.head).forEach(u),l=j(e),a=k(e,"DIV",{class:!0});var r=w(a);i=k(r,"A",{href:!0});var I=w(i);m=y(I,n),I.forEach(u),r.forEach(u),h=j(e),f=k(e,"DIV",{class:!0});var O=w(f);_=k(O,"UL",{class:!0});var M=w(_);for(let $=0;$<o.length;$+=1)o[$].l(M);M.forEach(u),O.forEach(u),this.h()},h(){L(i,"href",`${A}/new`),L(a,"class","flex flex-shrink flex-row"),L(_,"class","list-none"),L(f,"class","mx-auto mt-10 px-10")},m(e,t){E(e,l,t),E(e,a,t),d(a,i),d(i,m),E(e,h,t),E(e,f,t),d(f,_);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(_,null)},p(e,[t]){t&2&&s!==(s=e[1].posts.title())&&(document.title=s),t&2&&n!==(n=e[1].posts.new.title()+"")&&D(m,n),t&1&&(p=q(e[0].posts),o=H(o,t,g,1,e,p,v,_,J,F,null,C))},i:V,o:V,d(e){e&&(u(l),u(a),u(h),u(f));for(let t=0;t<o.length;t+=1)o[t].d()}}}function Y(c,s,l){let a;G(c,Q,n=>l(1,a=n));let{data:i}=s;return c.$$set=n=>{"data"in n&&l(0,i=n.data)},[i,a]}class oe extends K{constructor(s){super(),N(this,s,Y,X,U,{data:0})}}export{oe as component,le as universal};
