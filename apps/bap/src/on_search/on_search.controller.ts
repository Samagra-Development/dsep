import { Controller, Post, Body, Res, Req, Get, HttpStatus, ParseUUIDPipe, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { OnSearchDTO } from './dto/on_search.dto';
import { OnSearchService } from './on_search.service';
import { RedisStoreService } from '../redis-store/redis-store.service';
import { CourseResponseDto } from '../filter/dto/course-response.dto';

@Controller('on_search')
export class OnSearchController {
  constructor(private readonly onSearchService: OnSearchService, private readonly redisStoreService: RedisStoreService) {}

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

  @Get('/poll/:messageId')
  @ApiOperation({
    summary: 'Api to poll search results for a specific search query(a particular messageId)'
  })
  @ApiResponse({ status: HttpStatus.OK, type: CourseResponseDto, isArray: true})
  pollSearchResults(@Param("messageId", ParseUUIDPipe) messageId: string, @Res() res) {
    const results = this.redisStoreService.pollValue(messageId);
    res.status(HttpStatus.OK).json({
      message: "New Search responses fetched",
      data: results
    });
  }
}
