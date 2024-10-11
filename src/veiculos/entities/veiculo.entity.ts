import { PrismaClient } from '@prisma/client';
import { CreateVeiculoDto } from '../dto/create-veiculo.dto';

const prisma = new PrismaClient();

export type Veiculo = {
  id: number;
  placa: string;
  marca: string;
  modelo: string;
  ano: number;
  proprietarioId: number;
};

export async function createVeiculo(data: CreateVeiculoDto) {
  return await prisma.veiculos.create({
    data,
  });
}

export async function getAllProprietario() {
  return await prisma.veiculos.findMany();
}
export async function getVeiculoById(id: number) {
  return await prisma.veiculos.findUnique({
    where: { id },
    include: { revisoes: true, proprietario: true },
  });
}

export async function updateVeiculo(id: number, data: Partial<Veiculo>) {
  return await prisma.veiculos.update({
    where: { id },
    data,
  });
}

export async function deleteVeiculo(id: number) {
  return await prisma.veiculos.delete({
    where: { id },
  });
}
