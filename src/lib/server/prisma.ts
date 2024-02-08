import { dev } from '$app/environment';
import { PrismaClient } from '@prisma/client/';

let prisma;
if (dev) {
	if (!global.__prisma) {
		const client = new PrismaClient();
		global.__prisma = client;
	}
	prisma = global.__prisma;
} else {
	const client = new PrismaClient();
	prisma = client;
}

export default prisma as PrismaClient; // type assertion for shim
