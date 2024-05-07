import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class EmployessMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('user Middleware', req.headers.authorization);
    const token = req.headers.authorization.replace('Bearer ', '');
    if (!token) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    if (token !== '123456') {
      throw new HttpException('失效的登录凭证', HttpStatus.FORBIDDEN);
    }
    next();
  }
}
