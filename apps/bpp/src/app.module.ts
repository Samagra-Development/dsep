import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchService } from './search/search.service';
import { SearchModule } from './search/search.module';
import { SupportModule } from './support/support.module';
import { RatingModule } from './rating/rating.module';
import { UpdateModule } from './update/update.module';
import { TrackModule } from './track/track.module';
import { StatusModule } from './status/status.module';
import { ConfirmModule } from './confirm/confirm.module';
import { InitModule } from './init/init.module';
import { SelectModule } from './select/select.module';
import { CancelModule } from './cancel/cancel.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    SearchModule,
    SelectModule,
    InitModule,
    ConfirmModule,
    StatusModule,
    TrackModule,
    CancelModule,
    UpdateModule,
    RatingModule,
    SupportModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SearchService],
})
export class AppModule {}
