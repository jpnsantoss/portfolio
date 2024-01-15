<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	export let form;
</script>

<div class="grid gap-6">
	<form method="POST">
		<div class="grid gap-2">
			<div class="grid gap-1">
				<Label class="sr-only" for="email">Username</Label>
				<Input
					id="username"
					placeholder="username"
					type="text"
					autocapitalize="none"
					autocomplete="username"
					autocorrect="off"
				/>
			</div>
			<div class="grid gap-1">
				<Label class="sr-only" for="email">Password</Label>
				<Input id="password" placeholder="password" type="password" />
			</div>

			{#if form?.message}
				<span class="text-sm font-light text-destructive">{form?.message}</span>
			{/if}
			<Button type="submit">Sign In with Email</Button>
		</div>
	</form>
</div>
