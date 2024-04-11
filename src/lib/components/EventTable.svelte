<script lang="ts">
	import type { RecordModel } from 'pocketbase';
	export let records: RecordModel[];
</script>

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
