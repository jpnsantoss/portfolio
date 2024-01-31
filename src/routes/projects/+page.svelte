<script>
	import Project from '$lib/components/project.svelte';
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>João Santos - Portfolio</title>
	<meta
		name="description"
		content="Explore the diverse range of projects developed by João Santos. Includes projects in web development, mobile apps, and more."
	/>
</svelte:head>

<div class="container mt-16 grid gap-16 lg:mt-32">
	<div class="flex flex-col items-center gap-4 text-center">
		<h2 class="title md:text-5xl">My Recent Work</h2>
		<p class="max-w-4xl text-lg text-muted-foreground lg:leading-relaxed">
			Here are a few past projects I've worked on. Want to see more? <a
				href="/contact"
				class="hover:underline">Contact me.</a
			>
		</p>
	</div>
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</div>
