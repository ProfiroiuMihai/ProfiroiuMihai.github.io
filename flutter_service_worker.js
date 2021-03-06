'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c630fff3b33427d41a6e6291aac3b6e0",
"assets/assets/fonts/NunitoSans-Bold.ttf": "08e53a516d2ba719d98da46c49b3c369",
"assets/assets/fonts/NunitoSans-ExtraBold.ttf": "505a059580cfbeaccdcb7a489bb67ec9",
"assets/assets/fonts/NunitoSans-ExtraLight.ttf": "6aea75496b0ccb484d81a97920d2e64c",
"assets/assets/fonts/NunitoSans-Light.ttf": "74d36921be67fb8482bfd7324bd86790",
"assets/assets/fonts/NunitoSans-Regular.ttf": "4c8f447011eef80831b45edb1e5971e0",
"assets/assets/fonts/NunitoSans-SemiBold.ttf": "bd318b58018198a57723f311627492ac",
"assets/assets/images/bell.png": "f4e547f20721959738b72f726dd0b639",
"assets/assets/images/check.png": "1bbe2aa09298a3c9feda63005b973163",
"assets/assets/images/dashboard_arrow.png": "8775638fa79ed585217ebf91d9fc552b",
"assets/assets/images/dashboard_bill.png": "91d921b34ca65a5453e91a203c602166",
"assets/assets/images/dashboard_boost.png": "5a6294b7fdb09eedd758e2a475dcfc6a",
"assets/assets/images/dashboard_button_up_arrow.png": "1a28e6ce675be7689cb2ffdc8603c9eb",
"assets/assets/images/dashboard_card.png": "fe75400b82d9b284703e48f61accb9ec",
"assets/assets/images/dashboard_card_circular_progress.png": "9a3686d56cd164d1b9964012250b454d",
"assets/assets/images/dashboard_circular_progress_indicator.png": "5ce79d994140449cf8747abc580b9aa6",
"assets/assets/images/dashboard_credit_score.png": "5e19af07107fdc7bd9b8666c1a3906a9",
"assets/assets/images/dashboard_dollar_going_up.png": "00020a345d37699de47912109a798ad9",
"assets/assets/images/dashboard_green_line.png": "275c7c7d126acb2c2950266735a942df",
"assets/assets/images/dashboard_grey_line.png": "cb0e644aaa68244dfefd79cf1e9aeb97",
"assets/assets/images/dashboard_pointer.png": "705c4b069abaea14d20d71d7e4ccebdf",
"assets/assets/images/dashboard_pointer_rotated.png": "1946cec6138084a6e18a64aa4e6ee0e0",
"assets/assets/images/dashboard_refresh_star.png": "98e18d507e8d0646784b25001840ab44",
"assets/assets/images/dashboard_ruby_pass.png": "12712175bd75bbf43afb222543b17cde",
"assets/assets/images/dashboard_settings.png": "29fd83de4cd2e9e144d569fd3d15c22e",
"assets/assets/images/dashboard_star.png": "256dd38c619cdc306587b815b04232fb",
"assets/assets/images/dots.png": "c5b9fa50dffb24b7ed6ae68ce7792394",
"assets/assets/images/missions_deposit_boost.png": "a6f8100cf2fb79979e1d621787a60a63",
"assets/assets/images/missions_dollar_streak.png": "4d3130c84036b082b30ad8acc6e964de",
"assets/assets/images/missions_second_line.png": "134ff89aefce2714faa363506ccaf738",
"assets/assets/images/missions_two_dollars.png": "a53cf7cb9962fe2a296035f6a87ff04d",
"assets/assets/images/notifications_check.png": "9687175a6dbeb1dc6cfecb0675abf0c7",
"assets/assets/images/notifications_clock.png": "d6709f2df01fc4fdff4afde5fb3123ab",
"assets/assets/images/notifications_flame.png": "709d48cc054657164692c8633809e50b",
"assets/assets/images/notifications_thumb_up.png": "39abf4f0badd16b3ce64b2043ccdda07",
"assets/assets/images/notifications_timer.png": "537f7a1f58c51fb8e9357f5e92e0d975",
"assets/assets/images/onboarding/background.png": "5644c351a14ee5504b7653067bcb3d75",
"assets/assets/images/onboarding/card_grey.png": "d4f3f4cfa94724aac3bf73c613f8ca64",
"assets/assets/images/onboarding/connect_account/icon_bank.png": "6b182f4409d1f50d2ba849dcbc102878",
"assets/assets/images/onboarding/connect_account/icon_card.png": "50f7af498030877da40984996f18b90d",
"assets/assets/images/onboarding/container_purple.png": "27a81f9044e03b9b113d9ec3865f3499",
"assets/assets/images/onboarding/done.png": "05b0256680bd5347567edd0416fdff03",
"assets/assets/images/onboarding/fund_screen.png": "e880989b7226049dc0090782c674ecc5",
"assets/assets/images/onboarding/photo_id.png": "4a81acc0b6f906bf921c10ead41122db",
"assets/assets/images/onboarding/svg/background.svg": "e24e4c01811d029883dab96131cff263",
"assets/assets/images/profile_picture.png": "059f020a12ff91f94f43ac37420ab302",
"assets/assets/images/question_mark.png": "99ea751191993230e5b21eb0591424c9",
"assets/assets/images/ruby.png": "27293b09bbcd9e5fd5a2338072ebb958",
"assets/assets/images/ruby_pass_icon_money.png": "a8b45afd8515411abd5544f27bad63ef",
"assets/assets/images/ruby_pass_icon_profile.png": "80c483876459a9be3a0978bf5aa6c50c",
"assets/assets/images/spire_logo_text.png": "dd12756d2a8466336f91c28f41cafa3f",
"assets/assets/images/spire_logo_text_black.png": "387baac40e4cdf3bdeb32dd64ad52b30",
"assets/assets/images/top_bar_background.png": "de61a0e31e37d47d0e1c85f8df7ddfa2",
"assets/assets/images/transactions_icons_coffee.png": "7b8250cfa0069baf989bbe101cd4f4e5",
"assets/assets/images/transactions_icons_earn.png": "c0f47ab865196f82a865a0bb9e113163",
"assets/assets/images/transactions_icons_plane.png": "1309afe0927ec1b4815eeeaee3bd6d79",
"assets/assets/images/transactions_icons_shopping.png": "de30df12b5f8f9d6deffbe85fe32e997",
"assets/assets/videos/animation.mp4": "5a8803689ca18066d5e83ae7e1880d6e",
"assets/assets/videos/just_a_moment.mp4": "169d45ce45068fc41c3c5670531910f2",
"assets/assets/videos/onboarding.mp4": "59385db22eece206df8400b775d02feb",
"assets/FontManifest.json": "79c07fda9f6ebd26efc0581dc6a0e35c",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "a4935575eaadf1e56f30525c6bf5b5e4",
"favicon.png": "8eb91558a8a027ba1132e97c07e68e39",
"icons/Icon-192.png": "a8d4cb625342d2fb6fda249ce78d7761",
"icons/Icon-512.png": "ed445d461d58ae94dff4cb0a1814bd2a",
"index.html": "e91c930362e529b96f5a80aad3a58b01",
"/": "e91c930362e529b96f5a80aad3a58b01",
"main.dart.js": "b6a9a8b4b0fb344e365c9b462522e3f3",
"manifest.json": "d94f6656ff7320b16e4420d7eaacafa3"
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
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
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
