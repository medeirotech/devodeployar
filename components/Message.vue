<template>
	<section>
		<h3>{{ message?.emoji }}</h3>
		<h2 :class="[shouldIDeploy() ? '' : 'uppercase']">{{ message?.message }}</h2>
	</section>
</template>

<script setup lang="ts">
import type { Message } from "@/data/messages";
import shouldIDeploy from "@/server/utils/shouldIDeploy";

defineProps({
	message: Object as PropType<Message>,
});
</script>

<style lang="postcss" scoped>
section {
	@apply flex-column gap-5;
	h3 {
		@apply text-8xl;
	}

	h2 {
		@apply text-7xl font-bold max-w-5xl;
	}
}
</style>
