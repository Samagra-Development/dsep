import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { sendAcknowledgement } from 'utils/utils';
import { SearchDTO } from './dto/search.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  @ApiOperation({
    summary: 'validate the request from BAP and forward it to BPP',
  })
  @ApiResponse({
    status: 200,
    description: 'Acknowledgement of received request',
  })
  create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() searchDto: SearchDTO,
  ) {
    sendAcknowledgement(res, 'ACK');
    return this.searchService.handleSearch(searchDto);
  }
}
