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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "11f67951a05f0dd31aa12368cb974894"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.72bb8069.css",
    "revision": "d8a7b1cda4ea2b7ff54f88d5ac217d9d"
  },
  {
    "url": "assets/img/create-user_success.8cfbcb5b.png",
    "revision": "8cfbcb5b939f7fdbc9e6e40b2e5d7ddb"
  },
  {
    "url": "assets/img/create-user_validation.ad560de5.png",
    "revision": "ad560de54de0e75b3ca9575a29c18d77"
  },
  {
    "url": "assets/img/delete-user_failed.a47ac04c.png",
    "revision": "a47ac04cb2c48d79460168424014737b"
  },
  {
    "url": "assets/img/delete-user_success.80dd4a35.png",
    "revision": "80dd4a356c54647b81041b6603fc3666"
  },
  {
    "url": "assets/img/get-all-users.2043df0d.png",
    "revision": "2043df0d5760a6b6beea67e9b5d54dd5"
  },
  {
    "url": "assets/img/get-user-by-id_failed.9f1feff0.png",
    "revision": "9f1feff030a23c0594ae6123de6a6364"
  },
  {
    "url": "assets/img/get-user-by-id_success.a880e0e9.png",
    "revision": "a880e0e9a62c260fbf5e2de191ad796f"
  },
  {
    "url": "assets/img/relational_scheme.44c970b0.png",
    "revision": "44c970b0a143ec6fead87694514ea610"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/structure.7f7e667e.png",
    "revision": "7f7e667ecb93232442ff9d2faeaa8ac9"
  },
  {
    "url": "assets/img/update-user_failed.49869278.png",
    "revision": "498692786a441daaa6141210188d2cd7"
  },
  {
    "url": "assets/img/update-user_success.c18108a7.png",
    "revision": "c18108a7720c611c12cf04cedcd3ced2"
  },
  {
    "url": "assets/js/1.47654c93.js",
    "revision": "8d9ac46e28ed99b906a152aff65b5fb1"
  },
  {
    "url": "assets/js/10.9f620ab6.js",
    "revision": "1c2fdb8abfdad518206f392dd0add5c8"
  },
  {
    "url": "assets/js/13.3ae8467e.js",
    "revision": "3fd6e4912b9cab592d5d630cea9cd3a5"
  },
  {
    "url": "assets/js/14.94bf8dbf.js",
    "revision": "e850d0766babd121dd37b05ad50d49ef"
  },
  {
    "url": "assets/js/15.5a9c9855.js",
    "revision": "390a608774f894a9e876c484358d1d0e"
  },
  {
    "url": "assets/js/16.7999c04b.js",
    "revision": "1e3084578df750577da8e76c967e3c9d"
  },
  {
    "url": "assets/js/17.7d8a140c.js",
    "revision": "a3ade768ceca8e5ec70e7420649b379a"
  },
  {
    "url": "assets/js/18.c97a2822.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.e28a4a11.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.09c527ae.js",
    "revision": "fd1731f864c4ec7766ce2f121376d5f4"
  },
  {
    "url": "assets/js/20.0369525f.js",
    "revision": "4152e7e3767d8e1110555ca1c65a2e35"
  },
  {
    "url": "assets/js/21.b200c171.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.67559789.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.9004802f.js",
    "revision": "fccc81ab70871e8529e4c2a56791bbe5"
  },
  {
    "url": "assets/js/25.146cd888.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.192e6a16.js",
    "revision": "dd10a9d7faa030ff1279ccf8d690c5bb"
  },
  {
    "url": "assets/js/27.35d6e3a6.js",
    "revision": "ec59beb9f1062f53fc36361248a2e157"
  },
  {
    "url": "assets/js/28.24dddadd.js",
    "revision": "7ddc6713416d777ba77c6a9ad25633ab"
  },
  {
    "url": "assets/js/29.c1489666.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.74fe77c0.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.b864c423.js",
    "revision": "4bc522621d82e316f0e77d75d77e8cce"
  },
  {
    "url": "assets/js/31.d900c9c8.js",
    "revision": "4048b957d0df391aa1f58868f7358c64"
  },
  {
    "url": "assets/js/32.7a03a791.js",
    "revision": "37cfe68227fca52044f8067e404e6f19"
  },
  {
    "url": "assets/js/33.e1311da3.js",
    "revision": "d210a76feae28a23fdaa8aa75b128d6b"
  },
  {
    "url": "assets/js/34.8bf5b948.js",
    "revision": "6c2df64d88675353b0778592a692cbb6"
  },
  {
    "url": "assets/js/35.e1fdb70d.js",
    "revision": "81e9adb8cf37e071616da5b15cd1f0ec"
  },
  {
    "url": "assets/js/36.6d578e3d.js",
    "revision": "6cda12abf85aa398527f49966a65b0fc"
  },
  {
    "url": "assets/js/37.cd0e1a0d.js",
    "revision": "86880da34cde834932cddd2bd41cccff"
  },
  {
    "url": "assets/js/38.a7da2a75.js",
    "revision": "84db8d07498be057bee6c8b99fe80e0e"
  },
  {
    "url": "assets/js/39.f96666db.js",
    "revision": "483f65dfa0e2e768052762a73e0d63a1"
  },
  {
    "url": "assets/js/4.afba3b63.js",
    "revision": "da393dbb945a10dc9d5b94e9b186075e"
  },
  {
    "url": "assets/js/41.5167c572.js",
    "revision": "fc09462c43d81c031e87c84c4693dfbf"
  },
  {
    "url": "assets/js/5.13cf9a71.js",
    "revision": "ca01d5a1e8807e3f12d6054da85799cd"
  },
  {
    "url": "assets/js/6.50fd2ed2.js",
    "revision": "24b6e8be48777cd1a3acffcdffc5f76e"
  },
  {
    "url": "assets/js/7.36307b08.js",
    "revision": "335a19e2e6dd44dbac46c4b2031c2b68"
  },
  {
    "url": "assets/js/8.bc7ffb1f.js",
    "revision": "0fe08a6c0fd376970ce3f5c411864c68"
  },
  {
    "url": "assets/js/9.821b8530.js",
    "revision": "7668ef4476f618f98a408ed226472642"
  },
  {
    "url": "assets/js/app.b5c10f61.js",
    "revision": "77e069b3d3123a3162bb9059259f0d25"
  },
  {
    "url": "assets/js/vendors~docsearch.a7214ad1.js",
    "revision": "4fdfc9c801456fc8bade32dc84c522d5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "6a860120295039be90084ff0823bf42f"
  },
  {
    "url": "design/index.html",
    "revision": "de584f33c8241fbcbd3e3fcc710fd0f5"
  },
  {
    "url": "index.html",
    "revision": "f7e3220f2a91211c3eacbf3c8426c17a"
  },
  {
    "url": "intro/index.html",
    "revision": "2127a1de038bc0609df8b5b82053dd8e"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "838cb196804eaba11b7bac3ea49b7817"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c5df00ee55fe05ba77acb5117ebaa14f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "17f192666fbb25addd54f677a7c1c335"
  },
  {
    "url": "software/index.html",
    "revision": "1dd2f544cd7d6d9420ca9ead51f8a7be"
  },
  {
    "url": "test/index.html",
    "revision": "04c4e70a0fa431605bbeaf97b1067470"
  },
  {
    "url": "use-cases/index.html",
    "revision": "7a3e4b717b378fbac8d800e910ee2e74"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
