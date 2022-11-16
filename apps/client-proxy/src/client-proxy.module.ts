import { Module } from '@nestjs/common';
import { ClientProxyController } from './client-proxy.controller';
import { ClientProxyService } from './client-proxy.service';
import { ClientProxyGateway } from './client-proxy.gateway';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from './search/search.module';
import { SearchService } from './search/search.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SearchModule,
  ],
  controllers: [ClientProxyController],
  providers: [ClientProxyService, ClientProxyGateway, SearchService],
})
export class ClientProxyModule { }
