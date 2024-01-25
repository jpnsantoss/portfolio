<script lang="ts">
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import * as Sheet from '$lib/components/ui/sheet';
	import { cn } from '$lib/utils';
	import { Github, Globe } from 'lucide-svelte';
	import Badge from './ui/badge/badge.svelte';
	import { buttonVariants } from './ui/button';

	interface Tool {
		id: number;
		name: string;
		projectId: number;
	}

	interface Project {
		id: number;
		title: string;
		subtitle: string;
		description: string;
		imageUrl: string;
		githubUrl: string;
		liveUrl: string;
		createdAt: Date;
		updatedAt: Date;
		tools: Tool[];
	}

	export let project: Project;
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<AspectRatio ratio={16 / 10} class="overflow-hidden rounded-md bg-muted">
			<div class="group relative h-full w-full cursor-pointer overflow-hidden rounded-md">
				<img src={project.imageUrl} alt="" class="object-cover object-center" />
				<div
					class="absolute inset-0 flex translate-y-3 items-end bg-gradient-to-t from-black/80 text-white opacity-0 transition-all duration-300
        ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
				>
					<div class="flex flex-col gap-2 p-6">
						<h3 class="text-left text-2xl font-bold">{project.title}</h3>
						<p class="truncate text-sm text-muted-foreground">{project.subtitle}</p>
						<ul class="mt-1 flex w-full flex-wrap gap-2">
							{#each project.tools as tool}
								<Badge variant="secondary">{tool.name}</Badge>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</AspectRatio>
	</Sheet.Trigger>
	<Sheet.Content class="sm:max-w-lg" side="right">
		<Sheet.Header class="">
			<Sheet.Title>{project.title}</Sheet.Title>
			<Sheet.Description>
				<p>{project.subtitle}</p>
			</Sheet.Description>
		</Sheet.Header>
		<div class="grid gap-8 py-8">
			<div>
				<AspectRatio ratio={16 / 10} class="overflow-hidden rounded-md bg-muted">
					<img src={project.imageUrl} alt={project.title} class="object-cover object-center" />
				</AspectRatio>
			</div>
			<div class="grid gap-2">
				<h2 class="text-lg font-semibold">About</h2>
				<p class="text-sm text-muted-foreground">{project.description}</p>
			</div>
			<div class="grid gap-2">
				<h2 class="text-lg font-semibold">Technologies</h2>
				<ul class="mt-1 flex w-full flex-wrap gap-2">
					{#each project.tools as tool}
						<Badge variant="secondary">{tool.name}</Badge>
					{/each}
				</ul>
			</div>
			{#if project.liveUrl}
				<div class="grid gap-2">
					<div class="flex items-center gap-2">
						<Globe class="h-6 w-6" />
						<h2 class="text-lg font-semibold">Live Url</h2>
					</div>
					<div>
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							class={cn(buttonVariants({ variant: 'link' }), 'm-0 h-fit p-0 text-muted-foreground')}
							>{project.liveUrl}</a
						>
					</div>
				</div>
			{/if}
		</div>
		<Sheet.Footer>
			<a
				href={project.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				class={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'w-full')}
			>
				<Github class="mr-2 h-4 w-4" />
				Open Project
			</a>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
