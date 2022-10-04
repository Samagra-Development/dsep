import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CancelService } from './cancel.service';
import { CancelDTO } from './dto/cancel.dto';

@Controller('cancel')
export class CancelController {
  constructor(private readonly cancelService: CancelService) { }

  @Post()
  handleCancel(@Body() cancelDto: CancelDTO) {
    return this.cancelService.handleCancel(cancelDto);
  }

  /*@Get()
  findAll() {
    return this.cancelService.findAll();
  }
/
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cancelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCancelDto: UpdateCancelDto) {
    return this.cancelService.update(+id, updateCancelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancelService.remove(+id);
  }*/
}
