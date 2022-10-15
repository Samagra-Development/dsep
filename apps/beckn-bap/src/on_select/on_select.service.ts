import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { OnSelectDTO } from './dto/on_select.dto';

@Injectable()
export class OnSelectService {
  constructor(private readonly httpService: HttpService) { }

  async create(onSelectDto: OnSelectDTO) {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: onSelectDto,
      redirect: 'follow',
    };

    try {
      const responseData = await lastValueFrom(
        this.httpService
          .post(onSelectDto.context.bpp_uri, onSelectDto, requestOptions)
          .pipe(
            map((response) => {
              return response.data;
            }),
          ),
      );

      return responseData;
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }
}
