import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { OrderConfirmationPayload, generateResponse } from '../utils/utils';
import { OnConfirmDTO } from './dto/on_confirm.dto';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class OnConfirmService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async handleOnConfirm(onConfirmDto: OnConfirmDTO) {
    console.log(
      'onConfirmDto-------on_confirm service---------:',
      JSON.stringify(onConfirmDto, null, 1),
    );
    const response: OrderConfirmationPayload = generateResponse(onConfirmDto);

    console.log('response----------on_confirm service------:', response);

    const marketPlaceServiceUrl = this.configService.get<string>(
      'MARKETPLACE_PORTAL_SERVICE_URL',
    );

    let url: string;

    // Check if marketPlaceServiceUrl ends with a forward slash or not
    if (marketPlaceServiceUrl.endsWith('/')) {
      url = `${marketPlaceServiceUrl}api/consumer/course/update-purchase/confirm`;
    } else {
      url = `${marketPlaceServiceUrl}/api/consumer/course/update-purchase/confirm`;
    }

    const { data } = await axios.patch(url, response);

    return data;
  }
}
