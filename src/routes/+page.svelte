<script lang="ts">
	import About from '$lib/components/about.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Experience from '$lib/components/experience.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Projects from '$lib/components/projects.svelte';
	import Tech from '$lib/components/tech.svelte';
</script>

<main class="container flex flex-1 flex-col p-4">
	<Hero />
	<About />
	<Experience />
	<Tech />
	<Projects />
	<Contact />
</main>
