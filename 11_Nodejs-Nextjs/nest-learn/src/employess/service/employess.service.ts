import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployessService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createEmployessDto: Prisma.EmployeesCreateInput) {
    const result = await this.databaseService.employees.create({
      data: createEmployessDto,
    });
    return result;
  }

  async findAll(role?: 'INTERNAL' | 'ENGINEER' | 'ADMIN') {
    console.log('执行了');
    const result = await this.databaseService.employees.findMany({
      where: {
        role,
      },
    });
    return result;
  }

  async findOne(id: number) {
    const result = await this.databaseService.employees.findUnique({
      where: {
        id,
      },
    });
    return result;
  }

  async update(id: number, updateEmployessDto: Prisma.EmployeesUpdateInput) {
    const result = await this.databaseService.employees.update({
      where: {
        id,
      },
      data: updateEmployessDto,
    });
    return result;
  }

  async remove(id: number) {
    const result = await this.databaseService.employees.delete({
      where: {
        id,
      },
    });
    return result;
  }
}
