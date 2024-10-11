import { Injectable } from '@nestjs/common';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import {
  createProprietario,
  deleteProprietario,
  getAllProprietario,
  getProprietarioById,
  updateProprietario,
} from './entities/proprietario.entity';

@Injectable()
export class ProprietariosService {
  async create(createProprietarioDto: CreateProprietarioDto) {
    return await createProprietario(createProprietarioDto);
  }
  async findAll() {
    return await getAllProprietario();
  }

  async findOne(id: number) {
    return await getProprietarioById(id);
  }

  async update(id: number, updateProprietarioDto: UpdateProprietarioDto) {
    return await updateProprietario(id, updateProprietarioDto);
  }

  async remove(id: number) {
    return await deleteProprietario(id);
  }
}
