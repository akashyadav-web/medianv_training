import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { GenericErrorResponseDto } from './common/generic-error-response.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Task Management API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'jwt',
    )
    .build();

  //  Register GenericErrorResponseDto
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [GenericErrorResponseDto],
  });

  //ADDING GENERIC FAILURE RESPONSE TO ALL ENDPOINTS
  Object.values(document.paths).forEach(path => {
    Object.values(path).forEach(method => {
      method.responses = {
        ...method.responses,
        '400': {
          description: 'Request failed',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/GenericErrorResponseDto',
              },
            },
          },
        },
      };
    });
  });

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
