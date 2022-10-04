import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UpdateDTO } from './dto/update.dto';
import { UpdateService } from './update.service';

@Controller('update')
export class UpdateController {
  constructor(private readonly updateService: UpdateService) { }

  @Post()
  handleUpdate(@Body() updateDto: UpdateDTO) {
    return this.updateService.handleUpdate(updateDto);
  }

  /*@Get()
  findAll() {
    return this.updateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.updateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUpdateDto: UpdateUpdateDto) {
    return this.updateService.update(+id, updateUpdateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.updateService.remove(+id);
  }*/
}
