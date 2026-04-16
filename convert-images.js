const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');
const files = fs.readdirSync(assetsDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));

console.log('Imágenes encontradas:', files.length);
console.log('Para convertir a WebP, usa una de estas opciones:');
console.log('');
console.log('OPCIÓN 1 - Online (más rápido):');
console.log('1. Ve a https://squoosh.app/');
console.log('2. Arrastra las imágenes');
console.log('3. Descarga en formato WebP');
console.log('');
console.log('OPCIÓN 2 - Con npm (si tienes sharp):');
console.log('npm install -g sharp');
console.log('npx sharp-cli convert src/assets/*.jpg src/assets/*.webp');
console.log('');
console.log('Imágenes a convertir:');
files.forEach(f => console.log('- ' + f));
