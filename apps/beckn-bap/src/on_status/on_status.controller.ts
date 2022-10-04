import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnStatusService } from './on_status.service';
import { CreateOnStatusDto } from './dto/create-on_status.dto';
import { UpdateOnStatusDto } from './dto/update-on_status.dto';
import { OnStatusDTO } from './dto/on_status.dto';

@Controller('on-status')
export class OnStatusController {
  constructor(private readonly onStatusService: OnStatusService) { }

  @Post()
  create(@Body() onStatusDto: OnStatusDTO) {
    return this.onStatusService.create(onStatusDto);
  }
}
