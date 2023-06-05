import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('ClinicContacts')
  .setDescription('An app where you can add and remove contacts, listing patients and doctors')
  .setVersion('1.0')
  .addTag('Users')
  .addTag('Contacts')
  .addBearerAuth()
  .addTag('Contacts')
  .addBearerAuth()
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  app.useGlobalPipes(
    new ValidationPipe({whitelist: true}),
    new ValidationPipe({
      transform: true,
      transformOptions: {groups: ['transform']},
    })
    )
  await app.listen(3000);
}
bootstrap();
