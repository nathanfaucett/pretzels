const e=location.pathname.split("/").slice(0,-1).join("/"),c=[e+"/internal/immutable/entry/app.aMfLizT1.js",e+"/internal/immutable/nodes/0.CIzI0OE3.js",e+"/internal/immutable/assets/0.Bw-VvHTo.css",e+"/internal/immutable/nodes/1.C1PiHQz4.js",e+"/internal/immutable/nodes/2.CAY6geA-.js",e+"/internal/immutable/nodes/3.BZlO5ts0.js",e+"/internal/immutable/nodes/4.P-3b0opa.js",e+"/internal/immutable/nodes/5.nV6FrYox.js",e+"/internal/immutable/nodes/6.YYsHESOc.js",e+"/internal/immutable/nodes/7.B72GVcxJ.js",e+"/internal/immutable/nodes/8.LslXmQZ6.js",e+"/internal/immutable/chunks/Icon.D2W0Yhtu.js",e+"/internal/immutable/chunks/InputResults.BGDXJ2ZP.js",e+"/internal/immutable/chunks/auth.VmSBZjLG.js",e+"/internal/immutable/chunks/control.CYgJF_JY.js",e+"/internal/immutable/chunks/entry.BzpYtLds.js",e+"/internal/immutable/chunks/i18n-svelte.Dib1W4ot.js",e+"/internal/immutable/chunks/index.CONSuTQ-.js",e+"/internal/immutable/assets/1717646487699-benchwarmers-0.D_5DKXrL.webp",e+"/internal/immutable/assets/1716782422460-crystal-beer-parlor-0.CtTRpkSK.webp",e+"/internal/immutable/assets/1713067212563-bodensee-0.BbVeZiFZ.webp",e+"/internal/immutable/chunks/index.D67-Vfk0.js",e+"/internal/immutable/chunks/index.eh8_VlGM.js",e+"/internal/immutable/chunks/localstorageWritable.BawguKoo.js",e+"/internal/immutable/chunks/notifications.CQVzKjhH.js",e+"/internal/immutable/chunks/paths.fI5_Wa72.js",e+"/internal/immutable/chunks/preload-helper.D6kgxu3v.js",e+"/internal/immutable/assets/repo.9zABvnW_.css",e+"/internal/immutable/chunks/repo.BpBKFuSy.js",e+"/internal/immutable/chunks/scheduler.7wqEmfhF.js",e+"/internal/immutable/chunks/util.zz7eDuoR.js",e+"/internal/immutable/chunks/index.DbiDv6BT.js",e+"/internal/immutable/entry/start.B1DkG0KD.js",e+"/internal/immutable/chunks/index.D0LGCI4N.js"],m=[e+"/favicon.png",e+"/icon.png",e+"/icon256x256.png",e+"/manifest.json"],o="1718366587492",l=self,r=`cache-${o}`,u=[...c,...m];l.addEventListener("install",n=>{async function s(){await(await caches.open(r)).addAll(u)}n.waitUntil(s())});l.addEventListener("activate",n=>{async function s(){for(const t of await caches.keys())t!==r&&await caches.delete(t)}n.waitUntil(s())});l.addEventListener("fetch",n=>{if(n.request.method==="GET"){const s=(async()=>{const t=new URL(n.request.url),a=await caches.open(r);if(u.includes(t.pathname))return a.match(t.pathname);try{const i=await fetch(n.request);return i.status===200&&!n.request.url.startsWith("chrome-extension://")&&a.put(n.request,i.clone()),i}catch{return a.match(n.request)}})();n.respondWith(s)}});
