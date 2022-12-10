import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { InitDTO } from './dto/init.dto';

@Injectable()
export class InitService {
  constructor(private readonly httpService: HttpService) {}
  async handleInit(initDto: InitDTO) {
    // TODO: validate the request

    const providerURLMap = {}; // TODO: get this from registry
    const providerURL =
      providerURLMap[initDto.message.order.provider.descriptor.name];

    const initResponse = await requestForwarder(
      providerURL,
      initDto,
      this.httpService,
    );

    // forwarding the response from forwarder back to BAP /on-init
    return await requestForwarder(
      initDto.context.bap_uri + '/on-init',
      initResponse,
      this.httpService,
    );
  }
}
