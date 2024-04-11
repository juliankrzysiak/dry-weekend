<script lang="ts">
	import EventCards from '$lib/components/EventCards.svelte';
	import EventForm from '$lib/components/EventForm.svelte';
	import EventTable from '$lib/components/EventTable.svelte';
	import RegionFilters from '$lib/components/RegionFilters.svelte';
	export let data;
	export let form;
	let regions = ['Antelope Valley', 'Los Angeles'];
	$: records = regions.length
		? data.records.filter(({ region }) => regions.includes(region))
		: data.records;
</script>

<div class="flex-1 flex flex-col gap-12 items-center">
	<div class="flex flex-col gap-8 items-center w-full">
		<div class="flex flex-col items-center gap-2">
			<h2 class="text-xl">upcoming AV and LA events</h2>
			<h3><i> curated by Julian</i></h3>
		</div>
		<RegionFilters bind:regions />
	</div>
	<EventTable bind:records />
	<EventCards bind:records />
</div>
<EventForm bind:form />
