import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnSearchDTO } from './dto/on_search.dto';
import { OnSearchService } from './on_search.service';

@Controller('on-search')
export class OnSearchController {
  constructor(private readonly onSearchService: OnSearchService) { }

  @Post()
  create(@Body() onSearchDto: OnSearchDTO) {
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
