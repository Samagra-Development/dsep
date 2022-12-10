import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { SelectDTO } from './dto/select.dto';
import { SelectService } from './select.service';

@Controller('select')
export class SelectController {
  constructor(private readonly selectService: SelectService) {}

  @Post()
  @ApiOperation({
    summary:
      'validate the request from BAP and forward it to the all the relevant onboarded provider',
  })
  @ApiResponse({
    status: 200,
    description: 'Updated order from the provider',
  })
  create(@Req() req: Request, @Res() res: Response, @Body() body) {
    sendAcknowledgement(res, 'ACK');
    return this.selectService.handleSelect(body.message);
  }
}
