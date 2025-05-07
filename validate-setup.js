/**
 * Este script valida que todas las dependencias y configuraciones necesarias
 * estén correctamente instaladas y configuradas en el sistema.
 */

// Importar módulos necesarios
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista de archivos críticos que deben existir
const criticalFiles = [
  'package.json',
  'client/src/main.tsx',
  'server/index.ts',
  'client/src/App.tsx',
];

// Lista de directorios críticos que deben existir
const criticalDirectories = [
  'client/src/components',
  'client/src/assets',
  'server',
  'shared',
];

// Lista de recursos que deben existir en el directorio público
const publicResources = [
  'client/public/attached_assets/GTN20_01.jpg',
  'client/public/attached_assets/GTNL30.jpg',
  'client/public/attached_assets/GTNS20A.jpg',
  'client/public/attached_assets/GTNS30A.jpg',
];

// Verificar archivos críticos
console.log('📂 Verificando archivos críticos...');
let allFilesPassed = true;
criticalFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} encontrado`);
  } else {
    console.log(`❌ ${file} NO encontrado`);
    allFilesPassed = false;
  }
});

// Verificar directorios críticos
console.log('\n📁 Verificando directorios críticos...');
let allDirsPassed = true;
criticalDirectories.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`✅ ${dir} encontrado`);
  } else {
    console.log(`❌ ${dir} NO encontrado`);
    allDirsPassed = false;
  }
});

// Verificar recursos públicos
console.log('\n🖼️ Verificando recursos necesarios...');
let allPublicResourcesPassed = true;
publicResources.forEach(resource => {
  const resourcePath = path.join(__dirname, resource);
  if (fs.existsSync(resourcePath)) {
    console.log(`✅ ${resource} encontrado`);
  } else {
    console.log(`❌ ${resource} NO encontrado`);
    allPublicResourcesPassed = false;
  }
});

// Verificar Node.js y npm
console.log('\n⚙️ Verificando Node.js y npm...');
exec('node --version', (error, stdout) => {
  if (error) {
    console.log('❌ No se pudo verificar la versión de Node.js');
    console.log('   Por favor, asegúrate de tener Node.js instalado');
  } else {
    const version = stdout.trim();
    console.log(`✅ Node.js ${version} instalado`);
  }
});

exec('npm --version', (error, stdout) => {
  if (error) {
    console.log('❌ No se pudo verificar la versión de npm');
    console.log('   Por favor, asegúrate de tener npm instalado');
  } else {
    const version = stdout.trim();
    console.log(`✅ npm ${version} instalado`);
  }
});

// Resultado final
setTimeout(() => {
  console.log('\n🔍 Resultado de la validación:');
  
  if (allFilesPassed && allDirsPassed && allPublicResourcesPassed) {
    console.log('✅ ¡Todo parece estar correctamente configurado!');
    console.log('   Puedes continuar con la ejecución del proyecto:');
    console.log('   - En macOS/Linux: npm run dev');
    console.log('   - En Windows (CMD): set NODE_ENV=development && tsx server/index.ts');
    console.log('   - En Windows (PowerShell): $env:NODE_ENV="development"; tsx server/index.ts');
  } else {
    console.log('⚠️ Se encontraron problemas en la configuración.');
    console.log('   Por favor, revisa los mensajes anteriores y asegúrate de:');
    console.log('   1. Haber clonado el repositorio completo');
    console.log('   2. Haber ejecutado "npm install"');
    console.log('   3. Tener todos los archivos y directorios en la estructura correcta');
  }
}, 1000);