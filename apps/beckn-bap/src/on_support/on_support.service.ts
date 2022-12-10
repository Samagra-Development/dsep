import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { requestForwarder } from 'utils/utils';
import { OnSupportDTO } from './dto/on_support.dto';

@Injectable()
export class OnSupportService {
  constructor(private readonly httpService: HttpService) {}

  async handleOnSupport(onSupportDto: OnSupportDTO) {
    // TODO: validate the on-support request

    return requestForwarder(
      process.env.PROXY_URI,
      onSupportDto,
      this.httpService,
    );
  }
}
