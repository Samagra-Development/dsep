import { Injectable } from '@nestjs/common';
import { CreateOnSupportDto } from './dto/create-on_support.dto';
import { UpdateOnSupportDto } from './dto/update-on_support.dto';

@Injectable()
export class OnSupportService {
  create(createOnSupportDto: CreateOnSupportDto) {
    return 'This action adds a new onSupport';
  }

  findAll() {
    return `This action returns all onSupport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} onSupport`;
  }

  update(id: number, updateOnSupportDto: UpdateOnSupportDto) {
    return `This action updates a #${id} onSupport`;
  }

  remove(id: number) {
    return `This action removes a #${id} onSupport`;
  }
}
