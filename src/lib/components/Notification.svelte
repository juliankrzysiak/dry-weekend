<script lang="ts">
	import { fade } from 'svelte/transition';
	let visible = true;
	let title = 'Remember to vote!';
	let message = "It's cool and fun!";
</script>

{#if visible}
	<aside transition:fade class="alert variant-filled-warning absolute top-10 max-w-xl">
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-8"
			>
				<path
					fill-rule="evenodd"
					d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<div class="alert-message">
			<h3 class="h3">{title}</h3>
			<p>
				{message}
			</p>
		</div>
		<div class="alert-actions">
			<button on:click={() => (visible = false)}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
	</aside>
{/if}
