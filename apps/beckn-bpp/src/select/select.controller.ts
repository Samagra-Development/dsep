import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SelectDTO } from './dto/select.dto';
import { SelectService } from './select.service';

@Controller('select')
export class SelectController {
  constructor(private readonly selectService: SelectService) { }

  @Post()
  create(@Body() body) {
    return this.selectService.handleSelect(body.message);
  }
}
