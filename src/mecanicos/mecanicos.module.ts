import { Module } from '@nestjs/common';
import { MecanicosService } from './mecanicos.service';
import { MecanicosController } from './mecanicos.controller';

@Module({
  controllers: [MecanicosController],
  providers: [MecanicosService],
})
export class MecanicosModule {}
