<script lang="ts">
	import Experience from '$lib/components/experience.svelte';
	import Hero from '$lib/components/hero.svelte';
</script>

<svelte:head>
	<title>João Santos - Portfolio</title>
	<meta
		name="description"
		content="Explore the portfolio of João Santos, a full stack developer specializing in modern web technologies. Discover projects, skills, and experience."
	/>
</svelte:head>

<main class="container flex flex-1 flex-col gap-16 lg:gap-32">
	<Hero />
	<Experience />
</main>
