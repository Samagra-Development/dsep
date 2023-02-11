import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { requestForwarder } from 'utils/utils';
import { createAuthorizationHeader } from '../utils/authBuilder';
import { SearchDTO } from './dto/search.dto';

@Injectable()
export class SearchService {
  constructor(private readonly httpService: HttpService) {}

  async handleSearch(searchDto: SearchDTO) {
    // TODO: Validate the search request
    // TODO: Figure out how to get the list of all onboarded providers (env vars or something else?)

    let searchResponse: any = await requestForwarder(
      process.env.MOCK_API_URI,
      searchDto,
      this.httpService,
    );
    searchResponse = searchResponse.data;
    console.log('search response: ', searchResponse);
    // add BPP ID and BPP URI in the context here
    searchResponse.context.bpp_id = 'bpp.dsep.samagra.io';
    searchResponse.context.bpp_uri = 'https://bpp.dsep.samagra.io';
    searchResponse.context.action = 'on_search';

    try {
      const authHeader = await createAuthorizationHeader(searchResponse).then(
        (res) => {
          console.log(res);
          return res;
        },
      );
      console.log('auth header: ', authHeader);

      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          authorization: authHeader,
        },
        withCredentials: true,
        mode: 'cors',
      };
      console.log('calling request forwarder');
      await lastValueFrom(
        this.httpService.post(
          searchDto.context.bap_uri + '/on_search',
          searchResponse,
          requestOptions,
        ),
      );
    } catch (err) {
      console.log('error in request forwarder: ', err);
      return new InternalServerErrorException(err);
    }
  }
}
