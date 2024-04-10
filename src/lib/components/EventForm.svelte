<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../../routes/$types';
	export let form: ActionData;
</script>

<form method="POST" use:enhance class="flex flex-col gap-4 items-center my-16">
	<h2 class="text-xl">Suggest Event</h2>
	<label class="label">
		<span>Title *</span>
		<input class="input" type="text" name="title" required />
	</label>
	<label class="label">
		<span>Link *</span>
		<input class="input" type="url" name="url" required />
	</label>
	<input
		class="absolute left-[-999999px]"
		type="text"
		name="username"
		placeholder="Your username"
		tabindex="-1"
		autocomplete="new-password"
	/>
	{#if form?.success}
		<button class="btn variant-ghost-success mt-8" disabled>Thanks!</button>
	{:else}
		<button class="btn variant-ghost-primary mt-8">Submit</button>
	{/if}
</form>
