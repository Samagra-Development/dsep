import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { OnRatingDTO } from './dto/on_rating.dto';

@Injectable()
export class OnRatingService {
  constructor(private readonly httpService: HttpService) { }
  async create(onRatingDto: OnRatingDTO) {
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: onRatingDto,
        redirect: 'follow',
      };

      const responseData = await lastValueFrom(
        this.httpService
          .post(onRatingDto.context.bpp_uri, onRatingDto, requestOptions)
          .pipe(
            map((response) => {
              return response.data;
            }),
          ),
      );

      return responseData;
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }
}
