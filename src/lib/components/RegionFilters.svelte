<script lang="ts">
	export let regions: string[];
	const initialRegions = regions;
</script>

<div class="flex justify-center gap-4 w-full max-w-sm">
	{#each initialRegions as region}
		<label class="btn has-[:checked]:variant-ghost-primary variant-ghost-surface flex-1 m-0">
			<input class="absolute opacity-0" type="checkbox" value={region} bind:group={regions} />
			<p>{region}</p>
		</label>
	{/each}
</div>
