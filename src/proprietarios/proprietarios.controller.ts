import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProprietariosService } from './proprietarios.service';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('proprietarios')
@Controller('proprietarios')
export class ProprietariosController {
  constructor(private readonly proprietariosService: ProprietariosService) { }

  @Post()
  create(@Body() createProprietarioDto: CreateProprietarioDto) {
    return this.proprietariosService.create(createProprietarioDto);
  }

  @Get()
  findAll() {
    return this.proprietariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proprietariosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProprietarioDto: UpdateProprietarioDto,
  ) {
    return this.proprietariosService.update(+id, updateProprietarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proprietariosService.remove(+id);
  }
}
