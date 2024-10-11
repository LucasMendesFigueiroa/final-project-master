import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServicosMecanicosService } from './servicos_mecanicos.service';
import { CreateServicoMecanicoDto } from './dto/create-servicos_mecanico.dto';
import { UpdateServicoMecanicoDto } from './dto/update-servicos_mecanico.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('servicos-mecanicos')
@Controller('servicos-mecanicos')
export class ServicosMecanicosController {
  constructor(
    private readonly servicosMecanicosService: ServicosMecanicosService,
  ) {}

  @Post()
  create(@Body() createServicosMecanicoDto: CreateServicoMecanicoDto) {
    return this.servicosMecanicosService.create(createServicosMecanicoDto);
  }

  @Get()
  findAll() {
    return this.servicosMecanicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicosMecanicosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServicosMecanicoDto: UpdateServicoMecanicoDto,
  ) {
    return this.servicosMecanicosService.update(+id, updateServicosMecanicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicosMecanicosService.remove(+id);
  }
}
