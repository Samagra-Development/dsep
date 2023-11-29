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
    console.log('confirmDto------------confirm service--:', confirmDto);
    // TODO: validate the confirm request
    if (!confirmDto.context.bap_uri)
      throw new BadRequestException(
        'Invalid context: No BAP_URI not found in context',
      );

    // forward the request to provider
    // const confirmResponse = await lastValueFrom(
    //   this.httpService
    //     .post(process.env.MOCK_API_URI + '/confirm', confirmDto)
    //     .pipe(map((item) => item.data)),
    // );
    const confirmResponse = {
      context: {
        domain: 'onest:learning-experiences',
        action: 'confirm',
        version: '1.1.0',
        bap_id: 'Ajay.esmagico.bap.test_1',
        bap_uri: 'https://ajay-bap-compass.loca.lt/',
        bpp_id: 'Ajay.esmagico.bpp.test_1',
        bpp_uri: 'https://ajay-bpp-compass.loca.lt/',
        location: {
          city: {
            name: 'Bangalore',
            code: 'std:080',
          },
          country: {
            name: 'India',
            code: 'IND',
          },
        },

        transaction_id: 'a9aaecca-10b7-4d19-b640-b047a7c62196',
        message_id: '4dc0f577-89f7-4fdb-b7e6-8e08767473f0',
        ttl: 'PT10M',
        timestamp: '2023-02-15T15:18:33.777Z',
      },
      message: {
        order: {
          provider: {
            id: 'INFOSYS',
          },
          items: [
            {
              id: 'd4975df5-b18c-4772-80ad-368669856d52',
            },
          ],
          billing: {
            name: 'Namma Yatri',
            organization: {
              address: 'Girija Building, Number 817, Ganapathi Temple Rd',
              city: 'Bengaluru',
              state: 'Karnataka',
              contact: {
                email: 'example@gmail.in',
                phone: '+91 1234567890',
              },
            },
          },
          fulfillments: [
            {
              customer: {
                person: {
                  name: 'Jhon Doe',
                },
                contact: {
                  phone: '+91 1234567890',
                  email: 'johndoe@gmail.com',
                },
              },
            },
          ],
          payments: [
            {
              params: {
                amount: '0',
                currency: 'INR',
              },
              status: 'PAID',
            },
          ],
        },
      },
    };

    // forwarding the response back to BAP /on-confirm
    confirmResponse['context']['action'] = 'on_confirm';
    try {
      const authHeader = await createAuthorizationHeader(confirmResponse).then(
        (res) => {
          console.log('bpp confirm service--189', res);
          return res;
        },
      );
      console.log(
        'auth header----------bpp confirm service--193-: ',
        authHeader,
      );

      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          authorization: authHeader,
        },
        withCredentials: true,
        mode: 'cors',
      };
      console.log('calling request forwarder --------bpp confirm service--203');
      console.log(
        'confirm repsonse before forwarding to bap -------bpp confirm service--205: ',
        confirmResponse,
      );

      confirmResponse['context']['action'] = 'on_confirm';

      return await lastValueFrom(
        this.httpService.post(
          confirmResponse.context.bap_uri + 'on_confirm',
          confirmResponse,
          requestOptions,
        ),
      );
    } catch (err) {
      console.log(
        'error in request forwarder------bpp confirm service--219: ',
        err,
      );
      return new InternalServerErrorException(err);
    }
  }
}
