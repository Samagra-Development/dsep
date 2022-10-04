import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OnSupportService } from './on_support.service';
import { CreateOnSupportDto } from './dto/create-on_support.dto';
import { UpdateOnSupportDto } from './dto/update-on_support.dto';

@Controller('on-support')
export class OnSupportController {
  constructor(private readonly onSupportService: OnSupportService) {}

  @Post()
  create(@Body() createOnSupportDto: CreateOnSupportDto) {
    return this.onSupportService.create(createOnSupportDto);
  }

  @Get()
  findAll() {
    return this.onSupportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.onSupportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOnSupportDto: UpdateOnSupportDto) {
    return this.onSupportService.update(+id, updateOnSupportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onSupportService.remove(+id);
  }
}
