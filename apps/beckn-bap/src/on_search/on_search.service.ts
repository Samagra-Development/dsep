import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { OnSearchRespDTO } from '../Resp.dto';
import { OnSearchDTO } from './dto/on_search.dto';

@Injectable()
export class OnSearchService {
  constructor(private readonly httpService: HttpService) { }
  async create(onSearchDto: OnSearchDTO) {
    // const { context, message } = onSearchDto;

    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: onSearchDto,
      redirect: 'follow',
    };

    try {
      // calling the BG
      const responseData = await lastValueFrom(
        this.httpService
          .post(process.env.PROXY_URI, onSearchDto, requestOptions)
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
