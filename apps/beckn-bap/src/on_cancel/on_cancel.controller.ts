import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { OnCancelService } from './on_cancel.service';
import { OnCancelDTO } from './dto/on_cancel.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';

@Controller('on-cancel')
export class OnCancelController {
  constructor(private readonly onCancelService: OnCancelService) {}

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
    @Body() onCancelDto: OnCancelDTO,
  ) {
    console.log('in BAP oncancel');
    sendAcknowledgement(res, 'ACK');

    return this.onCancelService.handleOnCancel(onCancelDto);
  }
}
