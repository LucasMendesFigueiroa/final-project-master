/*
  Warnings:

  - Added the required column `update_at` to the `mecanicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `proprietarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `revisoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `servicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `servicos_mecanicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `veiculos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mecanicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);
INSERT INTO "new_mecanicos" ("email", "especialidade", "id", "nome", "telefone") SELECT "email", "especialidade", "id", "nome", "telefone" FROM "mecanicos";
DROP TABLE "mecanicos";
ALTER TABLE "new_mecanicos" RENAME TO "mecanicos";
CREATE UNIQUE INDEX "mecanicos_email_key" ON "mecanicos"("email");
CREATE TABLE "new_proprietarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);
INSERT INTO "new_proprietarios" ("email", "endereco", "id", "nome", "telefone") SELECT "email", "endereco", "id", "nome", "telefone" FROM "proprietarios";
DROP TABLE "proprietarios";
ALTER TABLE "new_proprietarios" RENAME TO "proprietarios";
CREATE UNIQUE INDEX "proprietarios_email_key" ON "proprietarios"("email");
CREATE TABLE "new_revisoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "veiculoId" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "km" INTEGER NOT NULL,
    "observacoes" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "revisoes_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "veiculos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_revisoes" ("data", "id", "km", "observacoes", "veiculoId") SELECT "data", "id", "km", "observacoes", "veiculoId" FROM "revisoes";
DROP TABLE "revisoes";
ALTER TABLE "new_revisoes" RENAME TO "revisoes";
CREATE TABLE "new_servicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "revisaoId" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "custo" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "servicos_revisaoId_fkey" FOREIGN KEY ("revisaoId") REFERENCES "revisoes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_servicos" ("custo", "descricao", "id", "revisaoId") SELECT "custo", "descricao", "id", "revisaoId" FROM "servicos";
DROP TABLE "servicos";
ALTER TABLE "new_servicos" RENAME TO "servicos";
CREATE TABLE "new_servicos_mecanicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "servicoId" INTEGER NOT NULL,
    "mecanicoId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "servicos_mecanicos_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "servicos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "servicos_mecanicos_mecanicoId_fkey" FOREIGN KEY ("mecanicoId") REFERENCES "mecanicos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_servicos_mecanicos" ("id", "mecanicoId", "servicoId") SELECT "id", "mecanicoId", "servicoId" FROM "servicos_mecanicos";
DROP TABLE "servicos_mecanicos";
ALTER TABLE "new_servicos_mecanicos" RENAME TO "servicos_mecanicos";
CREATE UNIQUE INDEX "servicos_mecanicos_servicoId_mecanicoId_key" ON "servicos_mecanicos"("servicoId", "mecanicoId");
CREATE TABLE "new_veiculos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "placa" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    "proprietarioId" INTEGER NOT NULL,
    CONSTRAINT "veiculos_proprietarioId_fkey" FOREIGN KEY ("proprietarioId") REFERENCES "proprietarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_veiculos" ("ano", "id", "marca", "modelo", "placa", "proprietarioId") SELECT "ano", "id", "marca", "modelo", "placa", "proprietarioId" FROM "veiculos";
DROP TABLE "veiculos";
ALTER TABLE "new_veiculos" RENAME TO "veiculos";
CREATE UNIQUE INDEX "veiculos_placa_key" ON "veiculos"("placa");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
