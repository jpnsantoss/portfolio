<script lang="ts">
	import { page } from '$app/stores';
	import * as Avatar from '$lib/components/ui/avatar';
	import { buttonVariants } from '$lib/components/ui/button';
	import { signOut } from '@auth/sveltekit/client';
	import ModeToggle from './modeToggle.svelte';
	const navLinks = [
		{
			id: 'about',
			title: 'About'
		},
		{
			id: 'work',
			title: 'Work'
		},
		{
			id: 'contact',
			title: 'Contact'
		}
	];

	let active = '';
</script>

<header
	class="sticky top-0 z-[10] w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex max-w-screen-2xl items-center justify-between py-2">
		<div class="flex items-center gap-8">
			<a href="/" class="font-bold">João Santos</a>
			<ul class="hidden list-none items-center gap-4 text-sm sm:flex">
				{#each navLinks as link}
					<li
						class={'transition-colors hover:text-foreground/80 ' +
							(active === link.id ? 'text-foreground/80' : 'text-foreground/60')}
					>
						<a href={`/${link.id}`} on:click={() => (active = link.id)}>
							<p>{link.title}</p>
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex items-center gap-4">
			{#if $page.data.session}
				<a
					href="/admin"
					class="flex items-center gap-2 text-sm text-foreground/60 hover:cursor-pointer hover:text-foreground/80"
				>
					{#if $page.data.session.user?.image}
						<Avatar.Root class="h-6 w-6">
							<Avatar.Image src={$page.data.session.user.image} alt="@shadcn" />
							<Avatar.Fallback>AD</Avatar.Fallback>
						</Avatar.Root>
					{/if}
					<span>{$page.data.session.user?.name ?? 'User'}</span>
				</a>
			{:else}
				<a href="/login" class={buttonVariants({ variant: 'outline', size: 'sm' })}>Log In</a>
			{/if}

			<ModeToggle />
		</div>
	</div>
</header>
