import { Module } from '@nestjs/common';
import { OnSearchService } from './on_search.service';
import { OnSearchController } from './on_search.controller';
import { HttpModule } from '@nestjs/axios';
import { FilterModule } from '../filter/filter.module';
import { RedisStoreModule } from '../redis-store/redis-store.module';

@Module({
  imports: [HttpModule, FilterModule, RedisStoreModule],
  controllers: [OnSearchController],
  providers: [OnSearchService],
})
export class OnSearchModule { }
