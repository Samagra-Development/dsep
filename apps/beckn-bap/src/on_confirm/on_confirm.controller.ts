import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { OnConfirmService } from './on_confirm.service';
import { OnConfirmDTO } from './dto/on_confirm.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';

@Controller('on-confirm')
export class OnConfirmController {
  constructor(private readonly onConfirmService: OnConfirmService) {}

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
    @Body() onConfirmDto: OnConfirmDTO,
  ) {
    console.log('in BAP onconfirm');
    sendAcknowledgement(res, 'ACK');
    return this.onConfirmService.handleOnConfirm(onConfirmDto);
  }
}
