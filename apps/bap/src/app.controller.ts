import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post()
  // handleInitialRequest(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Body() body: any,
  // ) {
  //   console.log('Request Received in BAP Initial Request Controller');
  //   res
  //     .json({
  //       message: {
  //         ack: 'ACK',
  //       },
  //     })
  //     .status(200);

  //   return this.appService.handleInitialRequest(body);
  // }
}
