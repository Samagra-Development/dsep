import { Injectable } from '@nestjs/common';
import { CancelDTO } from './dto/cancel.dto';

@Injectable()
export class CancelService {
  handleCancel(cancelDto: CancelDTO) {
    const { context, message } = cancelDto;
    return 'This action adds a new cancel';
  }

  /*findAll() {
    return `This action returns all cancel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cancel`;
  }

  update(id: number, updateCancelDto: UpdateCancelDto) {
    return `This action updates a #${id} cancel`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancel`;
  }*/
}
