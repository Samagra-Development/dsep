import { Test, TestingModule } from '@nestjs/testing';
import { OnSearchService } from './on_search.service';

describe('OnSearchService', () => {
  let service: OnSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnSearchService],
    }).compile();

    service = module.get<OnSearchService>(OnSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
