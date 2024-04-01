<script lang="ts">
	// import Datatable from '../lib/components/Datatable.svelte';
	export let data;
	console.log(data.records);
</script>

<div class="flex flex-col gap-2">
	<h2 class="text-xl">find events to do near you</h2>
	<h3>curated by Julian</h3>
</div>

<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Date @ Time</th>
				<th>Event</th>
				<th>Price</th>
				<th>Organizer</th>
			</tr>
		</thead>
		<tbody>
			{#each data.records as event, i}
				<tr>
					<td>{event.date}</td>
					<td><a href={event.url} class="underline">{event.title}</a></td>
					<td>{event.price}</td>
					<td>{event.organizer}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
