// Este arquivo deve ser colocado em src/scripts/analytics-tracking.js

document.addEventListener("DOMContentLoaded", function () {
	// Iniciar contagem de tempo
	let startTime = new Date();
	let scrollDepthMarkers = [25, 50, 75, 100];
	let markedScrollDepths = new Set();

	// Função para calcular o tempo na página quando o usuário sair
	window.addEventListener("beforeunload", function () {
		let endTime = new Date();
		let timeSpent = Math.round((endTime - startTime) / 1000); // tempo em segundos

		// Enviar evento para o Google Analytics via GTM
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: "timeOnPage",
			timeSpentSeconds: timeSpent,
		});
	});

	// Rastrear profundidade de rolagem
	function calculateScrollDepth() {
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight - windowHeight;
		const scrollTop = window.scrollY;
		const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

		for (let depth of scrollDepthMarkers) {
			if (scrollPercentage >= depth && !markedScrollDepths.has(depth)) {
				markedScrollDepths.add(depth);

				// Enviar evento para GA via GTM
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					event: "scrollDepth",
					scrollDepthThreshold: depth,
				});
			}
		}
	}

	// Throttle function para não sobrecarregar com eventos de scroll
	let scrollThrottle;
	window.addEventListener("scroll", function () {
		if (!scrollThrottle) {
			scrollThrottle = setTimeout(function () {
				calculateScrollDepth();
				scrollThrottle = null;
			}, 250);
		}
	});

	// Detectar seções visíveis
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const sectionId = entry.target.id || "unnamed-section";

					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						event: "sectionView",
						sectionId: sectionId,
					});
				}
			});
		},
		{ threshold: 0.5 },
	);

	// Observe todas as seções principais
	document.querySelectorAll('[id$="-section"]').forEach((section) => {
		observer.observe(section);
	});

	// Rastrear engajamento com links
	document.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", function (e) {
			const href = this.getAttribute("href");

			if (!href || href === "#") return;

			if (href.includes("instagram.com")) {
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					event: "socialClick",
					socialNetwork: "Instagram",
				});
			}
		});
	});

	// Verificar tempo de permanência a cada 10 segundos
	const timeCheckInterval = setInterval(function () {
		let currentTime = new Date();
		let timeSpent = Math.round((currentTime - startTime) / 1000); // tempo em segundos

		if (timeSpent % 30 === 0) {
			// a cada 30 segundos
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: "activeTimeOnSite",
				timeSpentSeconds: timeSpent,
			});
		}
	}, 10000);

	// Certifique-se de limpar o intervalo quando a página for fechada
	window.addEventListener("beforeunload", function () {
		clearInterval(timeCheckInterval);
	});
});
