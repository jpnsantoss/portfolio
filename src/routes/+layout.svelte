<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { ArrowUp } from 'lucide-svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';

	let y: number;
	let innerHeight = 0;
	let innerWidth = 0;

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<svelte:head>
	<meta property="og:title" content="João Santos - Portfolio" />
	<meta
		property="og:description"
		content="Explore the portfolio of João Santos, a full stack developer specializing in modern web technologies. Discover projects, skills, and experience."
	/>
	<meta property="og:url" content="https://jpnsantos.pt" />
	<meta property="og:image" content="http://jpnsantos.pt/favicon.png" />
</svelte:head>

<div class="relative z-10 mx-auto min-h-screen w-full text-sm sm:text-base">
	<div
		class={'bottom-0 z-[10] m-10 hidden content-center duration-200 sm:fixed' +
			(y > 0 ? 'opacity-100' : 'pointer-events-none opacity-0')}
	>
		<Button on:click={goTop} variant="ghost" size="icon">
			<ArrowUp class="h-6 w-6" />
		</Button>
	</div>
	<Navbar />
	<slot />
	<Footer />
</div>

<ModeWatcher />
<Toaster />
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
