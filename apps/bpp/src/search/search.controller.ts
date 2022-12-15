import { Controller, Post, Body, Res, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { SearchService } from './search.service';
import { SearchDTO } from './dto/search.dto';

@Controller('search')
export default class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  @ApiOperation({
    summary:
      'validate the request from BG and forward it to the all the relevant onboarded providers',
  })
  @ApiResponse({
    status: 200,
    description: 'Product catalogue for the search request',
  })
  create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() searchDto: SearchDTO,
  ) {
    searchDto.context.domain = 'dsep:courses';
    searchDto.context.action = 'search';
    searchDto.context.bpp_id = 'bpp.dsep.samagra.io';
    searchDto.context.bpp_uri = 'https://bpp.dsep.samagra.io';
    res
      .json({
        context: searchDto.context,
        message: {
          ack: 'ACK',
        },
      })
      .status(200);
    return this.searchService.handleSearch(searchDto);
  }
}
