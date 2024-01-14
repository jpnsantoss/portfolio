// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from "@prisma/client/edge";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	// eslint-disable-next-line no-var
	var __prisma: PrismaClient;

	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type DatabaseUserAttributes = {
			username: string;
		};
		type DatabaseSessionAttributes = object;
	}
}

export { };

