/**
 * Este script copia los recursos necesarios desde attached_assets/
 * a las ubicaciones correctas en client/public/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Asegurarse de que el directorio de destino exista
const targetDir = path.join(__dirname, 'client/public/attached_assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`✅ Directorio creado: ${targetDir}`);
}

// Recursos que necesitamos copiar
const resources = [
  'GTN20_01.jpg',
  'GTNL30.jpg',
  'GTNS20A.jpg',
  'GTNS30A.jpg'
];

// Copiar cada recurso
resources.forEach(resource => {
  const sourceFile = path.join(__dirname, 'attached_assets', resource);
  const targetFile = path.join(targetDir, resource);
  
  try {
    if (fs.existsSync(sourceFile)) {
      fs.copyFileSync(sourceFile, targetFile);
      console.log(`✅ Copiado: ${resource}`);
    } else {
      console.log(`❌ Archivo de origen no encontrado: ${sourceFile}`);
    }
  } catch (err) {
    console.error(`❌ Error al copiar ${resource}: ${err.message}`);
  }
});

console.log('\n🎉 Proceso de copia completado!');
console.log('🔍 Verifica que los archivos se hayan copiado correctamente:');
// Listar archivos en el directorio destino
try {
  const files = fs.readdirSync(targetDir);
  files.forEach(file => {
    console.log(`   - ${file}`);
  });
} catch (err) {
  console.error(`❌ Error al listar archivos: ${err.message}`);
}