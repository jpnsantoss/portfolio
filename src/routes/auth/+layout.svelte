<div class="container py-16 lg:py-32">
	<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
		<div class="flex flex-col space-y-2 text-center">
			<h1 class="text-2xl font-semibold tracking-tight">Log in to Dashboard</h1>
			<p class="text-sm text-muted-foreground">Enter your username & password below to sign in</p>
		</div>
		<slot />
		<p class="px-8 text-center text-sm text-muted-foreground">
			By clicking continue, you agree to our{' '}
			<a href="/terms" class="underline underline-offset-4 hover:text-primary">
				Terms of Service
			</a>{' '}
			and{' '}
			<a href="/privacy" class="underline underline-offset-4 hover:text-primary">
				Privacy Policy
			</a>
			.
		</p>
	</div>
</div>
