<form method="POST" class="flex flex-col gap-4 items-center py-16">
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
		type="text"
		name="username"
		placeholder="Your username"
		tabindex="-1"
		autocomplete="new-password"
	/>
	<button class="btn variant-ghost-primary mt-8">Submit</button>
</form>
