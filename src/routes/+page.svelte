<script lang="ts">
	import EventCards from '$lib/components/EventCards.svelte';
	import EventForm from '$lib/components/EventForm.svelte';
	import EventTable from '$lib/components/EventTable.svelte';
	import RegionFilters from '$lib/components/RegionFilters.svelte';
	export let data;
	export let form;
	let regions: string[] = [];
	$: records = regions.length
		? data.records.filter(({ region }) => regions.includes(region))
		: data.records;
</script>

<div class="flex flex-1 flex-col items-center gap-12">
	<div class="flex w-full flex-col items-center gap-8">
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
