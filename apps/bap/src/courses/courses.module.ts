import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { HttpModule } from '@nestjs/axios';
import { FilterService } from '../filter/filter.service';
import { RedisStoreService } from '../redis-store/redis-store.service';

@Module({
  imports: [HttpModule],
  providers: [CoursesService, FilterService, RedisStoreService],
  controllers: [CoursesController],
})
export class CoursesModule {}
