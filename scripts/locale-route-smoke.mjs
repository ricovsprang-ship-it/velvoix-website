import fs from 'node:fs';
import path from 'node:path';

const defaultDistDir = path.resolve(process.cwd(), 'dist');
const distDir = path.resolve(process.argv[2] ?? defaultDistDir);

const routeChecks = [
  {
    route: '/',
    file: 'index.html',
    locale: 'nl',
    title: 'Velvoix | Van signaal naar duidelijke zorgactie',
    hero: 'Van signaal naar duidelijke zorgactie',
    nav: ['Hoe het werkt', 'Waarom Velvoix'],
  },
  {
    route: '/en/',
    file: path.join('en', 'index.html'),
    locale: 'en',
    title: 'Velvoix | From signal to clear care action',
    hero: 'From signal to clear care action',
    nav: ['How it works', 'Why Velvoix'],
  },
  {
    route: '/de/',
    file: path.join('de', 'index.html'),
    locale: 'de',
    title: 'Velvoix | Vom Signal zur klaren Handlung in der Pflege',
    hero: 'Vom Signal zur klaren Handlung in der Pflege',
    nav: ['Wie es funktioniert', 'Warum Velvoix'],
  },
  {
    route: '/es/',
    file: path.join('es', 'index.html'),
    locale: 'es',
    title: 'Velvoix | De la señal a una acción asistencial clara',
    hero: 'De la señal a una acción asistencial clara',
    nav: ['Cómo funciona', 'Por qué Velvoix'],
  },
];

const heroTitles = routeChecks.map(({ route, hero }) => ({ route, hero }));

function readHtml(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing build output: ${filePath}`);
  }

  return fs.readFileSync(filePath, 'utf8');
}

function decodeEntities(value) {
  return value
    .replace(/&#(\d+);/g, (_, decimal) => String.fromCodePoint(Number(decimal)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function collapseWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function stripTags(value) {
  return collapseWhitespace(decodeEntities(value.replace(/<[^>]+>/g, ' ')));
}

function getHtmlLang(html) {
  const match = html.match(/<html[^>]*\blang=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

function getTitle(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? stripTags(match[1]) : null;
}

function getHeroTitle(html) {
  const match = html.match(/<h1[^>]*data-hero-title[^>]*>([\s\S]*?)<\/h1>/i)
    ?? html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return match ? stripTags(match[1]) : null;
}

function getTextContent(html) {
  const withoutScripts = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ');

  return stripTags(withoutScripts);
}

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label} mismatch. Expected "${expected}", got "${actual ?? 'null'}".`);
  }
}

function assertIncludes(text, expected, label) {
  if (!text.includes(expected)) {
    throw new Error(`${label} missing expected marker "${expected}".`);
  }
}

function assertExcludes(text, unexpected, label) {
  if (text.includes(unexpected)) {
    throw new Error(`${label} unexpectedly contains foreign locale marker "${unexpected}".`);
  }
}

let hasFailure = false;

console.log(`Locale route smoke-check against ${distDir}`);

for (const check of routeChecks) {
  const filePath = path.join(distDir, check.file);

  try {
    const html = readHtml(filePath);
    const text = getTextContent(html);
    const htmlLang = getHtmlLang(html);
    const title = getTitle(html);
    const hero = getHeroTitle(html);

    assertEqual(htmlLang, check.locale, `${check.route} html lang`);
    assertEqual(title, check.title, `${check.route} title`);
    assertEqual(hero, check.hero, `${check.route} hero h1`);

    for (const navLabel of check.nav) {
      assertIncludes(text, navLabel, `${check.route} nav/text`);
    }

    for (const foreignHero of heroTitles) {
      if (foreignHero.route === check.route) continue;
      assertExcludes(text, foreignHero.hero, `${check.route} content`);
    }

    console.log(`PASS ${check.route} -> lang=${htmlLang}, title="${title}"`);
  } catch (error) {
    hasFailure = true;
    console.error(`FAIL ${check.route}: ${error.message}`);
  }
}

if (hasFailure) {
  process.exit(1);
}

console.log('Locale route smoke-check passed for /, /en/, /de/ and /es/.');
