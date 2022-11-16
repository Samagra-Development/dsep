import { NestFactory } from '@nestjs/core';
import { ClientProxyModule } from './client-proxy.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientProxyModule);
  await app.listen(5003);
}
bootstrap();
