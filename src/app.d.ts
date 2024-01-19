// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from "@prisma/client/edge";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	// eslint-disable-next-line no-var
	var __prisma: PrismaClient;
}

export { };

