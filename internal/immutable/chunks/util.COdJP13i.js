import{t as z,a as Y}from"./index.DLwqVcQA.js";import{x as G}from"./scheduler.BZy1TXPY.js";function Se(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ke(n,e){n.d(1),e.delete(n.key)}function J(n,e){Y(n,1,1,()=>{e.delete(n.key)})}function Ee(n,e){n.f(),J(n,e)}function Re(n,e,t,r,s,l,m,L,b,P,S,V){let f=n.length,p=l.length,x=f;const k={};for(;x--;)k[n[x].key]=x;const _=[],E=new Map,R=new Map,O=[];for(x=p;x--;){const u=V(s,l,x),a=t(u);let c=m.get(a);c?O.push(()=>c.p(u,e)):(c=P(a,u),c.c()),E.set(a,_[x]=c),a in k&&R.set(a,Math.abs(x-k[a]))}const N=new Set,U=new Set;function F(u){z(u,1),u.m(L,S),m.set(u.key,u),S=u.first,p--}for(;f&&p;){const u=_[p-1],a=n[f-1],c=u.key,v=a.key;u===a?(S=u.first,f--,p--):E.has(v)?!m.has(c)||N.has(c)?F(u):U.has(v)?f--:R.get(c)>R.get(v)?(U.add(c),F(u)):(N.add(v),f--):(b(a,m),f--)}for(;f--;){const u=n[f];E.has(u.key)||b(u,m)}for(;p;)F(_[p-1]);return G(O),_}function W(n,e){return n[0]=(e&4278190080)>>24,n[1]=(e&16711680)>>16,n[2]=(e&65280)>>8,n[3]=e&255,n}const d=Math.pow(2,31)-1|0,A={},w={};class y{constructor(e,t){if(e!==A)throw new TypeError("Options can only be created with the some or none functions");this._value=t}static some(e){return h(e)}static none(){return o()}static from(e){return e!=null?h(e):o()}static fromJSON(e){return y.from(e)}isNone(){return this._value===w}isSome(){return!this.isNone()}expect(e){if(this.isSome())return this._value;throw new Error(typeof e=="function"?e():e)}unwrap(){return this.expect("Tried to unwrap value of none Option")}unwrapOr(e){return this.isSome()?this._value:e}unwrapOrElse(e){return this.isSome()?this._value:e()}map(e){return this.isSome()?h(e(this._value)):o()}mapOr(e,t){return this.isSome()?h(e(this._value)):h(t)}mapOrElse(e,t){return this.isSome()?h(e(this._value)):h(t())}flatMap(e){return this.isSome()?e(this._value):o()}flatMapOr(e,t){return this.isSome()?e(this._value):t}flatMapOrElse(e,t){return this.isSome()?e(this._value):t()}and(e){return this.isSome()?e:o()}andThen(e){return this.isSome()?e(this._value):o()}or(e){return this.isNone()?e:this}orElse(e){return this.isNone()?e():this}xor(e){const t=this.isSome(),r=e.isSome();return t&&!r?this:!t&&r?e:o()}filter(e){return this.isSome()&&e(this._value)?this:o()}getOrInsert(e){return this.isNone()&&(this._value=e),this}getOrInsertWith(e){return this.isNone()&&(this._value=e()),this}clear(){return this._value=w,this}take(){if(this.isSome()){const e=this._value;return this._value=w,h(e)}else return o()}from(e){return e!=null?this._value=e:this.clear(),this}replace(e){return this._value=e,this}ifSome(e,t){return this.isSome()?e(this._value):t&&t(),this}ifNone(e,t){return this.isNone()?e():t&&t(this._value),this}toJSON(){return this.unwrapOr(null)}toJS(){return this.unwrapOr(null)}[Symbol.iterator](){return new D(this._value)}}class D{constructor(e){this.value=e}next(){if(this.value===w)return{done:!0,value:void 0};{const e=this.value;return this.value=w,{done:!1,value:e}}}}const h=n=>new y(A,n),o=()=>new y(A,w);class i{constructor(e){this._index=0,this._iter=e}[Symbol.iterator](){return this}iter(){return this}next(){return this._iter.next()}nextWithIndex(){const e=this._iter.next();return e.done?e:{value:[e.value,this._index++]}}enumerate(){throw new Error("Enumerate was not imported!")}peekable(){throw new Error("Peekable was not imported!")}forEach(e){throw new Error("ForEach was not imported!")}map(e){throw new Error("Map was not imported!")}merge(e){throw new Error("Merge was not imported!")}concat(e){return this.merge(e)}filter(e){throw new Error("Filter was not imported!")}step(e){throw new Error("Step was not imported!")}skip(e){throw new Error("Skip was not imported!")}take(e){throw new Error("Take was not imported!")}toMap(e,t){throw new Error("ToMap was not imported!")}flatten(e){throw new Error("Flatten was not imported!")}unflatten(e){throw new Error("Unflatten was not imported!")}reverse(){throw new Error("Reverse was not imported!")}count(){return this.reduce(0,e=>e+1)}consume(){let e=this.next();for(;!e.done;)e=this.next();return this}toArray(){return this.reduce([],(e,t)=>(e.push(t),e))}join(e){return this.toArray().join(e)}indexOf(e){let t=this.next(),r=0;for(;!t.done;){if(t.value===e)return r;r++,t=this.next()}return-1}findIndex(e){let t=this.nextWithIndex();for(;!t.done;){const[r,s]=t.value;if(e(r,s))return s;t=this.nextWithIndex()}return-1}find(e){let t=this.nextWithIndex();for(;!t.done;){const[r,s]=t.value;if(e(r,s))return h(r);t=this.nextWithIndex()}return o()}findAll(e){return this.filter(e)}nth(e=0){let t=this.next();for(e<0&&(e=0);!t.done;){if(e--<=0)return h(t.value);t=this.next()}return o()}first(){return this.nth(0)}last(){let e=this.next();for(;!e.done;){const t=this.next();if(t.done)return h(e.value);e=t}return o()}any(e){return this.findIndex(e)!==-1}some(e){return this.any(e)}none(e){return this.findIndex(e)===-1}all(e){let t=this.nextWithIndex();for(;!t.done;){const[r,s]=t.value;if(!e(r,s))return!1;t=this.nextWithIndex()}return!0}reduce(e,t){let r=this.next();for(;!r.done;){const s=r.value;e=t(e,s,this._index-1),r=this.next()}return e}}function g(n){return n!=null?typeof n[Symbol.iterator]=="function"?new i(n[Symbol.iterator]()):typeof n.next=="function"?n instanceof i?n:new i(n):g(typeof n=="object"?Object.entries(n):[n]):g([])}class H extends i{constructor(e){super(e)}next(){const e=super.nextWithIndex();return e.done?e:{value:$(e.value)}}}i.prototype.enumerate=function(){return new H(this)};function $(n){const e=n[0],t=n;return t[0]=n[1],t[1]=e,t}const K=n=>n,X=n=>n;class q extends i{constructor(e,t=K,r=X){super(e),this._map=([s,l])=>[t(s,l),r(s,l)]}toObject(){return this.reduce({},(e,t)=>(e[t[0]]=t[1],e))}next(){const e=super.nextWithIndex();return e.done?e:{done:!1,value:this._map(e.value)}}}i.prototype.toMap=function(e,t){return new q(this,e,t)};class Q extends i{constructor(e,t){super(e),this._fn=t}next(){let e=super.nextWithIndex();for(;!e.done;){const[t,r]=e.value;if(this._fn(t,r))return{done:!1,value:t};e=super.nextWithIndex()}return{done:!0,value:void 0}}}i.prototype.filter=function(e){return new Q(this,e)};class Z extends i{constructor(e,t){super(e),this._fn=([r,s])=>(t(r,s),r)}next(){const e=super.nextWithIndex();return e.done?e:{done:!1,value:this._fn(e.value)}}}i.prototype.forEach=function(e){return new Z(this,e)};let ee=class extends i{constructor(e,t){super(e),this._fn=t}next(){const e=super.nextWithIndex();if(e.done)return e;{const[t,r]=e.value;return{done:!1,value:this._fn(t,r)}}}};i.prototype.map=function(e){return new ee(this,e)};class te extends i{constructor(e,t){super(e),this._other=t}next(){const e=super.next();return e.done?this._other.next():e}}i.prototype.merge=function(e){return new te(this,e)};class ne extends i{constructor(){super(...arguments),this.peeked=[]}unpeekAll(){return this.peeked.length=0,this}unpeek(){return this.peeked.length>0?h(this.peeked.shift()):o()}peek(e=0){if(e<this.peeked.length)return h(this.peeked[e]);{let t=this.peeked.length-e-1,r=super.next();for(;!r.done&&(this.peeked.push(r.value),!(--t<=0));)r=super.next();return r.done?o():h(r.value)}}next(){const e=this.unpeek();if(e.isSome())return{done:!1,value:e.unwrap()};const t=super.next();return t.done?t:{done:!1,value:t.value}}}i.prototype.peekable=function(){return new ne(this)};class re extends i{constructor(e){super(e),this.index=0,this.reversed=!1,this.values=[]}next(){if(!this.reversed){let e=super.next();for(;!e.done;)this.values.push(e),e=super.next();this.reversed=!0,this.index=this.values.length}return this.index===0?{done:!0,value:void 0}:(this.index-=1,this.values[this.index])}}i.prototype.reverse=function(){return new re(this)};class se extends i{constructor(e,t){super(e),this._skipped=0,this._skip=(t<=0?0:t)|0}next(){let e=super.next();for(;!e.done;)if(this._skipped<=this._skip)this._skipped+=1,e=super.next();else return e;return{done:!0,value:void 0}}}i.prototype.skip=function(n){return new se(this,n)};class ie extends i{constructor(e,t){super(e),this._stepped=0,this._step=t<=0?1:t|0}next(){let e=super.next();for(;!e.done;)if(this._stepped<this._step)this._stepped+=1,e=super.next();else return this._stepped=0,e;return{done:!0,value:void 0}}}i.prototype.step=function(n){return new ie(this,n)};class ue extends i{constructor(e,t){super(e),this._taken=0,this._count=(t<=0?0:t)|0}next(){return this._taken<this._count?(this._taken+=1,super.next()):{done:!0,value:void 0}}}i.prototype.take=function(e){return new ue(this,e)};class oe extends i{constructor(e,t){super(e),this._fn=t}next(){return this._fn(this._iter)}}i.prototype.unflatten=function(e){return new oe(this,e)};class he extends i{constructor(e,t=1){super(e),this._current=void 0,this._depth=t}next(){if(this._current!==void 0){const e=this._current.next();if(e.done)this._current=void 0;else return e}return this._nextRecur()}_nextRecur(){const e=super.next();if(e.done)return e;if(this._depth>0){const t=g(e.value).flatten(this._depth-1),r=t.next();return r.done?this._nextRecur():(this._current=t,r)}else return e}}i.prototype.flatten=function(e=1){return new he(this,e)};class le extends i{constructor(e){super(e),this.rng=e}iter(){return new i(this)}next(){return{done:!1,value:this.rng.nextFloat()}}}class ae extends i{constructor(e,t=0,r=1){super(e),this.rng=e,this.min=t,this.max=r}iter(){return new i(this)}nextFloat(){return this.rng.nextFloatInRange(this.min,this.max)}next(){return{done:!1,value:this.nextFloat()}}}class ce extends i{constructor(e,t=0,r=d){super(e),this.rng=e,this.min=t|0,this.max=r|0}iter(){return new i(this)}nextInt(){return this.rng.nextIntInRange(this.min,this.max)}next(){return{done:!1,value:this.nextInt()}}}const fe=new Uint8Array(4);class M{nextFloat(){return this.nextInt()/d}nextFloatInRange(e=0,t=1){return e+this.nextFloat()*(t-e)}nextIntInRange(e=0,t=d){return Math.round(this.nextFloatInRange(e,t))}shuffle(e){const t=e.length;for(let r=0;r<t;r++){const s=r+this.nextIntInRange(0,t-r-1),l=e[r];e[r]=e[s],e[s]=l}return e}fromArray(e){return e.length?h(e[this.nextIntInRange(0,e.length-1)]):o()}keyFromObject(e){return this.fromArray(Object.keys(e))}valueFromObject(e){return this.fromArray(Object.values(e))}fillBytes(e){const t=fe;for(let r=0,s=e.length;r<s;r++){const l=r%4;l===0&&W(t,this.nextInt()),e[r]=t[l]}return e}[Symbol.iterator](){return this}iter(){return new i(this)}next(){return{done:!1,value:this.nextInt()}}float(){return new le(this)}uniformFloat(e=0,t=1){return new ae(this,e,t)}uniformInt(e=0,t=d){return new ce(this,e,t)}}const B=typeof crypto<"u"&&typeof crypto.getRandomValues=="function",de=new Uint32Array(1),xe=new Uint8Array(4),j=B?()=>crypto.getRandomValues(de)[0]%d:()=>Math.random()*d|0,pe=B?n=>crypto.getRandomValues(Array.isArray(n)?new Uint8Array(n):n):n=>{const e=xe;for(let t=0,r=n.length;t<r;t++){const s=t%4;s===0&&W(e,j()),n[t]=e[s]}return n};class we extends M{nextInt(){return j()}fillBytes(e){return pe(e)}}class C extends M{constructor(e=423257940){super(),this.seed=e}setSeed(e=423257940){return this.seed=e,this}nextInt(){return this.seed=Math.imul(48271,this.seed)|0%d,this.seed&d}}const me=new C;class T extends M{constructor(e,t,r,s){super(),this.x=423257940,this.y=2829571177,this.z=2541948421,this.w=289122235,this.set(e,t,r,s)}static fromSeed(e){return new T().setSeed(e)}setSeed(e){const t=me.setSeed(e);return this.set(t.nextInt(),t.nextInt(),t.nextInt(),t.nextInt())}set(e=423257940,t=2829571177,r=2541948421,s=289122235){return this.x=e|0,this.y=t|0,this.z=r|0,this.w=s|0,this}nextInt(){const e=this.x,t=e^e<<11;this.x=this.y,this.y=this.z,this.z=this.w;const r=this.w;return this.w=r^r>>19^(t^t>>8),this.w}}new C;new T;const _e=new we;let ve=_e;function Ie(){return ve.nextFloat()}function Ae(){return Ie()*d|0}function Me(n){return n.trim().toLowerCase().replace(/[\s]+/gi,"-").replace(/[^\w\d\-_]+/gi,"")}function Te(n,e){return n.replace(/\.[^/.]+$/,e)}function be(n,e=1){if(e<1)return Math.round(n).toString();const t=n.toFixed(e),r=parseFloat(t);return r%1===0?r.toString():r.toLocaleString(navigator.languages,{maximumFractionDigits:e})}const I="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Oe(n){const e=new Uint8Array(n),t=e.byteLength;let r="";for(let s=0;s<t;s+=3)r+=I[e[s]>>2],r+=I[(e[s]&3)<<4|e[s+1]>>4],r+=I[(e[s+1]&15)<<2|e[s+2]>>6],r+=I[e[s+2]&63];return t%3===2?r=r.substring(0,r.length-1)+"=":t%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function Ne(n){return btoa(unescape(encodeURIComponent(n)))}function Ue(n){return decodeURIComponent(escape(atob(n)))}export{Oe as a,Ne as b,Ae as c,ke as d,Se as e,Ue as f,Ee as g,J as o,be as p,Te as r,Me as t,Re as u};