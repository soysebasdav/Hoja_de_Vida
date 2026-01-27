@echo off
REM CV Sebastián González - Ejecutar en Localhost (Windows)
REM Este script instala dependencias e inicia el servidor de desarrollo

echo.
echo ========================================
echo CV Sebastian Gonzalez - Localhost
echo ========================================
echo.

REM Verificar si pnpm está instalado
where pnpm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] pnpm no está instalado.
    echo Instálalo con: npm install -g pnpm
    echo.
    pause
    exit /b 1
)

REM Verificar si node_modules existe
if not exist "node_modules" (
    echo [INFO] Instalando dependencias...
    call pnpm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Error al instalar dependencias.
        pause
        exit /b 1
    )
)

echo.
echo [INFO] Iniciando servidor de desarrollo...
echo [INFO] Abre tu navegador en: http://localhost:3000/
echo.
call pnpm dev

pause
