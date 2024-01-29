<script lang="ts">
	import { cn } from '$lib/utils';
	import { buttonVariants } from './ui/button';
	import Button from './ui/button/button.svelte';
</script>

<header class="relative mt-16 gap-10 rounded-md border py-8 sm:py-32 lg:mt-32">
	<div class="flex flex-col lg:justify-center">
		<div class="relative m-4 flex flex-col items-center gap-6 text-center lg:justify-center">
			<div class="flex flex-col gap-2">
				<h1 class="title text-center">Full Stack Developer & Student</h1>
				<p class="text-muted-foreground sm:text-xl md:text-2xl">
					My passion is to build beautiful <br class="hidden sm:block" /> and functional websites and
					applications.
				</p>
			</div>
			<div class="flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-normal">
				<a href="/projects" class={cn(buttonVariants())}>View Projects</a>
				<a
					href="/assets/documents/CV.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class={cn(buttonVariants({ variant: 'outline' }))}>View CV</a
				>
			</div>
		</div>
	</div>

	<div
		class="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,rgba(113,113,113,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(113,113,113,0.07)_1px,transparent_1px)] bg-[size:94px_90px] transition-all duration-500"
	></div>
	<div
		class="filter-[blur(100px) saturate(100%)] translate-z-0 absolute bottom-0 left-0 right-0 top-0 z-[-1] opacity-10"
		style="background-image: radial-gradient(at 40% 40%, rgb(30, 144, 255) 0px, transparent 50%), radial-gradient(at 90% 10%, rgb(255, 105, 180) 0px, transparent 50%), radial-gradient(at 50% 95%, rgb(0, 255, 255) 0px, transparent 50%), radial-gradient(at 20% 30%, rgb(50, 205, 50) 0px, transparent 50%), radial-gradient(at 90% 90%, rgb(255, 255, 0) 0px, transparent 50%), radial-gradient(at 33% 50%, rgb(255, 69, 0) 0px, transparent 50%), radial-gradient(at 79% 53%, rgb(128, 0, 128) 0px, transparent 50%);"
	></div>
</header>
