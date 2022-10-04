import { Module } from '@nestjs/common';
import { InitService } from './init.service';
import { InitController } from './init.controller';

@Module({
  controllers: [InitController],
  providers: [InitService]
})
export class InitModule {}
