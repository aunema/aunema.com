importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/469fd9b7ef23bd8deec5.js",
    "revision": "a9ca7e50c3b68254427cb0bd8517361f"
  },
  {
    "url": "/_nuxt/9da5a62f6df3098b8ff1.js",
    "revision": "f1afa74920289d1132e32c3be940554e"
  },
  {
    "url": "/_nuxt/c83859c811f2b8e7d026.js",
    "revision": "633f556e10eda7e878578f8cfad07c9e"
  },
  {
    "url": "/_nuxt/d964e6fe976ee5061512.js",
    "revision": "fde19a021b047ed9b92853936c825c84"
  }
], {
  "cacheId": "aunema",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
