import { Injectable } from '@nestjs/common';
import { TrackDTO } from './dto/track.dto';

@Injectable()
export class TrackService {
  handleTrack(trackDto: TrackDTO) {
    const { context, message } = trackDto;
    return 'This action adds a new track';
  }

  /*findAll() {
    return `This action returns all track`;
  }

  findOne(id: number) {
    return `This action returns a #${id} track`;
  }

  update(id: number, updateTrackDto: UpdateTrackDto) {
    return `This action updates a #${id} track`;
  }

  remove(id: number) {
    return `This action removes a #${id} track`;
  }*/
}
