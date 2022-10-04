import { Injectable } from '@nestjs/common';
import { OnConfirmDTO } from './dto/on_confirm.dto';

@Injectable()
export class OnConfirmService {
  create(onConfirmDto: OnConfirmDTO) {
    return 'This action adds a new onConfirm';
  }
}
