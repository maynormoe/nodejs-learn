import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Ip,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { EmployessService } from '../service/employess.service';
// import { CreateEmployessDto } from './dto/create-employess.dto';
import { Prisma } from '@prisma/client';
import { Throttle, SkipThrottle } from '@nestjs/throttler';
import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { User } from 'src/users/decorator/user.decorator';
// import { AuthGuard } from 'src/users/guard/auth.guard';
import { Auth } from 'src/users/decorator/auth.decorator';
import { UsersService } from 'src/users/users.service';

// @SkipThrottle() // 跳过限流为整个控制器
@Controller('employees')
// @UseInterceptors(CacheInterceptor)
export class EmployessController {
  constructor(
    private employessService: EmployessService,
    private userService: UsersService,
  ) {}
  private readonly logger = new MyLoggerService(EmployessController.name);

  async onModuleInit() {
    console.log(`The module has been initialized.`);
  }

  @Post()
  create(@Body() createEmployessDto: Prisma.EmployeesCreateInput) {
    console.log(this.userService.getAll());
    return this.employessService.create(createEmployessDto);
  }

  @Get()
  @SkipThrottle({ default: false }) // 跳过限流为端点
  // @Roles(['admin'])
  @Auth(['admin'])
  async findAll(
    @Ip() ip: string,
    @User('name') name: string,
    @Query('role') role?: 'INTERNAL' | 'ENGINEER' | 'ADMIN',
  ) {
    console.log(`Request from ${ip} ${name}`);
    this.logger.log(`Request from ${ip} ${name}`);
    const res = await this.employessService.findAll(role);
    // await this.cacheManager.set('employees', res, 0); 储存缓存
    return res;
  }

  @Get(':id')
  @Throttle({ short: { ttl: 1000, limit: 1 } }) // 限流为端点
  findOne(@Param('id') id: string) {
    return this.employessService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployessDto: Prisma.EmployeesUpdateInput,
  ) {
    return this.employessService.update(+id, updateEmployessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employessService.remove(+id);
  }
}
