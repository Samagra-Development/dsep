import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { OnConfirmDTO } from './dto/on_confirm.dto';

@Injectable()
export class OnConfirmService {
  constructor(private readonly httpService: HttpService) { }
  async create(onConfirmDto: OnConfirmDTO) {
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: onConfirmDto,
        redirect: 'follow',
      };

      const responseData = await lastValueFrom(
        this.httpService
          .post(onConfirmDto.context.bpp_uri, onConfirmDto, requestOptions)
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
