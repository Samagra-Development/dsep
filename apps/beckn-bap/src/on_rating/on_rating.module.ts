import { Module } from '@nestjs/common';
import { OnRatingService } from './on_rating.service';
import { OnRatingController } from './on_rating.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OnRatingController],
  providers: [OnRatingService],
})
export class OnRatingModule {}
