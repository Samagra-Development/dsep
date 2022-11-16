import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }
  getHello(): string {
    return 'Hello World!';
  }

  async handleInitialRequest(body: any) {
    const action = body.context.action;
    // TODO: add a request validator
    switch (action) {
      case 'search':
        // forward to BG
        // body.context.bap_id = '101';
        // body.context.bap_uri = `http://${host}`;
        console.log('context in BAP search: ', body.context);
        return await requestForwarder(
          process.env.BG_URI + '/search',
          body,
          this.httpService,
        );
      case 'select':
      // if (!body.context.bpp_uri) {
      //   throw new Error('Invalid Context: bpp_uri is missing');
      // }

      // // forward to BPP
      // return await requestForwarder(
      //   body.context.bpp_uri + '/select',
      //   body,
      //   this.httpService,
      // );

      case 'init':
      // if (!body.context.bpp_uri) {
      //   throw new Error('Invalid Context: bpp_uri is missing');
      // }

      // // forward to BPP
      // return await requestForwarder(
      //   body.context.bpp_uri + '/init',
      //   body,
      //   this.httpService,
      // );
      case 'confirm':
      // if (!body.context.bpp_uri) {
      //   throw new Error('Invalid Context: bpp_uri is missing');
      // }

      // // forward to BPP
      // return await requestForwarder(
      //   body.context.bpp_uri + '/confirm',
      //   body,
      //   this.httpService,
      // );
      case 'track':
      // if (!body.context.bpp_uri) {
      //   throw new Error('Invalid Context: bpp_uri is missing');
      // }

      // return await requestForwarder(
      //   body.context.bpp_uri + '/track',
      //   body,
      //   this.httpService,
      // );
      default:
        throw new Error('Invalid action');
    }
  }
}
