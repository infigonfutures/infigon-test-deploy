'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a195ed574c1c068d4e8a3df152e231fe",
"assets/assets/arts.txt": "1b752e71290b1ecfeea3f040bb0b02f2",
"assets/assets/big5.txt": "e82dbbb46385bd815489ff123e2a4f35",
"assets/assets/bsc.txt": "e4b0fc4a8269411f414437d9d417dd49",
"assets/assets/CAREER_OPTIONS.txt": "bef68d9367c3b60485a4fc756443e5b7",
"assets/assets/COLLEGE.txt": "6e1bff3f4e25007de3bb23476ff5f29d",
"assets/assets/commerce.txt": "679561e1bbb32d7f9a9ddf098ac65708",
"assets/assets/DEGREE.txt": "d7eadb5a52c85146a73c66a85e208378",
"assets/assets/dipAni.txt": "8927ab2757ca643c038076bbf2071368",
"assets/assets/dipArch.txt": "8500291f89b2bf4a8931f9ac7ac3b131",
"assets/assets/dipArts.txt": "5fc5015d1b97e3677db512ae0cebaae9",
"assets/assets/dipCom.txt": "6409ccaf037c07d6acb14e17b5dc6427",
"assets/assets/dipEng.txt": "59723aae7113836e76baa554e61cf80d",
"assets/assets/dipHos.txt": "56166286a9959ed67185e478aca75da4",
"assets/assets/dipPro.txt": "7e87a45e89a436d6a2a96e50565943dc",
"assets/assets/dipSci.txt": "79bbd3d43ac08aeb4c3032e41ab0537e",
"assets/assets/disc.txt": "b2b67b482b0646a4c59df8fde0180f53",
"assets/assets/engineering.txt": "3fb91286c2a0a15e7977936c8b5c29dd",
"assets/assets/enneagram/option1.txt": "d5bf36ad3d9d4720c330d8aabe62b222",
"assets/assets/enneagram/option2.txt": "d56b8d8dedf21fc14ceb704c045aeadd",
"assets/assets/enneagram/val1.txt": "162033e11f252d96b3e636bd7784e009",
"assets/assets/enneagram/val2.txt": "15d656bb24c988e62ff75c269a6dbe4b",
"assets/assets/ENTRANCE_EXAMS.txt": "00d568e8a814bd4d9b45cb8e92e619bf",
"assets/assets/fonts/Poppins-Light.ttf": "2a47a29ceb33c966c8d79f8d5a5ea448",
"assets/assets/ib.txt": "a73e6fa68e2247b3935b849b1ce035c3",
"assets/assets/igcse.txt": "c87a77b41e655e36663a14193518e3ca",
"assets/assets/Images/02.png": "19aff5fb442e499fa2906435912d2859",
"assets/assets/Images/03.png": "d8ea216781eab775591e13349ed7ccc5",
"assets/assets/Images/05.png": "f5dc8a21b405da9baccd1a12359ca235",
"assets/assets/Images/06.png": "eb2377a82c0ca7c28fd82afb8293a19c",
"assets/assets/Images/1.png": "5192a9b2574b6758d60b942252fba1fa",
"assets/assets/Images/10.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/11.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/12.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/2.png": "d79ff04bc6c5099c5e110ddab25eb259",
"assets/assets/Images/3.png": "d912265a541b2a29f28c49734ef49d0c",
"assets/assets/Images/4.png": "0ce3a1d1841a5397219b9fccfae188c6",
"assets/assets/Images/5.png": "eb79b640946739e74eccef2135b32b69",
"assets/assets/Images/6.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/7.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/8.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/9.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/app_image.png": "9a2e7f69e5328f29fcd4ade489e9b059",
"assets/assets/Images/arrow.png": "fdf83f6780716dfed24cf261bc4b3aac",
"assets/assets/Images/background.jpg": "e5afadd9122a324823af8c70f55ab669",
"assets/assets/Images/bg.jpg": "417e7882cc10d3c6c553538e4b548d6b",
"assets/assets/Images/business.jpg": "9849589a89e46203f9fec253eae36d76",
"assets/assets/Images/cse.jpg": "93dce5e6a465ad323f4949f514e8cecf",
"assets/assets/Images/development.jpg": "9e0b997f6fa43008c37589f47ca81a39",
"assets/assets/Images/English.jpg": "37234ecccc5cbf084dad80b38960f24e",
"assets/assets/Images/football.jpg": "933bccbc2076b50cc73aaaf9cb80f934",
"assets/assets/Images/group.png": "ab6b0b7a268b53d19a927a33eea43658",
"assets/assets/Images/guitar.jpg": "e466b69aae1726978152755b16ef7967",
"assets/assets/Images/Hindi.jpg": "7732c0994d4b14f1dc17b1321e5ed173",
"assets/assets/Images/icon1024.png": "22c3e2bbe5a779f7ad10939e60241c99",
"assets/assets/Images/Industry%2520Badges/Aerospace.jpg": "43b477c3ad604bab276121729644127c",
"assets/assets/Images/Industry%2520Badges/Agriculture.jpg": "ec5a544b1e14bdf4e97540eb7e470829",
"assets/assets/Images/Industry%2520Badges/Aquaculture.jpg": "ff32bda5913e16798123d051c71bd073",
"assets/assets/Images/Industry%2520Badges/Architect.jpg": "b5b3229b3028c8a5d9865b4460404dd6",
"assets/assets/Images/Industry%2520Badges/Arts-Fine.jpg": "f860cc217025d617a3fbf6e28449ad7b",
"assets/assets/Images/Industry%2520Badges/Arts-Performing%2520%2520entertainment.jpg": "92593ed07cb463932e75e24d67496741",
"assets/assets/Images/Industry%2520Badges/Arts-Visuals.jpg": "adbdd7245f72d0f290de1d58b98ce932",
"assets/assets/Images/Industry%2520Badges/Automobile.jpg": "4e6950cac7b7386fade5d64e550f7242",
"assets/assets/Images/Industry%2520Badges/Aviation.jpg": "1409db71da0844007313796ecc7869e2",
"assets/assets/Images/Industry%2520Badges/Banking.jpg": "e8309ab5b3871d87cf1b2b3401e1bf17",
"assets/assets/Images/Industry%2520Badges/Basic%2520and%2520Applied%2520sciences.jpg": "f24d4acd901689b55b3c96622d271c19",
"assets/assets/Images/Industry%2520Badges/beauty-fitness-lifestyle.jpg": "31abdc8ad04a26af6197c5dfa1d17fd0",
"assets/assets/Images/Industry%2520Badges/Civil%2520services.jpg": "ec9a33d3c78b81b4b10207ff524785d2",
"assets/assets/Images/Industry%2520Badges/coomunity%2520and%2520social%2520service.jpg": "284c9082e6a58d99a7db17103f12dae2",
"assets/assets/Images/Industry%2520Badges/Defence.jpg": "5b4f425c4f549266dff5bd56e97cd31d",
"assets/assets/Images/Industry%2520Badges/Designing.jpg": "9d650c363575ab5db3bb96165960fc73",
"assets/assets/Images/Industry%2520Badges/Ecommerce.jpg": "c1d038fd8c0d4efa5966feb20a7e53b6",
"assets/assets/Images/Industry%2520Badges/Economics.jpg": "f4b0f760e6f8b0cd8e5565e0595ca85c",
"assets/assets/Images/Industry%2520Badges/Education%2520and%2520traning.jpg": "f4154951dc3ffec39abc5d7352117e1f",
"assets/assets/Images/Industry%2520Badges/Electronics.jpg": "9cb41df5b71b1aaba574b66d9a3d0798",
"assets/assets/Images/Industry%2520Badges/Engineering.jpg": "aaa5c288bd038f1aed17b666b39d958d",
"assets/assets/Images/Industry%2520Badges/Enigneer.jpg": "9f629e5f72464d16ea9ea8f54a948dfd",
"assets/assets/Images/Industry%2520Badges/Event%2520Planning.jpg": "bb0f1cc51e431c1f679c239748d92c10",
"assets/assets/Images/Industry%2520Badges/Fashion.jpg": "0d46fa636e94b465fe772894c3675ea7",
"assets/assets/Images/Industry%2520Badges/Food.jpg": "9eabb4d4f5c8b71a9a8fdd102b9adbbd",
"assets/assets/Images/Industry%2520Badges/Healthcaremedical.jpg": "a0e3836788a62f6c376714d0e64f26e6",
"assets/assets/Images/Industry%2520Badges/Humanities.jpg": "9b978e6291b0f0f8d00bbcd51f02fc60",
"assets/assets/Images/Industry%2520Badges/Insurance%2520and%2520investments.jpg": "edb08ade195146fb9ac8cd0fc382cae6",
"assets/assets/Images/Industry%2520Badges/IT.jpg": "d5c955e734a4cb26d7675de9f23b233e",
"assets/assets/Images/Industry%2520Badges/Legal.jpg": "2ae97acf2d24a1454d325efb2af9c166",
"assets/assets/Images/Industry%2520Badges/Life%2520physicsal%2520and%2520social%2520services.jpg": "c540ffa687b5cf7bbf67f49ff797a4e4",
"assets/assets/Images/Industry%2520Badges/Logistics.jpg": "8f4174b12ce594ca6b5dc58086b1ad20",
"assets/assets/Images/Industry%2520Badges/Manufacturing.jpg": "1f3f59681891339068fe309ecc85952d",
"assets/assets/Images/Industry%2520Badges/Marine.jpg": "2027fe7f8b829f90f99fe6849b5cbe7c",
"assets/assets/Images/Industry%2520Badges/Marketing.jpg": "03fbffaecf4327aef1a52b5942c3e22f",
"assets/assets/Images/Industry%2520Badges/Media-Broadcast.jpg": "83bbbaad855f442a1517581b83036f33",
"assets/assets/Images/Industry%2520Badges/Media-Internet.jpg": "dc1769ae8981610408f54c98cd28f521",
"assets/assets/Images/Industry%2520Badges/Media-print.jpg": "2f0032bc6193106e0057690fb3b22eaf",
"assets/assets/Images/Industry%2520Badges/pharmaceuticals.jpg": "5cffe3369b00a779bd44c35c4481fbac",
"assets/assets/Images/Industry%2520Badges/Real%2520estate.jpg": "82bd65ef5fb3c1cde8ef0c2eee275ffb",
"assets/assets/Images/Industry%2520Badges/security.jpg": "c0fa0c7c539fbe5677f65e5531fd9211",
"assets/assets/Images/Industry%2520Badges/Services.jpg": "3a7f31a1db81a66dcf98ffb3fb14b2bd",
"assets/assets/Images/Industry%2520Badges/SET-FINAL-04.jpg": "21f80c9684b3d904a5b591dfb99d3fff",
"assets/assets/Images/Industry%2520Badges/SET-FINAL-10.jpg": "ba60686e30d075f7ef2117719ddf50df",
"assets/assets/Images/Industry%2520Badges/SET-FINAL-14.jpg": "643c9472047311fb6b8dfe840f273b01",
"assets/assets/Images/Industry%2520Badges/SET-FINAL-15.jpg": "f4878fc8db27456d4596edff24651b0a",
"assets/assets/Images/Industry%2520Badges/SET-FINAL-22.jpg": "87e5f1539ba88fd682027340b33e8924",
"assets/assets/Images/Industry%2520Badges/SET-FINAL-43.jpg": "f0f80205bd818317aedfc1028df3b9a4",
"assets/assets/Images/Industry%2520Badges/SET-FINAL-45.jpg": "d52e99924ff24c5cf665fce61a89a01e",
"assets/assets/Images/Industry%2520Badges/sports.jpg": "a0e7a53b1f16e94099559682dccb8d5b",
"assets/assets/Images/Industry%2520Badges/Telecomunications.jpg": "c7c25ab423a4aeee08c92c3425fca9d2",
"assets/assets/Images/Industry%2520Badges/Textile.jpg": "431ff6a992e52d467637ddcba5058a44",
"assets/assets/Images/Industry%2520Badges/Travel%2520and%2520tourism.jpg": "9f5a75b133d3c91f5c127f0cd482474b",
"assets/assets/Images/informals.jpg": "1ebb7c82a8198d771ef8a300738280ac",
"assets/assets/Images/journalism.jpg": "b1803a3258ac15d17d491e5ec5a801ae",
"assets/assets/Images/logo.png": "a2973f11c3d5d0ceba0e1a9c0733d62f",
"assets/assets/Images/logo_white.png": "e1ef2731a46e8f8192cb94e428c9ab38",
"assets/assets/Images/Maths.jpg": "c7f315f08b83f069ac70723ad5b57605",
"assets/assets/Images/medical.jpg": "eb1562d4a5ab56a2213b88d4ca86b6b0",
"assets/assets/Images/mobile1.png": "ebe4e1ee6ddf4240438b9e21d1289fe2",
"assets/assets/Images/mobile2.png": "ef7cdc285048333e5387117d44ebe260",
"assets/assets/Images/mobile3.png": "4deea5a223e7dacd501ebd2dca08dfb2",
"assets/assets/Images/profile.png": "94d390bc71f4fafa9750bab440553f1b",
"assets/assets/Images/S1.png": "5d6e09e56b501ccebac7081c8ed64bd2",
"assets/assets/Images/S2.png": "8d0df718b78c0e70001d95933df2c8b6",
"assets/assets/Images/S3.png": "53e38ed8497d41e65203901fb95b21cc",
"assets/assets/Images/S4.png": "00f519106db8d0c4a9e3068fd577e406",
"assets/assets/Images/science.png": "fa783d60cdb0c77e2fdb4d951d271609",
"assets/assets/Images/socialstudies.jpg": "3e352f4c66fdcad98c3269a1b2825e6a",
"assets/assets/Images/splash_screen.jpg": "dd2b58c0f4b472888f34ea43509cd039",
"assets/assets/Images/study.jpg": "1cca96ebdd88cb0bb7b7c359d8485855",
"assets/assets/Images.zip": "4a73ab8b2c88cf6a2ce24efeccdb9405",
"assets/assets/INDUSTRIES.txt": "7805ca772d2cf2de23b9594bbaa8c5fd",
"assets/assets/infigonVid.mp4": "a02d39fec6185a5e383d721fe48e0390",
"assets/assets/medical.txt": "9292662e2fdb6f6784ceb0f659d0d941",
"assets/assets/misc.txt": "42deaad1d4930581de7d5c12bc97ce4c",
"assets/assets/riasec/dos/enfj.txt": "1f5e404032f8222a8b4af3d863a016cd",
"assets/assets/riasec/dos/enfp.txt": "fc6110bd3e0ba2babb7f9909273ceed4",
"assets/assets/riasec/dos/entj.txt": "f3bfd499fae9780d5fce0249d1f0bf5b",
"assets/assets/riasec/dos/entp.txt": "0fb0a528fc30889b3f80a1093bcb4cf3",
"assets/assets/riasec/dos/esfj.txt": "0920c8cead267d1f60f93be8d337b09e",
"assets/assets/riasec/dos/esfp.txt": "06682f11dd8dba1979977dd5cfcad34a",
"assets/assets/riasec/dos/estj.txt": "04195fbb44719b65e62aa7f262e52709",
"assets/assets/riasec/dos/estp.txt": "fbc917f62282c755d2d784f75451a0d0",
"assets/assets/riasec/dos/infj.txt": "9606903333941b464c01619fdd9ef471",
"assets/assets/riasec/dos/infp.txt": "330dfb129ef9372bd5c663002de2731c",
"assets/assets/riasec/dos/intj.txt": "686ebb71e3845e533b8218e68c25b2dd",
"assets/assets/riasec/dos/intp.txt": "6dac7777d2a663907c27fbb65f5cd3b3",
"assets/assets/riasec/dos/isfj.txt": "32a9a875488d29320a5be88cfaf28a1b",
"assets/assets/riasec/dos/isfp.txt": "7038ae5be5dabb3a7edf386daac23352",
"assets/assets/riasec/dos/istj.txt": "b262d84f233da752d168a77a2407c444",
"assets/assets/riasec/dos/istp.txt": "8c1cd0320c514f341941f442c0b70cba",
"assets/assets/riasec.txt": "ed4e7f160e5f5221842db5bc941aa601",
"assets/assets/sql/CAREER_OPTION.txt": "bef68d9367c3b60485a4fc756443e5b7",
"assets/assets/sql/CAREER_PATH.txt": "a9e0a1885eefc3fbf963a1dc284da167",
"assets/assets/sql/CLUB.txt": "12320da905ff1a2bd8736d8bd3e30cc5",
"assets/assets/sql/ENTRANCE_EXAMS.txt": "a9c474a909623cfb1115c683da8a44dc",
"assets/assets/sql/PASSION.txt": "1d78917ce5504c457a7594fd6856b15e",
"assets/assets/sql/SERVICE.txt": "e77e6f7996acdb701b53dba7e2ad3630",
"assets/assets/sql/SPORT.txt": "0f4f2acf703b547f57b72da33f2051bf",
"assets/assets/sql/TRAINING.txt": "0504e14a5126c12e34e6f10188a1f541",
"assets/assets/sqlite.db": "f9bb620c96b267bad4724ff283e86c0b",
"assets/assets/vocational.txt": "531817edc0794c53a811ee565c39e897",
"assets/FontManifest.json": "60124cc403c47f6e95d03e608e8f18a9",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a26b7187b85231695e03b54d60dca15b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e62c7a6a8347584a11be00f4e3078a56",
"/": "e62c7a6a8347584a11be00f4e3078a56",
"main.dart.js": "248ec134f6ffc7a23342fbd6ecfa7018",
"manifest.json": "a7cc4f3dfb66ec26086f678d1ee0dd58"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
