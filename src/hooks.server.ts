import { AUTH_SECRET, GITHUB_ID, GITHUB_SECRET } from "$env/static/private";
import client from "$lib/server/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";

export const handle = SvelteKitAuth({
    adapter: PrismaAdapter(client),
    providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
    secret: AUTH_SECRET,
    trustHost: true
}) ;