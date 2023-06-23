<template>
	<div class="wrapper" :class="bgColor">
		<Main @message="updateBgColor" />
		<Footer />
	</div>
</template>

<style lang="postcss">
.wrapper {
	@apply font-sans grid place-items-center grid-rows-[1fr_auto] min-h-screen text-center mx-auto;
}
</style>
