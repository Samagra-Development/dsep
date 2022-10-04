import { Injectable } from '@nestjs/common';
import { SupportDTO } from './dto/support.dto';

@Injectable()
export class SupportService {
  create(supportDto: SupportDTO) {
    const { context, message } = supportDto;
    return 'This action adds a new support';
  }

  /*findAll() {
    return `This action returns all support`;
  }

  findOne(id: number) {
    return `This action returns a #${id} support`;
  }

  update(id: number, updateSupportDto: UpdateSupportDto) {
    return `This action updates a #${id} support`;
  }

  remove(id: number) {
    return `This action removes a #${id} support`;
  }*/
}
