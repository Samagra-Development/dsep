import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SearchDTO } from './dto/search.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) { }

  @Post()
  create(@Body() searchDto: SearchDTO) {
    return this.searchService.create(searchDto);
  }

  /*@Get()
  findAll() {
    return this.searchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.searchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSearchDto: UpdateSearchDto) {
    return this.searchService.update(+id, updateSearchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.searchService.remove(+id);
  }*/
}
