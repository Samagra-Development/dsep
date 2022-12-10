import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { OnInitDTO } from './dto/on_init.dto';

@Injectable()
export class OnInitService {
  constructor(private readonly httpService: HttpService) {}

  async handleOnInit(onInitDto: OnInitDTO) {
    // TODO: validate the on-init request

    return requestForwarder(process.env.PROXY_URL, onInitDto, this.httpService);
  }
}
