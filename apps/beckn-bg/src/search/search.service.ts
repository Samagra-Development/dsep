import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { SearchDTO } from './dto/search.dto';

@Injectable()
export class SearchService {
  constructor(private readonly httpService: HttpService) { }

  async create(searchDto: SearchDTO) {
    console.log('in BG');
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      // forward the request to BPP for discovery
      await lastValueFrom(
        this.httpService.post(
          process.env.BPP_URI + '/search',
          searchDto,
          requestOptions,
        ),
      );
    } catch (err) {
      console.log('err: ', err);
      throw new InternalServerErrorException();
    }
  }
}
