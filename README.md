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