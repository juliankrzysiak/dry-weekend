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
			<section class="px-4 pb-1">
				{#if event.description}
					<p class="pt-4 text-lg opacity-55">
						{event.description}
					</p>
				{/if}
				<p class="pt-4">
					{event.date} <span class="opacity-55">@</span>
					{event.location}
				</p>
			</section>
			<footer class="card-footer flex items-center justify-between gap-2">
				<p>
					<span class="opacity-55">By</span>
					{event.organizer}
				</p>
				{#if event.recurring}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						class="h-4"
						aria-label="Recurring event"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
						/>
					</svg>
				{/if}
			</footer>
		</article>
	{/each}
</div>
