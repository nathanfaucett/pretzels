import{g as m}from"../chunks/auth.XrwQDyep.js";import{R as p}from"../chunks/control.CYgJF_JY.js";import{b as h}from"../chunks/paths.CXSEuiNq.js";import{n as g,m as v,e as u,c as f,a as d,d as i,g as _,i as w,h as $,u as y,o as b,p as S}from"../chunks/scheduler.BgRpyi53.js";import{S as x,i as I,t as E,a as O}from"../chunks/index.BdoGywI2.js";function R(o,t){throw new p(o,t.toString())}new TextEncoder;const j=async o=>{await o.parent();try{const t=await m();await t.auth()||await t.auth()}catch(t){console.log(t),R(302,`${h}/signin?redirect=${encodeURIComponent(o.url.pathname)}`)}},L=Object.freeze(Object.defineProperty({__proto__:null,load:j},Symbol.toStringTag,{value:"Module"}));function k(o){let t,s,n;const r=o[1].default,e=v(r,o,o[0],null);return{c(){t=u("div"),s=u("div"),e&&e.c(),this.h()},l(a){t=f(a,"DIV",{class:!0});var l=d(t);s=f(l,"DIV",{class:!0});var c=d(s);e&&e.l(c),c.forEach(i),l.forEach(i),this.h()},h(){_(s,"class","flex flex-grow flex-col overflow-y-auto overflow-x-hidden"),_(t,"class","flex h-full w-full flex-col")},m(a,l){w(a,t,l),$(t,s),e&&e.m(s,null),n=!0},p(a,[l]){e&&e.p&&(!n||l&1)&&y(e,r,a,a[0],n?S(r,a[0],l,null):b(a[0]),null)},i(a){n||(E(e,a),n=!0)},o(a){O(e,a),n=!1},d(a){a&&i(t),e&&e.d(a)}}}function C(o,t,s){let{$$slots:n={},$$scope:r}=t;return o.$$set=e=>{"$$scope"in e&&s(0,r=e.$$scope)},[r,n]}class M extends x{constructor(t){super(),I(this,t,C,k,g,{})}}export{M as component,L as universal};
