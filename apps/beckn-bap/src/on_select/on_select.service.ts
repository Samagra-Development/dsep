import { Injectable } from '@nestjs/common';
import { OnSelectDTO } from './dto/on_select.dto';

@Injectable()
export class OnSelectService {
  create(onSelectDto: OnSelectDTO) {
    return 'This action adds a new onSelect';
  }
}
