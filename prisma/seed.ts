import { PrismaClient, Prisma } from './generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    password: '$2b$10$0XV//4nvecjMULZdVK4aNelyexpRHPliYKfUTCHdqsqdDlVJQt.Ta', // hashed version of "password123"
  },
  {
    name: 'Bob',
    email: 'bob@prisma.io',
    password: '$2b$10$6dQ8ap5nOSzI9aA5tl.1Bu9GO7Hd3Nv.rWvd90ARKhg4uAlr8Ywu6', // hashed version of "password456"
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();