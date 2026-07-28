/**
 * compress-wlc-images.js
 *
 * For every image in /web/public/imgs/projects/WLC:
 *   1. Crops the bottom 1/8 (keeps the top 7/8 — removes sky-line / ground clutter)
 *   2. Resizes to fit inside 1920×1080 (no upscaling)
 *   3. Re-exports as WebP @ quality 75
 *   4. Overwrites the original file in place
 *
 * Run from the project root:
 *   node scripts/compress-wlc-images.js
 *
 * Requires sharp:
 *   npm install sharp   (or:  cd web && npm install sharp)
 */

const path = require('path');
const fs   = require('fs');

async function main() {
  /* ── locate sharp ───────────────────────────────────────────── */
  let sharp;
  for (const attempt of ['sharp', path.resolve(__dirname, '../web/node_modules/sharp')]) {
    try { sharp = require(attempt); break; } catch { /* try next */ }
  }
  if (!sharp) {
    console.error('\n  sharp is not installed.\n');
    console.error('  Fix:  npm install sharp         (from project root)');
    console.error('     or cd web && npm install sharp\n');
    process.exit(1);
  }

  /* ── find images ────────────────────────────────────────────── */
  const WLC_DIR = path.resolve(__dirname, '../web/public/imgs/projects/WLC');
  if (!fs.existsSync(WLC_DIR)) {
    console.error(`Directory not found: ${WLC_DIR}`);
    process.exit(1);
  }

  const EXTS  = new Set(['.webp', '.jpg', '.jpeg', '.png']);
  const files = fs.readdirSync(WLC_DIR)
    .filter(f => EXTS.has(path.extname(f).toLowerCase()))
    .sort();

  if (files.length === 0) {
    console.log('No image files found.');
    return;
  }

  console.log(`\nProcessing ${files.length} images …\n`);

  let totalBefore = 0;
  let totalAfter  = 0;

  for (const file of files) {
    const src = path.join(WLC_DIR, file);
    const tmp = src + '.__tmp.webp';

    try {
      const img  = sharp(src);
      const meta = await img.metadata();

      // Keep top 7/8 of original height
      const cropH = Math.round(meta.height * (7 / 8));

      const before = fs.statSync(src).size;

      await img
        .extract({ left: 0, top: 0, width: meta.width, height: cropH })
        .resize({ width: 1920, height: 1080, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(tmp);

      const after = fs.statSync(tmp).size;
      fs.renameSync(tmp, src);          // atomic replace

      totalBefore += before;
      totalAfter  += after;

      const pct = Math.round((1 - after / before) * 100);
      const label = file.length > 46 ? file.slice(0, 43) + '…' : file.padEnd(46);
      console.log(`  ✓  ${label}  ${kb(before).padStart(7)} → ${kb(after).padStart(7)}  (−${String(pct).padStart(2)}%)`);

    } catch (err) {
      // Clean up temp file if it was created
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
      console.error(`  ✗  ${file}  ERROR: ${err.message}`);
    }
  }

  const saved = totalBefore - totalAfter;
  console.log(`\n  Done.`);
  console.log(`  Before : ${mb(totalBefore)}`);
  console.log(`  After  : ${mb(totalAfter)}`);
  console.log(`  Saved  : ${mb(saved)}  (${Math.round((1 - totalAfter / totalBefore) * 100)}%)\n`);
}

const kb = n => `${Math.round(n / 1024)} KB`;
const mb = n => `${(n / 1024 / 1024).toFixed(2)} MB`;

main().catch(err => { console.error(err); process.exit(1); });
