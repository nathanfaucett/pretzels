import{w as f}from"./index.D67-Vfk0.js";var y=e=>!!e,L=e=>Array.from(new Set(e)),E=(e,t,...r)=>{for(let s of r){let n=w(t,s);if(n)return n}return e},w=(e,t)=>{let r=t().map(o=>o.toLowerCase()),s=L(r.flatMap(o=>[o,o.split("-")[0]])),n=e.map(o=>o.toLowerCase());return s.map(o=>{let a=n.findIndex(i=>i===o);return a>=0&&e[a]}).find(y)};const O="en",k=["en"],h={},j={},M=(...e)=>E(O,k,...e);var b=()=>new Proxy(Object.assign(()=>"",{}),{get:(e,t)=>t==="length"?0:b()}),A=e=>Object.fromEntries(Object.entries(e).map(([t,r])=>t!=="i"&&r&&r!="0"&&[t,r]).filter(Boolean)),_=e=>Object.fromEntries(Object.keys(e).map(t=>{const r=e[t];return[t,Array.isArray(r)?r.map(s=>s==null?void 0:s.trim()):r===!!r?r:r==null?void 0:r.trim()]})),S=e=>{const[t="",...r]=e.split("|"),[s="",n]=t.split(":"),[o,a]=s.split("?");return{k:o,i:n,n:a==="",f:r}},I=e=>!!(e.o||e.r),R=(e,t)=>{let[r,s]=e.split(":");s||(s=r,r=t);const n=s.split("|"),[o,a,i,c,d,v]=n,l=n.filter(P=>P!==void 0).length;return l===1?{k:r,r:o}:l===2?{k:r,o,r:a}:l===3?{k:r,z:o,o:a,r:i}:{k:r,z:o,o:a,t:i,f:c,m:d,r:v}},C=/^\{.*\}$/,T=e=>Object.fromEntries(u(e).split(",").map(t=>t.split(":")).reduce((t,r)=>r.length===2?[...t,r.map(s=>s.trim())]:(t[t.length-1][1]+=","+r[0],t),[])),m=/(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g,u=e=>e.substring(1,e.length-1),V=(e,t=!0,r="",s="")=>e.split(m).map(n=>{if(!n.match(m))return n;const o=u(n);if(o.startsWith("{"))return R(u(o),s);const a=S(o);return s=a.k||s,!r&&(r=s),a}).map(n=>{if(typeof n=="string")return n;n.k||(n.k=r||"0");const o=_(n);return t?A(o):o}),z=(e,t,r)=>t.reduce((s,n)=>{var o;return(n.match(C)?(a=>a[s]??a["*"])(T(n)):(o=e[n])==null?void 0:o.call(e,s))??s},r),B=(e,{z:t,o:r,t:s,f:n,m:o,r:a},i)=>{switch(t&&i==0?"zero":e.select(i)){case"zero":return t;case"one":return r;case"two":return s;case"few":return n??a;case"many":return o??a;default:return a}},x=/\?\?/g,G=(e,t,r,s)=>e.map(n=>{if(typeof n=="string")return n;const{k:o="0",f:a=[]}=n,i=s[o];return I(n)?((typeof i=="boolean"?i?n.o:n.r:B(t,n,i))||"").replace(x,i):(""+((a.length?z(r,a,i):i)??"")).trim()}).join(""),N=(e,t,r,s)=>{const n=s[0],o=n&&typeof n=="object"&&n.constructor===Object,a=s.length===1&&o?n:s;return G(e,t,r,a)},W=(e,t)=>e[t]||(e[t]=V(t)),X=(e,t)=>{const r={},s=new Intl.PluralRules(e);return(n,...o)=>N(W(r,n),s,t,o)};function F(e,t,r={}){return g(t,X(e,r))}var p=(e={},t)=>typeof e=="string"?t.bind(null,e):Object.assign(Object.defineProperty(()=>"","name",{writable:!0}),e),g=(e,t)=>new Proxy(p(e,t),{get:(r,s)=>s===Symbol.iterator?[][Symbol.iterator].bind(Object.values(r).map(n=>p(n,t))):g(r[s],t)}),U=(e,t={})=>{const r=f(),s=f(b()),n=H(r),o=new Proxy({},{get:(i,c)=>c==="subscribe"?s.subscribe:s[c]});return{locale:n,LL:o,setLocale:i=>{r.set(i),s.set(F(i,e[i],t[i]))}}};function H(e){return{subscribe:e.subscribe.bind(e)}}const{locale:$,LL:q,setLocale:D}=U(h,j);export{q as L,h as a,M as d,j as l,D as s};