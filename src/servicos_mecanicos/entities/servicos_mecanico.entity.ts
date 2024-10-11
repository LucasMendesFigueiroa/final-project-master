import { PrismaClient } from '@prisma/client';
import { CreateServicoMecanicoDto } from '../dto/create-servicos_mecanico.dto';

const prisma = new PrismaClient();

export type ServicoMecanico = {
  id: number;
  servicoId: number;
  mecanicoId: number;
};

export async function createServicoMecanico(data: CreateServicoMecanicoDto) {
  return await prisma.servicos_mecanicos.create({
    data,
  });
}

export async function getAllProprietario() {
  return await prisma.servicos_mecanicos.findMany();
}

export async function getServicoMecanicoById(id: number) {
  return await prisma.servicos_mecanicos.findUnique({
    where: { id },
    include: { servico: true, mecanico: true },
  });
}

export async function updateServicoMecanico(
  id: number,
  data: Partial<ServicoMecanico>,
) {
  return await prisma.servicos_mecanicos.update({
    where: { id },
    data,
  });
}

export async function deleteServicoMecanico(id: number) {
  return await prisma.servicos_mecanicos.delete({
    where: { id },
  });
}
