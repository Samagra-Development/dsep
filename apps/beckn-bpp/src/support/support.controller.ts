import { Controller, Post, Body } from '@nestjs/common';
import { SupportService } from './support.service';
import { SupportDTO } from './dto/support.dto';

@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) { }

  @Post()
  create(@Body() supportDto: SupportDTO) {
    return this.supportService.create(supportDto);
  }
}
