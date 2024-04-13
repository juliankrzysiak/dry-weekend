<script lang="ts">
	export let regions: string[];
	const initialRegions = regions;
</script>

<div class="flex w-full max-w-sm justify-center gap-4">
	{#each initialRegions as region}
		<label
			class="variant-ghost-surface btn flex-1 has-[:checked]:variant-ghost-primary has-[:focus-visible]:outline"
		>
			<input class="absolute opacity-0" type="checkbox" value={region} bind:group={regions} />
			<p>{region}</p>
		</label>
	{/each}
</div>
