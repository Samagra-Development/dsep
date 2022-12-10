import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { OnUpdateService } from './on_update.service';
import { OnUpdateDTO } from './dto/on_update.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';

@Controller('on-update')
export class OnUpdateController {
  constructor(private readonly onUpdateService: OnUpdateService) {}

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
    @Body() onUpdateDto: OnUpdateDTO,
  ) {
    console.log('in BAP onupdate');
    sendAcknowledgement(res, 'ACK');
    return this.onUpdateService.handleOnUpdate(onUpdateDto);
  }
}
