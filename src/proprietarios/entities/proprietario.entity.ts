import { PrismaClient } from '@prisma/client';
import { CreateProprietarioDto } from '../dto/create-proprietario.dto';

const prisma = new PrismaClient();

export type Proprietario = {
  id: number;
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
};

export const proprietarios = {
  id: true,
  nome: true,
  endereco: true,
  telefone: true,
  email: true,
};

export async function createProprietario(data: CreateProprietarioDto) {
  return await prisma.proprietarios.create({
    data,
  });
}

export async function getAllProprietario() {
  return await prisma.proprietarios.findMany();
}

export async function getProprietarioById(id: number) {
  return await prisma.proprietarios.findUnique({
    where: { id },
    include: { veiculos: true },
  });
}

export async function updateProprietario(
  id: number,
  data: Partial<Proprietario>,
) {
  return await prisma.proprietarios.update({
    where: { id },
    data,
  });
}

export async function deleteProprietario(id: number) {
  return await prisma.proprietarios.delete({
    where: { id },
  });
}
