import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { RedisStoreService } from '../redis-store/redis-store.service';
import { OnSearchDTO } from './dto/on_search.dto';
import { OnSearchService } from './on_search.service';

@Controller('on_search')
export class OnSearchController {
  constructor(
    private readonly onSearchService: OnSearchService,
    private readonly redisStoreService: RedisStoreService,
  ) {}

  @Post()
  @ApiOperation({
    summary:
      'validate the on-search request from BPP with the catalogue and forward it to the client',
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
    console.log('in BAP onsearch');
    console.log('headers', req.headers);
    sendAcknowledgement(res, 'ACK');
    return this.onSearchService.handleOnSearch(onSearchDto);
  }
}
