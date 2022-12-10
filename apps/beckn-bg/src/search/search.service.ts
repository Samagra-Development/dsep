import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { requestForwarder } from 'utils/utils';
import { SearchDTO } from './dto/search.dto';

@Injectable()
export class SearchService {
  constructor(private readonly httpService: HttpService) {}

  async handleSearch(searchDto: SearchDTO) {
    console.log('in BG');
    // TODO: Add request validation

    // forward the request to BPP for discovery
    return requestForwarder(
      process.env.BPP_URI + '/search',
      searchDto,
      this.httpService,
    );
  }
}
