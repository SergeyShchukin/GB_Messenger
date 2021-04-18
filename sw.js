var CACHE_NAME = "react-chat-cache";

self.addEventListener("activate", (event) => {
	const cacheWhitelist = [CACHE_NAME];
	event.waitUntil(
		caches.keys().then((keyList) =>
			Promise.all(
				keyList.map((key) => {
					if (!cacheWhitelist.includes(key)) {
						console.log("Deleting cache: " + key);
						return caches.delete(key);
					}
				})
			)
		)
	);
});

self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			fetch("src/manifest/manifest.json")
				.then((response) => {
					response.json();
				})
				.then((assets) => {
					const urlsToCache = [
						"/",
						"/chat/*",
						"/profile",
						"/catfacts",
						"src/manifest/favicon.ico",
						"src/manifest/logo512.png",
						"src/manifest/logo192.png",
						"src/images/profile_icon.png",
						"src/images/button-push.png",
						"src/images/button-push-off.png",
					];
					cache.addAll(urlsToCache);
				});
		})
	);
});

self.addEventListener("fetch", function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});

self.addEventListener("push", function (event) {
	console.info("Event: Push");

	var title = "Новый push";

	var body = {
		body: "Открыть",
		tag: "pwa",
		icon: "src/manifest/logo192.png",
	};

	event.waitUntil(self.registration.showNotification(title, body));
});
