import { Module } from '@nestjs/common';
import { OnConfirmService } from './on_confirm.service';
import { OnConfirmController } from './on_confirm.controller';

@Module({
  controllers: [OnConfirmController],
  providers: [OnConfirmService]
})
export class OnConfirmModule {}
