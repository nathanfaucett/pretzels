const e=location.pathname.split("/").slice(0,-1).join("/"),u=[e+"/internal/immutable/entry/app.BZKtqnmh.js",e+"/internal/immutable/nodes/0.B4m5VXeH.js",e+"/internal/immutable/assets/0.CZyskL4m.css",e+"/internal/immutable/nodes/1.TnMi3l0K.js",e+"/internal/immutable/nodes/2.B78RReeS.js",e+"/internal/immutable/nodes/3.MElo6WXl.js",e+"/internal/immutable/nodes/4.CpHyXLIU.js",e+"/internal/immutable/nodes/5.B4AeT5YY.js",e+"/internal/immutable/nodes/6.9QZkCxTd.js",e+"/internal/immutable/nodes/7.CNtEC1sz.js",e+"/internal/immutable/nodes/8.DG7ReHVp.js",e+"/internal/immutable/chunks/Icon.CmOSzSxN.js",e+"/internal/immutable/chunks/InputResults.BHHj2ife.js",e+"/internal/immutable/chunks/auth.XrwQDyep.js",e+"/internal/immutable/chunks/control.CYgJF_JY.js",e+"/internal/immutable/chunks/entry.BbvLM6qM.js",e+"/internal/immutable/chunks/i18n-svelte.CifVposo.js",e+"/internal/immutable/chunks/index.BdoGywI2.js",e+"/internal/immutable/chunks/index.Cr56hA6r.js",e+"/internal/immutable/assets/1719270711525-the-springs-cinema--taphouse-0.DfN4abXX.webp",e+"/internal/immutable/assets/1719018191808-meltons-app-and-tap-0.BCP-zInj.webp",e+"/internal/immutable/assets/1716782422460-crystal-beer-parlor-0.CtTRpkSK.webp",e+"/internal/immutable/assets/1718574622702-jekyl-and-hyde-taphouse-matthewsnc-0.7ODWYZ55.webp",e+"/internal/immutable/assets/1713067212563-bodensee-0.V9B6jlv2.webp",e+"/internal/immutable/assets/1717646487699-benchwarmers-0.aINK3Ir2.webp",e+"/internal/immutable/chunks/index.DpZMNXjp.js",e+"/internal/immutable/chunks/localstorageWritable.DLmX5NIq.js",e+"/internal/immutable/chunks/notifications.SgaeV186.js",e+"/internal/immutable/chunks/paths.Qp6c-eZ0.js",e+"/internal/immutable/chunks/preload-helper.D6kgxu3v.js",e+"/internal/immutable/assets/repo.9zABvnW_.css",e+"/internal/immutable/chunks/repo.D95aEGVr.js",e+"/internal/immutable/chunks/scheduler.BgRpyi53.js",e+"/internal/immutable/chunks/stores.C37JsBTz.js",e+"/internal/immutable/chunks/util.C27Cgb0j.js",e+"/internal/immutable/chunks/index.DbiDv6BT.js",e+"/internal/immutable/entry/start.CwxDirVS.js",e+"/internal/immutable/chunks/index.D0LGCI4N.js"],c=[e+"/favicon.png",e+"/icon.png",e+"/icon256x256.png",e+"/manifest.json"],o="1719271374651",l=self,m=`cache-${o}`,r=[...u,...c];l.addEventListener("install",n=>{async function s(){await(await caches.open(m)).addAll(r)}n.waitUntil(s())});l.addEventListener("activate",n=>{async function s(){for(const t of await caches.keys())t!==m&&await caches.delete(t)}n.waitUntil(s())});l.addEventListener("fetch",n=>{if(n.request.method==="GET"){const s=(async()=>{const t=new URL(n.request.url),a=await caches.open(m);if(r.includes(t.pathname))return a.match(t.pathname);try{const i=await fetch(n.request);return i.status===200&&!n.request.url.startsWith("chrome-extension://")&&a.put(n.request,i.clone()),i}catch{return a.match(n.request)}})();n.respondWith(s)}});
