import { Module } from '@nestjs/common';
import { OnSearchService } from './on_search.service';
import { OnSearchController } from './on_search.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OnSearchController],
  providers: [OnSearchService],
})
export class OnSearchModule { }
