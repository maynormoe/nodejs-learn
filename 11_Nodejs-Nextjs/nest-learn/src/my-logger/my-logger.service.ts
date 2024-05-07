import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  async logToFile(entry: string) {
    try {
      if (!fs.existsSync(path.join(__dirname, '../../logs'))) {
        await fs.promises.mkdir(path.join(__dirname, '../../logs'));
      }
      await fs.promises.appendFile(
        path.join(__dirname, '../../logs/app.log'),
        `${entry}\n`,
      );
    } catch (error) {
      if (error instanceof Error) console.log(error);
    }
  }

  log(message: any, context?: string) {
    const entry = `${this.getTimestamp()}  - [${context}] ${message}`;
    this.logToFile(entry);
    super.log(message, context);
  }

  error(message: any, stackOrContext?: string) {
    const entry = `${this.getTimestamp()}  - [${stackOrContext}] ${message}`;
    this.logToFile(entry);
    super.error(message, stackOrContext);
  }
}
