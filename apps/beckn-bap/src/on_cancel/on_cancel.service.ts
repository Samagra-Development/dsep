import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { OnCancelDTO } from './dto/on_cancel.dto';

@Injectable()
export class OnCancelService {
  constructor(private readonly httpService: HttpService) { }
  async create(onCancelDto: OnCancelDTO) {
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: onCancelDto,
        redirect: 'follow',
      };
      const responseData = await lastValueFrom(
        this.httpService
          .post(onCancelDto.context.bpp_uri, onCancelDto, requestOptions)
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
