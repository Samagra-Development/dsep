import { Module } from '@nestjs/common';
import { CancelService } from './cancel.service';
import { CancelController } from './cancel.controller';

@Module({
  controllers: [CancelController],
  providers: [CancelService]
})
export class CancelModule {}
