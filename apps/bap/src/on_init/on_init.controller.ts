import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { OnInitService } from './on_init.service';
import { OnInitDTO } from './dto/on_init.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { sendAcknowledgement } from 'utils/utils';
import { Request, Response } from 'express';

@Controller('on_init')
export class OnInitController {
  constructor(private readonly onInitService: OnInitService) {}

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
    @Body() onInitDto: OnInitDTO,
  ) {
    console.log('in BAP oninit');
    sendAcknowledgement(res, 'ACK');
    return this.onInitService.handleOnInit(onInitDto);
  }
}
