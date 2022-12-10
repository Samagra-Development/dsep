import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { OnSearchDTO } from './dto/on_search.dto';

@Injectable()
export class OnSearchService {
  constructor(private readonly httpService: HttpService) {}
  async handleOnSearch(onSearchDto: OnSearchDTO) {
    // TODO: validate the request from BPP

    return requestForwarder(
      process.env.PROXY_URI,
      onSearchDto,
      this.httpService,
    );
  }
}
