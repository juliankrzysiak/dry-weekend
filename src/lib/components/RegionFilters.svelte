<script lang="ts">
	import { browser } from '$app/environment';

	export let regions: string[];

	function saveRegionsAsCookies() {
		if (!browser) return;
		const regionsCookie = `regions=${JSON.stringify(regions)}; SameSite=Strict Secure`;
		document.cookie = regionsCookie;
	}
</script>

<fieldset class="flex w-full max-w-sm justify-center gap-4" on:change={saveRegionsAsCookies}>
	{#each ['Antelope Valley', 'Los Angeles'] as region}
		<label
			class="variant-ghost-surface btn flex-1 cursor-pointer has-[:checked]:variant-ghost-primary has-[:focus-visible]:outline"
		>
			<span>
				<input class="absolute opacity-0" type="checkbox" value={region} bind:group={regions} />
				<p>{region}</p>
			</span>
		</label>
	{/each}
</fieldset>
