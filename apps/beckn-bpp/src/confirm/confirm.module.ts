import { Module } from '@nestjs/common';
import { ConfirmService } from './confirm.service';
import { ConfirmController } from './confirm.controller';

@Module({
  controllers: [ConfirmController],
  providers: [ConfirmService]
})
export class ConfirmModule {}
