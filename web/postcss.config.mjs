import path from 'path';
import { fileURLToPath } from 'url';

// In webpack mode (next dev --webpack), import.meta.url correctly points to
// web/postcss.config.mjs, so __dirname = web/. Passing base: __dirname tells
// @tailwindcss/postcss to resolve tailwindcss from web/node_modules.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  plugins: {
    '@tailwindcss/postcss': { base: __dirname },
  },
};
