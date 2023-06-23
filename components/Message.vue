<template>
	<section>
		<h3>{{ message?.emoji }}</h3>
		<h2 :class="[isDeployDay() ? '' : 'uppercase']">{{ message?.message }}</h2>
	</section>
</template>

<script setup lang="ts">
import { MessageType } from "~~/server/utils/messages";

defineProps({
	message: Object as PropType<MessageType>,
});

const isDeployDay = () => {
	const day = new Date().getDay();
	return day > 0 && day < 5;
};
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
