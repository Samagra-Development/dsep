import { Test, TestingModule } from '@nestjs/testing';
import { CancelService } from './cancel.service';

describe('CancelService', () => {
  let service: CancelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CancelService],
    }).compile();

    service = module.get<CancelService>(CancelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
