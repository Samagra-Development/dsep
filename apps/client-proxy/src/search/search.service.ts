import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { contextGenerator, intentGenerator } from 'utils/generators';
import { DSEP_SEARCH_FILTER } from 'utils/types';
import { requestForwarder } from 'utils/utils';

@Injectable()
export class SearchService {
  constructor(private readonly httpService: HttpService) { }

  async handleSearchEvent(
    transactionId: string,
    searchPayload: DSEP_SEARCH_FILTER,
  ) {
    const msg = intentGenerator(searchPayload);
    console.log('generated intent: ', msg);
    const payload = {
      context: contextGenerator(
        transactionId,
        'search',
        process.env.BAP_URI,
        '101',
      ),
      message: msg,
    };
    console.log('process.env.BAP_URI: ', process.env.BAP_URI);
    return await requestForwarder(
      process.env.BAP_URI,
      payload,
      this.httpService,
    );
  }
}
