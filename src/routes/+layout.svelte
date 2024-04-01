<script lang="ts">
	import '../app.postcss';
</script>

<div class="p-8 flex flex-col min-h-screen">
	<header class="text-2xl">What to do AV</header>
	<main class="flex-1 py-4">
		<slot />
	</main>
	<footer>Made by Julian Krzysiak</footer>
</div>
