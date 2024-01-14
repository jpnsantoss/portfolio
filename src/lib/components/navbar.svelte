<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
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

	const goTop = () => {
		active = '';
		window.scrollTo(0, 0);
	};
</script>

<header
	class="sticky top-0 z-[10] w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex max-w-screen-2xl items-center justify-between py-2">
		<div class="flex items-center gap-8">
			<a href="/" on:click={goTop} class="font-bold">João Santos</a>
			<ul class="hidden list-none items-center gap-4 text-sm sm:flex">
				{#each navLinks as link}
					<li
						class={'transition-colors hover:text-foreground/80 ' +
							(active === link.id ? 'text-foreground/80' : 'text-foreground/60')}
					>
						<a href={`#${link.id}`} on:click={() => (active = link.id)}>
							<p>{link.title}</p>
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex items-center gap-2">
			<a href="/login" class={buttonVariants({ variant: 'outline', size: 'sm' })}>Log In</a>
			<ModeToggle />
		</div>
	</div>
</header>
