import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000;

  const config = new DocumentBuilder()
    .setTitle('Controle de Revisão de Veículos')
    .setDescription('Controle de Revisão de Veículos')
    .setVersion('1.0')
    .addTag('')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  app.listen(PORT, () => {
    console.log(`[SERVER] Server is runing on port ${PORT}.`);
  });
}
bootstrap();
