import { Controller, Post, Body } from '@nestjs/common';
import { OnSupportService } from './on_support.service';
import { OnSupportDTO } from './dto/on_support.dto';

@Controller('on-support')
export class OnSupportController {
  constructor(private readonly onSupportService: OnSupportService) { }

  @Post()
  create(@Body() onSupportDto: OnSupportDTO) {
    return this.onSupportService.create(onSupportDto);
  }
}
