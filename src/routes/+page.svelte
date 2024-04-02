<script lang="ts">
	import { format } from 'date-fns';
	export let data;
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
