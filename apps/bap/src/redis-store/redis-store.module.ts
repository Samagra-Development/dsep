import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { RedisStoreService } from './redis-store.service';

@Module({
  imports: [
      RedisModule.forRoot({
          config: {
              host: `${process.env.REDIS_HOST}`,
              port: parseInt(process.env.REDIS_PORT), // redis server running on port 6379
          }
      }),
  ],
  providers: [RedisStoreService],
  exports: [RedisStoreService],
})
export class RedisStoreModule {}
