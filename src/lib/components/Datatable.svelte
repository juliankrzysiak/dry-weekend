<script lang="ts">
	import { DataHandler } from '@vincjo/datatables';
	import data from '../api';

	const handler = new DataHandler(data, { rowsPerPage: 5 });
	const rows = handler.getRows();
</script>

<div class="table-container space-y-4">
	<table class="table table-hover table-compact table-auto w-full hidden sm:block">
		<thead>
			<tr>
				<td>First name</td>
				<td>Last name</td>
				<td>Email</td>
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<div class="card p-4">{row.email}</div>
			{/each}
		</tbody>
	</table>

	<div class="sm:hidden flex flex-col gap-4">
		{#each $rows as row}
			<div class="card p-4">{row.email}</div>
		{/each}
	</div>
</div>
