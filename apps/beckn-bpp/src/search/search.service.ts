import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { requestForwarder } from 'utils/utils';
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
    };
    console.log('search DTO in bpp: ', searchDto);
    try {
      const responseData = await lastValueFrom(
        this.httpService
          .post(
            process.env.MOCK_API_URI + '/courses',
            searchDto,
            requestOptions,
          )
          .pipe(
            map((response) => {
              return response.data;
            }),
          ),
      );
      const resp = {
        context: {
          ...searchDto.context,
        },
        message: {
          ...responseData,
        },
      };
      // forwarding the response back to BAP
      console.log('response data: ', responseData);
      return await requestForwarder(
        process.env.BG_URI + '/on-search',
        resp,
        this.httpService,
      );
    } catch (e) {
      console.log('error: ', e);
      throw new InternalServerErrorException();
    }
  }
}
