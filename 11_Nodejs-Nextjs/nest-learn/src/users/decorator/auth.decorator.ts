import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '../guard/auth.guard';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from './role.decorator';

export function Auth(roles: string[]) {
  return applyDecorators(
    // SetMetadata('roles', roles),
    Roles(roles),
    UseGuards(AuthGuard, RoleGuard),
  );
}
