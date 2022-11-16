import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ClientProxyService } from './client-proxy.service';

@Controller()
export class ClientProxyController {
  constructor(private readonly clientProxyService: ClientProxyService) { }

  @Get()
  getHello(): string {
    return this.clientProxyService.getHello();
  }
  @Post()
  handleBAPResponse(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: any,
  ) {
    res
      .json({
        message: {
          ack: 'ACK',
        },
      })
      .status(200);

    return this.clientProxyService.handleResponse(body);
  }
}
