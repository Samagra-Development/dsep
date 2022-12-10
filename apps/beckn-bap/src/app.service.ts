import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async handleInitialRequest(body: any) {
    const action = body.context.action;
    // TODO: add a request validator
    switch (action) {
      case 'search':
        console.log('body in BAP search: ', body);
        // forward to BG
        return requestForwarder(
          process.env.BG_URI + '/search',
          body,
          this.httpService,
        );
      case 'select':
      case 'init':
      case 'confirm':
      case 'track':
      case 'update':
      case 'cancel':
      case 'rate':
      case 'support':
      case 'status':
        if (!body.context.bpp_uri) {
          throw new Error('Invalid Context: bpp_uri is missing');
        }

        // forward to BPP
        return requestForwarder(
          body.context.bpp_uri + `/${action}`,
          body,
          this.httpService,
        );

      default:
        throw new Error('Invalid action');
    }
  }
}
