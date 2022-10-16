import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { RatingDTO } from './dto/rating.dto';

@Injectable()
export class RatingService {
  constructor(private readonly httpService: HttpService) { }

  async create(ratingDto: RatingDTO) {
    // const { context, message } = ratingDto;
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: ratingDto,
        redirect: 'follow',
      };

      const responseData = await lastValueFrom(
        this.httpService
          .post('http://localhost:5003/', ratingDto, requestOptions)
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
