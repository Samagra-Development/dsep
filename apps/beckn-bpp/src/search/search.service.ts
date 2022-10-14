import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { SearchDTO } from './dto/search.dto';

@Injectable()
export class SearchService {
  constructor(private readonly httpService: HttpService) { }

  async handleSearch(searchDto: SearchDTO) {
    // const { context, message } = searchDto;

    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: searchDto,
      redirect: 'follow',
    };

    try {
      const responseData = await lastValueFrom(
        this.httpService
          .post('http://localhost:5003/get-courses', searchDto, requestOptions)
          .pipe(
            map((response) => {
              return response.data;
            }),
          ),
      );

      return responseData;
    } catch (e) {
      console.log('error: ', e);
      throw new InternalServerErrorException();
    }
  }
}
