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

### Script sla para Gerenciamento de Comandos NPM 

O projeto possui um script chamado sla que facilita a execução de comandos npm na pasta app diretamente da raiz do projeto (shopping-list-app). Esse script permite rodar comandos como npm run dev, npm install, entre outros, sem precisar navegar até a pasta app.

### Estrutura do Comando

Para usar o script, utilize a seguinte estrutura:

```bash
./sla local web npm <comando>
```
-	local: Especifica o ambiente local para execução do comando.
-	web: Indica que o comando é voltado para o serviço web (configurado para rodar npm na pasta app).
-	npm: Sempre deve ser especificado como o terceiro parâmetro, indicando que o comando é um comando npm.  
- <comando>: Qualquer comando npm que você deseja executar, como install, run dev, test, etc.

### Exemplo de Uso:

Iniciar o ambiente de desenvolvimento (MacOS):
```bash
./sla local web npm run dev
```

Windows:
```bash
sla.bat local web npm run dev
```

Rodar isso aqui no Windows:
```bash
Set-ExecutionPolicy RemoteSigned
```