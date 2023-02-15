import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { createAuthorizationHeader } from '../utils/authBuilder';
import { InitDTO } from './dto/init.dto';

@Injectable()
export class InitService {
  constructor(private readonly httpService: HttpService) {}
  async handleInit(initDto: InitDTO) {
    // TODO: validate the request

    console.log('initDto in select: ', initDto);
    if (!initDto.context.bap_uri)
      throw new InternalServerErrorException(
        'Invalid context: No BAP_URI not found in context',
      );

    const initResponse = await lastValueFrom(
      this.httpService
        .post(process.env.MOCK_API_URI + '/init', initDto)
        .pipe(map((item) => item.data)),
    );

    // forward the response back to BAP /on_select
    try {
      const authHeader = await createAuthorizationHeader(initResponse).then(
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
      console.log('init repsonse before forwarding to bap: ', initResponse);

      initResponse['context']['action'] = 'on_init';

      return await lastValueFrom(
        this.httpService.post(
          initResponse.context.bap_uri + 'on_init',
          initResponse,
          requestOptions,
        ),
      );
    } catch (err) {
      console.log('error in request forwarder: ', err);
      return new InternalServerErrorException(err);
    }
  }
}
