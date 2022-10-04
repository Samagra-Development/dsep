import { Injectable } from '@nestjs/common';
import { StatusDTO } from './dto/status.dto';

@Injectable()
export class StatusService {
  create(statusDto: StatusDTO) {
    const { context, message } = statusDto;
    return 'This action adds a new status';
  }

  /*findAll() {
    return `This action returns all status`;
  }

  findOne(id: number) {
    return `This action returns a #${id} status`;
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return `This action updates a #${id} status`;
  }

  remove(id: number) {
    return `This action removes a #${id} status`;
  }*/
}
