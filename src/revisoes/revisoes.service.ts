import { Injectable } from '@nestjs/common';
import { CreateRevisaoDto } from './dto/create-revisoe.dto';
import { UpdateRevisoeDto } from './dto/update-revisoe.dto';
import {
  createRevisao,
  getAllProprietario,
  getRevisaoById,
  updateRevisao,
  deleteRevisao,
} from './entities/revisoe.entity';

@Injectable()
export class RevisoesService {
  async create(createRevisoeDto: CreateRevisaoDto) {
    return await createRevisao(createRevisoeDto);
  }

  async findAll() {
    return await getAllProprietario();
  }

  async findOne(id: number) {
    return await getRevisaoById(id);
  }

  async update(id: number, updateRevisoeDto: UpdateRevisoeDto) {
    return await updateRevisao(id, updateRevisoeDto);
  }

  async remove(id: number) {
    return await deleteRevisao(id);
  }
}
