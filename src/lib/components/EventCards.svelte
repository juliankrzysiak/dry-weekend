<script lang="ts">
	import type { RecordModel } from 'pocketbase';
	export let records: RecordModel[];
</script>

<div class="grid w-full max-w-lg gap-5 md:hidden">
	{#each records as event}
		<article class="card">
			<header class="card-header flex items-baseline justify-between gap-2">
				<h2 class="text-xl font-bold">
					<a href={event.url} class="underline underline-offset-2">{event.title}</a>
				</h2>
				<p>${event.price}</p>
			</header>
			<section class="px-4 pb-1 pt-4">
				{#if event.description}
					<p class="text-lg opacity-50">
						{event.description}
					</p>
				{/if}
				<p class="pt-4">
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
