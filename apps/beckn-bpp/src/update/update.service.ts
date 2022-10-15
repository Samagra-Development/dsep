import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { UpdateDTO } from './dto/update.dto';

@Injectable()
export class UpdateService {
  constructor(private readonly httpService: HttpService) { }
  async handleUpdate(updateDto: UpdateDTO) {
    // const { context, message } = updateDto;
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: updateDto,
        redirect: 'follow',
      };

      const responseData = await lastValueFrom(
        this.httpService
          .post('http://localhost:5003', updateDto, requestOptions)
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
