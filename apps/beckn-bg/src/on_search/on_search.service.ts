import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { requestForwarder } from 'utils/utils';
import { OnSearchDTO } from './dto/on_search.dto';

@Injectable()
export class OnSearchService {
  constructor(private readonly httpService: HttpService) { }

  async create(searchDto: OnSearchDTO) {
    //  const { context, message } = searchDto;
    console.log('in BG on search');

    searchDto.context.bpp_id = '301';
    searchDto.context.bpp_uri = process.env.BPP_URI;

    try {
      requestForwarder(
        process.env.BAP_URI + '/on-search',
        searchDto,
        this.httpService,
      );
    } catch (e) {
      console.log('error: ', e);
      throw new InternalServerErrorException();
    }
  }
}
