/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icons.js",
    "revision": "1b900e091394ebb315938380c1f7c5ba"
  },
  {
    "url": "assets/sharedStyles.js",
    "revision": "d3917d3ddb0b99ea61b4bbb9c0866136"
  },
  {
    "url": "index.html",
    "revision": "5cc8f6b0e61d35a30cdcc5efa760b3da"
  },
  {
    "url": "src/about-view-175ad00c.js",
    "revision": "c283a887d633c292658487873e1061be"
  },
  {
    "url": "src/app-shell-7aca8aaf.js",
    "revision": "d5b5a74af1176640b63c9caeca267767"
  },
  {
    "url": "src/app-shell-819548ce.js",
    "revision": "4e6a620de3617a3888971cc4c37b8a22"
  },
  {
    "url": "src/view-404-5fb95189.js",
    "revision": "381b5a5f881d292bbdfa7d615b0e65b3"
  },
  {
    "url": "src/work-view-7bde1064.js",
    "revision": "d22e71e2d048b976bd38e082f790379c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
