import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MecanicosService } from './mecanicos.service';
import { CreateMecanicoDto } from './dto/create-mecanico.dto';
import { UpdateMecanicoDto } from './dto/update-mecanico.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('mecanicos')
@Controller('mecanicos')
export class MecanicosController {
  constructor(private readonly mecanicosService: MecanicosService) {}

  @Post()
  create(@Body() createMecanicoDto: CreateMecanicoDto) {
    return this.mecanicosService.create(createMecanicoDto);
  }

  @Get()
  findAll() {
    return this.mecanicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mecanicosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMecanicoDto: UpdateMecanicoDto,
  ) {
    return this.mecanicosService.update(+id, updateMecanicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mecanicosService.remove(+id);
  }
}
