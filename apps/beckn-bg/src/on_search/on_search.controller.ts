import { Controller, Post, Body, Res, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { OnSearchDTO } from './dto/on_search.dto';
import { OnSearchService } from './on_search.service';

@Controller('on-search')
export class OnSearchController {
  constructor(private readonly onSearchService: OnSearchService) {}

  @Post()
  @ApiOperation({
    summary: 'validate the request from BPP and forward it to BAP',
  })
  @ApiResponse({
    status: 200,
    description: 'Acknowledgement of received request',
  })
  create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() onSearchDto: OnSearchDTO,
  ) {
    sendAcknowledgement(res, 'ACK');
    return this.onSearchService.handleOnSearch(onSearchDto);
  }
}
