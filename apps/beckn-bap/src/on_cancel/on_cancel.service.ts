import { Injectable } from '@nestjs/common';
import { OnCancelDTO } from './dto/on_cancel.dto';

@Injectable()
export class OnCancelService {
  create(onCancelDto: OnCancelDTO) {
    return 'This action adds a new onCancel';
  }
}
