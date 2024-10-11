import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('veiculos')
@Controller('veiculos')
export class VeiculosController {
  constructor(private readonly veiculosService: VeiculosService) { }

  @Post()
  @ApiBody({
    type: CreateVeiculoDto,
  })
  create(@Body() createVeiculoDto: CreateVeiculoDto) {
    return this.veiculosService.create(createVeiculoDto);
  }

  @Get()
  findAll() {
    return this.veiculosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.veiculosService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateVeiculoDto,
  })
  update(@Param('id') id: string, @Body() updateVeiculoDto: UpdateVeiculoDto) {
    return this.veiculosService.update(+id, updateVeiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.veiculosService.remove(+id);
  }
}
