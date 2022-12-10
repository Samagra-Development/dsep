import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { OnStatusService } from './on_status.service';
import { OnStatusDTO } from './dto/on_status.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';

@Controller('on-status')
export class OnStatusController {
  constructor(private readonly onStatusService: OnStatusService) {}

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
    @Body() onStatusDto: OnStatusDTO,
  ) {
    console.log('in BAP onstatus');
    sendAcknowledgement(res, 'ACK');
    return this.onStatusService.handleOnStatus(onStatusDto);
  }
}
