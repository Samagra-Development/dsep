import { Module } from '@nestjs/common';
import { ClientProxyController } from './client-proxy.controller';
import { ClientProxyService } from './client-proxy.service';
import { ClientProxyGateway } from './client-proxy.gateway';

@Module({
  imports: [],
  controllers: [ClientProxyController],
  providers: [ClientProxyService, ClientProxyGateway],
})
export class ClientProxyModule {}
