# CV Sebastián González - Ejecutar en Localhost

## Inicio Rápido (3 pasos)

### 1. Instala dependencias
```bash
pnpm install
```

### 2. Inicia el servidor de desarrollo
```bash
pnpm dev
```

### 3. Abre en tu navegador
```
http://localhost:3000/
```

---

## Requisitos

- Node.js 18+ ([descargar](https://nodejs.org/))
- pnpm (`npm install -g pnpm`)

---

## Comandos Disponibles

| Comando | Descripción |
|---------|------------|
| `pnpm dev` | Inicia servidor de desarrollo con recarga automática |
| `pnpm build` | Compila para producción |
| `pnpm start` | Ejecuta versión compilada |
| `pnpm preview` | Vista previa de producción |
| `pnpm check` | Verifica tipos TypeScript |

---

## Estructura

- `client/src/pages/Home.tsx` - Página principal del CV
- `client/src/index.css` - Estilos y tema glassmorfismo
- `client/public/images/` - Imágenes generadas

---

## Personalización

**Editar contenido:** `client/src/pages/Home.tsx`
**Cambiar colores:** `client/src/index.css` (variables CSS)
**Agregar imágenes:** `client/public/images/`

---

## Problemas Comunes

**Puerto 3000 ocupado:**
```bash
pnpm dev -- --port 3001
```

**Dependencias no instaladas:**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

¡Disfruta tu CV interactivo! 🚀
