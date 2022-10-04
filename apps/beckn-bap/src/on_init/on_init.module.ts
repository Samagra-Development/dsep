import { Module } from '@nestjs/common';
import { OnInitService } from './on_init.service';
import { OnInitController } from './on_init.controller';

@Module({
  controllers: [OnInitController],
  providers: [OnInitService]
})
export class OnInitModule {}
