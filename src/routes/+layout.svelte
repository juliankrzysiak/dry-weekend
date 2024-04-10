<script lang="ts">
	import '../app.postcss';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div class="px-8 pt-8 pb-2 flex flex-col min-h-screen">
	<header class="flex justify-between text-2xl pb-8">
		<h1>dry weekend</h1>
		<LightSwitch />
	</header>
	<main class="flex-1">
		<slot />
	</main>
	<footer class="flex justify-between">
		<a href="https://juliankrzysiak.com/"> © 2024 Julian Krzysiak </a>
		<a href="https://github.com/CastillejaCode/events">github</a>
	</footer>
</div>
