import { Injectable, NotFoundException } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { Redis } from 'ioredis';

@Injectable()
export class RedisStoreService {
  private readonly redis: Redis;

  constructor(private readonly redisService: RedisService) {
    this.redis = this.redisService.getClient();
  }

  async set(key: string, value: any): Promise<void> {
    const serializedData = JSON.stringify(value);
    await this.redis.set(key, serializedData);
  }

  async get(key: string): Promise<any> {
    const result = await this.redis.get(key);

    // if (result === null) {
    //   throw new NotFoundException(`No value found for key: ${key}`);
    // }S

    return JSON.parse(result);
  }

  async keyExists(key: string): Promise<boolean> {
    const result = await this.redis.exists(key);
    return result === 1;
  }

  async appendResults(key: string, value: any): Promise<string> {
    // Need to add concurrency control (lock the rows). else, possibility of search response data loss.

    const data = value;

    const existingData = await this.redis.get(key);

    if (existingData) {
      data.push(...JSON.parse(existingData));
    }

    const serializedData = JSON.stringify(data);

    const lengthAfterAppend = await this.redis.set(key, serializedData);
    return lengthAfterAppend;
  }

  async pollValue(key: string): Promise<any> {
    const exists = await this.keyExists(key);

    if (exists) {
      const val = await this.get(key);
      await this.redis.del(key);
      return val;
    } else {
      return null;
    }
  }
}
