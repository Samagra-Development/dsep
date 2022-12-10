import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { OnConfirmDTO } from './dto/on_confirm.dto';

@Injectable()
export class OnConfirmService {
  constructor(private readonly httpService: HttpService) {}

  async handleOnConfirm(onConfirmDto: OnConfirmDTO) {
    // TODO: validate the on-confirm request

    return requestForwarder(
      process.env.PROXY_URI,
      onConfirmDto,
      this.httpService,
    );
  }
}
