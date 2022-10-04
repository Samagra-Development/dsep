import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConfirmService } from './confirm.service';
import { ConfirmDTO } from './dto/confirm.dto';

@Controller('confirm')
export class ConfirmController {
  constructor(private readonly confirmService: ConfirmService) { }

  @Post()
  create(@Body() confirmDto: ConfirmDTO) {
    return this.confirmService.create(confirmDto);
  }

  /*@Get()
  findAll() {
    return this.confirmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.confirmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfirmDto: UpdateConfirmDto) {
    return this.confirmService.update(+id, updateConfirmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.confirmService.remove(+id);
  }*/
}
