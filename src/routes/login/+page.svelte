<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { signIn } from '@auth/sveltekit/client';
	import { Github } from 'lucide-svelte';
</script>

<div class="container py-16 lg:py-32">
	<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
		<div class="flex flex-col space-y-2 text-center">
			<h1 class="text-2xl font-semibold tracking-tight">Welcome back</h1>
			<p class="text-sm text-muted-foreground">You need to be an authorized user to sign in</p>
		</div>
		<Button on:click={() => signIn('github')}>
			<Github class="mr-2 h-4 w-4" />
			Login with Github
		</Button>
		<p class="px-8 text-center text-sm text-muted-foreground">
			By clicking continue, you agree to our{' '}
			<span class="underline underline-offset-4 hover:text-primary"> Terms of Service </span>{' '}
			and{' '}
			<span class="underline underline-offset-4 hover:text-primary"> Privacy Policy </span>
			.
		</p>
	</div>
</div>
