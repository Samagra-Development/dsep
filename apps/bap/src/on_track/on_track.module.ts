import { Module } from '@nestjs/common';
import { OnTrackService } from './on_track.service';
import { OnTrackController } from './on_track.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OnTrackController],
  providers: [OnTrackService],
})
export class OnTrackModule {}
