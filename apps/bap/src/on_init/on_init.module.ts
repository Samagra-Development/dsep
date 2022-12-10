import { Module } from '@nestjs/common';
import { OnInitService } from './on_init.service';
import { OnInitController } from './on_init.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OnInitController],
  providers: [OnInitService]
})
export class OnInitModule { }
