import { Module } from '@nestjs/common';
import { OnStatusService } from './on_status.service';
import { OnStatusController } from './on_status.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OnStatusController],
  providers: [OnStatusService],
})
export class OnStatusModule {}
