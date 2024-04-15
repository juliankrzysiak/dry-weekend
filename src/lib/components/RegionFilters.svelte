<script lang="ts">
	export let regions: string[];
</script>

<fieldset class="flex w-full max-w-sm justify-center gap-4">
	{#each ['Antelope Valley', 'Los Angeles'] as region}
		<label
			class="variant-ghost-surface btn flex-1 has-[:checked]:variant-ghost-primary has-[:focus-visible]:outline"
		>
			<span>
				<input class="absolute opacity-0" type="checkbox" value={region} bind:group={regions} />
				<p>{region}</p>
			</span>
		</label>
	{/each}
</fieldset>
