# Vessel México - Landing Page

Este es el sitio web oficial de Vessel México, una empresa que ofrece herramientas profesionales de alta calidad para el mercado mexicano.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) (normalmente viene con Node.js)

## Configuración inicial

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd vessel-mexico
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Copia los recursos necesarios al directorio público:
   ```bash
   node copy-assets.js
   ```
   Este script copia las imágenes necesarias a la ubicación correcta.

4. Verifica que la configuración sea correcta:
   ```bash
   node validate-setup.js
   ```
   Este script comprobará que todos los archivos y recursos necesarios estén en su lugar.

## Ejecución del proyecto

### Para usuarios de macOS/Linux

Para ejecutar el proyecto en modo de desarrollo:

```bash
npm run dev
```

### Para usuarios de Windows

En Windows, necesitarás ejecutar el siguiente comando en su lugar:

```bash
# Usando Command Prompt (CMD)
set NODE_ENV=development && tsx server/index.ts

# O usando PowerShell
$env:NODE_ENV="development"; tsx server/index.ts
```

Estos comandos iniciarán:
- Un servidor Express en el puerto 5000 para el backend
- Un servidor de desarrollo Vite para el frontend

Abre tu navegador y visita: `http://localhost:5000` para ver la aplicación.

## Estructura del proyecto

```
/
├── client/            # Código del frontend (React + TypeScript)
│   ├── public/        # Archivos estáticos
│   └── src/           # Código fuente React
│       ├── assets/    # Imágenes, iconos, etc.
│       ├── components/# Componentes React
│       └── pages/     # Páginas de la aplicación
├── server/            # Código del backend (Express)
├── shared/            # Código compartido entre frontend y backend
└── attached_assets/   # Imágenes y archivos adicionales
```

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Compila el proyecto para producción
- `npm run start`: Inicia el servidor en modo producción

## Tecnologías utilizadas

- Frontend:
  - React
  - TypeScript
  - Tailwind CSS
  - Framer Motion (animaciones)
  - Vite (bundler)

- Backend:
  - Express
  - Node.js
  - PostgreSQL (opcional)

## Contacto

Si tienes alguna pregunta o problema con la instalación, por favor contacta a:
[Tu información de contacto]