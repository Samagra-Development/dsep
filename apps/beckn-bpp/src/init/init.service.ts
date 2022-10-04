import { Injectable } from '@nestjs/common';
import { InitDTO } from './dto/init.dto';

@Injectable()
export class InitService {
  handleInit(initDto: InitDTO) {
    const { context, message } = initDto;
    return 'This action adds a new init';
  }

  /*findAll() {
    return `This action returns all init`;
  }

  findOne(id: number) {
    return `This action returns a #${id} init`;
  }

  update(id: number, updateInitDto: UpdateInitDto) {
    return `This action updates a #${id} init`;
  }

  remove(id: number) {
    return `This action removes a #${id} init`;
  }*/
}
