import { Injectable } from '@nestjs/common';
import { CreateServicoMecanicoDto } from './dto/create-servicos_mecanico.dto';
import { UpdateServicoMecanicoDto } from './dto/update-servicos_mecanico.dto';
import {
  createServicoMecanico,
  getAllProprietario,
  getServicoMecanicoById,
  updateServicoMecanico,
  deleteServicoMecanico,
} from './entities/servicos_mecanico.entity';

@Injectable()
export class ServicosMecanicosService {
  async create(createServicosMecanicoDto: CreateServicoMecanicoDto) {
    return await createServicoMecanico(createServicosMecanicoDto);
  }

  async findAll() {
    return await getAllProprietario();
  }

  async findOne(id: number) {
    return await getServicoMecanicoById(id);
  }

  async update(
    id: number,
    updateServicosMecanicoDto: UpdateServicoMecanicoDto,
  ) {
    return await updateServicoMecanico(id, updateServicosMecanicoDto);
  }

  async remove(id: number) {
    return await deleteServicoMecanico(id);
  }
}
