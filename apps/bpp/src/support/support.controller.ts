import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { SupportService } from './support.service';
import { SupportDTO } from './dto/support.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';

@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

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
    @Body() supportDto: SupportDTO,
  ) {
    sendAcknowledgement(res, 'ACK');
    return this.supportService.handleSupport(supportDto);
  }
}
