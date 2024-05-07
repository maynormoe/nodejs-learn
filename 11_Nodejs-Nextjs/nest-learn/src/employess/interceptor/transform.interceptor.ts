import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import type { Response as HttpResponse } from 'express';
import { map } from 'rxjs';

export interface Response<T> {
  code: number;
  data: T;
  message: string;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  async intercept(context: ExecutionContext, next: CallHandler) {
    console.log(context.getType()); // http
    const [req, res] = context.getArgs();
    const request = context.getArgByIndex(0);
    const response = context.getArgByIndex(1);
    console.log(req, res, request, response);
    const methodName = context.getHandler().name; // findAll() 方法名
    const className = context.getClass().name;
    console.log(className); // "Controller Name"
    console.log(methodName);
    return await next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse<HttpResponse>();
        const res = {
          code: response.statusCode,
          data: data,
          message: 'success',
        };
        return res;
      }),
    );
  }
}
