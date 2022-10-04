import { Test, TestingModule } from '@nestjs/testing';
import { OnSelectService } from './on_select.service';

describe('OnSelectService', () => {
  let service: OnSelectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnSelectService],
    }).compile();

    service = module.get<OnSelectService>(OnSelectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
