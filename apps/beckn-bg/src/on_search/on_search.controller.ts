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
import { Request, Response } from 'express';
import { OnSearchDTO } from './dto/on_search.dto';
import { OnSearchService } from './on_search.service';

@Controller('on-search')
export class OnSearchController {
  constructor(private readonly onSearchService: OnSearchService) { }

  @Post()
  create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() onSearchDto: OnSearchDTO,
  ) {
    res
      .json({
        message: {
          ack: 'ACK',
        },
      })
      .status(200);
    return this.onSearchService.create(onSearchDto);
  }

  /*@Get()
  findAll() {
    return this.onSearchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.onSearchService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOnSearchDto: UpdateOnSearchDto,
  ) {
    return this.onSearchService.update(+id, updateOnSearchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onSearchService.remove(+id);
  }*/
}
