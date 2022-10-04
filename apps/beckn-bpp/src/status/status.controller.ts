import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StatusDTO } from './dto/status.dto';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) { }

  @Post()
  create(@Body() statusDto: StatusDTO) {
    return this.statusService.create(statusDto);
  }

  /*@Get()
  findAll() {
    return this.statusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(+id, updateStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }*/
}
