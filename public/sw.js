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
			fetch("manifest/manifest.json")
				.then((response) => {
					response.json();
				})
				.then((assets) => {
					const urlsToCache = ["/", "/chat/*", "/profile", "/catfacts", "manifest/favicon.ico", "manifest/logo512.png", "manifest/logo192.png"];
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
		icon: "manifest/logo192.png",
	};

	event.waitUntil(self.registration.showNotification(title, body));
});
