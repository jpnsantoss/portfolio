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
		}
	];
</script>

<div class="container flex max-w-screen-lg flex-col gap-8 py-32">
	<div><h1 class="title">About me.</h1></div>
	<div class="flex flex-col gap-10 border-l py-4">
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
