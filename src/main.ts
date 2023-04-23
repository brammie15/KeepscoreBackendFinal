import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const PORT = 3000;
const ENABLE_SWAGGER = true;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();

  const config = new DocumentBuilder()

    .setTitle('Keepscore')
    .setVersion('0.1')
    .setBasePath('api')
    .setDescription("A score keeping tool")
    .build();
  if(ENABLE_SWAGGER){
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document,{
      swaggerOptions: {
        "tryItOutEnabled": true,
    }});
  }
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
