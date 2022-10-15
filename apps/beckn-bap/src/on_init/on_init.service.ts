import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { OnInitDTO } from './dto/on_init.dto';

@Injectable()
export class OnInitService {
  constructor(private readonly httpService: HttpService) { }
  async create(onInitDto: OnInitDTO) {
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: onInitDto,
        redirect: 'follow',
      };

      const responseData = await lastValueFrom(
        this.httpService
          .post('http://localhost:5003/', onInitDto, requestOptions)
          .pipe(
            map((response) => {
              return response.data;
            }),
          ),
      );

      return responseData;
    } catch (er) {
      console.log(er);
      throw new InternalServerErrorException();
    }
  }
}
