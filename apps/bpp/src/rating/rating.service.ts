import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { RatingDTO } from './dto/rating.dto';

@Injectable()
export class RatingService {
  constructor(private readonly httpService: HttpService) {}

  async handleRating(ratingDto: RatingDTO) {
    // TODO: validate request

    const ratingResponse = await requestForwarder(
      'PROVIDER_URL',
      ratingDto,
      this.httpService,
    );

    // TODO: Add logic to add auth headers in the respinse, check select.service.ts
    // forwarding the response back to BAP /on-rating
    return await requestForwarder(
      ratingDto.context.bap_uri + '/on_rating',
      ratingResponse,
      this.httpService,
    );
  }
}
