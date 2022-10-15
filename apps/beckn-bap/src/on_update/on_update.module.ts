import { Module } from '@nestjs/common';
import { OnUpdateService } from './on_update.service';
import { OnUpdateController } from './on_update.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OnUpdateController],
  providers: [OnUpdateService],
})
export class OnUpdateModule { }
