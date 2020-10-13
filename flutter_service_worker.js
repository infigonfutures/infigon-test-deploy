'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "802b46b5630ea896d7f180fa1854bfae",
"assets/assets/arts.txt": "aff70c2a358030b7bb828f16d1041745",
"assets/assets/big5.txt": "924f51982c8ca0bc72cd1d8ce91b9733",
"assets/assets/bsc.txt": "974c08dc9a5644b2cf465f0e51186e18",
"assets/assets/CAREER_OPTION.txt": "79d2e5c1e58ada7a8e4b4cb2a0d97319",
"assets/assets/COLLEGE.txt": "1eb12d163bcf51fa0fe4d13211162479",
"assets/assets/commerce.txt": "09e056a510092b82f1f48dc3c6509757",
"assets/assets/DEGREE.txt": "c834b79fe51600bfb8376cabb5a756be",
"assets/assets/dipAni.txt": "d50006765e0f1d71c541e9281849106b",
"assets/assets/dipArch.txt": "4a402dda55f3637f3d38b8e7b005ec3e",
"assets/assets/dipArts.txt": "e5ddda60b7796f80deed621828593e04",
"assets/assets/dipCom.txt": "c54aae294c7394c8ff7286a094994aa7",
"assets/assets/dipEng.txt": "0248c942076584fc5437f028156af7ce",
"assets/assets/dipHos.txt": "1944c19e18f0698ea0a8b6b41802885c",
"assets/assets/dipPro.txt": "cdd899348f262f597db7ce60b4a401fa",
"assets/assets/dipSci.txt": "3a871c40b6d9e7af1999297372ce840d",
"assets/assets/disc.txt": "51819bba2c749d3901bb5ddfa1a607d4",
"assets/assets/engineering.txt": "d68b7ea091fb8ba5ff5bc0d473ca854b",
"assets/assets/enneagram/option1.txt": "f1d019e8aa02d9e7080c81cf2ffcbcb6",
"assets/assets/enneagram/option2.txt": "5d64e0cc73127ef464b9e737d731cb95",
"assets/assets/enneagram/val1.txt": "79b75b5215ccecf825ec20a321611b21",
"assets/assets/enneagram/val2.txt": "d0546037b0f5599966e35ae3151dc7b7",
"assets/assets/ENTRANCE_EXAMS.txt": "3dd565d31623d37cd29cd810db8de631",
"assets/assets/ib.txt": "dc6c9651cd4ae1adfa1bcad54ef81959",
"assets/assets/igcse.txt": "7ba241c5c02b685ae2e4f64694fd604b",
"assets/assets/Images/1.png": "5192a9b2574b6758d60b942252fba1fa",
"assets/assets/Images/10.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/11.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/12.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/2.png": "d79ff04bc6c5099c5e110ddab25eb259",
"assets/assets/Images/3.png": "d912265a541b2a29f28c49734ef49d0c",
"assets/assets/Images/4.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/5.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/6.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/7.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/8.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/9.png": "0f1c8e1908462e58eeda356e916631bf",
"assets/assets/Images/bg.jpg": "417e7882cc10d3c6c553538e4b548d6b",
"assets/assets/Images/business.jpg": "9849589a89e46203f9fec253eae36d76",
"assets/assets/Images/cse.jpg": "93dce5e6a465ad323f4949f514e8cecf",
"assets/assets/Images/development.jpg": "9e0b997f6fa43008c37589f47ca81a39",
"assets/assets/Images/English.jpg": "37234ecccc5cbf084dad80b38960f24e",
"assets/assets/Images/football.jpg": "933bccbc2076b50cc73aaaf9cb80f934",
"assets/assets/Images/guitar.jpg": "e466b69aae1726978152755b16ef7967",
"assets/assets/Images/Hindi.jpg": "7732c0994d4b14f1dc17b1321e5ed173",
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
"assets/assets/Images/logo%2520(1).png": "e1ef2731a46e8f8192cb94e428c9ab38",
"assets/assets/Images/logo.png": "a2973f11c3d5d0ceba0e1a9c0733d62f",
"assets/assets/Images/Maths.jpg": "c7f315f08b83f069ac70723ad5b57605",
"assets/assets/Images/medical.jpg": "eb1562d4a5ab56a2213b88d4ca86b6b0",
"assets/assets/Images/profile.png": "94d390bc71f4fafa9750bab440553f1b",
"assets/assets/Images/science.png": "fa783d60cdb0c77e2fdb4d951d271609",
"assets/assets/Images/socialstudies.jpg": "3e352f4c66fdcad98c3269a1b2825e6a",
"assets/assets/Images/splash_screen.jpg": "dd2b58c0f4b472888f34ea43509cd039",
"assets/assets/Images/study.jpg": "1cca96ebdd88cb0bb7b7c359d8485855",
"assets/assets/infigonVid.mp4": "a02d39fec6185a5e383d721fe48e0390",
"assets/assets/medical.txt": "67f53496bd0bc660bcc10621a34105f9",
"assets/assets/misc.txt": "e059cb8da320afd6085124ab6ee23f5c",
"assets/assets/riasec/dos/enfj.txt": "2d6a555067024488cb0b24dd587b9ffa",
"assets/assets/riasec/dos/enfp.txt": "093e6f34e1aca55857815f2d7ed66327",
"assets/assets/riasec/dos/entj.txt": "f6d203c4531658bf8230c81137f9ab5e",
"assets/assets/riasec/dos/entp.txt": "2129de19ccfbd80e0dd6a7f805db34d5",
"assets/assets/riasec/dos/esfj.txt": "3c0f566933c22fd50d62ec50289f3a29",
"assets/assets/riasec/dos/esfp.txt": "e3d5c5cee3b532db9653155ddc0c3805",
"assets/assets/riasec/dos/estj.txt": "554a5725155b39b124e6c592c59ba88e",
"assets/assets/riasec/dos/estp.txt": "0a75bf96ab2a418b367e46ddde375f9c",
"assets/assets/riasec/dos/infj.txt": "6c551c59aaf4f306594c12081c0d7de7",
"assets/assets/riasec/dos/infp.txt": "f31368ebc6ea8bd49a2f95a3e1f3ce68",
"assets/assets/riasec/dos/intj.txt": "32fc8522c87f28bfdc6901d904e9d918",
"assets/assets/riasec/dos/intp.txt": "1b5ac50a4f6aa89136e109757d7cd684",
"assets/assets/riasec/dos/isfj.txt": "38443061ea13e95bedfad91bccddd749",
"assets/assets/riasec/dos/isfp.txt": "b0963c45fef6637950491fc56d708a3d",
"assets/assets/riasec/dos/istj.txt": "45850b479cdfad223db380f3cb797279",
"assets/assets/riasec/dos/istp.txt": "e4988e80be1f02dc5ceaf5787a48ce02",
"assets/assets/riasec.txt": "eb609cf1b69965e7f8074b9b6f3baed2",
"assets/assets/sql/CAREER_OPTION.txt": "79d2e5c1e58ada7a8e4b4cb2a0d97319",
"assets/assets/sql/CAREER_PATH.txt": "0e57b9b60b55f83bff45eb94f0fb7997",
"assets/assets/sql/CLUB.txt": "1d56598d471ca7da321b2de7f9024ab1",
"assets/assets/sql/ENTRANCE_EXAMS.txt": "3dd565d31623d37cd29cd810db8de631",
"assets/assets/sql/PASSION.txt": "6c07a153924b2bbbf46a133199d5c226",
"assets/assets/sql/SERVICE.txt": "2bf45654296a01b3752021476f3b1b67",
"assets/assets/sql/SPORT.txt": "2a130dab619512db7825fddbf214f345",
"assets/assets/sql/TRAINING.txt": "53c108209be0745586fb0d074934df0d",
"assets/assets/sqlite.db": "f9bb620c96b267bad4724ff283e86c0b",
"assets/assets/vocational.txt": "d6a12f8cc31df559d64201e4fb3d6714",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "fc00875ab5c362292523ac78916baef1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0d0d213718f13a61cb82a8a47094ddb7",
"/": "0d0d213718f13a61cb82a8a47094ddb7",
"main.dart.js": "47ef1a80dae5b08ca4bfedff15707e80",
"manifest.json": "74d8495982ed41068340e0f6f7b1ba9d"
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
