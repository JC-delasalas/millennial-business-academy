// Script to optimize images for better performance
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

// Images to optimize with their target sizes and quality
const imagesToOptimize = [
  {
    input: 'JC.png',
    outputs: [
      { name: 'JC-optimized.webp', width: 800, quality: 85, format: 'webp' },
      { name: 'JC-optimized.jpg', width: 800, quality: 85, format: 'jpeg' },
      { name: 'JC-small.webp', width: 400, quality: 80, format: 'webp' },
    ]
  },
  {
    input: 'V1-PNG-MBA.png',
    outputs: [
      { name: 'V1-PNG-MBA-optimized.webp', width: 512, quality: 90, format: 'webp' },
      { name: 'V1-PNG-MBA-optimized.png', width: 512, quality: 90, format: 'png' },
      { name: 'V1-PNG-MBA-small.webp', width: 256, quality: 85, format: 'webp' },
    ]
  },
  {
    input: 'og-image.png',
    outputs: [
      { name: 'og-image-optimized.webp', width: 1200, quality: 85, format: 'webp' },
      { name: 'og-image-optimized.jpg', width: 1200, quality: 85, format: 'jpeg' },
    ]
  },
  {
    input: 'JCcloseup.jpg',
    outputs: [
      { name: 'JCcloseup-optimized.webp', width: 600, quality: 85, format: 'webp' },
      { name: 'JCcloseup-optimized.jpg', width: 600, quality: 85, format: 'jpeg' },
    ]
  }
];

async function optimizeImages() {
  console.log('Starting image optimization...');
  
  for (const imageConfig of imagesToOptimize) {
    const inputPath = path.join(publicDir, imageConfig.input);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Input file not found: ${imageConfig.input}`);
      continue;
    }
    
    console.log(`\n📸 Processing ${imageConfig.input}...`);
    
    for (const output of imageConfig.outputs) {
      const outputPath = path.join(publicDir, output.name);
      
      try {
        let sharpInstance = sharp(inputPath);
        
        if (output.width) {
          sharpInstance = sharpInstance.resize(output.width, null, {
            withoutEnlargement: true,
            fit: 'inside'
          });
        }
        
        switch (output.format) {
          case 'webp':
            sharpInstance = sharpInstance.webp({ quality: output.quality });
            break;
          case 'jpeg':
            sharpInstance = sharpInstance.jpeg({ quality: output.quality });
            break;
          case 'png':
            sharpInstance = sharpInstance.png({ quality: output.quality });
            break;
        }
        
        await sharpInstance.toFile(outputPath);
        
        // Get file sizes for comparison
        const originalSize = fs.statSync(inputPath).size;
        const optimizedSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`  ✅ ${output.name} - ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
        
      } catch (error) {
        console.error(`  ❌ Error processing ${output.name}:`, error.message);
      }
    }
  }
  
  console.log('\n🎉 Image optimization complete!');
}

optimizeImages().catch(console.error);
