import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { CancelDTO } from './dto/cancel.dto';

@Injectable()
export class CancelService {
  constructor(private readonly httpService: HttpService) { }
  async handleCancel(cancelDto: CancelDTO) {
    // const { context, message } = cancelDto;
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: cancelDto,
        redirect: 'follow',
      };

      const responseData = await lastValueFrom(
        this.httpService
          .post('http://localhost:5003/', cancelDto, requestOptions)
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
