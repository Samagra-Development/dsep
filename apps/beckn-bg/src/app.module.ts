import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { OnSearchModule } from './on_search/on_search.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SearchModule,
    OnSearchModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
