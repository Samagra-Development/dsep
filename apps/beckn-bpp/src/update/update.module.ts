import { Module } from '@nestjs/common';
import { UpdateService } from './update.service';
import { UpdateController } from './update.controller';

@Module({
  controllers: [UpdateController],
  providers: [UpdateService]
})
export class UpdateModule {}
