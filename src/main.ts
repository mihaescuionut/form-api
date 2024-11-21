import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  });

  app.setGlobalPrefix(process.env.GLOBAL_PREFIX);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3005);
}

bootstrap();
