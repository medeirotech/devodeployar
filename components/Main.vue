<template>
	<main>
		<h1>Devo deployar hoje?</h1>
		<Message />
		<span>Aperte <kbd>Espaço</kbd> ou clique aqui</span>
	</main>
</template>

<script setup lang="ts"></script>

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
