import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnCancelService } from './on_cancel.service';
import { OnCancelDTO } from './dto/on_cancel.dto';

@Controller('on-cancel')
export class OnCancelController {
  constructor(private readonly onCancelService: OnCancelService) { }

  @Post()
  create(@Body() onCancelDto: OnCancelDTO) {
    return this.onCancelService.create(onCancelDto);
  }
}
