// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss"],
	app: {
		head: {
			htmlAttrs: { lang: "pt-br" },
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			title: "🚀 Devo deployar hoje?",
			link: [
				{ rel: "preconnect", href: "https://fonts.google.com" },
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Mukta:wght@400;700&display=swap",
				},
			],
		},
	},
});
