<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
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

<div class="relative z-10 mx-auto min-h-screen w-full text-sm sm:text-base">
	<div
		class={'fixed bottom-0 z-[10] m-10 content-center duration-200' +
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
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
