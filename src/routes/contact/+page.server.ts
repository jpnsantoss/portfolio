import { ADMIN_EMAIL, GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/server/email.server.js';
import { fail, type Actions } from "@sveltejs/kit";
import type Mail from 'nodemailer/lib/mailer/index.js';
import { superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types";
import { formSchema } from "./schema";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(formSchema)
  };
};

export const actions: Actions = {
	contact: async (event) => {
		try {
			const form = await superValidate(event, formSchema)
			if (!form.valid) {
				return fail(400, {
					form
				});
			}
			const {email, subject, body} = form.data;

			const html = `<h2>From: ${email}</h2> <p>${body}</p>`;

			const message: Mail.Options = {
				from: GOOGLE_EMAIL,
				to: ADMIN_EMAIL,
				bcc: 'contactjpnsantos@gmail.com',
				subject: subject?.toString() ?? '',
				text: body?.toString() ?? '',
				html
			};

			const sendEmail = async (message: Mail.Options) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (error, info) => {
						if (error) {
							console.log(error);
							reject(error);
						} else {
							resolve(info);
						}
					});
				});
			};

			await sendEmail(message);
			return {
				form
			};
		} catch (error) {
			console.log(error);
			return {
				error: 'Email failed to send.'
			};
		}
	}
};
