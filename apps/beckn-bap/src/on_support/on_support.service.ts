import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { OnSupportDTO } from './dto/on_support.dto';

@Injectable()
export class OnSupportService {
  constructor(private readonly httpService: HttpService) { }
  async create(onSupportDto: OnSupportDTO) {
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: onSupportDto,
        redirect: 'follow',
      };

      const responseData = await lastValueFrom(
        this.httpService
          .post(onSupportDto.context.bpp_uri, onSupportDto, requestOptions)
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
