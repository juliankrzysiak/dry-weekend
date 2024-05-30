<script lang="ts">
	import { browser } from '$app/environment';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	export let region: string;

	function saveRegionsAsCookies() {
		if (!browser) return;
		const regionsCookie = `region=${JSON.stringify(region)}; SameSite=Strict Secure`;
		document.cookie = regionsCookie;
	}
</script>

<RadioGroup class="flex gap-2">
	{#each ['Antelope Valley', 'Los Angeles'] as place}
		<RadioItem
			bind:group={region}
			name="justify"
			value={place}
			active="variant-ghost-primary"
			hover="hover:variant-outline-primary"
			on:change={saveRegionsAsCookies}
		>
			{place}
		</RadioItem>
	{/each}
</RadioGroup>
