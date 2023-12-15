import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { OnRatingDTO } from './dto/on_rating.dto';

@Injectable()
export class OnRatingService {
  constructor(private readonly httpService: HttpService) {}

  async handleOnRating(onRatingDto: OnRatingDTO) {
    console.log(
      'onRatingDto---------on_rating service--:',
      JSON.stringify(onRatingDto, null, 1),
    );
    // TODO: validate request from BPP

    return onRatingDto?.message;
  }
}
