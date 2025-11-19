import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // elimina campos no definidos
    forbidNonWhitelisted: true, // lanza error si envían campos no permitidos
    transform: true, // convierte tipos (ej: string → number)
  }));
  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API Ventas')
    .setDescription('Documentación de la API de ventas')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // URL: /api
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
