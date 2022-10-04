import { Injectable } from '@nestjs/common';
import { OnUpdateDTO } from './dto/on_update.dto';

@Injectable()
export class OnUpdateService {
  create(onUpdateDto: OnUpdateDTO) {
    return 'This action adds a new onUpdate';
  }
}
