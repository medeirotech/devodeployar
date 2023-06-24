<template>
	<div class="wrapper" :class="bgColor">
		<Main @message="updateBgColor" />
		<Footer />
	</div>
</template>

<script setup lang="ts">
type BackgroundColor = "bg-shouldDeploy" | "bg-shouldNotDeploy";
const bgColor = ref<BackgroundColor>("bg-shouldDeploy");

const updateBgColor = () => {
	const day = new Date().getDay();
	bgColor.value = (day > 0 && day < 5) ? "bg-shouldDeploy" : "bg-shouldNotDeploy";
};

updateBgColor();
</script>

<style lang="postcss">
.wrapper {
	@apply font-sans grid place-items-center grid-rows-[1fr_auto] min-h-screen text-center mx-auto;
}
</style>
