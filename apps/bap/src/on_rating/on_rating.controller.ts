import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { OnRatingService } from './on_rating.service';
import { OnRatingDTO } from './dto/on_rating.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { sendAcknowledgement } from 'utils/utils';
import { Request, Response } from 'express';

@Controller('on_rating')
export class OnRatingController {
  constructor(private readonly onRatingService: OnRatingService) {}

  @Post()
  @ApiOperation({
    summary: 'validate the request from BPP and forward it to the client',
  })
  @ApiResponse({
    status: 200,
    description: 'Acknowledgement of received request',
  })
  create(
    @Body() onRatingDto: OnRatingDTO,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log('in BAP onrating');
    sendAcknowledgement(res, 'ACK');
    return this.onRatingService.handleOnRating(onRatingDto);
  }
}
