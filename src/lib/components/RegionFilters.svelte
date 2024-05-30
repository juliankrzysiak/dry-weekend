<script lang="ts">
	import { browser } from '$app/environment';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	export let regions: string[];

	function saveRegionsAsCookies() {
		if (!browser) return;
		const regionsCookie = `regions=${JSON.stringify(regions)}; SameSite=Strict Secure`;
		document.cookie = regionsCookie;
	}
</script>

<RadioGroup class="flex gap-2">
	{#each ['Antelope Valley', 'Los Angeles'] as region}
		<RadioItem
			bind:group={regions}
			name="justify"
			value={region}
			active="variant-ghost-primary"
			hover="hover:variant-outline-primary"
			on:change={saveRegionsAsCookies}
		>
			{region}
		</RadioItem>
	{/each}
</RadioGroup>
