import { PrismaClient } from '@prisma/client';

import { insertUsers } from './users';

const client = new PrismaClient();

async function main() {
  console.log('Start seeding ... 🚀');
  console.log('--------------------------------------------------');

  console.log('--------------------------------------------------');
  console.log('Start seeding users ...🗒️');
  await insertUsers(client);
  console.log('Finish seeding users ✅');

  console.log('--------------------------------------------------');
}

main()
  .then(async () => {
    await client.$disconnect();
    console.log('Finish all seeding 🎉');
    process.exit(0);
  })
  .catch(async (err) => {
    await client.$disconnect();
    console.error(err);
    process.exit(1);
  });
