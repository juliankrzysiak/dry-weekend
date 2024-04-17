<script lang="ts">
	import { draw, fade, fly, scale } from 'svelte/transition';

	export let clicks = 0;
	let easterEgg = false;
</script>

<div class="flex max-w-xl flex-col items-center">
	{#if clicks >= 3}
		<!-- <button class="variant-ghost-secondary btn" on:click={playAudio}>Play Easter Egg</button> -->
		<audio
			on:play={() => {
				easterEgg = true;
			}}
			on:pause={() => {
				easterEgg = false;
			}}
			controls
			class="z-10"
			src="https://dn720302.ca.archive.org/0/items/alice-deejay-better-off-alone/Alice%20Deejay/Better%20Off%20%20Alone/01-Better%20Off%20Alone%20%28Radio%20Edit%29.mp3#t=00:00:57"
		></audio>
	{/if}

	{#if easterEgg}
		<img class="" in:scale out:fade src="/snom-dancing.gif" alt="Snom dancing" />
	{/if}
</div>
