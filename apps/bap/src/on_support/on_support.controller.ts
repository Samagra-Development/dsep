import { Controller, Post, Body, Res, Req } from '@nestjs/common';
import { OnSupportService } from './on_support.service';
import { OnSupportDTO } from './dto/on_support.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';

@Controller('on_support')
export class OnSupportController {
  constructor(private readonly onSupportService: OnSupportService) {}

  @Post()
  @ApiOperation({
    summary: 'validate the request from BPP and forward it to the client',
  })
  @ApiResponse({
    status: 200,
    description: 'Acknowledgement of received request',
  })
  create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() onSupportDto: OnSupportDTO,
  ) {
    console.log('in BAP onsupport');
    sendAcknowledgement(res, 'ACK');
    return this.onSupportService.handleOnSupport(onSupportDto);
  }
}
