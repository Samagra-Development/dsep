import { Test, TestingModule } from '@nestjs/testing';
import { OnCancelService } from './on_cancel.service';

describe('OnCancelService', () => {
  let service: OnCancelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnCancelService],
    }).compile();

    service = module.get<OnCancelService>(OnCancelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
