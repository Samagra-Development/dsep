import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { OnSearchDTO } from './dto/on_search.dto';

@Injectable()
export class OnSearchService {
  constructor(private readonly httpService: HttpService) { }

  async create(searchDto: OnSearchDTO) {
    //  const { context, message } = searchDto;

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
          .post('http://localhost:5002/search', searchDto, requestOptions)
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
