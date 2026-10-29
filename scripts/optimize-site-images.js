const fs = require('fs/promises');
const path = require('path');
const sharp = require('../web/node_modules/sharp');

const web = path.resolve(__dirname, '../web');
const publicDir = path.join(web, 'public');
const widths = [640, 1280, 1920];

async function sourceFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? sourceFiles(file) : /\.tsx?$/.test(file) ? [file] : [];
  }));
  return nested.flat();
}

async function optimizeHeroes() {
  const images = new Set(['/imgs/HomeHero.webp', '/imgs/BelangerTunnel.webp', '/imgs/PDQ.webp']);
  for (const file of await sourceFiles(path.join(web, 'src'))) {
    const source = await fs.readFile(file, 'utf8');
    const pattern = /(?:leftImage|rightImage|heroImage)\s*(?:=|:)\s*['"]([^'"]+)['"]|heroImage=\{\{\s*src:\s*['"]([^'"]+)['"]/g;
    for (const match of source.matchAll(pattern)) images.add(match[1] || match[2]);
    if (path.basename(file) === 'ServicesSectionNew.tsx') {
      for (const match of source.matchAll(/image:\s*['"]([^'"]+)['"]/g)) images.add(match[1]);
    }
  }
  for (const src of [...images].sort()) {
    if (!src.startsWith('/imgs/')) throw new Error(`Unsupported hero source: ${src}`);
    const source = path.join(publicDir, src);
    const original = await fs.readFile(source);
    const metadata = await sharp(original).metadata();
    const stem = src.replace(/^\/imgs\//, '').replace(/\.[^.]+$/, '');
    for (const width of widths) {
      const output = path.join(publicDir, 'imgs', 'optimized', `${stem}-${width}.webp`);
      await fs.mkdir(path.dirname(output), { recursive: true });
      const budget = width === 640 ? 75_000 : 180_000;
      let buffer;
      for (const quality of [78, 70, 62, 54, 46, 38]) {
        buffer = await sharp(source).rotate()
          .resize({ width, height: Math.round(width * 9 / 16), fit: 'cover', withoutEnlargement: true })
          .webp({ quality, effort: 6 }).toBuffer();
        if (buffer.length <= budget) break;
      }
      if (metadata.format === 'webp' && metadata.width <= width && original.length < buffer.length) {
        buffer = original;
      }
      if (buffer.length > budget) throw new Error(`Hero exceeds ${budget} byte budget: ${output}`);
      await fs.writeFile(output, buffer);
      console.log(`${src} -> ${width}w: ${buffer.length} bytes`);
    }
  }
}

async function createIcons() {
  const logo = path.join(publicDir, 'logos', 'logoCWT.webp');
  const icon = size => sharp(logo).resize(size, size, {
    fit: 'contain', background: '#ffffff',
  }).flatten({ background: '#ffffff' }).ensureAlpha().png().toBuffer();
  await fs.writeFile(path.join(publicDir, 'icon-96.png'), await icon(96));
  await fs.writeFile(path.join(publicDir, 'apple-touch-icon.png'), await icon(180));

  // ICO directory entries point to embedded PNG images, not renamed WebP bytes.
  const sizes = [32, 48, 96];
  const pngs = await Promise.all(sizes.map(icon));
  const header = Buffer.alloc(6 + sizes.length * 16);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  let offset = header.length;
  pngs.forEach((png, index) => {
    const entry = 6 + index * 16;
    header[entry] = sizes[index];
    header[entry + 1] = sizes[index];
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(png.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += png.length;
  });
  await fs.writeFile(path.join(web, 'src', 'app', 'favicon.ico'), Buffer.concat([header, ...pngs]));
}

Promise.all([optimizeHeroes(), createIcons()]).catch(error => {
  console.error(error);
  process.exitCode = 1;
});
