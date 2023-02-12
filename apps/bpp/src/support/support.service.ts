import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { SupportDTO } from './dto/support.dto';

@Injectable()
export class SupportService {
  constructor(private readonly httpService: HttpService) {}
  async handleSupport(supportDto: SupportDTO) {
    // TODO: validate request

    const supportResponse = await requestForwarder(
      'PROVIDER_URL',
      supportDto,
      this.httpService,
    );

    // TODO: Add auth headers in the response, check select.service.ts
    // forwarding the response back to BAP /on-support
    return await requestForwarder(
      supportDto.context.bap_uri + '/on_support',
      supportResponse,
      this.httpService,
    );
  }
}
