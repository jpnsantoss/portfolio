<script>
	import { page } from '$app/stores';
	import * as Avatar from '$lib/components/ui/avatar';
	import Button from '$lib/components/ui/button/button.svelte';
	import { signOut } from '@auth/sveltekit/client';
</script>

{#if $page.data.session}
	<div class="container py-16">
		<div class="mb-12 flex items-center justify-between">
			<div class="flex items-center gap-2">
				{#if $page.data.session.user?.image}
					<Avatar.Root>
						<Avatar.Image src={$page.data.session.user.image} alt="@shadcn" />
						<Avatar.Fallback>AD</Avatar.Fallback>
					</Avatar.Root>
				{/if}
				<span class="text-xl font-bold text-foreground"
					>{$page.data.session.user?.name ?? 'User'}</span
				>
			</div>
			<h1 class="text-center text-2xl font-bold">Admin Dashboard</h1>
		</div>

		<Button on:click={() => signOut()} class="button">Sign out</Button>
	</div>
{/if}
