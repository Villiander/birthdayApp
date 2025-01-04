'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "17976cabcb2d05ccc29eb75b4f7116d4",
"assets/AssetManifest.bin.json": "4e42b4aed61ff93152cd3c73b29b9ebb",
"assets/AssetManifest.json": "a2d8da21eb2098b13a68a9cc546f85d4",
"assets/assets/animations/crown1.json": "92455aef4d82f9876ba55a3180f271a1",
"assets/assets/animations/crown2.json": "af6c160a093f27430f4edae22705f9ff",
"assets/assets/animations/fireworks1.json": "6519d1e9d9c601d7e93174aac3e25dc5",
"assets/assets/animations/fireworks2.json": "07f0af72b97d3bfde10753e01d90d1c9",
"assets/assets/animations/fireworks3.json": "b43391d5745d8bc10edfc441bea053da",
"assets/assets/animations/fireworks4.json": "f6f8fc68b83f80a98c178ad19bd0aef2",
"assets/assets/animations/heart_animation.json": "c802698ab773cc223f50fa0c1c179750",
"assets/assets/gifs/cat.gif": "e7656251a19e6b4f674862a8a77c169e",
"assets/assets/gifs/pizza.gif": "4e5c1a557642b08dc7f873339131d7a8",
"assets/assets/images/background.png": "f7efa8c0006639d6f2238b8525b2c92f",
"assets/assets/images/Donald_Trump.png": "46d3f1e09dd5e4d005c8a9c548a736d8",
"assets/assets/images/Doodle.png": "b1758b6a8794ee55cc5d303dff38dcde",
"assets/assets/images/Elon_musk.png": "6e80cec2953a646c9f529014a21982b8",
"assets/assets/images/her_image.png": "8797dbab3ef6fa8e73082110d9d730f2",
"assets/assets/images/Leonardo_Decaprio.png": "d6136cdfaa8c9709d051d49e7cba1a10",
"assets/assets/images/mr_beast.png": "6c474928182c0424530f3332c786fb96",
"assets/assets/images/Mufasa.png": "171d389ecc69f3eae048a61bcd898918",
"assets/assets/images/platform.png": "048c6553797c14aae319a6ab23261979",
"assets/assets/images/Taylor_Swift.png": "3a4b59dc9ff46b3e6b134a885d28eba1",
"assets/assets/images/yoda_image.png": "e15bf38ede600ae6a82b255ca563f5d0",
"assets/assets/sounds/challenge1_soundtrack.mp3": "5045e87fe2f26af359c89ee3d849cace",
"assets/assets/sounds/challenge2_background.mp3": "379ed2808acdf9b6c0bef08d4597ddd1",
"assets/assets/sounds/death.mp3": "052ecba0618fdcf7c123dc08fe5c1d69",
"assets/assets/sounds/end.mp3": "c7a3432d6a89b6715672283f1b354467",
"assets/assets/sounds/fireworks.ogg": "f6e812feff16c62b12fcff26c67b331b",
"assets/assets/sounds/gift2.mp3": "fd646367ce535e1d111124076a599427",
"assets/assets/sounds/gift_applause.mp3": "00b9d6ad6c94eae48bf0616f5a7a209b",
"assets/assets/sounds/Happy_bday_music.ogg": "0bd30f198aad1ada58cdc90424094d4d",
"assets/assets/sounds/Jump_Effect.mp3": "2b1e41afa898f166c3f3c1b24923f9e5",
"assets/assets/sounds/matrix_background.ogg": "bc5553f596cd2e6d1dfc4a9035b3267f",
"assets/assets/sounds/message_background.ogg": "a26770b6319a360815fff64828e526af",
"assets/assets/sounds/message_background_1.ogg": "c9a77be83836173f22a8e1d494cd9e9f",
"assets/assets/sounds/secret_gift1.mp3": "2a4706f1aae285ff0c77e861e5543380",
"assets/assets/sounds/secret_gift2.mp3": "812ff8768435b8c30dc0db67720eb4f8",
"assets/assets/sounds/secret_gift_applause.mp3": "0f64f29ee4d7e676c1ebfae2f5246035",
"assets/assets/sounds/yoda_audio.ogg": "f5357e1a7e26bafad617a20213ac42fc",
"assets/assets/videos/celebrity_screen_background.mp4": "bf2f90b34bcb6715f88eeba6be47caba",
"assets/assets/videos/challenge1_background.mp4": "72296f0bbb2226204d0760d642207e52",
"assets/assets/videos/countdown.mp4": "e3433cfed71fd9b1f14fa9cd6f8f7c1f",
"assets/assets/videos/donkey_video.mp4": "ab8d3f5b93cb938054a381fe09d965fd",
"assets/assets/videos/end_screen.mp4": "bdaf27c27bd2a4567340974906fabd52",
"assets/assets/videos/matrix_wallpaper.mp4": "3fe1589046bd7f1159550a21ad1ec246",
"assets/assets/videos/message_wallpaper.mp4": "30cd26409fb8ea3b3b03948ec1233e00",
"assets/assets/videos/shrek_video.mp4": "ae9d83af9c2bb57dc82b14b4c4f4b0ac",
"assets/assets/videos/starry_night_background.mp4": "fd1ecae99475cc672ec9fc668fadf6f5",
"assets/assets/videos/star_wars_intro.mp4": "eccbf0b7c8f76adfee9fb11707a4d6f9",
"assets/assets/videos/yodascreen_background.mp4": "0c1ca3104fd3de01a622866d7d52bf70",
"assets/assets/voices/Donald_Trump.ogg": "af32f0eec0e5e564db4e0cfbef6d2e40",
"assets/assets/voices/Elon_musk.ogg": "27387baf0634b6a00ef99c3bbf81d579",
"assets/assets/voices/Leonardo_Decaprio.ogg": "bc3dd2e0183617cf94a4cf265186cc4c",
"assets/assets/voices/mr_beast.ogg": "d2b19d9e03cd47550764cf56db50320c",
"assets/assets/voices/Mufasa.ogg": "cbcf328841841d4e74ba331243efb5a1",
"assets/assets/voices/Taylor_Swift.ogg": "ebaa6fe8fb17ca19a01811fc279e7dde",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1c26451afb9df8aac0239f60efee3d2b",
"assets/NOTICES": "eee62f2d51c336279827b5991f2ca1ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "bd7937c57d3e4c78c98f9a511c4248ac",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4031fbceeefa06109ace4a6fac9977cf",
"/": "4031fbceeefa06109ace4a6fac9977cf",
"main.dart.js": "071dcccac388c3da4c91ad0c3f69def6",
"manifest.json": "9161909c11a3bdc87fb24187fb86cb99",
"version.json": "97800bed663f2467b3ab3e2fc74f1b73"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
