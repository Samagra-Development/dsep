import { Module } from '@nestjs/common';
import { OnStatusService } from './on_status.service';
import { OnStatusController } from './on_status.controller';

@Module({
  controllers: [OnStatusController],
  providers: [OnStatusService]
})
export class OnStatusModule {}
