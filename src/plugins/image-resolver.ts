// Custom Vite plugin to handle image paths
import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function imageResolver(): Plugin {
  return {
    name: 'image-resolver',
    enforce: 'pre',
    resolveId(source) {
      // Only handle image files
      if (source.match(/\.(png|jpe?g|gif|svg)$/)) {
        return source;
      }
      return null;
    },
    load(id) {
      // Check if this is an image file
      if (id.match(/\.(png|jpe?g|gif|svg)$/)) {
        const publicPath = path.resolve('public', path.basename(id));
        
        // Check if the file exists in the public directory
        if (fs.existsSync(publicPath)) {
          // Return a module that exports the URL
          return `export default "/${path.basename(id)}"`;
        }
      }
      return null;
    }
  };
}
