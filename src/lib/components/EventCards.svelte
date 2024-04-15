<script lang="ts">
	import type { RecordModel } from 'pocketbase';
	export let records: RecordModel[];
</script>

<div class="grid w-full max-w-lg gap-6 md:hidden">
	{#each records as event}
		<article class="card">
			<header class="card-header flex items-baseline justify-between gap-2">
				<h2 class="text-xl font-bold">
					<a href={event.url} class="underline underline-offset-2">{event.title}</a>
				</h2>
				<p>${event.price}</p>
			</header>
			<section class="px-4 pb-2 pt-4">
				<p>
					{event.date} <span class="opacity-50">@</span>
					{event.location}
				</p>
			</section>
			<footer class="card-footer">
				<p>
					<span class="opacity-50">By</span>
					{event.organizer}
				</p>
			</footer>
		</article>
	{/each}
</div>
