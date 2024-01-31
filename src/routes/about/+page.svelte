<script lang="ts">
	import { timeline } from '$lib/data/about';
</script>

<svelte:head>
	<title>João Santos - About</title>
	<meta
		name="description"
		content="Learn more about João Santos. Discover his skills, experience, and journey in the field of software development."
	/>
</svelte:head>

<div class="container relative my-32 overflow-hidden rounded-md border py-32">
	<div class="container flex max-w-screen-lg flex-col gap-16">
		<div><h1 class="title">Work experience.</h1></div>
		<div class="flex flex-col gap-16 border-l border-primary/40 py-8">
			{#each timeline as item}
				<div class="relative -ml-2 space-y-2">
					<div class="flex items-center gap-8">
						<div class="h-4 w-4 rounded-full border-2 border-primary bg-background"></div>
						<h2 class="text-lg font-semibold">{item.title}</h2>
					</div>
					<p class="pl-12 text-foreground/60">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
	<div
		class="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,rgba(113,113,113,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(113,113,113,0.07)_1px,transparent_1px)] bg-[size:94px_90px] transition-all duration-500"
	></div>
	<div
		class="filter-[blur(100px) saturate(100%)] translate-z-0 absolute bottom-0 left-0 right-0 top-0 z-[-1] opacity-10"
		style="background-image: radial-gradient(at 40% 40%, rgb(30, 144, 255) 0px, transparent 50%), radial-gradient(at 90% 10%, rgb(255, 105, 180) 0px, transparent 50%), radial-gradient(at 50% 95%, rgb(0, 255, 255) 0px, transparent 50%), radial-gradient(at 20% 30%, rgb(50, 205, 50) 0px, transparent 50%), radial-gradient(at 90% 90%, rgb(255, 255, 0) 0px, transparent 50%), radial-gradient(at 33% 50%, rgb(255, 69, 0) 0px, transparent 50%), radial-gradient(at 79% 53%, rgb(128, 0, 128) 0px, transparent 50%);"
	></div>
</div>
