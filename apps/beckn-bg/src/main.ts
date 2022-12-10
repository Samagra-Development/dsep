import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // setup swagger
  const config = new DocumentBuilder()
    .setTitle('DSE-BG API')
    .setDescription(
      'APIs for the Beckn Gateway for Decentralized Skilling and Education Protocol',
    )
    .setVersion('1.0')
    .addTag('BG')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.BG_PORT || 5001);
}
bootstrap();
