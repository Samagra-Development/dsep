import { Injectable } from '@nestjs/common';
import { OnSearchDTO } from './dto/on_search.dto';

@Injectable()
export class OnSearchService {
  create(searchDto: OnSearchDTO) {
    const { context, message } = searchDto;
    return 'This action adds a new onSearch';
  }

  /*findAll() {
    return `This action returns all onSearch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} onSearch`;
  }

  update(id: number, updateOnSearchDto: UpdateOnSearchDto) {
    return `This action updates a #${id} onSearch`;
  }

  remove(id: number) {
    return `This action removes a #${id} onSearch`;
  }*/
}
