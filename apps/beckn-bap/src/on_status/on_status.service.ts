import { Injectable } from '@nestjs/common';
import { OnStatusDTO } from './dto/on_status.dto';

@Injectable()
export class OnStatusService {
  create(onStatusDto: OnStatusDTO) {
    return 'This action adds a new onStatus';
  }
}
