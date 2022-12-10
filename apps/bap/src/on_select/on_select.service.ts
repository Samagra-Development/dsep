import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { requestForwarder } from 'utils/utils';
import { OnSelectDTO } from './dto/on_select.dto';

@Injectable()
export class OnSelectService {
  constructor(private readonly httpService: HttpService) {}

  async handleOnSelect(onSelectDto: OnSelectDTO) {
    // TODO: validate the on-select request

    return requestForwarder(
      process.env.PROXY_URI,
      onSelectDto,
      this.httpService,
    );
  }
}
