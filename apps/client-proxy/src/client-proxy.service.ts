import { Injectable } from '@nestjs/common';
import { ClientProxyGateway } from './client-proxy.gateway';

@Injectable()
export class ClientProxyService {
  constructor(private readonly clientProxyGateway: ClientProxyGateway) { }
  getHello(): string {
    return 'Hello World!';
  }
  handleResponse(body: any) {

    this.clientProxyGateway.handleResponse(body);

    return;
  }
}
