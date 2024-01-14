import { dev } from '$app/environment';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

let prisma;
if (dev) {
    if (!global.__prisma) {
        const client = new PrismaClient();
        client.$extends(withAccelerate());
        global.__prisma = client;
    }
    prisma = global.__prisma;
} else {
    const client = new PrismaClient();
    client.$extends(withAccelerate());
    prisma = client;
}

export default prisma as PrismaClient; // type assertion for shim