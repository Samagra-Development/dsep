import { Test, TestingModule } from '@nestjs/testing';
import { RedisStoreService } from './redis-store.service';

describe('RedisStoreService', () => {
  let service: RedisStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisStoreService],
    }).compile();

    service = module.get<RedisStoreService>(RedisStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
