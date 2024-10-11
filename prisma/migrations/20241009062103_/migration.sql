/*
  Warnings:

  - You are about to drop the `Mecanico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Proprietario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Revisao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Servico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServicosMecanicos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Veiculo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Mecanico";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Proprietario";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Revisao";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Servico";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ServicosMecanicos";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Veiculo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "veiculos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "placa" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "proprietarioId" INTEGER NOT NULL,
    CONSTRAINT "veiculos_proprietarioId_fkey" FOREIGN KEY ("proprietarioId") REFERENCES "proprietarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "proprietarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "revisoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "veiculoId" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "km" INTEGER NOT NULL,
    "observacoes" TEXT,
    CONSTRAINT "revisoes_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "veiculos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "servicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "revisaoId" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "custo" REAL NOT NULL,
    CONSTRAINT "servicos_revisaoId_fkey" FOREIGN KEY ("revisaoId") REFERENCES "revisoes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "mecanicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "servicos_mecanicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "servicoId" INTEGER NOT NULL,
    "mecanicoId" INTEGER NOT NULL,
    CONSTRAINT "servicos_mecanicos_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "servicos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "servicos_mecanicos_mecanicoId_fkey" FOREIGN KEY ("mecanicoId") REFERENCES "mecanicos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "veiculos_placa_key" ON "veiculos"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "proprietarios_email_key" ON "proprietarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "mecanicos_email_key" ON "mecanicos"("email");

-- CreateIndex
CREATE UNIQUE INDEX "servicos_mecanicos_servicoId_mecanicoId_key" ON "servicos_mecanicos"("servicoId", "mecanicoId");
