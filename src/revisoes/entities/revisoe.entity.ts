import { PrismaClient } from '@prisma/client';
import { CreateRevisaoDto } from '../dto/create-revisoe.dto';

const prisma = new PrismaClient();

export type Revisao = {
  id: number;
  veiculoId: number;
  data: Date;
  km: number;
  observacoes?: string;
};

export async function createRevisao(data: CreateRevisaoDto) {
  return await prisma.revisoes.create({
    data,
  });
}

export async function getRevisaoById(id: number) {
  return await prisma.revisoes.findUnique({
    where: { id },
    include: { veiculo: true, servicos: true },
  });
}
export async function getAllProprietario() {
  return await prisma.revisoes.findMany();
}

export async function updateRevisao(id: number, data: Partial<Revisao>) {
  return await prisma.revisoes.update({
    where: { id },
    data,
  });
}

export async function deleteRevisao(id: number) {
  return await prisma.revisoes.delete({
    where: { id },
  });
}
