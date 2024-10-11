import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RevisoesService } from './revisoes.service';
import { CreateRevisaoDto } from './dto/create-revisoe.dto';
import { UpdateRevisoeDto } from './dto/update-revisoe.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('revisoes')
@Controller('revisoes')
export class RevisoesController {
  constructor(private readonly revisoesService: RevisoesService) {}

  @Post()
  create(@Body() createRevisoeDto: CreateRevisaoDto) {
    return this.revisoesService.create(createRevisoeDto);
  }

  @Get()
  findAll() {
    return this.revisoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revisoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevisoeDto: UpdateRevisoeDto) {
    return this.revisoesService.update(+id, updateRevisoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revisoesService.remove(+id);
  }
}
