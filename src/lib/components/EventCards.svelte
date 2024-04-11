<script lang="ts">
	import type { RecordModel } from 'pocketbase';
	export let records: RecordModel[];
</script>

<div class="grid md:hidden gap-4 w-full max-w-lg">
	{#each records as event}
		<article class="card">
			<header class="card-header flex gap-2 justify-between items-baseline">
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
