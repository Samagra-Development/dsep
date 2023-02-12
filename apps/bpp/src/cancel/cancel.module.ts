import { Module } from '@nestjs/common';
import { CancelService } from './cancel.service';
import { CancelController } from './cancel.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CancelController],
  providers: [CancelService],
})
export class CancelModule {}
