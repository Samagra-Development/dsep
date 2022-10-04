import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnUpdateService } from './on_update.service';
import { OnUpdateDTO } from './dto/on_update.dto';

@Controller('on-update')
export class OnUpdateController {
  constructor(private readonly onUpdateService: OnUpdateService) { }

  @Post()
  create(@Body() onUpdateDto: OnUpdateDTO) {
    return this.onUpdateService.create(onUpdateDto);
  }
}
