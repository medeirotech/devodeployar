<template>
	<div class="wrapper" :class="bgColor">
		<Main @message="updateBgColor" />
		<Footer />
	</div>
</template>

<script setup lang="ts">
import { shouldIDeploy } from './server/utils/shouldIDeploy';
const day = new Date().getDay();

const getOpenGraphImage = (shouldDeploy: boolean) =>
	shouldDeploy ? '/yes.png' : '/no.png';

useServerSeoMeta({
  title: '🚀 Devo deployar hoje?',
	ogTitle: '🚀 Devo deployar hoje?',
	description: '🔥 Seu amigo nessa decisão difícil',
	ogDescription:  '🔥 Seu amigo nessa decisão difícil',
	ogImage: getOpenGraphImage(shouldIDeploy(day))
})

type BackgroundColor = "bg-shouldDeploy" | "bg-shouldNotDeploy";
const bgColor = ref<BackgroundColor>("bg-shouldDeploy");

const updateBgColor = (day: number) => {
	bgColor.value = (day > 0 && day < 5) ? "bg-shouldDeploy" : "bg-shouldNotDeploy";
};

updateBgColor(day);
</script>

<style lang="postcss">
.wrapper {
	@apply font-sans grid place-items-center grid-rows-[1fr_auto] min-h-screen text-center mx-auto;
}
</style>
