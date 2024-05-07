import { Injectable, Scope } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto.';
import { CreateUserDto } from './dto/create-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: '张三',
    },
    {
      id: 2,
      name: '李四',
    },
  ];

  getAll(name?: string) {
    let userVal = this.users;
    if (name) {
      userVal = userVal.filter((user) => user.name === name);
    }
    return userVal;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    // 如果用户不存在，抛出异常
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const userVal = this.users;
    const newUser = {
      id: userVal.length + 1,
      ...createUserDto,
    };
    userVal.push(newUser);
    return userVal;
  }

  update(userId: string, updateUserDto: UpdateUserDto) {
    let userVal = this.users as { id: number; name?: string }[];
    userVal = userVal.map((user) => {
      if (userId === user.id.toString()) {
        return {
          id: user.id,
          ...updateUserDto,
        };
      }
      return user;
    });
    return userVal.find((user) => user.id.toString() === userId);
  }

  delete(userId: number) {
    // const userVal = this.users;
    const rmUser = this.findOne(userId);
    this.users.filter((user) => user.id !== userId);
    return rmUser;
  }
}
