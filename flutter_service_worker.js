'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9094aacdae789dccd67fa32109ff1a18",
"index.html": "1c4c57c5c0acd5e7db2bea91a7767ab2",
"/": "1c4c57c5c0acd5e7db2bea91a7767ab2",
"main.dart.js": "c034325787e96945fd779886093fb2c4",
"flutter.js": "3688efe0a39e59781b4f95efbd6b5b62",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "997465669e8fcf23092b05984e1a82be",
"assets/AssetManifest.json": "738c8d33b090d020680071de566a6d7b",
"assets/NOTICES": "732cc6c380cd7cd4e9eae0749f6e91c4",
"assets/FontManifest.json": "db9ed04765ad6b4ae7a9513b46a9689f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/fonts/AmType-Bold.otf": "803694c01f4ffb6689cdb79b8057c6e1",
"assets/fonts/OldTown-Regular.ttf": "365fe917ac57bcced2525a21da672daf",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/RobotoSlab-Regular.ttf": "91dd0d803e3daa46be03c1a920d98526",
"assets/assets/images/bg-header.jpg": "e5fd547800d4f66f7e9ace7526161ec0",
"assets/assets/images/icon-cactus.png": "e0f9d8da2802d5eeb46cfbcdf3b3bc93",
"assets/assets/images/yoga-icon.jpeg": "44dd20c7acb129d84c19eb9b3b65b319",
"assets/assets/images/main_1.png": "f84d5458824b997088cbcad9761c4203",
"assets/assets/images/main.png": "dc5bd859e70167c64f85ac27210adf2f",
"assets/assets/images/bg-footer.jpg": "1274f958664a50452d57e41b94c5d347",
"assets/assets/images/icon-wagon.png": "386b3c5a94fb547ac3894bae258a2455",
"assets/assets/images/main_3.jpg": "aaffb7cd945d330b5c81e4a135e22fb4",
"assets/assets/images/icon-shoes.png": "02133c228ace093f97df492cca8dc02d",
"assets/assets/images/icon-bag.png": "9c6f117730da4fc2f19a05291d6af96d",
"assets/assets/images/1652.png": "bb17423872185235818a7e4f2923e1fe",
"assets/assets/images/bg-btn__hover.png": "94ad5f91507f44df2b076a8d618a0f9b",
"assets/assets/images/descr-2.png": "70b4cbbce6bd6264821f1dfe8cd31bc4",
"assets/assets/images/bg-top-menu.png": "8bed14f85ec8b53b0ad7453c3051c6e4",
"assets/assets/images/logo.png": "b2f852ffaa8d61c55037bcdf6564f203",
"assets/assets/images/icon-hat.png": "42b266d1d4dcea826a1b2cf86019c387",
"assets/assets/images/ios_dev.png": "0454c2232dae8e3c9bf2fbbc1096e2a6",
"assets/assets/images/icon-bull.png": "14d6eba177c5163474930796b7640f64",
"assets/assets/images/icon-pepper.png": "c3651116e664e64d8056e95b19a3c652",
"assets/assets/images/weare.png": "62521b492dc6034e64aa9cac9a058e0f",
"assets/assets/images/desc.png": "62e3d079f2d55ce181d8b113718b2bfb",
"assets/assets/images/company/logo-footer.png": "677ba2cc28ce16ae06b8fe023f7a64ba",
"assets/assets/images/company/logo8.png": "0e162f86f80e63beb10ad91328cdffa0",
"assets/assets/images/company/logo1.png": "b748252cd3a49e037d0f45d3559bac64",
"assets/assets/images/company/logo3.png": "1c866e81f4621979ac5eb5aba344f6c7",
"assets/assets/images/company/logo2.png": "de37cd99917d5bb7342fb075de87c16a",
"assets/assets/images/company/logo6.png": "986876b4c86b0a888d128bf0fc726aef",
"assets/assets/images/company/logo7.png": "dd86bc734ed47dd4e515ffb818f1a8ed",
"assets/assets/images/company/logo5.png": "cd7d35d25e76f576ce29a7f66d4b3e1b",
"assets/assets/images/company/logo4.png": "f66901ab52285e9e535494e5376f53f0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
