import { Module } from '@nestjs/common';
import { OnTrackService } from './on_track.service';
import { OnTrackController } from './on_track.controller';

@Module({
  controllers: [OnTrackController],
  providers: [OnTrackService]
})
export class OnTrackModule {}
