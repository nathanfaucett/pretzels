import{p as D}from"../chunks/index.BaSzCbaE.js";import{n as I,s as j,e as _,t as V,q as $,d as u,f as k,c as h,a as w,b as q,g,i as S,h as m,j as M,l as O,y as T}from"../chunks/scheduler.BgRpyi53.js";import{S as B,i as C,t as b,a as E,e as F,c as H,b as U,m as A,d as G,g as J}from"../chunks/index.BdoGywI2.js";import{L as K}from"../chunks/i18n-svelte.CifVposo.js";import{P as N,i as Q,u as W}from"../chunks/repo.D_YxlIBg.js";import{t as X}from"../chunks/util.C27Cgb0j.js";import{g as Y}from"../chunks/entry.B7D91vAl.js";import{b as Z}from"../chunks/paths.CU37Sztd.js";const x=async t=>(await t.parent(),{post:D[t.params.uri]}),fe=Object.freeze(Object.defineProperty({__proto__:null,load:x},Symbol.toStringTag,{value:"Module"}));function z(t){let l,n;return l=new N({props:{title:t[0].post.title,description:t[0].post.description,flavorReview:t[0].post.review.flavor,textureReview:t[0].post.review.texture,shapeReview:t[0].post.review.shape,saltReview:t[0].post.review.salt,images:t[1],address:t[0].post.address,onEdit:t[4]}}),{c(){H(l.$$.fragment)},l(e){U(l.$$.fragment,e)},m(e,s){A(l,e,s),n=!0},p(e,s){const a={};s&1&&(a.title=e[0].post.title),s&1&&(a.description=e[0].post.description),s&1&&(a.flavorReview=e[0].post.review.flavor),s&1&&(a.textureReview=e[0].post.review.texture),s&1&&(a.shapeReview=e[0].post.review.shape),s&1&&(a.saltReview=e[0].post.review.salt),s&2&&(a.images=e[1]),s&1&&(a.address=e[0].post.address),l.$set(a)},i(e){n||(b(l.$$.fragment,e),n=!0)},o(e){E(l.$$.fragment,e),n=!1},d(e){G(l,e)}}}function ee(t){let l,n,e,s,a,p,d=t[3].posts.edit.title()+"",i,R,c;document.title=l=t[3].posts.edit.title()+": "+t[0].post.title;let o=t[2]&&z(t);return{c(){n=j(),e=_("div"),s=_("div"),a=_("div"),p=_("h1"),i=V(d),R=j(),o&&o.c(),this.h()},l(r){$("svelte-b658ou",document.head).forEach(u),n=k(r),e=h(r,"DIV",{class:!0});var P=w(e);s=h(P,"DIV",{class:!0});var y=w(s);a=h(y,"DIV",{class:!0});var v=w(a);p=h(v,"H1",{class:!0});var L=w(p);i=q(L,d),L.forEach(u),R=k(v),o&&o.l(v),v.forEach(u),y.forEach(u),P.forEach(u),this.h()},h(){g(p,"class","mb-1"),g(a,"class","flex flex-grow flex-col bg-white p-4 shadow dark:bg-gray-800"),g(s,"class","mx-auto flex w-full flex-shrink flex-col p-4 py-10"),g(e,"class","flex flex-grow flex-col justify-end md:justify-start")},m(r,f){S(r,n,f),S(r,e,f),m(e,s),m(s,a),m(a,p),m(p,i),m(a,R),o&&o.m(a,null),c=!0},p(r,[f]){(!c||f&9)&&l!==(l=r[3].posts.edit.title()+": "+r[0].post.title)&&(document.title=l),(!c||f&8)&&d!==(d=r[3].posts.edit.title()+"")&&M(i,d),r[2]?o?(o.p(r,f),f&4&&b(o,1)):(o=z(r),o.c(),b(o,1),o.m(a,null)):o&&(J(),E(o,1,1,()=>{o=null}),F())},i(r){c||(b(o),c=!0)},o(r){E(o),c=!1},d(r){r&&(u(n),u(e)),o&&o.d()}}}function te(t,l,n){let e;O(t,K,i=>n(3,e=i));let{data:s}=l,a=[],p=!1;T(async()=>{try{n(1,a=await Promise.all(s.post.images.map(async i=>new File([await Q(i)],i))))}finally{n(2,p=!0)}});async function d(i){await W(s.post,{title:i.title,uri:X(i.title),review:{flavor:i.flavorReview,texture:i.textureReview,shape:i.shapeReview,salt:i.saltReview},description:i.description,address:i.address,images:i.images}),await Y(`${Z}/`)}return t.$$set=i=>{"data"in i&&n(0,s=i.data)},[s,a,p,e,d]}class de extends B{constructor(l){super(),C(this,l,te,ee,I,{data:0})}}export{de as component,fe as universal};