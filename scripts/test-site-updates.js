const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require('../web/node_modules/playwright');
const sharp = require('../web/node_modules/sharp');

const root = path.resolve(__dirname, '../web/out');

async function filesIn(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? filesIn(file) : [file];
  }))).flat();
}

async function checkAssets() {
  const icons = [
    ['icon-96.png', 96],
    ['apple-touch-icon.png', 180],
  ];
  for (const [file, size] of icons) {
    const metadata = await sharp(path.join(root, file)).metadata();
    assert.equal(metadata.format, 'png');
    assert.equal(metadata.width, size);
    assert.equal(metadata.height, size);
  }
  const ico = await fs.readFile(path.join(root, 'favicon.ico'));
  assert.equal(ico.readUInt16LE(0), 0);
  assert.equal(ico.readUInt16LE(2), 1);
  assert.equal(ico.readUInt16LE(4), 3);
  for (let index = 0; index < 3; index++) {
    const entry = 6 + index * 16;
    assert.equal(ico[entry], ico[entry + 1]);
    const size = ico.readUInt32LE(entry + 8);
    const offset = ico.readUInt32LE(entry + 12);
    const metadata = await sharp(ico.subarray(offset, offset + size)).metadata();
    assert.equal(metadata.format, 'png');
    assert.equal(metadata.channels, 4);
    assert.equal(metadata.width, ico[entry]);
  }
  const assets = await filesIn(path.join(root, 'imgs', 'optimized'));
  for (const file of assets) {
    const bytes = await fs.readFile(file);
    assert.equal((await sharp(bytes).metadata()).format, 'webp', file);
    assert.ok(bytes.length <= (file.endsWith('-640.webp') ? 75_000 : 180_000), file);
  }
  for (const file of (await filesIn(root)).filter(file => file.endsWith('.html'))) {
    const html = await fs.readFile(file, 'utf8');
    assert.ok(!html.includes('\u2014') && !html.includes('&mdash;'), `Em dash in ${file}`);
    for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
      if (!/fetchPriority="high"/i.test(tag[0]) || !/src="\/imgs\//.test(tag[0])) continue;
      assert.match(tag[0], /src="\/imgs\/optimized\//, `Unoptimized header in ${file}`);
      for (const match of tag[0].matchAll(/\/imgs\/optimized\/[^"\s,]+\.webp/g)) {
        await fs.access(path.join(root, match[0]));
      }
    }
  }
  console.log(`PASS: ${assets.length} WebP variants, byte budgets, icon formats, and exported header references`);
}

function staticServer() {
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
  return http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://localhost');
      let file = path.resolve(root, `.${decodeURIComponent(url.pathname)}`);
      if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
        res.writeHead(403).end();
        return;
      }
      if ((await fs.stat(file)).isDirectory()) file = path.join(file, 'index.html');
      res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
      res.end(await fs.readFile(file));
    } catch (error) {
      if (error.code === 'ENOENT') res.writeHead(404).end();
      else {
        console.error(error);
        res.writeHead(500).end();
      }
    }
  });
}

async function checkBrowser(baseUrl) {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(baseUrl);
    await page.getByRole('heading', { name: 'Complete Solutions for Modern Wash Operations' }).waitFor();
    assert.equal(await page.locator('link[rel="icon"][href="/icon-96.png"]').count(), 1);
    assert.equal(await page.locator('link[rel="apple-touch-icon"]').count(), 1);
    for (const route of ['/', '/municipal-fleet-wash/', '/equipment-sales/ds-iq-self-wash/', '/equipment-sales/pdq-laserwash-360-plus/', '/equipment-sales/belanger-insta-kleen/', '/projects/worlds-longest-carwash/']) {
      await page.goto(`${baseUrl}${route}`);
      const hero = page.locator('img[fetchpriority="high"][src^="/imgs/"]').first();
      await hero.waitFor();
      assert.match(await hero.getAttribute('srcset'), /640w.*1280w.*1920w/);
      assert.ok(await hero.evaluate(image => image.complete && image.naturalWidth > 0), route);
      if (route.includes('/projects/')) {
        assert.equal(await page.locator('h1').innerText(), 'Sota Shine One-Six-Nine');
        await page.getByText('No official world-record title has been awarded to this project.').waitFor();
        assert.ok(!(await page.locator('body').innerText()).includes('Site Work Is Underway'));
      }
    }

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${baseUrl}/contact/`);
    await page.getByRole('heading', { name: 'What type of help do you need?' }).waitFor();
    assert.equal(await page.locator('#contact-inquiry button').filter({ hasText: 'Choose this topic' }).count(), 3);
    await page.getByRole('button', { name: /Chemical Sales/ }).click();
    await page.getByRole('heading', { name: "Let's talk chemical sales" }).waitFor();
    assert.ok(await page.locator('#contact-inquiry h2').evaluate(heading => heading === document.activeElement));
    await page.locator('#name').fill('Jordan Operator');
    await page.locator('#email').fill('jordan@washowner.net');
    await page.locator('#phone').fill('6125550123');
    await page.locator('#company').fill('Test Wash');
    await page.locator('#inquiry').fill('Our wash needs updated equipment and chemistry support.');
    await page.locator('#bestTime').selectOption('morning');
    await page.getByRole('button', { name: 'Change topic' }).click();
    await page.getByRole('button', { name: /Service & Maintenance/ }).click();
    assert.equal(await page.locator('#name').inputValue(), 'Jordan Operator');
    assert.match(await page.locator('#inquiry').getAttribute('placeholder'), /What equipment needs attention/);
    await page.getByRole('button', { name: 'Change topic' }).click();
    await page.getByRole('button', { name: /Equipment Sales/ }).click();
    assert.equal(await page.locator('#email').inputValue(), 'jordan@washowner.net');
    assert.match(await page.locator('#inquiry').getAttribute('placeholder'), /new site/);
    await page.getByLabel('Parts', { exact: true }).check();

    let attempts = 0;
    let submitted;
    await page.route('**/api/contact', async route => {
      attempts++;
      submitted = route.request().postDataJSON();
      await route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ success: false, message: 'Service unavailable' }) });
    });
    await page.getByRole('button', { name: 'Send Inquiry', exact: true }).click();
    await page.getByRole('heading', { name: 'Delivery Not Confirmed' }).waitFor();
    assert.equal(attempts, 3);
    assert.equal(submitted.contactType, 'sales');
    assert.deepEqual(submitted.areasOfInterest, ['parts']);
    assert.equal(submitted.website, '');
    assert.ok(!(await page.getByRole('alert').filter({ hasText: 'Delivery Not Confirmed' }).innerText()).match(/saved and queued|message is pending/i));
    await page.getByRole('button', { name: 'Back to My Details' }).click();
    assert.equal(await page.locator('#name').inputValue(), 'Jordan Operator');
    assert.equal(await page.locator('#bestTime').inputValue(), 'morning');
    await page.unroute('**/api/contact');
    await page.route('**/api/contact', route => route.fulfill({
      status: 202, contentType: 'application/json', body: JSON.stringify({ success: true, message: 'Accepted' }),
    }));
    await page.getByRole('button', { name: 'Send Inquiry', exact: true }).click();
    await page.getByRole('heading', { name: 'Message Sent Successfully!' }).waitFor();
    await page.getByRole('button', { name: 'Submit Another Inquiry' }).click();
    await page.getByRole('heading', { name: 'What type of help do you need?' }).waitFor();
    await page.getByRole('button', { name: /Chemical Sales/ }).click();
    assert.equal(await page.locator('#name').inputValue(), '');
    assert.equal(await page.locator('#inquiry').inputValue(), '');
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`${baseUrl}/contact/`);
      await page.getByRole('button', { name: /Service & Maintenance/ }).click();
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Contact overflow at ${width}`);
      await page.goto(baseUrl);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Home overflow at ${width}`);
    }
    assert.deepEqual(errors, []);
    console.log('PASS: desktop/mobile layouts, responsive hero delivery, favicon links, completion copy, all contact topics, draft retention, failed delivery, retry, and successful submission');
  } finally {
    await browser.close();
  }
}

async function main() {
  await checkAssets();
  const server = staticServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    await checkBrowser(`http://127.0.0.1:${server.address().port}`);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
