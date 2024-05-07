import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { MyLoggerService } from './my-logger/my-logger.service';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';

type MyResponseObj = {
  statusCode: number;
  timestamp: string;
  path: string;
  response: string | object;
};
@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  private readonly logger = new MyLoggerService(AllExceptionsFilter.name);
  catch(exception: any, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const responseBody: MyResponseObj = {
      statusCode: 500,
      timestamp: new Date().toISOString(),
      path: request.url,
      response: 'Internal server error',
    };

    if (exception instanceof HttpException) {
      responseBody.statusCode = exception.getStatus();
      responseBody.response = exception.getResponse();
    } else if (exception instanceof PrismaClientValidationError) {
      responseBody.statusCode = 422;
      responseBody.response = exception.message;
    }

    response.status(responseBody.statusCode).json(responseBody);

    this.logger.error(responseBody.response, AllExceptionsFilter.name);

    super.catch(exception, host);
  }
}
