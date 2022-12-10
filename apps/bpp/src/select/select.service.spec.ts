import { Test, TestingModule } from '@nestjs/testing';
import { SelectService } from './select.service';

describe('SelectService', () => {
  let service: SelectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SelectService],
    }).compile();

    service = module.get<SelectService>(SelectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
