import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { OnTrackDTO } from './dto/on_track.dto';

@Injectable()
export class OnTrackService {
  constructor(private readonly httpService: HttpService) {}

  async handleOnTrack(onTrackDto: OnTrackDTO) {
    // TODO: validate the on-confirm request

    return requestForwarder(
      process.env.PROXY_URI,
      onTrackDto,
      this.httpService,
    );
  }
}
