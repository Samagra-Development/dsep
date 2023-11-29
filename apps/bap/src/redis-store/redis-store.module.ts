import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { RedisStoreService } from './redis-store.service';

@Module({
  imports: [
      RedisModule.forRoot({
          config: {
              host: 'localhost',
              port: 8888, // redis server running on port 8888 
          }
      }),
  ],
  providers: [RedisStoreService],
  exports: [RedisStoreService]
})
export class RedisStoreModule {}
