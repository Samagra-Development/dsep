import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { UpdateDTO } from './dto/update.dto';
import { UpdateService } from './update.service';

@Controller('update')
export class UpdateController {
  constructor(private readonly updateService: UpdateService) {}

  @Post()
  @ApiOperation({
    summary:
      'validate the request from BAP and forward it to the all the relevant onboarded provider',
  })
  @ApiResponse({
    status: 200,
    description: 'Updated order from the provider',
  })
  handleUpdate(
    @Req() req: Request,
    @Res() res: Response,
    @Body() updateDto: UpdateDTO,
  ) {
    sendAcknowledgement(res, 'ACK');
    return this.updateService.handleUpdate(updateDto);
  }
}
