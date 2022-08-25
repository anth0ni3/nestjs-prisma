import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 👇 binds ValidationPipe to the entire application
  app.useGlobalPipes(new ValidationPipe());

  // 👇 apply transform to all responses
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(3000);
}
bootstrap();
