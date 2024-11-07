@echo off
set context=%1
set service=%2
set tool=%3
shift & shift & shift
set args=%*

if "%tool%" neq "npm" (
    echo Erro: o terceiro argumento deve ser 'npm'. Exemplo: ./sla local web npm run dev
    exit /b 1
)

if "%service%" neq "web" (
    echo Serviço não reconhecido. Use './sla local web npm <comando>'
    exit /b 1
)

if "%context%" == "local" (
    cd app
    npm %args%
) else (
    echo Contexto não reconhecido. Use './sla local web npm <comando>'
    exit /b 1
)