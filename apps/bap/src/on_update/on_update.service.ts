import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { OrderConfirmationPayload, generateResponse } from '../utils/utils';
import { OnUpdateDTO } from './dto/on_update.dto';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class OnUpdateService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async handleOnUpdate(onUpdateDto: OnUpdateDTO) {
    console.log(
      'onUpdateDto------------- on-update service------11-------:',
      JSON.stringify(onUpdateDto, null, 1),
    );
    const response: OrderConfirmationPayload = generateResponse(onUpdateDto);
    console.log('response onUpdateDto------:', response);

    const marketPlaceServiceUrl = this.configService.get<string>(
      'MARKETPLACE_PORTAL_SERVICE_URL',
    );

    let url: string;

    // Check if marketPlaceServiceUrl ends with a forward slash or not
    if (marketPlaceServiceUrl.endsWith('/')) {
      url = `${marketPlaceServiceUrl}api/consumer/course/complete`;
    } else {
      url = `${marketPlaceServiceUrl}/api/consumer/course/complete`;
    }

    const { data } = await axios.patch(url, response);

    return data;

    // TODO: validate the request from BPP

    // return requestForwarder(
    //   process.env.PROXY_URI,
    //   onUpdateDto,
    //   this.httpService,
    // );
  }
}
