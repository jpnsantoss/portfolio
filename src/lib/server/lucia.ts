import { dev } from "$app/environment";
import client from "$lib/server/prisma";
import { prisma } from "@lucia-auth/adapter-prisma";
import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";

export const auth = lucia({
	adapter: prisma(client),
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),

	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});

export type Auth = typeof auth;