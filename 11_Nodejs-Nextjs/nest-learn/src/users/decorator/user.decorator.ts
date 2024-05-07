import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx
      .switchToHttp()
      .getRequest<Request & { user: { name: string } }>();
    if (!request.user) {
      return {};
    }
    return data ? request.user[data] : request.user;
  },
);
