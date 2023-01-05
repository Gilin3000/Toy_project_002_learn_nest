import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Cat } from '@prisma/client';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): Cat => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
