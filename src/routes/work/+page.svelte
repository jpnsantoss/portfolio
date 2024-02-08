<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { timeline } from '$lib/data/work';
</script>

<svelte:head>
	<title>João Santos - Work</title>
	<meta
		name="description"
		content="Learn more about João Santos. Discover his skills, experience, and journey in the field of software development."
	/>
</svelte:head>

<div class="container relative my-32">
	<div class="relative overflow-hidden rounded-md border py-32">
		<div class="container flex max-w-screen-lg flex-col gap-16">
			<div><h1 class="title">Work experience.</h1></div>
			<div class="ml-16 flex flex-col gap-16 border-l border-primary/40 py-8">
				{#each timeline as item}
					<div class="relative space-y-2">
						<div class="relative flex flex-col gap-2 pl-12 lg:flex-row">
							<div
								class="-left-24 top-0 flex gap-2 text-sm text-muted-foreground lg:absolute lg:flex-col"
							>
								<div class="flex gap-2">
									<span>{item.dateInterval.start}</span>
									<span>-</span>
								</div>
								<span>{item.dateInterval.end}</span>
							</div>
							<!-- Moved the date here -->
							<div
								class="absolute -left-2 top-1 h-4 w-4 rounded-full border-2 border-primary bg-background"
							/>
							<div class="flex flex-col gap-2">
								<div class="flex flex-col-reverse sm:flex-row sm:items-end sm:gap-2">
									<h2 class="text-lg font-semibold">{item.title}</h2>
									<p class="text-sm text-foreground/80">{item.subtitle}</p>
								</div>
								<p class="text-foreground/60">{item.description}</p>
							</div>
						</div>
					</div>
				{/each}
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
</div>
