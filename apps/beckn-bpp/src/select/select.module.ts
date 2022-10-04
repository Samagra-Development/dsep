import { Module } from '@nestjs/common';
import { SelectService } from './select.service';
import { SelectController } from './select.controller';

@Module({
  controllers: [SelectController],
  providers: [SelectService],
})
export class SelectModule { }
