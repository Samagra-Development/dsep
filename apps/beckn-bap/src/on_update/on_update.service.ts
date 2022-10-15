import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { OnUpdateDTO } from './dto/on_update.dto';

@Injectable()
export class OnUpdateService {
  constructor(private readonly httpService: HttpService) { }
  async create(onUpdateDto: OnUpdateDTO) {
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: onUpdateDto,
        redirect: 'follow',
      };

      const responseData = await lastValueFrom(
        this.httpService
          .post('http://localhost:5003', onUpdateDto, requestOptions)
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
