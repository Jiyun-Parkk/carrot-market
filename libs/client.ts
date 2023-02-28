import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();
client.user.create({
  data: {
    name: 'jiyun',
    email: 'jiyun@naver.com',
  },
});
// npx prisma generate
// prisma가 스키마를 확인해서 타입스크립트로 타입을 만들어준다.
// ✔ Generated Prisma Client (4.10.1 | library) to ./node_modules/@prisma/client
