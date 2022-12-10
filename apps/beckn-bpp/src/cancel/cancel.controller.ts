import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { CancelService } from './cancel.service';
import { CancelDTO } from './dto/cancel.dto';

@Controller('cancel')
export class CancelController {
  constructor(private readonly cancelService: CancelService) {}

  @Post()
  @ApiOperation({
    summary:
      'validate the request from BAP and forward it to the all the relevant onboarded provider',
  })
  @ApiResponse({
    status: 200,
    description: 'Updated order from the provider',
  })
  handleCancel(
    @Req() req: Request,
    @Res() res: Response,
    @Body() cancelDto: CancelDTO,
  ) {
    sendAcknowledgement(res, 'ACK');
    return this.cancelService.handleCancel(cancelDto);
  }
}
