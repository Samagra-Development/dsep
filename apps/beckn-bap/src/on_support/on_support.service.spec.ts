import { Test, TestingModule } from '@nestjs/testing';
import { OnSupportService } from './on_support.service';

describe('OnSupportService', () => {
  let service: OnSupportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnSupportService],
    }).compile();

    service = module.get<OnSupportService>(OnSupportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
