<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	export let clicks = 0;
	let easterEgg = false;

	function showEasterEgg() {
		easterEgg = true;
	}

	function hideEasterEgg() {
		easterEgg = false;
	}

	function resetEasterEgg() {
		clicks = 0;
	}
</script>

{#if clicks >= 3}
	<div class="flex max-w-xl flex-col items-center">
		<button on:click={resetEasterEgg} class="variant-ghost-error btn mb-4">Reset Easter Egg</button>
		<audio
			on:play={showEasterEgg}
			on:pause={hideEasterEgg}
			controls
			src="https://dn720302.ca.archive.org/0/items/alice-deejay-better-off-alone/Alice%20Deejay/Better%20Off%20%20Alone/01-Better%20Off%20Alone%20%28Radio%20Edit%29.mp3#t=00:00:57"
		></audio>
		{#if easterEgg}
			<img in:scale out:fade src="/snom-dancing.gif" alt="Snom dancing" />
		{/if}
	</div>
{/if}
