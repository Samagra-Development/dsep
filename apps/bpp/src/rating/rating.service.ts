import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { RatingDTO } from './dto/rating.dto';
import { createAuthorizationHeader } from '../utils/authBuilder';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RatingService {
  constructor(private readonly httpService: HttpService) {}

  async handleRating(ratingDto: RatingDTO) {
    // TODO: validate request

    const ratingResponse = {
      "context": {
        "domain": `${ratingDto.context.domain}`,
        "version": "1.1.0",
        "action": "on_search",
        "bap_id": `${ratingDto.context.bap_id}`,
        "bap_uri": `${ratingDto.context.bap_uri}`,
        "transaction_id": `${ratingDto.context.transaction_id}`,
        "message_id": `${ratingDto.context.message_id}`,
        "ttl": "PT10M",
        "timestamp": "2023-02-20T09:22:00.856Z",
        "bpp_id": `${ratingDto.context.bpp_id}`,
        "bpp_uri": `${ratingDto.context.bpp_uri}`
      },
      "message": {
        "ratingAck": {
          "feedback_ack": true,
          "rating_ack": true
        }
      }
    }

    // TODO: Add logic to add auth headers in the respinse, check select.service.ts
    try {
      const authHeader = await createAuthorizationHeader(ratingResponse).then(
        (res) => {
          console.log(res);
          return res;
        },
      );
      console.log('auth header: ', authHeader);

      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          authorization: authHeader,
        },
        withCredentials: true,
        mode: 'cors',
      };
      console.log('calling request forwarder');
      await lastValueFrom(
        this.httpService.post(
          ratingDto.context.bap_uri + 'on_rating',
          ratingResponse,
          requestOptions,
        ),
      );
    } catch (err) {
      console.log('error in request forwarder: ', err);
      return new InternalServerErrorException(err);
    }
    // forwarding the response back to BAP /on-rating
    return await requestForwarder(
      ratingDto.context.bap_uri + '/on_rating',
      ratingResponse,
      this.httpService,
    );
  }
}
