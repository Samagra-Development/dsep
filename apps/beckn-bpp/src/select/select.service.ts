import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { SelectDTO } from './dto/select.dto';
// import { CreateSelectDto } from './dto/create-select.dto';
// import { UpdateSelectDto } from './dto/update-select.dto';

@Injectable()
export class SelectService {
  constructor(private readonly httpService: HttpService) { }

  async handleSelect(selectDto: SelectDTO) {
    // const { context, message } = selectDto;
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: selectDto,
      redirect: 'follow',
    };
    try {
      const responseData = await lastValueFrom(
        this.httpService
          .post('http://localhost:5003/', selectDto, requestOptions)
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
