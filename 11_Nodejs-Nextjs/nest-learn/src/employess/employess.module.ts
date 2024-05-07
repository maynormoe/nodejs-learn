import {
  MiddlewareConsumer,
  Module,
  NestModule,
  // RequestMethod,
} from '@nestjs/common';
import { EmployessService } from './service/employess.service';
import { EmployessController } from './controller/employess.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UsersService } from 'src/users/users.service';
// import { EmployessMiddleware } from './middleware/employess.middleware';
// import { AnotherMiddleware } from './middleware/another.middleware';
// import { loggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployessController],
  providers: [EmployessService, UsersService],
  exports: [EmployessService],
})
export class EmployessModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log(consumer);
    // consumer
    //   .apply(EmployessMiddleware)
    //   // .exclude({
    //   //   path: 'employees',
    //   //   method: RequestMethod.GET,
    //   // }) 排除  employees GET 请求
    //   .forRoutes({
    //     path: 'employees',
    //     method: RequestMethod.GET,
    //   })
    //   .apply(AnotherMiddleware)
    //   .forRoutes(
    //     {
    //       path: 'employees/:id',
    //       method: RequestMethod.GET,
    //     },
    //     {
    //       path: 'employees',
    //       method: RequestMethod.GET,
    //     },
    //   )
    //   .apply(loggerMiddleware)
    //   .forRoutes(EmployessController);
  }
}
