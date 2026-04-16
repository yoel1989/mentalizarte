const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');

async function convertToWebP() {
  const files = fs.readdirSync(assetsDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));
  
  console.log(`Convirtiendo ${files.length} imágenes a WebP...\n`);
  
  for (const file of files) {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    const originalSize = fs.statSync(inputPath).size;
    
    try {
      await sharp(inputPath)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      const newSize = fs.statSync(outputPath).size;
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      console.log(`✓ ${file}`);
      console.log(`  ${(originalSize / 1024).toFixed(1)} KB → ${(newSize / 1024).toFixed(1)} KB (${reduction}% reducción)`);
      
      fs.unlinkSync(inputPath);
      console.log(`  ✓ Original eliminado\n`);
    } catch (err) {
      console.error(`✗ Error con ${file}:`, err.message, '\n');
    }
  }
  
  console.log('¡Conversión completada!');
}

convertToWebP();
