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
}
