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

5. Verifica que el puerto necesario esté disponible:
   ```bash
   node check-ports.js
   ```
   Este script verificará si el puerto 5000 está disponible y te proporcionará instrucciones si necesitas liberarlo.

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
- Un servidor Express en el puerto 3000 para el backend (en desarrollo local)
- Un servidor Express en el puerto 5000 para el backend (en Replit)
- Un servidor de desarrollo Vite para el frontend

Abre tu navegador y visita:
- Desarrollo local: `http://localhost:3000`
- En Replit: La aplicación se ejecutará en el puerto 5000

### Solución de problemas comunes

#### Error: "address already in use"

Si al iniciar el servidor recibes un error indicando que el puerto ya está en uso, puedes solucionarlo con el siguiente comando:

```bash
# En Linux/macOS
npx kill-port 3000   # Para entorno local
npx kill-port 5000   # Para entorno Replit

# En Windows (Command Prompt)
# Para puerto 3000 (local)
FOR /F "tokens=5" %P IN ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') DO taskkill /F /PID %P
# Para puerto 5000 (Replit)
FOR /F "tokens=5" %P IN ('netstat -ano ^| findstr :5000 ^| findstr LISTENING') DO taskkill /F /PID %P

# En Windows (PowerShell)
# Para puerto 3000 (local)
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
# Para puerto 5000 (Replit)
Stop-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess -Force
```

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
contacto@thr3e.dev
