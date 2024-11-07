## Docker

### Iniciar o Banco de Dados com Docker Compose

Use o Docker Compose para iniciar o container PostgreSQL:

```bash
docker compose up -d
```

Este comando inicia o container PostgreSQL em segundo plano. O banco de dados estará acessível na porta `5433` do seu host local.

### Parar o Banco de Dados

Para parar e remover o container, use:

```bash
docker compose down
```

## Next

### Rodar o Projeto em Desenvolvimento

Na pasta app, instale as dependências e inicie o servidor de desenvolvimento:

```bash
cd app
npm install
npm run dev
```

## Prisma

### Migrar o Banco de Dados

Para criar as tabelas e sincronizar o banco de dados com o esquema definido, use:

```bash
npm run prisma:migrate
```

### Rodar o Prisma Studio

Para visualizar e gerenciar os dados do banco em uma interface gráfica (que é bem massa, da uma testada), roda:

```bash
npm run prisma:studio
```

### Resetar o Banco de Dados (Opcional)

Para limpar e recriar as tabelas do banco de dados (útil para testes):

```bash
npm run prisma:reset
```