import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { generateResponse } from '../utils/utils';
import { OnConfirmDTO } from './dto/on_confirm.dto';

@Injectable()
export class OnConfirmService {
  constructor(private readonly httpService: HttpService) {}

  handleOnConfirm(onConfirmDto: OnConfirmDTO) {
    console.log(
      'onConfirmDto-------on_confirm service---------:',
      JSON.stringify(onConfirmDto, null, 1),
    );
    const response = generateResponse(onConfirmDto);

    console.log('response----------on_confirm service------:', response);

    //TODO: add endpoints for marketplace-portal-service/course-manager-service to update the data.

    return response;
  }
}
