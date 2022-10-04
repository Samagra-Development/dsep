import { Injectable } from '@nestjs/common';
import { OnTrackDTO } from './dto/on_track.dto';

@Injectable()
export class OnTrackService {
  create(onTrackDto: OnTrackDTO) {
    return 'This action adds a new onTrack';
  }
}
