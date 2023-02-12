import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { createAuthorizationHeader } from '../utils/authBuilder';
import { SelectDTO } from './dto/select.dto';

@Injectable()
export class SelectService {
  constructor(private readonly httpService: HttpService) {}

  async handleSelect(selectDto: SelectDTO) {
    // TODO: validate the select request
    console.log('selectDto in select: ', selectDto);
    if (!selectDto.context.bap_uri)
      throw new InternalServerErrorException(
        'Invalid context: No BAP_URI not found in context',
      );

    const selectResponse = await lastValueFrom(
      this.httpService
        .post(process.env.MOCK_API_URI + '/select', selectDto)
        .pipe(map((item) => item.data)),
    );

    // forward the response back to BAP /on_select
    try {
      const authHeader = await createAuthorizationHeader(selectResponse).then(
        (res) => {
          console.log(res);
          return res;
        },
      );
      console.log('auth header: ', authHeader);

      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          authorization: authHeader,
        },
        withCredentials: true,
        mode: 'cors',
      };
      console.log('calling request forwarder');
      console.log('select repsonse before forwarding to bap: ', selectResponse);

      selectResponse['context']['action'] = 'on_select';

      return await lastValueFrom(
        this.httpService.post(
          selectResponse.context.bap_uri + '/on_select',
          selectResponse,
          requestOptions,
        ),
      );
    } catch (err) {
      console.log('error in request forwarder: ', err);
      return new InternalServerErrorException(err);
    }
  }
}
