import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnInitService } from './on_init.service';
import { OnInitDTO } from './dto/on_init.dto';

@Controller('on-init')
export class OnInitController {
  constructor(private readonly onInitService: OnInitService) { }

  @Post()
  create(@Body() onInitDto: OnInitDTO) {
    return this.onInitService.create(onInitDto);
  }
}
