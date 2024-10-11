import { Module } from '@nestjs/common';
import { RevisoesService } from './revisoes.service';
import { RevisoesController } from './revisoes.controller';
import { VeiculosModule } from 'src/veiculos/veiculos.module';

@Module({
  imports: [VeiculosModule],
  controllers: [RevisoesController],
  providers: [RevisoesService],
})
export class RevisoesModule {}
