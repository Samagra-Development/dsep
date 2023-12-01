import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { generateResponse } from '../utils/utils';
import { OnUpdateDTO } from './dto/on_update.dto';

@Injectable()
export class OnUpdateService {
  constructor(private readonly httpService: HttpService) {}

  async handleOnUpdate(onUpdateDto: OnUpdateDTO) {
    console.log(
      'onUpdateDto------------- on-update service------11-------:',
      JSON.stringify(onUpdateDto, null, 1),
    );
    const response = generateResponse(onUpdateDto);
    console.log('response:', response);
    return response;

    // TODO: validate the request from BPP

    // return requestForwarder(
    //   process.env.PROXY_URI,
    //   onUpdateDto,
    //   this.httpService,
    // );
  }
}
