<template>
	<div class="wrapper">
		<Main />
		<Footer />
	</div>
</template>

<style lang="postcss">
body,
#__nuxt {
	@apply bg-red-700 min-h-screen font-sans;

	.wrapper {
		@apply grid place-items-center grid-rows-[1fr_auto] min-h-screen text-center max-w-5xl mx-auto;
	}
}
</style>
