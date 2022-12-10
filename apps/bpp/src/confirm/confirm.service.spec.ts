import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmService } from './confirm.service';

describe('ConfirmService', () => {
  let service: ConfirmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfirmService],
    }).compile();

    service = module.get<ConfirmService>(ConfirmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
