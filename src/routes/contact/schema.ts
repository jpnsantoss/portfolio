import { z } from 'zod';
export const formSchema = z.object({
	email: z
		.string({
			required_error: 'Required.'
		})
		.email(),
	subject: z
		.string({
			required_error: 'Required.'
		})
		.min(2)
		.max(50),
	body: z
		.string({
			required_error: 'Required.'
		})
		.min(2)
});
export type FormSchema = typeof formSchema;
