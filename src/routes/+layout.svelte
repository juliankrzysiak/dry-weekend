<script lang="ts">
	import '../app.postcss';
</script>

<div class="p-8 flex flex-col min-h-screen">
	<header class="text-2xl"><h1>desert weekend</h1></header>
	<main class="flex-1">
		<slot />
	</main>
	<footer>Made by Julian Krzysiak</footer>
</div>
