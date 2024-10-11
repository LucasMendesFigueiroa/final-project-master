# Sistema de Controle de Revisão de Veículos

Este documento descreve um sistema para gerenciar revisões de veículos, incluindo proprietários, veículos, revisões e serviços realizados. O sistema utiliza Next.js no frontend, NestJS no backend e Prisma como ORM.

## Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Diagrama das Tabelas](#diagrama-das-tabelas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Considerações Finais](#considerações-finais)

## Visão Geral

O sistema permite que os usuários gerenciem proprietários de veículos, cadastrem veículos, criem registros de revisões e adicionem serviços realizados em cada revisão. Destina-se a facilitar o acompanhamento e a gestão de revisões de veículos de forma eficiente.

## Tecnologias Utilizadas

Este projeto é construído com as seguintes tecnologias:

- **Frontend**: Utiliza Next.js e React para uma interface de usuário interativa, com Axios para gerenciamento de requisições HTTP.
- **Backend**: Construído com NestJS, oferecendo uma estrutura robusta para aplicações server-side.
- **Banco de Dados**: SQLite é usado para desenvolvimento, proporcionando uma solução de banco de dados leve e fácil de configurar.

## Instalação e Configuração

Para configurar o sistema em seu ambiente local, siga os passos abaixo:

1. Clone o repositório do projeto.
2. Instale as dependências do frontend e do backend.
3. Configure o banco de dados SQLite.
4. Inicie o servidor backend e o cliente frontend.

Para mais detalhes, consulte a documentação específica de instalação no repositório.

## Diagrama das Tabelas

A estrutura do banco de dados é ilustrada abaixo usando um diagrama ER (Entity-Relationship) simplificado:

### 1. Tabela: Veiculos

| Coluna          | Tipo de Dados | Restrição                                             |
| --------------- | ------------- | ----------------------------------------------------- |
| veiculo_id      | INT           | PRIMARY KEY, AUTO_INCREMENT                           |
| placa           | VARCHAR(10)   | UNIQUE, NOT NULL                                      |
| marca           | VARCHAR(50)   | NOT NULL                                              |
| modelo          | VARCHAR(50)   | NOT NULL                                              |
| ano             | INT           | NOT NULL                                              |
| proprietario_id | INT           | FOREIGN KEY (referencia Proprietarios)                |
| created_at      | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP                             |
| updated_at      | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

### 2. Tabela: Proprietarios

| Coluna          | Tipo de Dados | Restrição                                             |
| --------------- | ------------- | ----------------------------------------------------- |
| proprietario_id | INT           | PRIMARY KEY, AUTO_INCREMENT                           |
| nome            | VARCHAR(100)  | NOT NULL                                              |
| endereco        | VARCHAR(255)  | NOT NULL                                              |
| telefone        | VARCHAR(15)   | NOT NULL                                              |
| email           | VARCHAR(100)  | UNIQUE, NOT NULL                                      |
| created_at      | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP                             |
| updated_at      | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

### 3. Tabela: Revisoes

| Coluna      | Tipo de Dados | Restrição                                             |
| ----------- | ------------- | ----------------------------------------------------- |
| revisao_id  | INT           | PRIMARY KEY, AUTO_INCREMENT                           |
| veiculo_id  | INT           | FOREIGN KEY (referencia Veiculos)                     |
| data        | DATE          | NOT NULL                                              |
| km          | INT           | NOT NULL                                              |
| observacoes | TEXT          |                                                       |
| created_at  | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP                             |
| updated_at  | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

### 4. Tabela: Servicos

| Coluna     | Tipo de Dados | Restrição                                             |
| ---------- | ------------- | ----------------------------------------------------- |
| servico_id | INT           | PRIMARY KEY, AUTO_INCREMENT                           |
| revisao_id | INT           | FOREIGN KEY (referencia Revisoes)                     |
| descricao  | VARCHAR(255)  | NOT NULL                                              |
| custo      | DECIMAL(10,2) | NOT NULL                                              |
| created_at | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP                             |
| updated_at | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

### 5. Tabela: Mecanicos

| Coluna        | Tipo de Dados | Restrição                                             |
| ------------- | ------------- | ----------------------------------------------------- |
| mecanico_id   | INT           | PRIMARY KEY, AUTO_INCREMENT                           |
| nome          | VARCHAR(100)  | NOT NULL                                              |
| especialidade | VARCHAR(50)   | NOT NULL                                              |
| telefone      | VARCHAR(15)   | NOT NULL                                              |
| email         | VARCHAR(100)  | UNIQUE, NOT NULL                                      |
| created_at    | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP                             |
| updated_at    | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

### 6. Tabela: Servicos_Mecanicos

| Coluna              | Tipo de Dados | Restrição                                             |
| ------------------- | ------------- | ----------------------------------------------------- |
| servico_mecanico_id | INT           | PRIMARY KEY, AUTO_INCREMENT                           |
| servico_id          | INT           | FOREIGN KEY (referencia Servicos)                     |
| mecanico_id         | INT           | FOREIGN KEY (referencia Mecanicos)                    |
| created_at          | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP                             |
| updated_at          | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |
