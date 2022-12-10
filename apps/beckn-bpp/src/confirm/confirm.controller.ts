import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { ConfirmService } from './confirm.service';
import { ConfirmDTO } from './dto/confirm.dto';

@Controller('confirm')
export class ConfirmController {
  constructor(private readonly confirmService: ConfirmService) {}

  @Post()
  @ApiOperation({
    summary:
      'validate the request from BAP and forward it to the all the relevant onboarded provider',
  })
  @ApiResponse({
    status: 200,
    description: 'Updated order from the provider',
  })
  create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() confirmDto: ConfirmDTO,
  ) {
    sendAcknowledgement(res, 'ACK');
    return this.confirmService.handleConfirm(confirmDto);
  }
}
