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
  'GTNS30A.jpg',
  'tab_logo.png', // Favicon para la pestaña del navegador
  'open_graph_vessel.png', // Imagen para Open Graph
  'vessel_logo_large_header.png' // Nuevo logo para el encabezado
];

// Copiar cada recurso
resources.forEach(resource => {
  const sourceFile = path.join(__dirname, 'attached_assets', resource);
  const targetFile = path.join(targetDir, resource);
  
  try {
    if (fs.existsSync(sourceFile)) {
      fs.copyFileSync(sourceFile, targetFile);
      console.log(`✅ Copiado: ${resource} a ${targetDir}`);
      
      // Copiar archivos directamente al directorio public
      if (resource === 'tab_logo.png' || resource === 'vessel_logo_large_header.png') {
        const publicFile = path.join(__dirname, 'client/public', resource);
        fs.copyFileSync(sourceFile, publicFile);
        console.log(`✅ Copiado: ${resource} a client/public/`);
      }
      
      // Copiar imagen de Open Graph a todas las ubicaciones necesarias
      if (resource === 'vessel_mx_opengraph_v01@2x.jpg') {
        // 1. Carpeta images para compatibilidad general
        const imagesDir = path.join(__dirname, 'client/public/images');
        if (!fs.existsSync(imagesDir)) {
          fs.mkdirSync(imagesDir, { recursive: true });
          console.log(`✅ Directorio creado: ${imagesDir}`);
        }
        const publicImagesFile = path.join(imagesDir, 'open_graph_vessel.jpg');
        fs.copyFileSync(sourceFile, publicImagesFile);
        console.log(`✅ Copiada imagen Open Graph a client/public/images/open_graph_vessel.jpg`);
        
        // 2. Carpeta whatsapp específicamente para WhatsApp
        const whatsappDir = path.join(__dirname, 'client/public/whatsapp');
        if (!fs.existsSync(whatsappDir)) {
          fs.mkdirSync(whatsappDir, { recursive: true });
          console.log(`✅ Directorio creado: ${whatsappDir}`);
        }
        const whatsappFile = path.join(whatsappDir, 'share.jpg');
        fs.copyFileSync(sourceFile, whatsappFile);
        console.log(`✅ Copiada imagen Open Graph como share.jpg a client/public/whatsapp/ para WhatsApp`);
        
        // 3. Directamente en public como og-image.jpg para mayor compatibilidad
        const publicRootFile = path.join(__dirname, 'client/public', 'og-image.jpg');
        fs.copyFileSync(sourceFile, publicRootFile);
        console.log(`✅ Copiada imagen Open Graph como og-image.jpg a client/public/`);
      }
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