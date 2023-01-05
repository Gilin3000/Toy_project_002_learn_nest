import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Cat } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: ['query'],
    });
  }
  async onModuleInit(): Promise<void> {
    await this.$connect();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$on('info', (e) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      console.log(`${e.query} ${e.params}`);
    });
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async findCatByEmailWithoutPassword(
    email: string,
  ): Promise<Omit<Cat, 'password'>> {
    const catInfo = await this.cat.findUnique({
      where: {
        email: email,
      },
      select: {
        email: true,
        catname: true,
        imgUrl: true,
        create: true,
      },
    });
    return catInfo;
  }
}
