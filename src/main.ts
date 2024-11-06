import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  await prisma.users.create({
    data: {
      username: `ealexandrohin`,
      bio: `yo`
    }
  });

  await prisma.users.create({
    data: {
      username: `yaroslavgarin`,
      bio: `privet`
    }
  });

  await prisma.follows.create({
    data: {
      from: 2,
      to: 1
    }
  });

  await prisma.users.update({
    where: {
      id: 1
    },
    data: {
      followers: {increment: 1}
    }
  });

  await prisma.users.update({
    where: {
      id: 2
    },
    data: {
      follows: {increment: 1}
    }
  });

  await prisma.users.findMany()
  .then((result) => {
    console.log(result);
  });

  await prisma.follows.findMany()
  .then((result) => {
    console.log(result);
  });
})();