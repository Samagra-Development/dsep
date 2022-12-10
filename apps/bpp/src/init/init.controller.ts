import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { InitDTO } from './dto/init.dto';
import { InitService } from './init.service';

@Controller('init')
export class InitController {
  constructor(private readonly initService: InitService) {}

  @Post()
  @ApiOperation({
    summary:
      'validate the request from BAP and forward it to the all the relevant onboarded provider',
  })
  @ApiResponse({
    status: 200,
    description: 'Updated order from the provider',
  })
  create(@Req() req: Request, @Res() res: Response, @Body() initDto: InitDTO) {
    sendAcknowledgement(res, 'ACK');
    return this.initService.handleInit(initDto);
  }
}
