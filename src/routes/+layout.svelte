<script lang="ts">
	import '../app.postcss';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div class="flex min-h-screen flex-col px-8 pb-2 pt-8">
	<header class="flex justify-between pb-8 text-2xl">
		<h1>dry weekend</h1>
		<LightSwitch />
	</header>
	<main class="flex-1">
		<slot />
	</main>
	<footer class="flex justify-between text-sm">
		<span>
			© 2024
			<a href="https://juliankrzysiak.com/" class="underline"> Julian Krzysiak </a>
		</span>
		<a href="https://github.com/CastillejaCode/events" class="underline">github</a>
	</footer>
</div>
