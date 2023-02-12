import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello() {
    return { status: 'All services running' };
  }
}
