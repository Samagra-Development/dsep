import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnConfirmService } from './on_confirm.service';
import { CreateOnConfirmDto } from './dto/create-on_confirm.dto';
import { UpdateOnConfirmDto } from './dto/update-on_confirm.dto';
import { OnConfirmDTO } from './dto/on_confirm.dto';

@Controller('on-confirm')
export class OnConfirmController {
  constructor(private readonly onConfirmService: OnConfirmService) { }

  @Post()
  create(@Body() onConfirmDto: OnConfirmDTO) {
    return this.onConfirmService.create(onConfirmDto);
  }
}
