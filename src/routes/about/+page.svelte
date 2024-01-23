<!-- component -->
<!-- Create By Joker Banny -->
<script>
	const timeline = [
		{
			title: 'Web Development',
			description:
				'I develop beautiful, fast and responsive web applications. Imagine that i type more that i should, then this should be still readable and not weird. I hope thats what it happens after i stop typing this random text jus to make this description bigger.'
		},
		{
			title: 'App Development',
			description: 'I build clean and user-friendly mobile and desktop applications.'
		},
		{
			title: 'Backend Development',
			description: 'I develop performant, secure and scalable backend systems.'
		},
		{
			title: 'Backend Development',
			description: 'I develop performant, secure and scalable backend systems.'
		},
		{
			title: 'Backend Development',
			description: 'I develop performant, secure and scalable backend systems.'
		},
		{
			title: 'Backend Development',
			description: 'I develop performant, secure and scalable backend systems.'
		},
		{
			title: 'Backend Development',
			description: 'I develop performant, secure and scalable backend systems.'
		}
	];
</script>

<div class="container relative my-16 overflow-hidden rounded-md border py-16">
	<div class="container flex max-w-screen-lg flex-col gap-8">
		<div><h1 class="title">About me.</h1></div>
		<div class="flex flex-col gap-10 border-l border-primary/40 py-8">
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
