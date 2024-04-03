<script lang="ts">
	import '../app.postcss';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div class="p-8 flex flex-col min-h-screen">
	<header class="flex justify-between text-2xl pb-8">
		<h1>desert weekend</h1>
		<LightSwitch />
	</header>
	<main class="flex-1 flex flex-col gap-8">
		<slot />
	</main>
	<footer>Made by Julian Krzysiak</footer>
</div>
