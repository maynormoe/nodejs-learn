import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MyLoggerService } from './my-logger/my-logger.service';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { loggerMiddleware } from './employess/middleware/logger.middleware';
// import { LoggingInterceptor } from './employess/interceptor/logging.interceptor';
// import { TransformInterceptor } from './employess/interceptor/transform.interceptor';
// import { ExcludeNullInterceptor } from './employess/interceptor/exclude-null.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const { httpAdapter } = app.get(HttpAdapterHost);

  app.use(loggerMiddleware);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useLogger(app.get(MyLoggerService));
  // app.useGlobalInterceptors(
  //   new LoggingInterceptor(),
  //   new TransformInterceptor(),
  //   new ExcludeNullInterceptor(),
  // );

  await app.listen(3000);
}
bootstrap();
