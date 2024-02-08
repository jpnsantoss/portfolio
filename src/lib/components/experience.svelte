<script lang="ts">
	import { services } from '$lib/data/work';
	import Badge from './ui/badge/badge.svelte';
	import Button from './ui/button/button.svelte';
</script>

<section class="flex flex-col gap-8 py-4">
	<div class="flex flex-col items-center gap-4 text-center">
		<h2
			class="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:leading-[1.1]"
		>
			Hi, I'm João. Nice to meet you!
		</h2>
		<p class="max-w-4xl text-lg text-muted-foreground lg:leading-relaxed">
			I'm currently studying computer science at the Faculty of Engineering of University of Porto.
			Alongside my studies, I work part-time at an engineering company, where I have the opportunity
			to apply and strengthen my skills as a full-stack developer. I'm always eager to learn and
			deeply passionate about what I do.
		</p>
	</div>
	<div class="flex justify-center">
		<Button variant="outline">Discover my journey</Button>
	</div>
	<div class="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-3">
		{#each services as service}
			<div class="flex flex-col items-center gap-4 rounded-md border-2 px-4 py-8 text-center">
				<svelte:component this={service.icon} class="h-12 w-12" />
				<h2 class="text-xl font-semibold">
					{service.title}
				</h2>
				<p class=" text-muted-foreground">{service.description}</p>
				<ul class="flex w-full flex-wrap justify-center gap-2">
					{#each service.tools as tool}
						<Badge variant="secondary">{tool}</Badge>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
