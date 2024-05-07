import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import * as crypto from 'crypto';

@Injectable()
export class VerifyCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);

    //将名字加密
    value.name = crypto.createHash('md5').update(value.name).digest('hex');
    return value;
  }
}
