<script>
	const projects = [
		{
			id: 1,
			title: 'Project 1',
			subtitle: 'This is a subtitle for Project.',
			description: 'This is a description for Project 1.',
			imageUrl: 'https://mattfarley.ca/img/projects/wfdesignbuild.png',
			githubUrl: 'https://github.com/user/project1',
			liveUrl: 'https://example.com/project1',
			createdAt: new Date(),
			updatedAt: new Date(),
			tools: [
				{ id: 1, name: 'React', projectId: 1 },
				{ id: 2, name: 'Tailwind', projectId: 1 },
				{ id: 3, name: 'Svelte', projectId: 1 }
			]
		},
		{
			id: 2,
			title: 'Project 2',
			subtitle: 'This is a subtitle for Project.',
			description: 'This is a description for Project 2.',
			imageUrl: 'https://mattfarley.ca/img/projects/wfdesignbuild.png',
			githubUrl: 'https://github.com/user/project2',
			liveUrl: 'https://example.com/project2',
			createdAt: new Date(),
			updatedAt: new Date(),
			tools: [
				{ id: 4, name: 'Vue', projectId: 2 },
				{ id: 5, name: 'Vuetify', projectId: 2 }
			]
		},
		{
			id: 3,
			title: 'Project 3',
			subtitle: 'This is a subtitle for Project.',
			description: 'This is a description for Project 3.',
			imageUrl: 'https://mattfarley.ca/img/projects/wfdesignbuild.png',
			githubUrl: 'https://github.com/user/project3',
			liveUrl: 'https://example.com/project3',
			createdAt: new Date(),
			updatedAt: new Date(),
			tools: [
				{ id: 6, name: 'Angular', projectId: 3 },
				{ id: 7, name: 'Bootstrap', projectId: 3 }
			]
		},
		{
			id: 4,
			title: 'Project 4',
			subtitle: 'This is a subtitle for Project.',
			description: 'This is a description for Project 4.',
			imageUrl: 'https://mattfarley.ca/img/projects/wfdesignbuild.png',
			githubUrl: 'https://github.com/user/project4',
			liveUrl: 'https://example.com/project4',
			createdAt: new Date(),
			updatedAt: new Date(),
			tools: [
				{ id: 8, name: 'Django', projectId: 4 },
				{ id: 9, name: 'PostgreSQL', projectId: 4 }
			]
		},
		{
			id: 5,
			title: 'Project 5',
			subtitle: 'This is a subtitle for Project.',
			description: 'This is a description for Project 5.',
			imageUrl: 'https://mattfarley.ca/img/projects/wfdesignbuild.png',
			githubUrl: 'https://github.com/user/project5',
			liveUrl: 'https://example.com/project5',
			createdAt: new Date(),
			updatedAt: new Date(),
			tools: [
				{ id: 10, name: 'Express', projectId: 5 },
				{ id: 11, name: 'MongoDB', projectId: 5 }
			]
		},
		{
			id: 6,
			title: 'Project 6',
			subtitle: 'This is a subtitle for Project.',
			description: 'This is a description for Project 6.',
			imageUrl: 'https://mattfarley.ca/img/projects/wfdesignbuild.png',
			githubUrl: 'https://github.com/user/project6',
			liveUrl: 'https://example.com/project6',
			createdAt: new Date(),
			updatedAt: new Date(),
			tools: [
				{ id: 12, name: 'Node.js', projectId: 6 },
				{ id: 13, name: 'Socket.IO', projectId: 6 }
			]
		}
	];

	import Project from '$lib/components/project.svelte';
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
