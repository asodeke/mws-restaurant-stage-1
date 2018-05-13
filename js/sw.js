/*
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restaurant-v1').then(function(){
      return cache.addAll([
        '/',
        'js/main.js',
        'js/restaurant_info.js',
        'js/dbhelper.js',
        'img/',
        'css/final.css',
        'css/style.css',
      ]);
    })
  );
});
*/

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  'js/main.js',
  'js/restaurant_info.js',
  'js/dbhelper.js',
  'css/final.css',
  'css/style.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
