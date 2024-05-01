<script lang="ts">
	import EventCards from '$lib/components/EventCards.svelte';
	import EventForm from '$lib/components/EventForm.svelte';
	import EventTable from '$lib/components/EventTable.svelte';
	import RegionFilters from '$lib/components/RegionFilters.svelte';
	import EasterEgg from '$lib/components/EasterEgg.svelte';
	import EventTypeFilters from '$lib/components/EventTypeFilters.svelte';

	export let data;
	export let form;

	// Easter Egg //
	let clicks = 0;
	let easterEgg = false;

	function addClick() {
		clicks += 1;
	}
	// Easter Egg

	let regions: string[] = data.regions;
	let eventTypes: string[] = [];
	$: records = data.records
		.filter(({ region }) => regions.includes(region) || !regions.length)
		.filter(({ type }) => eventTypes.includes(type) || !eventTypes.length);
</script>

<div class="flex flex-1 flex-col items-center gap-8">
	<div class="flex w-full flex-col items-center gap-6">
		<div class="flex flex-col items-center gap-2">
			<h2 class="text-xl">upcoming AV and LA events</h2>
			<h3>
				<i
					>curated by <button class="italic" on:click={addClick}
						>{easterEgg ? 'Snom' : 'Julian'}</button
					></i
				>
			</h3>
		</div>
		<EasterEgg bind:clicks bind:easterEgg />
		<RegionFilters bind:regions />
		<EventTypeFilters bind:eventTypes/>
	</div>
	<EventTable bind:records />
	<EventCards bind:records />
</div>
<EventForm bind:form />
