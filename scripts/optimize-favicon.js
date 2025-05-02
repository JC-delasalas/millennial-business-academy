// Script to create optimized favicon.png
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const pngPath = path.join(__dirname, '../public/V1-PNG-MBA.png');
const outputPath = path.join(__dirname, '../public/favicon.png');

// Create optimized PNG favicon
async function createOptimizedFavicon() {
  try {
    // Create a 32x32 favicon.png
    await sharp(pngPath)
      .resize(32, 32)
      .toFile(outputPath);

    console.log('Successfully created optimized favicon.png');
  } catch (error) {
    console.error('Error creating optimized favicon:', error);
  }
}

createOptimizedFavicon();
