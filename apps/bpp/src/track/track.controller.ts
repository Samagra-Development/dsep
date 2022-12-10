import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { TrackDTO } from './dto/track.dto';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

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
    @Body() trackDto: TrackDTO,
  ) {
    sendAcknowledgement(res, 'ACK');
    return this.trackService.handleTrack(trackDto);
  }
}
