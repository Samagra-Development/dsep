import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { StatusDTO } from './dto/status.dto';

@Injectable()
export class StatusService {
  constructor(private readonly httpService: HttpService) {}
  async handleStatus(statusDto: StatusDTO) {
    // TODO: validate the request from BAP

    const statusResponse = await requestForwarder(
      'PROVIDER_URL',
      statusDto,
      this.httpService,
    );

    // forwarding the response from provider back to BAP /on-status
    return await requestForwarder(
      statusDto.context.bap_uri + '/on-status',
      statusResponse,
      this.httpService,
    );
  }
}
