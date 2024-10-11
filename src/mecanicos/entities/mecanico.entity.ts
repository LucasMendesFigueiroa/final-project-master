import { PrismaClient } from '@prisma/client';
import { CreateMecanicoDto } from '../dto/create-mecanico.dto';

const prisma = new PrismaClient();

export type Mecanico = {
  id: number;
  nome: string;
  especialidade: string;
  telefone: string;
  email: string;
};

export async function createMecanico(data: CreateMecanicoDto) {
  return await prisma.mecanicos.create({
    data,
  });
}

export async function getMecanicoById(id: number) {
  return await prisma.mecanicos.findUnique({
    where: { id },
    include: { servicos: true },
  });
}
export async function getAllProprietario() {
  return await prisma.mecanicos.findMany();
}
export async function updateMecanico(id: number, data: Partial<Mecanico>) {
  return await prisma.mecanicos.update({
    where: { id },
    data,
  });
}

export async function deleteMecanico(id: number) {
  return await prisma.mecanicos.delete({
    where: { id },
  });
}
