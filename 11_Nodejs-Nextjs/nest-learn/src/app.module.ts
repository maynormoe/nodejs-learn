import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployessModule } from './employess/employess.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { LoggingInterceptor } from './employess/interceptor/logging.interceptor';
import { TransformInterceptor } from './employess/interceptor/transform.interceptor';
import { ExcludeNullInterceptor } from './employess/interceptor/exclude-null.interceptor';
// import { ConfigModule } from './config/config.module';
import { ConfigModule } from '@nestjs/config';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    EmployessModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    MyLoggerModule,
    ScheduleModule.forRoot(),
    // ConfigModule.register({ folder: './config' }),
    // ConfigModule.registerAsync({
    //   useFactory: () => ({
    //     folder: './config',
    //   }),
    // }),
    ConfigModule.forRoot({
      envFilePath: './config/development.env',
      // cache: true,
    }),
    CacheModule.registerAsync({
      useFactory: () => ({
        ttl: 10000,
      }),
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ExcludeNullInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    TasksService,
  ],
})
export class AppModule {}
