import { Injectable } from '@nestjs/common';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import {
  createServico,
  getAllProprietario,
  getServicoById,
  updateServico,
  deleteServico,
} from './entities/servico.entity';

@Injectable()
export class ServicosService {
  async create(createServicoDto: CreateServicoDto) {
    return await createServico(createServicoDto);
  }

  async findAll() {
    return await getAllProprietario();
  }

  async findOne(id: number) {
    return await getServicoById(id);
  }

  async update(id: number, updateServicoDto: UpdateServicoDto) {
    return await updateServico(id, updateServicoDto);
  }

  async remove(id: number) {
    return await deleteServico(id);
  }
}
