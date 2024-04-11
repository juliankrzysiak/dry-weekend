<script lang="ts">
	import EventForm from '$lib/components/EventForm.svelte';
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

	<div class="table-container hidden md:block max-w-screen-xl">
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Date / Time</th>
					<th>Event</th>
					<th>Location</th>
					<th>Price</th>
					<th>Organizer</th>
				</tr>
			</thead>
			<tbody>
				{#each records as event}
					<tr>
						<td>{event.date}</td>
						<td><a href={event.url} class="underline">{event.title}</a></td>
						<td>{event.location}</td>
						<td>{event.price}</td>
						<td>{event.organizer}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="grid md:hidden gap-4 w-full max-w-lg">
		{#each records as event}
			<article class="card">
				<header class="card-header flex justify-between items-center">
					<h2 class="text-xl">
						<a href={event.url} class="underline underline-offset-2">{event.title}</a>
					</h2>
					<p>${event.price}</p>
				</header>
				<section class="p-4">
					<strong>
						{event.date}
					</strong>
					@
					<strong>
						{event.location}
					</strong>
				</section>
				<footer class="card-footer">
					By <strong>{event.organizer} </strong>
				</footer>
			</article>
		{/each}
	</div>
</div>
<EventForm bind:form />
