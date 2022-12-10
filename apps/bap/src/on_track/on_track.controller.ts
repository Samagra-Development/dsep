import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { OnTrackDTO } from './dto/on_track.dto';
import { OnTrackService } from './on_track.service';

@Controller('on-track')
export class OnTrackController {
  constructor(private readonly onTrackService: OnTrackService) {}

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
    @Body() onTrackDto: OnTrackDTO,
  ) {
    console.log('in BAP ontrack');
    sendAcknowledgement(res, 'ACK');
    return this.onTrackService.handleOnTrack(onTrackDto);
  }
}
