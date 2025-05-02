// Script to convert PNG to ICO
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const pngPath = path.join(__dirname, '../public/V1-PNG-MBA.png');
const outputPath = path.join(__dirname, '../public/favicon.ico');

// Create ICO file from PNG
async function convertPngToIco() {
  try {
    // Create different sizes for the favicon
    const sizes = [16, 32, 48, 64];
    const resizedImages = await Promise.all(
      sizes.map(async (size) => {
        const buffer = await sharp(pngPath)
          .resize(size, size)
          .toBuffer();
        return { size, buffer };
      })
    );

    // Save the smallest size as favicon.ico
    await sharp(resizedImages[0].buffer)
      .toFile(outputPath);

    console.log('Successfully created favicon.ico from PNG');
  } catch (error) {
    console.error('Error converting PNG to ICO:', error);
  }
}

convertPngToIco();
