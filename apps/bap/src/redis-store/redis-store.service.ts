import { Injectable, NotFoundException } from '@nestjs/common';
import { RedisService, DEFAULT_REDIS_NAMESPACE } from '@liaoliaots/nestjs-redis';
import { Redis } from'ioredis';

@Injectable()
export class RedisStoreService {
    private readonly redis: Redis;

    constructor(private readonly redisService: RedisService) {
        this.redis = this.redisService.getClient();
    }

    async set(key: string, value: any) {
        const client = this.redisService.getClient();
        await client.set(key, JSON.stringify(value));
    }
    
    async get(key: string) {
        const client = this.redisService.getClient();
        const result = await client.get(key);
        if(result == null)
            throw new NotFoundException("No Value found");
        return JSON.parse(result);
    }

    async keyExists(key: string) {
        const client = this.redisService.getClient();
        const result = await client.exists(key);
        return result === 1;
    }

    async appendResults(key: string, value: any): Promise<number> {
        const serializedData = JSON.stringify(value);
        const client = this.redisService.getClient();
        const lengthAfterAppend = await client.append(key, serializedData);
        return lengthAfterAppend;
    }

    async pollValue(key: string) {
        const client = this.redisService.getClient();
        let val = null;
        if(this.keyExists(key)) {
            val = await this.get(key);
            await client.del(key);
        } else {
            return null;
        }
        return JSON.parse(val);
    }
}