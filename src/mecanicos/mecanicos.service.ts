import { Injectable } from '@nestjs/common';
import { CreateMecanicoDto } from './dto/create-mecanico.dto';
import { UpdateMecanicoDto } from './dto/update-mecanico.dto';
import {
  createMecanico,
  deleteMecanico,
  getAllProprietario,
  getMecanicoById,
  updateMecanico,
} from './entities/mecanico.entity';

@Injectable()
export class MecanicosService {
  async create(createMecanicoDto: CreateMecanicoDto) {
    return await createMecanico(createMecanicoDto);
  }

  async findAll() {
    return await getAllProprietario();
  }

  async findOne(id: number) {
    return await getMecanicoById(id);
  }

  async update(id: number, updateMecanicoDto: UpdateMecanicoDto) {
    return await updateMecanico(id, updateMecanicoDto);
  }

  async remove(id: number) {
    return await deleteMecanico(id);
  }
}
