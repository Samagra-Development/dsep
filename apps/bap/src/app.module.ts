import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OnSearchModule } from './on_search/on_search.module';
import { OnSelectModule } from './on_select/on_select.module';
import { OnConfirmModule } from './on_confirm/on_confirm.module';
import { OnTrackModule } from './on_track/on_track.module';
import { OnUpdateModule } from './on_update/on_update.module';
import { OnStatusModule } from './on_status/on_status.module';
import { OnRatingModule } from './on_rating/on_rating.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { RedisStoreModule } from './redis-store/redis-store.module';
import { FilterModule } from './filter/filter.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    OnSearchModule,
    OnSelectModule,
    OnConfirmModule,
    OnTrackModule,
    OnUpdateModule,
    OnStatusModule,
    OnRatingModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    RedisStoreModule,
    FilterModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
