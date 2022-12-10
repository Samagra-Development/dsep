import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { StatusDTO } from './dto/status.dto';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

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
    @Body() statusDto: StatusDTO,
  ) {
    sendAcknowledgement(res, 'ACK');
    return this.statusService.handleStatus(statusDto);
  }
}
