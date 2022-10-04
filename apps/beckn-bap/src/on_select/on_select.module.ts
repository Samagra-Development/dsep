import { Module } from '@nestjs/common';
import { OnSelectService } from './on_select.service';
import { OnSelectController } from './on_select.controller';

@Module({
  controllers: [OnSelectController],
  providers: [OnSelectService]
})
export class OnSelectModule {}
