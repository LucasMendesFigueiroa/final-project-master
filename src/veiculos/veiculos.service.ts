import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import {
  createVeiculo,
  deleteVeiculo,
  getAllProprietario,
  getVeiculoById,
  updateVeiculo,
} from './entities/veiculo.entity';

@Injectable()
export class VeiculosService {
  async create(createVeiculoDto: CreateVeiculoDto) {
    return await createVeiculo(createVeiculoDto);
  }

  async findAll() {
    return await getAllProprietario();
  }

  async findOne(id: number) {
    return await getVeiculoById(id);
  }

  async update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
    return await updateVeiculo(id, updateVeiculoDto);
  }

  async remove(id: number) {
    return await deleteVeiculo(id);
  }
}
