import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron('5 * * * * *')
  handleCron() {
    this.logger.debug('Called when the current second is 5');
  }

  @Interval(10000)
  handleInterval() {
    this.logger.debug('Called every 10 seconds');
  }
}
