import { Module } from '@nestjs/common';
import { OnSupportService } from './on_support.service';
import { OnSupportController } from './on_support.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OnSupportController],
  providers: [OnSupportService],
})
export class OnSupportModule {}
