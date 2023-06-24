<template>
	<div class="wrapper" :class="bgColor">
		<Main @message="updateBgColor" />
		<Footer />
	</div>
</template>

<script setup lang="ts">
import { shouldIDeploy } from './server/utils/shouldIDeploy';

const getOpenGraphImage = (shouldDeploy: boolean) =>
	'https://devodeployar.dev' + (shouldDeploy ? '/yes.png' : '/no.png');

const day = new Date().getDay();
const title = '🚀 Devo deployar hoje?'; 
const description = '🔥 Seu amigo nessa decisão difícil';
const siteName = 'https://devodeployar.dev'
const image = getOpenGraphImage(shouldIDeploy(day));

useServerSeoMeta({
  title,
	ogTitle: title,
	twitterTitle: title,

	ogSiteName: siteName,
	twitterSite: siteName,

	description,
	ogDescription: description,
	twitterDescription: description,

	ogImage: image,
	twitterImage: image,
	
	twitterCard: 'summary_large_image'
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
