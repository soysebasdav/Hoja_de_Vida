#!/bin/bash

# CV Sebastián González - Ejecutar en Localhost (Mac/Linux)
# Este script instala dependencias e inicia el servidor de desarrollo

echo ""
echo "========================================"
echo "CV Sebastian Gonzalez - Localhost"
echo "========================================"
echo ""

# Verificar si pnpm está instalado
if ! command -v pnpm &> /dev/null; then
    echo "[ERROR] pnpm no está instalado."
    echo "Instálalo con: npm install -g pnpm"
    echo ""
    exit 1
fi

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "[INFO] Instalando dependencias..."
    pnpm install
    if [ $? -ne 0 ]; then
        echo "[ERROR] Error al instalar dependencias."
        exit 1
    fi
fi

echo ""
echo "[INFO] Iniciando servidor de desarrollo..."
echo "[INFO] Abre tu navegador en: http://localhost:3000/"
echo ""

pnpm dev
