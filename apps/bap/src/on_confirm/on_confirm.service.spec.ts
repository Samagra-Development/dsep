import { Test, TestingModule } from '@nestjs/testing';
import { OnConfirmService } from './on_confirm.service';

describe('OnConfirmService', () => {
  let service: OnConfirmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnConfirmService],
    }).compile();

    service = module.get<OnConfirmService>(OnConfirmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
