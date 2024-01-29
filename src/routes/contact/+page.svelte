<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { FormOptions } from 'formsnap';
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

<div class="container my-32">
	<Form.Root
		schema={formSchema}
		{form}
		{options}
		let:config
		method="POST"
		action="?/contact"
		class="w-2/3 space-y-6"
	>
		<Form.Field {config} name="email">
			<Form.Item>
				<Form.Label>From</Form.Label>
				<Form.Input />
				<Form.Description>Enter your email address.</Form.Description>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="subject">
			<Form.Item>
				<Form.Label>Subject</Form.Label>
				<Form.Input />
				<Form.Description>Enter the subject of your message.</Form.Description>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="body">
			<Form.Item>
				<Form.Label>Message</Form.Label>
				<Form.Textarea />
				<Form.Description>Enter the main content of your message.</Form.Description>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Button>Submit</Form.Button>
	</Form.Root>
</div>
