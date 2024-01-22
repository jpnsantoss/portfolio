<script lang="ts">
	import { Github, Instagram, Linkedin } from 'lucide-svelte';
	import { buttonVariants } from './ui/button';
	import Button from './ui/button/button.svelte';
	const socialMedia = [
		{
			title: 'GitHub',
			href: 'https://github.com/jpnsantoss',
			icon: Github,
			highlight: true
		},
		{
			title: 'Instagram',
			href: 'https://instagram.com/jpnsantoss',
			icon: Instagram,
			highlight: false
		},
		{
			title: 'LinkedIn',
			href: 'https://www.linkedin.com/in/jpnsantoss/',
			icon: Linkedin,
			highlight: false
		}
	];
</script>

<header class="grid grid-cols-1 gap-10 py-8 sm:py-14 lg:grid-cols-2">
	<div class="flex flex-col lg:justify-center">
		<div
			class="relative m-4 flex flex-col gap-6 text-center md:gap-8 lg:justify-center lg:gap-10 lg:text-left"
		>
			<h1 class="title">
				Full Stack <br /> Developer & Student
			</h1>
			<p class="mt-2 text-muted-foreground sm:text-xl md:text-2xl">
				My passion is to build beautiful <br class="hidden sm:block" /> and functional websites and applications.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-normal">
				<Button>View Projects</Button>
				<div class="hidden md:block">
					{#each socialMedia as social}
						{#if social.highlight}
							<a href={social.href} target="_blank" class={buttonVariants({ variant: 'outline' })}>
								<svelte:component this={social.icon} class="mr-2 h-4 w-4" />
								{social.title}
							</a>
						{:else}
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								class={buttonVariants({ size: 'icon', variant: 'ghost' })}
								><svelte:component this={social.icon} class="h-4 w-4" /></a
							>
						{/if}
					{/each}
				</div>
				<div class="md:hidden">
					{#each socialMedia as social}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class={buttonVariants({ size: 'icon', variant: 'ghost' })}
							><svelte:component this={social.icon} class="h-4 w-4" /></a
						>
					{/each}
				</div>
			</div>
			<div class="absolute -left-10 top-0 hidden flex-col items-center justify-center lg:flex">
				<div class="h-5 w-5 rounded-full bg-primary"></div>
				<div class="h-40 w-1 bg-gradient-to-b from-primary to-transparent sm:h-80"></div>
			</div>
		</div>
	</div>
	<div class="relative grid place-items-center shadow-2xl">
		<img src={'images/profile.png'} alt="Profile" class="z-[2] max-h-[70vh] object-cover" />
	</div>
</header>
