import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OnSearchModule } from './on_search/on_search.module';
import { OnSelectModule } from './on_select/on_select.module';
import { OnInitModule } from './on_init/on_init.module';
import { OnConfirmModule } from './on_confirm/on_confirm.module';
import { OnTrackModule } from './on_track/on_track.module';
import { OnCancelModule } from './on_cancel/on_cancel.module';
import { OnUpdateModule } from './on_update/on_update.module';
import { OnStatusModule } from './on_status/on_status.module';
import { OnRatingModule } from './on_rating/on_rating.module';
import { OnSupportModule } from './on_support/on_support.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    OnSearchModule,
    OnSelectModule,
    OnInitModule,
    OnConfirmModule,
    OnTrackModule,
    OnCancelModule,
    OnUpdateModule,
    OnStatusModule,
    OnRatingModule,
    OnSupportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
