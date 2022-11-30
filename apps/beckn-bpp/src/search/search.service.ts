import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { requestForwarder } from 'utils/utils';
import { SearchDTO } from './dto/search.dto';

@Injectable()
export class SearchService {
  constructor(private readonly httpService: HttpService) { }

  async handleSearch(searchDto: any) {
    // const { context, message } = searchDto;

    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const provider = searchDto.message.intent.provider.descriptor.name;
    const courseMode = searchDto.message.intent.item.tags.course_mode;
    const courseDuration = searchDto.message.intent.item.tags.course_duration;
    const courseCredits = searchDto.message.intent.item.tags.course_credits;
    const courseCategory = searchDto.message.intent.category.descriptor.name;
    const query = searchDto.message.intent.item.descriptor.name;

    console.log('search DTO in bpp: ', searchDto);
    try {
      const responseData = await lastValueFrom(
        this.httpService
          .post(
            process.env.MOCK_API_URI + '/courses',
            {
              provider,
              courseMode,
              courseDuration,
              courseCredits,
              courseCategory,
              query,
            },
            requestOptions,
          )
          .pipe(
            map((response) => {
              return response.data;
            }),
          ),
      );
      console.log('responseData: ', responseData);
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
