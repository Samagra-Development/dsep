import { Injectable } from '@nestjs/common';
import { SearchDTO } from './dto/search.dto';

@Injectable()
export class SearchService {
  create(searchDto: SearchDTO) {
    const { context, message } = searchDto;
    return 'This action adds a new search';
  }

  /*findAll() {
    return `This action returns all search`;
  }

  findOne(id: number) {
    return `This action returns a #${id} search`;
  }

  update(id: number, updateSearchDto: UpdateSearchDto) {
    return `This action updates a #${id} search`;
  }

  remove(id: number) {
    return `This action removes a #${id} search`;
  }*/
}
