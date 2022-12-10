import { Test, TestingModule } from '@nestjs/testing';
import { OnUpdateService } from './on_update.service';

describe('OnUpdateService', () => {
  let service: OnUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnUpdateService],
    }).compile();

    service = module.get<OnUpdateService>(OnUpdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
