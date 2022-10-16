import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { SupportDTO } from './dto/support.dto';

@Injectable()
export class SupportService {
  constructor(private readonly httpService: HttpService) { }
  async create(supportDto: SupportDTO) {
    // cons0t { context, message } = supportDto;
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: supportDto,
        redirect: 'follow',
      };

      const responseData = await lastValueFrom(
        this.httpService
          .post('http://localhost:5003', supportDto, requestOptions)
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
