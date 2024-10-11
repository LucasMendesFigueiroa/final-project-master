import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { VeiculosModule } from './veiculos/veiculos.module';
import { ProprietariosModule } from './proprietarios/proprietarios.module';
import { RevisoesModule } from './revisoes/revisoes.module';
import { ServicosModule } from './servicos/servicos.module';
import { MecanicosModule } from './mecanicos/mecanicos.module';
import { ServicosMecanicosModule } from './servicos_mecanicos/servicos_mecanicos.module';

@Module({
  imports: [
    VeiculosModule,
    ProprietariosModule,
    RevisoesModule,
    ServicosModule,
    MecanicosModule,
    ServicosMecanicosModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
