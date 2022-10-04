import { Injectable } from '@nestjs/common';
import { ConfirmDTO } from './dto/confirm.dto';

@Injectable()
export class ConfirmService {
  create(confirmDto: ConfirmDTO) {
    const { context, message } = confirmDto;
    return 'This action adds a new confirm';
  }

  /*findAll() {
    return `This action returns all confirm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} confirm`;
  }

  update(id: number, updateConfirmDto: UpdateConfirmDto) {
    return `This action updates a #${id} confirm`;
  }

  remove(id: number) {
    return `This action removes a #${id} confirm`;
  }*/
}
