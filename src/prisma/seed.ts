// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles

  await prisma.user.upsert({
    where: { username: 'Roman' },
    update: {},
    create: {
      username: 'Roman',
      password: '2222',
      systemRole: 'admin',
    },
  });

  await prisma.user.upsert({
    where: { username: 'Ivan' },
    update: {},
    create: {
      username: 'Ivan',
      password: '4321',
      systemRole: 'admin',
    },
  });

  await prisma.user.upsert({
    where: { username: 'Mykyta' },
    update: {},
    create: {
      username: 'Mykyta',
      password: '1234',
      systemRole: 'admin',
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
