import { Controller, Get } from '@nestjs/common';
import { ClientProxyService } from './client-proxy.service';

@Controller()
export class ClientProxyController {
  constructor(private readonly clientProxyService: ClientProxyService) {}

  @Get()
  getHello(): string {
    return this.clientProxyService.getHello();
  }
}
