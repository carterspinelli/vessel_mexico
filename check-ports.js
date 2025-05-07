/**
 * Este script verifica si los puertos necesarios están libres
 * y ofrece instrucciones sobre cómo liberarlos si están ocupados.
 */

import { exec } from 'child_process';
import { platform } from 'os';

const PORT = 5000;
const isWindows = platform() === 'win32';

console.log(`🔍 Verificando si el puerto ${PORT} está disponible...`);

if (isWindows) {
  // Comando para Windows
  exec(`netstat -ano | findstr :${PORT}`, (error, stdout) => {
    if (error) {
      // Si hay un error, probablemente significa que no se encontró el puerto
      console.log(`✅ El puerto ${PORT} parece estar disponible.`);
      console.log('   Puedes continuar con la ejecución del proyecto.');
    } else {
      if (stdout.trim()) {
        console.log(`❌ El puerto ${PORT} está en uso.`);
        console.log('   Necesitas liberar este puerto antes de iniciar el servidor.');
        console.log('\n   Para liberar el puerto en Windows:');
        console.log(`   1. Identifica el PID de los procesos usando el puerto ${PORT}:`);
        console.log(`      netstat -ano | findstr :${PORT}`);
        console.log('   2. Finaliza los procesos con el PID identificado:');
        console.log('      taskkill /F /PID <PID>');
        console.log('\n   Alternativamente, puedes reiniciar tu computadora.');
      } else {
        console.log(`✅ El puerto ${PORT} parece estar disponible.`);
        console.log('   Puedes continuar con la ejecución del proyecto.');
      }
    }
  });
} else {
  // Comando para Unix/Linux/Mac
  exec(`lsof -i :${PORT}`, (error, stdout) => {
    if (error) {
      // Si hay un error, probablemente significa que no se encontró el puerto
      console.log(`✅ El puerto ${PORT} parece estar disponible.`);
      console.log('   Puedes continuar con la ejecución del proyecto.');
    } else {
      if (stdout.trim()) {
        console.log(`❌ El puerto ${PORT} está en uso.`);
        console.log('   Necesitas liberar este puerto antes de iniciar el servidor.');
        console.log('\n   Para liberar el puerto en Unix/Linux/Mac:');
        console.log(`   1. Identifica el PID de los procesos usando el puerto ${PORT}:`);
        console.log(`      lsof -i :${PORT}`);
        console.log('   2. Finaliza los procesos con el PID identificado:');
        console.log('      kill -9 <PID>');
        console.log('\n   También puedes intentar:');
        console.log(`      npx kill-port ${PORT}`);
      } else {
        console.log(`✅ El puerto ${PORT} parece estar disponible.`);
        console.log('   Puedes continuar con la ejecución del proyecto.');
      }
    }
  });
}