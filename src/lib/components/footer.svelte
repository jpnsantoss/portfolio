<script lang="ts">
	import { socials } from '$lib/data/social';
	import { cn } from '$lib/utils';
	import { buttonVariants } from './ui/button';
</script>

<footer class="mt-32 grid gap-4 border-t p-8">
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
			class="underline transition-colors hover:text-foreground">João Santos</a
		>. The source code is available on
		<a
			href="https://github.com/jpnsantoss/portfolio"
			target="_blank"
			rel="noopener noreferrer"
			class="underline transition-colors hover:text-foreground">GitHub</a
		>.
	</div>
</footer>
