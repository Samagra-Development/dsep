import { Test, TestingModule } from '@nestjs/testing';
import { OnStatusService } from './on_status.service';

describe('OnStatusService', () => {
  let service: OnStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnStatusService],
    }).compile();

    service = module.get<OnStatusService>(OnStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
