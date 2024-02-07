<script lang="ts">
	import { page } from '$app/stores';
	import * as Avatar from '$lib/components/ui/avatar';
	import { buttonVariants } from '$lib/components/ui/button';
	import { navLinks } from '$lib/data/links';
	import ModeToggle from './modeToggle.svelte';

	import * as Sheet from '$lib/components/ui/sheet';
	import { Menu } from 'lucide-svelte';
	let active = $page.route.id;
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
						class={'transition-colors hover:text-foreground ' +
							(active === link.id ? 'text-foreground' : 'text-muted-foreground')}
					>
						<a href={link.id} on:click={() => (active = link.id)}>
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
					class="flex items-center gap-2 text-sm text-muted-foreground hover:cursor-pointer hover:text-foreground"
				>
					{#if $page.data.session.user?.image}
						<Avatar.Root class="h-6 w-6">
							<Avatar.Image src={$page.data.session.user.image} alt="@shadcn" />
							<Avatar.Fallback>AD</Avatar.Fallback>
						</Avatar.Root>
					{/if}
					<span>{$page.data.session.user?.name ?? 'User'}</span>
				</a>
			{/if}
			<Sheet.Root>
				<Sheet.Trigger class="sm:hidden">
					<Menu />
				</Sheet.Trigger>
				<Sheet.Content side="right">
					<Sheet.Header class="">
						<Sheet.Title>Where do you want to go?</Sheet.Title>
						<Sheet.Description>
							<p>Find out more about João Santos and his projects.</p>
						</Sheet.Description>
					</Sheet.Header>
					<ul class="flex list-none flex-col gap-8 py-16 text-sm">
						{#each navLinks as link}
							<li
								class={'transition-colors hover:text-foreground ' +
									(active === link.id ? 'text-foreground' : 'text-muted-foreground')}
							>
								<a href={link.id} on:click={() => (active = link.id)}>
									<p>{link.title}</p>
								</a>
							</li>
						{/each}
					</ul>
					<!-- content -->
				</Sheet.Content>
			</Sheet.Root>

			<ModeToggle />
		</div>
	</div>
</header>
