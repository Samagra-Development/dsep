import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { OnStatusDTO } from './dto/on_status.dto';

@Injectable()
export class OnStatusService {
  constructor(private readonly httpService: HttpService) {}

  async handleOnStatus(onStatusDto: OnStatusDTO) {
    // TOO: validate the on-status request

    return requestForwarder(
      process.env.PROXY_URI,
      onStatusDto,
      this.httpService,
    );
  }
}
