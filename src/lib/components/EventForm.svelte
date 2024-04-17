<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../../routes/$types';
	export let form: ActionData;
</script>

<form method="POST" use:enhance class="my-16 flex flex-col items-center gap-4">
	<h2 class="text-xl">Suggest Event</h2>
	<label class="label w-full max-w-sm">
		<span>Title *</span>
		<input class="input" type="text" name="title" required />
	</label>
	<label class="label w-full max-w-sm">
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
	<button class="variant-ghost-primary btn mt-8" disabled={form?.success}
		>{form?.success ? 'Thanks!' : 'Submit'}</button
	>
</form>
