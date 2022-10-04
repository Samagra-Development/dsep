import { Injectable } from '@nestjs/common';
import { OnInitDTO } from './dto/on_init.dto';

@Injectable()
export class OnInitService {
  create(onInitDto: OnInitDTO) {
    return 'This action adds a new onInit';
  }
}
