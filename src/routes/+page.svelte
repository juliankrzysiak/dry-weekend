<script lang="ts">
	import RegionFilters from '$lib/components/RegionFilters.svelte';
	import { format } from 'date-fns';
	export let data;
	let regions = ['Antelope Valley', 'Los Angeles'];
</script>

<div class="flex flex-col items-center gap-2">
	<h2 class="text-xl">upcoming AV and LA events</h2>
	<h3><i> curated by Julian Krzysiak</i></h3>
</div>

<RegionFilters bind:regions />

<div class="table-container hidden md:block">
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Date and Time</th>
				<th>Event</th>
				<th>City</th>
				<th>Price</th>
				<th>Organizer</th>
			</tr>
		</thead>
		<tbody>
			{#each data.records as event, i}
				<tr>
					<td>{format(event.date.slice(0, -1), 'EEEE, MMMM d · h:mm aaa')}</td>
					<td><a href={event.url} class="underline">{event.title}</a></td>
					<td>{event.location}</td>
					<td>{event.price}</td>
					<td>{event.organizer}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<div class="grid md:hidden gap-4">
	{#each data.records as event}
		<div class="card">
			<header class="card-header flex justify-between">
				<h2 class="text-xl">
					<a href={event.url} class="underline">{event.title}</a>
				</h2>
				<p>${event.price}</p>
			</header>
			<section class="p-4">
				<strong>
					{format(event.date.slice(0, -1), 'EEEE, MMMM d · h:mm aaa')}
				</strong>
				in
				<strong>
					{event.location}
				</strong>
			</section>
			<footer class="card-footer">
				Organized by <strong>{event.organizer} </strong>
			</footer>
		</div>
	{/each}
</div>
