import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { OnRatingDTO } from './dto/on_rating.dto';

@Injectable()
export class OnRatingService {
  constructor(private readonly httpService: HttpService) {}

  async handleOnRating(onRatingDto: OnRatingDTO) {
    // TODO: validate request from BPP

    return requestForwarder(
      process.env.PROXY_URI,
      onRatingDto,
      this.httpService,
    );
  }
}
