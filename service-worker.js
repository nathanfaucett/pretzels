const e=location.pathname.split("/").slice(0,-1).join("/"),c=[e+"/internal/immutable/entry/app.CzWgc-tF.js",e+"/internal/immutable/nodes/0.DRndE5RR.js",e+"/internal/immutable/assets/0.Bk8tqFsi.css",e+"/internal/immutable/nodes/1.DOH8CXG4.js",e+"/internal/immutable/nodes/2.Cv6mwSu0.js",e+"/internal/immutable/nodes/3.BK6ZH3Wb.js",e+"/internal/immutable/nodes/4.BDUcQ1BE.js",e+"/internal/immutable/nodes/5.Cm2iFNBE.js",e+"/internal/immutable/nodes/6.Dljrk3Xk.js",e+"/internal/immutable/nodes/7.DQJWTl7S.js",e+"/internal/immutable/nodes/8.C2bejw9j.js",e+"/internal/immutable/chunks/Icon.BfYXrR8t.js",e+"/internal/immutable/chunks/InputResults.DzkyWnDx.js",e+"/internal/immutable/chunks/auth.Cjow86CX.js",e+"/internal/immutable/chunks/control.CYgJF_JY.js",e+"/internal/immutable/chunks/entry.mcXWOigJ.js",e+"/internal/immutable/chunks/i18n-svelte.Cuohsm_x.js",e+"/internal/immutable/chunks/index.CC3qK9Gn.js",e+"/internal/immutable/assets/1717646487699-benchwarmers-0.aINK3Ir2.webp",e+"/internal/immutable/assets/1716782422460-crystal-beer-parlor-0.CtTRpkSK.webp",e+"/internal/immutable/assets/1713067212563-bodensee-0.BbVeZiFZ.webp",e+"/internal/immutable/chunks/index.CmKZQq8x.js",e+"/internal/immutable/chunks/index.DjE0fdGJ.js",e+"/internal/immutable/chunks/localstorageWritable.R--kKzuQ.js",e+"/internal/immutable/chunks/notifications.C5WLTVYY.js",e+"/internal/immutable/chunks/paths.CbVg0_4y.js",e+"/internal/immutable/chunks/preload-helper.D6kgxu3v.js",e+"/internal/immutable/assets/repo.9zABvnW_.css",e+"/internal/immutable/chunks/repo.DoMK2Dz7.js",e+"/internal/immutable/chunks/scheduler.C44hALVJ.js",e+"/internal/immutable/chunks/util.12Ki2goY.js",e+"/internal/immutable/chunks/index.DbiDv6BT.js",e+"/internal/immutable/entry/start.B_pAjEwm.js",e+"/internal/immutable/chunks/index.Cxc5gba7.js"],u=[e+"/favicon.png",e+"/icon.png",e+"/icon256x256.png",e+"/manifest.json",e+"/robots.txt"],o="1718363339957",l=self,r=`cache-${o}`,m=[...c,...u];l.addEventListener("install",n=>{async function s(){await(await caches.open(r)).addAll(m)}n.waitUntil(s())});l.addEventListener("activate",n=>{async function s(){for(const t of await caches.keys())t!==r&&await caches.delete(t)}n.waitUntil(s())});l.addEventListener("fetch",n=>{if(n.request.method==="GET"){const s=(async()=>{const t=new URL(n.request.url),a=await caches.open(r);if(m.includes(t.pathname))return a.match(t.pathname);try{const i=await fetch(n.request);return i.status===200&&!n.request.url.startsWith("chrome-extension://")&&a.put(n.request,i.clone()),i}catch{return a.match(n.request)}})();n.respondWith(s)}});
