<script lang="ts">
	import '../app.postcss';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div class="flex min-h-screen flex-col px-8 pb-2 pt-8">
	<header class="flex justify-between pb-8 text-2xl">
		<h1 title="Happy Pride Month!">dry weekend 🏳️‍🌈</h1>
		<LightSwitch />
	</header>
	<main class="flex-1">
		<slot />
	</main>
	<footer class=" flex flex-col gap-8 text-center">
		<span
			>for event corrections or other inquiries, contact us at
			<br />
			<a href="mailto:support@dryweekend.com"> support@dryweekend.com</a></span
		>
		<div class="-mx-4 flex justify-between text-sm">
			<span>
				© 2024
				<a href="https://juliankrzysiak.com/"> Julian Krzysiak </a>
			</span>
			<a href="https://github.com/juliankrzysiak/dry-weekend">github</a>
		</div>
	</footer>
</div>

<style>
	a {
		text-decoration: underline;
	}
</style>
