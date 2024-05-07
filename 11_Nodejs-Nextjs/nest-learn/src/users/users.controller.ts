import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto.';
import { VerifyCreateUserPipe } from './verify-create-user/verify-create-user.pipe';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { Roles } from './decorator/role.decorator';
import { EmployessService } from 'src/employess/service/employess.service';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(
    private moduleRef: ModuleRef,
    // private lazyModuleLoader: LazyModuleLoader,
  ) {}

  private employessService: EmployessService;
  private employessService2: EmployessService;
  private userService: UsersService;
  private userService2: UsersService;

  async onModuleInit() {
    // const { UsersModule } = await import('../../src/users/users.module');
    // // 懒加载
    // const moduleRef = await this.lazyModuleLoader.load(() => UsersModule);
    // const { UsersService } = await import('../../src/users/users.service');
    // const userService = await moduleRef.get(UsersService);
    const contextId = ContextIdFactory.create();
    this.employessService = await this.moduleRef.get(EmployessService);
    this.employessService = await this.moduleRef.get(EmployessService);
    console.log(this.employessService === this.employessService2);
    this.userService = await this.moduleRef.resolve(UsersService, contextId);
    this.userService2 = await this.moduleRef.resolve(UsersService, contextId);
    console.log(this.userService === this.userService2);
    // this.userService = userService;
  }

  /**
   * 获取全部用户信息
   */
  @Get()
  @UseGuards(RoleGuard)
  @Roles(['admin'])
  findAll(@Query('name') name?: string) {
    // this.employessService.findAll();
    return this.userService.getAll(name);
  }

  /**
   *  通过id获取用户详情
   * @returns []
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  /**
   *创建用户
   */
  @Post()
  create(@Body(ValidationPipe, VerifyCreateUserPipe) user: CreateUserDto) {
    return this.userService.create(user);
  }

  /**
   * 更新用户
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) userUpdate: UpdateUserDto,
  ) {
    return this.userService.update(id, userUpdate);
  }

  /**
   * 删除
   * @param id
   * @returns
   */
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
