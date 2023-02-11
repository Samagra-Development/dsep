import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { OnSelectService } from './on_select.service';
import { OnSelectDTO } from './dto/on_select.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';

@Controller('on_select')
export class OnSelectController {
  constructor(private readonly onSelectService: OnSelectService) {}

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
    @Body() onSelectDto: OnSelectDTO,
  ) {
    console.log('in BAP onselect');
    sendAcknowledgement(res, 'ACK');

    return this.onSelectService.handleOnSelect(onSelectDto);
  }
}
