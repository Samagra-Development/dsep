import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { createAuthorizationHeader } from '../utils/authBuilder';
import { ConfirmDTO } from './dto/confirm.dto';

@Injectable()
export class ConfirmService {
  constructor(private readonly httpService: HttpService) {}
  async handleConfirm(confirmDto: ConfirmDTO) {
    // TODO: validate the confirm request
    if (!confirmDto.context.bap_uri)
      throw new BadRequestException(
        'Invalid context: No BAP_URI not found in context',
      );

    // forward the request to provider
    const confirmResponse = await lastValueFrom(
      this.httpService
        .post(process.env.MOCK_API_URI + '/confirm', confirmDto)
        .pipe(map((item) => item.data)),
    );

    // forwarding the response back to BAP /on-confirm
    confirmResponse['context']['action'] = 'on_confirm';
    try {
      const authHeader = await createAuthorizationHeader(confirmResponse).then(
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
      console.log(
        'confirm repsonse before forwarding to bap: ',
        confirmResponse,
      );

      confirmResponse['context']['action'] = 'on_select';

      return await lastValueFrom(
        this.httpService.post(
          confirmResponse.context.bap_uri + 'on_confirm',
          confirmResponse,
          requestOptions,
        ),
      );
    } catch (err) {
      console.log('error in request forwarder: ', err);
      return new InternalServerErrorException(err);
    }
  }
}
