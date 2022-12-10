import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { ConfirmDTO } from './dto/confirm.dto';

@Injectable()
export class ConfirmService {
  constructor(private readonly httpSerive: HttpService) {}
  async handleConfirm(confirmDto: ConfirmDTO) {
    // TODO: validate the confirm request

    const providerURLMap = {};
    const providerURL =
      providerURLMap[confirmDto.message.order.provider.descriptor.name];
    const confirmResponse = await requestForwarder(
      providerURL,
      confirmDto,
      this.httpSerive,
    );

    // forwarding the response back to BAP /on-confirm
    return await requestForwarder(
      confirmDto.context.bap_uri + '/on-confirm',
      confirmResponse,
      this.httpSerive,
    );
  }
}
