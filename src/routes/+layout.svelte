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
		class={'fixed bottom-0 z-[10] flex w-full p-10 duration-200' +
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
<div
	class="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"
></div>
<div
	class="fixed bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"
></div>
<div
	class="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_100px]"
></div>

<ModeWatcher />
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
