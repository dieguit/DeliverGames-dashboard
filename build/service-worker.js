"use strict";var precacheConfig=[["/index.html","43307f6f78f201abe7f88c3f2782c27e"],["/static/css/main.50b6a7ac.css","56fea5cd4a2471f141e676f9db5efe5f"],["/static/js/main.0de15bbc.js","a00dad2ef68484fdc758c7fc0750a08d"],["/static/media/GraphQLLanguageService.js.fa07138d.flow","fa07138d73e79718e85a092462e8d75a"],["/static/media/Logo180.f0194df9.png","f0194df979fc57908b0823970bbb142f"],["/static/media/autocompleteUtils.js.4ce7ba19.flow","4ce7ba191f7ebee4426768f246b2f0e0"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/getAutocompleteSuggestions.js.5f735c7b.flow","5f735c7b32243064f3bd1e416cb3e393"],["/static/media/getDefinition.js.0c48668e.flow","0c48668e93256ede6063a998178626c1"],["/static/media/getDiagnostics.js.889c0b27.flow","889c0b278692b77ce63f49f1150227c2"],["/static/media/getOutline.js.458a3518.flow","458a3518255745f2de5b5238bba05ba1"],["/static/media/icons.263bfe56.eot","263bfe56755cefdc9e6c3d8070e0868d"],["/static/media/icons.27c88389.woff2","27c88389f00e0d8bfeebebae81f240b6"],["/static/media/icons.7bc63d50.woff","7bc63d50d4158c6bfd4b30a99c9f9460"],["/static/media/icons.b42b4467.svg","b42b446772f84a277ee29a0615b38800"],["/static/media/icons.d3490a32.ttf","d3490a32350db6c9c41e69cc9ce99cd0"],["/static/media/index.js.641230f5.flow","641230f56d1ad6b203bb10fc4f55533b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});