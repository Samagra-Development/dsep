import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { SearchDTO } from './dto/search.dto';
import { SearchService } from './search.service';

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
  create(@Req() req: Request, @Res() res: Response, @Body() searchDto: any) {
    searchDto.context.domain = 'dsep:courses';
    searchDto.context.action = 'search';
    searchDto.context.BPP_ID = '101';
    searchDto.context.BPP_URI = 'https://bpp.dsep.swayam.samagra.io';
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
