-- CreateTable
CREATE TABLE "Veiculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "placa" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "proprietarioId" INTEGER NOT NULL,
    CONSTRAINT "Veiculo_proprietarioId_fkey" FOREIGN KEY ("proprietarioId") REFERENCES "Proprietario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Proprietario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Revisao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "veiculoId" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "km" INTEGER NOT NULL,
    "observacoes" TEXT,
    CONSTRAINT "Revisao_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "Veiculo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "revisaoId" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "custo" REAL NOT NULL,
    CONSTRAINT "Servico_revisaoId_fkey" FOREIGN KEY ("revisaoId") REFERENCES "Revisao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mecanico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ServicosMecanicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "servicoId" INTEGER NOT NULL,
    "mecanicoId" INTEGER NOT NULL,
    CONSTRAINT "ServicosMecanicos_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ServicosMecanicos_mecanicoId_fkey" FOREIGN KEY ("mecanicoId") REFERENCES "Mecanico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo_placa_key" ON "Veiculo"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_email_key" ON "Proprietario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mecanico_email_key" ON "Mecanico"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ServicosMecanicos_servicoId_mecanicoId_key" ON "ServicosMecanicos"("servicoId", "mecanicoId");
