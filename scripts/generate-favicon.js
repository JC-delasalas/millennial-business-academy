// Script to convert SVG to ICO
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import svg2img from 'svg2img';
import sharp from 'sharp';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the SVG file
const svgPath = path.join(__dirname, '../public/favicon.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

// Convert SVG to PNG with different sizes
const sizes = [16, 32, 48, 64, 128, 256];
const pngBuffers = [];

// Function to convert SVG to PNG with a specific size
function convertToPng(size) {
  return new Promise((resolve, reject) => {
    svg2img(svgContent, { width: size, height: size }, (err, buffer) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ size, buffer });
    });
  });
}

// Convert SVG to multiple PNG sizes
Promise.all(sizes.map(size => convertToPng(size)))
  .then(results => {
    // Sort results by size
    results.sort((a, b) => a.size - b.size);

    // Create temporary PNG files
    const tempFiles = results.map(({ size, buffer }, index) => {
      const tempPath = path.join(__dirname, `../temp_${size}.png`);
      fs.writeFileSync(tempPath, buffer);
      return tempPath;
    });

    // Use sharp to create ICO file
    const outputPath = path.join(__dirname, '../public/favicon.ico');

    // Create ICO file using sharp
    sharp(tempFiles[0])
      .toFile(outputPath, (err) => {
        if (err) {
          console.error('Error creating ICO file:', err);
        } else {
          console.log('Successfully created favicon.ico');
        }

        // Clean up temporary files
        tempFiles.forEach(file => {
          fs.unlinkSync(file);
        });
      });
  })
  .catch(err => {
    console.error('Error converting SVG to PNG:', err);
  });
