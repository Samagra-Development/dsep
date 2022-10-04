import { Module } from '@nestjs/common';
import { OnRatingService } from './on_rating.service';
import { OnRatingController } from './on_rating.controller';

@Module({
  controllers: [OnRatingController],
  providers: [OnRatingService]
})
export class OnRatingModule {}
