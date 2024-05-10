<script lang="ts">
	import formatDate from '$lib';
	import type { RecordModel } from 'pocketbase';
	export let records: RecordModel[];
</script>

<div class="table-container hidden max-w-screen-xl md:block">
	<table class="table table-hover table-comfortable">
		<thead>
			<tr>
				<th>Date / Time</th>
				<th>Event</th>
				<th>Location</th>
				<th>Organizer</th>
				<th class="text-right">Price</th>
			</tr>
		</thead>
		<tbody>
			{#each records as event}
				<tr>
					<td>{formatDate(event.date, event.endDate)}</td>
					<td
						><a href={event.url} class="font-bold underline underline-offset-2">{event.title}</a
						></td
					>
					<td>{event.location}</td>
					<td>{event.organizer}</td>
					<td class="text-right">{event.price}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
