import { PrismaClient } from '@prisma/client';
import { CreateServicoDto } from '../dto/create-servico.dto';

const prisma = new PrismaClient();

export type Servico = {
  id: number;
  revisaoId: number;
  descricao: string;
  custo: number;
};

export async function createServico(data: CreateServicoDto) {
  return await prisma.servicos.create({
    data,
  });
}

export async function getAllProprietario() {
  return await prisma.servicos.findMany();
}
export async function getServicoById(id: number) {
  return await prisma.servicos.findUnique({
    where: { id },
    include: { revisao: true, mecanicos: true },
  });
}

export async function updateServico(id: number, data: Partial<Servico>) {
  return await prisma.servicos.update({
    where: { id },
    data,
  });
}

export async function deleteServico(id: number) {
  return await prisma.servicos.delete({
    where: { id },
  });
}
