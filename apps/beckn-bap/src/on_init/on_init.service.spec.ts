import { Test, TestingModule } from '@nestjs/testing';
import { OnInitService } from './on_init.service';

describe('OnInitService', () => {
  let service: OnInitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnInitService],
    }).compile();

    service = module.get<OnInitService>(OnInitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
