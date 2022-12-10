import { Module } from '@nestjs/common';
import { SelectService } from './select.service';
import { SelectController } from './select.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SelectController],
  providers: [SelectService],
})
export class SelectModule { }
