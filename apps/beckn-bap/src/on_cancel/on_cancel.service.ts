import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { OnCancelDTO } from './dto/on_cancel.dto';

@Injectable()
export class OnCancelService {
  constructor(private readonly httpService: HttpService) {}

  async handleOnCancel(onCancelDto: OnCancelDTO) {
    // TODO: validate the on-cancel request

    return requestForwarder(
      process.env.PROXY_URI,
      onCancelDto,
      this.httpService,
    );
  }
}
