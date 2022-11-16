import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientProxyService {
  getHello(): string {
    return 'Hello World!';
  }
}
