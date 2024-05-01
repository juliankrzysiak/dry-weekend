<script lang="ts">
	export let eventTypes;
</script>

<fieldset class="flex w-full max-w-sm justify-center gap-4">
	{#each ['Once', 'Multiple', 'Recurring'] as type}
		<label
			class="variant-ghost-surface btn btn-sm flex-1 cursor-pointer has-[:checked]:variant-ghost-primary has-[:focus-visible]:outline"
		>
			<span>
				<input class="absolute opacity-0" type="checkbox" value={type} bind:group={eventTypes} />
				<p>{type}</p>
			</span>
		</label>
	{/each}
</fieldset>
