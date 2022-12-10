import { Module } from '@nestjs/common';
import { OnCancelService } from './on_cancel.service';
import { OnCancelController } from './on_cancel.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OnCancelController],
  providers: [OnCancelService],
})
export class OnCancelModule {}
