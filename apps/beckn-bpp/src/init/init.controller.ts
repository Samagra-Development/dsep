import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InitDTO } from './dto/init.dto';
import { InitService } from './init.service';

@Controller('init')
export class InitController {
  constructor(private readonly initService: InitService) { }

  @Post()
  create(@Body() initDto: InitDTO) {
    return this.initService.handleInit(initDto);
  }

  /*@Get()
  findAll() {
    return this.initService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.initService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInitDto: UpdateInitDto) {
    return this.initService.update(+id, updateInitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.initService.remove(+id);
  }*/
}
