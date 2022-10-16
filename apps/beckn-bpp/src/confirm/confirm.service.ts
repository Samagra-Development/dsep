import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { ConfirmDTO } from './dto/confirm.dto';

@Injectable()
export class ConfirmService {
  constructor(private readonly httpSerive: HttpService) { }
  async create(confirmDto: ConfirmDTO) {
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: confirmDto,
        redirect: 'follow',
      };

      const responseData = await lastValueFrom(
        this.httpSerive
          .post('http://localhost:5003/', confirmDto, requestOptions)
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
