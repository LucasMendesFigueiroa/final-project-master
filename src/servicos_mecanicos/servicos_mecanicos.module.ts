import { Module } from '@nestjs/common';
import { ServicosMecanicosService } from './servicos_mecanicos.service';
import { ServicosMecanicosController } from './servicos_mecanicos.controller';

@Module({
  controllers: [ServicosMecanicosController],
  providers: [ServicosMecanicosService],
})
export class ServicosMecanicosModule {}
