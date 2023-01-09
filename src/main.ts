import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      ...(process.env.NODE_ENV == 'production' && {
        disableErrorMessages: true,
      }),
    }),
  );
  app.enableCors();
  app.use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('Concord Backend API Document')
    .setDescription('Discord Clone Coding')
    .setVersion('0.0.1')
    .addCookieAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(+process.env.SERVER_PORT || 3000);
}
bootstrap();
