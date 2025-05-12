import { PrismaClient } from 'prisma/generated';

const prisma = new PrismaClient();

async function main() {
  await prisma.template.deleteMany();
  await prisma.template.createMany({
    data: [
      { title: '基础模板', path: 'base', type: '常规' },
      { title: '普通模板', path: 'normal', type: '常规' },
    ],
  });
}

main()
  .then(() => {
    console.log('✅ Seed completed.');
  })
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })

  .finally(() => {
    void prisma.$disconnect();
  });
