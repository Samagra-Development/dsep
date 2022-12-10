import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingDTO } from './dto/rating.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

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
    @Body() ratingDto: RatingDTO,
  ) {
    sendAcknowledgement(res, 'ACK');
    return this.ratingService.handleRating(ratingDto);
  }
}
