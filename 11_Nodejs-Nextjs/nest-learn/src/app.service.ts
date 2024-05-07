import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private message: string;

  constructor(private configService: ConfigService) {
    this.message = configService.get('HELLO_MESSAGE');
  }
  getHello(): string {
    return this.message;
  }
}
