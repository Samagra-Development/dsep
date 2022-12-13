import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // setup swagger
  const config = new DocumentBuilder()
    .setTitle('DSEP-BAP API')
    .setDescription(
      'APIs for the Beckn Application Provider for Decentralized Skilling and Education Protocol',
    )
    .setVersion('1.0')
    .addTag('BAP')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  await app.listen(process.env.BAP_PORT || 5010);
}
bootstrap();
