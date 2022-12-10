import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { CancelDTO } from './dto/cancel.dto';

@Injectable()
export class CancelService {
  constructor(private readonly httpService: HttpService) {}
  async handleCancel(cancelDto: CancelDTO) {
    // TODO: validate the request from BAP

    // const providerURLMap = {};
    // const providerURL =
    // providerURLMap[cancelDto.message.order.provider.descriptor.name];

    const cancelResponse = await requestForwarder(
      'PROVIDER_URL',
      cancelDto,
      this.httpService,
    );

    // forwarding the response from provider back to BAP /on-cancel
    return await requestForwarder(
      cancelDto.context.bap_uri + '/on-cancel',
      cancelResponse,
      this.httpService,
    );
  }
}
