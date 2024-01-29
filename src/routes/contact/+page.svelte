<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { FormOptions } from 'formsnap';
	import { Mail } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { formSchema, type FormSchema } from './schema';

	export let form: SuperValidated<FormSchema>;

	const options: FormOptions<FormSchema> = {
		onSubmit() {
			toast.info('Submitting...');
		},
		onResult({ result }) {
			console.log(result);
			if (result.status === 200) toast.success('Success!');
			if (result.status === 400) toast.error('Error!');
		}
	};
</script>

<div>
	<div class="container mt-32 flex items-center justify-center rounded-md bg-muted/40">
		<div class="relative flex flex-col gap-4 py-16 text-center">
			<div class="relative mx-auto mb-8 w-fit rounded-full bg-background p-4">
				<Mail class=" h-6 w-6" />
				<div class="absolute -left-6 -top-8 -z-10 h-[200%] w-[200%] blur-xl">
					<div
						class=" translate-z-0 absolute bottom-0 left-0 right-0 top-0 z-[-1] opacity-50"
						style="background-image: radial-gradient(at 40% 40%, rgb(30, 144, 255) 0px, transparent 50%), radial-gradient(at 90% 10%, rgb(255, 105, 180) 0px, transparent 50%), radial-gradient(at 50% 95%, rgb(0, 255, 255) 0px, transparent 50%), radial-gradient(at 20% 30%, rgb(50, 205, 50) 0px, transparent 50%), radial-gradient(at 90% 90%, rgb(255, 255, 0) 0px, transparent 50%), radial-gradient(at 33% 50%, rgb(255, 69, 0) 0px, transparent 50%), radial-gradient(at 79% 53%, rgb(128, 0, 128) 0px, transparent 50%);"
					></div>
				</div>
			</div>
			<h1 class="title text-5xl">Want to get in touch?</h1>
			<p class="text-muted-foreground sm:text-xl md:text-2xl">
				Interested in <span class="text-foreground">working together</span>? We should queue up a
				time to <span class="text-foreground">chat</span>. <br />I’ll buy the coffee.
			</p>
		</div>
	</div>

	<div class="-mt-5">
		<Form.Root
			schema={formSchema}
			{form}
			{options}
			let:config
			method="POST"
			action="?/contact"
			class="container flex max-w-xl flex-col justify-center space-y-6"
		>
			<Form.Field {config} name="email">
				<Form.Item class="">
					<Form.Input placeholder="Your email adress" class="h-12 bg-background" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="subject">
				<Form.Item class="">
					<Form.Input placeholder="Subject of your message" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="body">
				<Form.Item class="">
					<Form.Textarea placeholder="Main content of your message" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Button>Submit</Form.Button>
		</Form.Root>
	</div>
</div>
