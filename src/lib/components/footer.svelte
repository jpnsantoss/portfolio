<script lang="ts">
	import { cn } from '$lib/utils';
	import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-svelte';
	import { buttonVariants } from './ui/button';

	const socials = [
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourusername', icon: Linkedin },
		{ name: 'Instagram', url: 'https://www.instagram.com/yourusername', icon: Instagram },
		{ name: 'Facebook', url: 'https://www.facebook.com/yourusername', icon: Facebook },
		{ name: 'Github', url: 'https://github.com/yourusername', icon: Github }
	];

	const links = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
		{ name: 'Services', url: '/services' },
		{ name: 'Contact', url: '/contact' }
	];
</script>

<footer class="mt-32 grid gap-4 border-t p-8">
	<!-- social media -->
	<div class="flex justify-center gap-6">
		{#each socials as social}
			<a
				class={cn(buttonVariants({ size: 'icon', variant: 'ghost' }))}
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={social.name}
			>
				<svelte:component this={social.icon} />
			</a>
		{/each}
	</div>
	<div class="text-center text-sm text-muted-foreground">
		Built & designed by <a
			href="https://github.com/jpnsantoss"
			target="_blank"
			rel="noopener noreferrer"
			class="underline transition-colors hover:text-foreground">me</a
		>
		. The source code is available on
		<a
			href="https://github.com/jpnsantoss/portfolio"
			target="_blank"
			rel="noopener noreferrer"
			class="underline transition-colors hover:text-foreground">GitHub</a
		> .
	</div>
</footer>
