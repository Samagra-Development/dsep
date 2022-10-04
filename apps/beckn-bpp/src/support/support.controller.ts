import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SupportService } from './support.service';
import { SupportDTO } from './dto/support.dto';

@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) { }

  @Post()
  create(@Body() supportDto: SupportDTO) {
    return this.supportService.create(supportDto);
  }

  /*@Get()
  findAll() {
    return this.supportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupportDto: UpdateSupportDto) {
    return this.supportService.update(+id, updateSupportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supportService.remove(+id);
  }*/
}
