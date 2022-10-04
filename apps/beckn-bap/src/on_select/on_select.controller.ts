import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnSelectService } from './on_select.service';
import { OnSelectDTO } from './dto/on_select.dto';

@Controller('on-select')
export class OnSelectController {
  constructor(private readonly onSelectService: OnSelectService) { }

  @Post()
  create(@Body() onSelectDto: OnSelectDTO) {
    return this.onSelectService.create(onSelectDto);
  }
}
