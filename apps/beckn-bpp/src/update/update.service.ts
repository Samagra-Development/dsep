import { Injectable } from '@nestjs/common';
import { UpdateDTO } from './dto/update.dto';

@Injectable()
export class UpdateService {
  handleUpdate(updateDto: UpdateDTO) {
    const { context, message } = updateDto;
    return 'This action adds a new update';
  }

  /*findAll() {
    return `This action returns all update`;
  }

  findOne(id: number) {
    return `This action returns a #${id} update`;
  }

  update(id: number, updateUpdateDto: UpdateUpdateDto) {
    return `This action updates a #${id} update`;
  }

  remove(id: number) {
    return `This action removes a #${id} update`;
  }*/
}
