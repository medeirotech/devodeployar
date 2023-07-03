<template>
	<main>
		<h1>Devo deployar hoje?</h1>
		<Message :message="message" />
		<span @click="getMessage">Aperte <kbd>Espaço</kbd> ou clique aqui</span>
	</main>
</template>

<script setup lang="ts">
import { useKeypress } from "vue3-keypress";
import { MessageType } from "~~/server/utils/messages";

const message = ref<MessageType>();
const getMessage = async () => {
	try {
		const data = await $fetch("/api");
		message.value = data;
	} catch (error) {
		throw new Error("Não foi possível obter a mensagem");
	}
};

onBeforeMount(getMessage);

useKeypress({
	keyEvent: "keypress",
	keyBinds: [
		{
			keyCode: "space",
			success: getMessage,
		},
	],
});
</script>

<style lang="postcss" scoped>
main {
	@apply flex-column gap-14 px-4 py-8;

	h1 {
		@apply text-5xl font-mono;
	}

	span {
		@apply text-2xl cursor-pointer;

		kbd {
			@apply font-mono border-2 border-black px-5 py-1 rounded;
		}
	}
}
</style>
