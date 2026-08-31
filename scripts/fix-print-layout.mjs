import fs from 'node:fs';

const file = 'dist/print.html';
if (!fs.existsSync(file)) {
  throw new Error('dist/print.html no existe; ejecuta primero build-publication.mjs');
}

let html = fs.readFileSync(file, 'utf8');

const replacements = [
  [
    '@page toc{margin:.7in .62in .7in .72in}',
    '@page title{margin:.68in .62in .72in .72in;@bottom-center{content:none}}@page toc{margin:.7in .62in .7in .72in;@bottom-center{content:none}}'
  ],
  [
    '.title-page{break-after:page;text-align:center;padding-top:2.15in}',
    '.title-page{page:title;break-after:page;text-align:center;padding-top:2.15in}'
  ],
  [
    '.toc li span{display:inline-block;width:.48in;color:#9a7138;font:700 7.5pt system-ui,sans-serif;letter-spacing:.08em}',
    '.toc li a{display:grid;grid-template-columns:.78in minmax(0,1fr);column-gap:.06in;align-items:baseline}.toc li span{display:block;width:auto;color:#9a7138;font:700 7.5pt system-ui,sans-serif;letter-spacing:.08em}'
  ]
];

for (const [before, after] of replacements) {
  if (!html.includes(before)) {
    throw new Error(`Patrón de maquetación no encontrado: ${before}`);
  }
  html = html.replace(before, after);
}

fs.writeFileSync(file, html);
console.log('PDF front matter layout polished.');
