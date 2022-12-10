import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { OnUpdateDTO } from './dto/on_update.dto';

@Injectable()
export class OnUpdateService {
  constructor(private readonly httpService: HttpService) {}

  async handleOnUpdate(onUpdateDto: OnUpdateDTO) {
    // TODO: validate the request from BPP

    return requestForwarder(
      process.env.PROXY_URI,
      onUpdateDto,
      this.httpService,
    );
  }
}
