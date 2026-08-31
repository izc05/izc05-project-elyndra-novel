import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const MANUSCRIPT = path.join(ROOT, 'manuscript');
const ART = path.join(ROOT, 'art');
const OUT = path.join(ROOT, 'dist');
const WEB = path.join(OUT, 'web');

const errors = [];
const warnings = [];

const esc = (s = '') => s
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

function toRoman(num) {
  if (num === 0) return 'PROLOGO';
  const pairs = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  let n = num;
  let out = '';
  for (const [value, token] of pairs) {
    while (n >= value) { out += token; n -= value; }
  }
  return out;
}

function displayRoman(num) {
  return num === 0 ? 'PRÓLOGO' : toRoman(num);
}

function inlineMd(text) {
  let out = esc(text);
  out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\*(.+?)\*/g, '<em>$1</em>');
  return out;
}

function renderBody(markdown) {
  const lines = markdown.replace(/^# .+\r?\n/, '').split(/\r?\n/);
  const html = [];
  let paragraph = [];
  const flush = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMd(paragraph.join(' '))}</p>`);
    paragraph = [];
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    if (line === '---') {
      flush();
      html.push('<div class="scene-break" aria-hidden="true">⁂</div>');
      continue;
    }
    if (line.startsWith('## ')) {
      flush();
      html.push(`<h2>${inlineMd(line.slice(3))}</h2>`);
      continue;
    }
    paragraph.push(line);
  }
  flush();
  return html.join('\n');
}

function resolveRelativeLinks(markdown, filePath) {
  const baseDir = path.dirname(filePath);
  const matches = [...markdown.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)];
  for (const match of matches) {
    const target = match[1].trim().split(/\s+['"]/)[0];
    if (!target || /^(https?:|mailto:|#)/i.test(target)) continue;
    const clean = decodeURIComponent(target.split('#')[0]);
    const resolved = path.resolve(baseDir, clean);
    if (!fs.existsSync(resolved)) warnings.push(`Enlace/recurso no encontrado en ${path.relative(ROOT, filePath)}: ${target}`);
  }
}

function preferredImage(code) {
  for (const ext of ['webp', 'png', 'jpg', 'jpeg', 'svg']) {
    const rel = `art/masters/${code}-A.${ext}`;
    if (fs.existsSync(path.join(ROOT, rel))) return rel;
  }
  return null;
}

function copyDir(src, dest) {
  if (fs.existsSync(src)) fs.cpSync(src, dest, { recursive: true });
}

if (!fs.existsSync(MANUSCRIPT)) errors.push('No existe manuscript/.');

const chapterFiles = fs.existsSync(MANUSCRIPT)
  ? fs.readdirSync(MANUSCRIPT).filter((name) => /^\d{2}-.+\.md$/i.test(name)).sort()
  : [];

if (!chapterFiles.length) errors.push('No se han encontrado capítulos NN-*.md en manuscript/.');

const chapters = chapterFiles.map((file, index) => {
  const full = path.join(MANUSCRIPT, file);
  const markdown = fs.readFileSync(full, 'utf8');
  const prefix = Number(file.slice(0, 2));
  const h1 = [...markdown.matchAll(/^# (.+)$/gm)];
  if (prefix !== index) errors.push(`Secuencia de capítulos inesperada: ${file}; se esperaba prefijo ${String(index).padStart(2, '0')}.`);
  if (h1.length !== 1) errors.push(`${file} debe contener exactamente un título H1; encontrados ${h1.length}.`);
  if (markdown.trim().length < 200) warnings.push(`${file} parece demasiado corto.`);
  resolveRelativeLinks(markdown, full);
  const title = h1[0]?.[1]?.trim() || file.replace(/^\d{2}-/, '').replace(/\.md$/, '').replaceAll('-', ' ');
  const code = toRoman(prefix);
  const openingImage = preferredImage(code);
  if (!openingImage) warnings.push(`Sin ilustración de apertura final para ${displayRoman(prefix)} (${file}).`);
  return { file, prefix, title, code, markdown, openingImage };
});

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(WEB, { recursive: true });

for (const file of ['index.html', 'book.html']) {
  const src = path.join(ROOT, file);
  if (!fs.existsSync(src)) errors.push(`Falta ${file}.`);
  else fs.copyFileSync(src, path.join(WEB, file));
}
copyDir(MANUSCRIPT, path.join(WEB, 'manuscript'));
copyDir(ART, path.join(WEB, 'art'));

if (fs.existsSync(path.join(WEB, 'book.html'))) {
  let book = fs.readFileSync(path.join(WEB, 'book.html'), 'utf8');
  const filesLiteral = JSON.stringify(chapterFiles);
  const romanLiteral = JSON.stringify(chapters.map((c) => c.code));
  const displayLiteral = JSON.stringify(chapters.map((c) => displayRoman(c.prefix)));
  const replacements = [
    [/const files=\[[\s\S]*?\];const roman=/, `const files=${filesLiteral};const roman=`],
    [/const roman=\[[\s\S]*?\];const displayRoman=/, `const roman=${romanLiteral};const displayRoman=`],
    [/const displayRoman=\[[\s\S]*?\];const openingLabels=/, `const displayRoman=${displayLiteral};const openingLabels=`]
  ];
  for (const [pattern, replacement] of replacements) {
    if (!pattern.test(book)) errors.push(`No se pudo actualizar automáticamente book.html con ${pattern}.`);
    else book = book.replace(pattern, replacement);
  }
  book = book.replace("h.after(ill(roman[i]+'-A',openingLabels[i],true))", "h.after(ill(roman[i]+'-A',openingLabels[i]||h.textContent,true))");
  fs.writeFileSync(path.join(WEB, 'book.html'), book);
}

if (fs.existsSync(path.join(WEB, 'index.html')) && chapters.length) {
  let index = fs.readFileSync(path.join(WEB, 'index.html'), 'utf8');
  const last = displayRoman(chapters.at(-1).prefix);
  index = index.replace(/Prólogo \+ capítulos I–[IVXLCDM]+/g, `Prólogo + capítulos I–${last}`);
  index = index.replace(/WEB BUILD [0-9.]+/g, `WEB BUILD ${new Date().toISOString().slice(0, 10).replaceAll('-', '.')}`);
  fs.writeFileSync(path.join(WEB, 'index.html'), index);
}

const toc = chapters.map((c) => `<li><a href="#chapter-${c.prefix}"><span>${displayRoman(c.prefix)}</span>${esc(c.title.replace(/^Capítulo\s+[IVXLCDM]+\s+—\s+/i, '').replace(/^Prólogo\s+—\s+/i, ''))}</a></li>`).join('\n');

const chapterHtml = chapters.map((c) => {
  const image = c.openingImage ? `<figure class="chapter-art"><img src="web/${c.openingImage}" alt="Ilustración de ${esc(c.title)}"><figcaption>${displayRoman(c.prefix)} · Elyndran</figcaption></figure>` : '';
  let extra = '';
  if (c.prefix === 12 && fs.existsSync(path.join(ROOT, 'art/maps/MAP_A_LOCAL_MASTER.svg'))) {
    extra += '<figure class="map"><img src="web/art/maps/MAP_A_LOCAL_MASTER.svg" alt="Mapa A del sector local"><figcaption>Mapa A · Sector local</figcaption></figure>';
  }
  if (c.prefix === chapters.at(-1).prefix && fs.existsSync(path.join(ROOT, 'art/maps/MAP_B_XXV_EXPANSION_MASTER.svg'))) {
    extra += '<figure class="map"><img src="web/art/maps/MAP_B_XXV_EXPANSION_MASTER.svg" alt="Mapa B de expansión"><figcaption>Mapa B · Expansión</figcaption></figure>';
  }
  return `<article class="chapter" id="chapter-${c.prefix}">
    <header class="chapter-head"><div class="chapter-kicker">${displayRoman(c.prefix)}</div><h1>${esc(c.title)}</h1></header>
    ${image}
    <div class="prose">${renderBody(c.markdown)}</div>
    ${extra}
  </article>`;
}).join('\n');

const coverImage = chapters[0]?.openingImage ? `web/${chapters[0].openingImage}` : '';
const sourceSha = process.env.GITHUB_SHA || 'local';
const generatedAt = new Date().toISOString();

const printHtml = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ELYNDRAN — Edición editorial</title>
<style>
@page{size:6in 9in;margin:.68in .62in .72in .72in;@bottom-center{content:counter(page);font:9pt Georgia,serif;color:#6f675e}}
@page cover{margin:0;@bottom-center{content:none}}
@page toc{margin:.7in .62in .7in .72in}
*{box-sizing:border-box}html{font-size:10.6pt}body{margin:0;color:#211d19;background:#fff;font-family:Georgia,'Times New Roman',serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}
a{color:inherit;text-decoration:none}.cover{page:cover;break-after:page;position:relative;width:6in;height:9in;overflow:hidden;background:#090c0e;color:#f3eee5;display:flex;align-items:flex-end}.cover-bg{position:absolute;inset:0;background:${coverImage ? `linear-gradient(180deg,rgba(5,8,10,.18),rgba(5,8,10,.38) 48%,rgba(5,8,10,.88)),url('${coverImage}') center/cover no-repeat` : '#090c0e'}}.cover-content{position:relative;z-index:1;padding:.8in .58in .72in}.cover-eyebrow{font:700 8pt system-ui,sans-serif;letter-spacing:.32em;text-transform:uppercase;color:#d7ad6c}.cover h1{font-size:41pt;line-height:.9;letter-spacing:.08em;font-weight:500;margin:.16in 0 .18in}.cover p{font-size:12pt;line-height:1.5;font-style:italic;margin:0;max-width:4.5in;color:#e6ded2}.title-page{break-after:page;text-align:center;padding-top:2.15in}.title-page .small{font:700 8pt system-ui,sans-serif;letter-spacing:.28em;color:#9a7138;text-transform:uppercase}.title-page h1{font-size:34pt;letter-spacing:.08em;font-weight:500;margin:.18in 0}.title-page p{font-style:italic;color:#62594f}.toc{page:toc;break-after:page}.toc h1{font-size:22pt;font-weight:500;margin:0 0 .35in}.toc ol{list-style:none;padding:0;margin:0;columns:2;column-gap:.4in}.toc li{break-inside:avoid;border-bottom:.5pt solid #ddd3c7;padding:.07in 0;font-size:9.5pt}.toc li span{display:inline-block;width:.48in;color:#9a7138;font:700 7.5pt system-ui,sans-serif;letter-spacing:.08em}.chapter{break-before:page}.chapter-head{margin:0 0 .32in}.chapter-kicker{font:700 7.5pt system-ui,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#986a30;margin-bottom:.12in}.chapter h1{font-size:24pt;line-height:1.05;font-weight:500;margin:0}.prose p{font-size:10.6pt;line-height:1.52;text-align:justify;hyphens:auto;margin:0 0 .12in;orphans:3;widows:3}.prose p+p{text-indent:.18in}.prose strong{font-weight:700;letter-spacing:.01em}.scene-break{text-align:center;letter-spacing:.35em;color:#947c60;margin:.24in 0 .22in;break-inside:avoid}.chapter-art,.map{margin:.18in 0 .28in;break-inside:avoid;page-break-inside:avoid}.chapter-art img,.map img{display:block;width:100%;max-height:5.8in;object-fit:contain}.chapter-art figcaption,.map figcaption{text-align:center;font:6.8pt system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#776b60;margin-top:.06in}.map{break-before:page}.map img{max-height:7.1in}.chapter h2{font-size:15pt;font-weight:500;margin:.3in 0 .15in;break-after:avoid}blockquote,figure{break-inside:avoid}
</style></head><body>
<section class="cover"><div class="cover-bg"></div><div class="cover-content"><div class="cover-eyebrow">Novela ilustrada</div><h1>ELYNDRAN</h1><p>Un mundo que no se revela de golpe. Una caída, una ruta y demasiadas preguntas bajo la niebla.</p></div></section>
<section class="title-page"><div class="small">Project Elyndra</div><h1>ELYNDRAN</h1><p>Edición editorial 6 × 9 · generada desde el manuscrito canónico</p></section>
<nav class="toc"><h1>Contenido</h1><ol>${toc}</ol></nav>
${chapterHtml}
<footer style="break-before:page;padding-top:2.5in;text-align:center;color:#766d63"><p>Fin de la edición disponible.</p><p style="font-size:8pt">Build ${esc(sourceSha.slice(0,12))} · ${esc(generatedAt)}</p></footer>
</body></html>`;

fs.writeFileSync(path.join(OUT, 'print.html'), printHtml);

const masterCount = fs.existsSync(path.join(ART, 'masters')) ? fs.readdirSync(path.join(ART, 'masters')).filter((f) => /\.(webp|png|jpe?g|svg)$/i.test(f)).length : 0;
const report = {
  generated_at: generatedAt,
  source_sha: sourceSha,
  chapter_count: chapters.length,
  first_chapter: chapters[0]?.file || null,
  last_chapter: chapters.at(-1)?.file || null,
  art_master_files: masterCount,
  errors,
  warnings
};
fs.writeFileSync(path.join(OUT, 'publication-report.json'), JSON.stringify(report, null, 2));

const status = `# Elyndran publication build\n\n- Estado: ${errors.length ? '❌ ERROR' : '✅ OK'}\n- Capítulos detectados: ${chapters.length}\n- Último capítulo: ${chapters.at(-1)?.title || '—'}\n- Masters visuales detectados: ${masterCount}\n- Errores: ${errors.length}\n- Avisos: ${warnings.length}\n- Fuente: ${sourceSha}\n- Generado: ${generatedAt}\n\n## Avisos\n${warnings.length ? warnings.map((w) => `- ${w}`).join('\n') : '- Ninguno'}\n\n## Errores\n${errors.length ? errors.map((e) => `- ${e}`).join('\n') : '- Ninguno'}\n`;
fs.writeFileSync(path.join(OUT, 'status.md'), status);

if (errors.length) {
  console.error(status);
  process.exit(1);
}
console.log(status);
