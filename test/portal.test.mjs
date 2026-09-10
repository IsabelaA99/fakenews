import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
execFileSync(process.execPath, [resolve(root, 'scripts/build.mjs')]);
const site = resolve(root, '_site');
const docs = ['README', 'PRD', 'POC', 'docs/rdo', 'docs/hipoteses', 'docs/guiding-questions', 'docs/matriz-confianca', 'docs/casos-forenses', 'research/questionario', 'research/roteiro-entrevista'];
test('@spec:AC-101 Todos os documentos são legíveis e têm fonte Markdown', () => {
  for (const doc of docs) {
    assert.ok(readFileSync(resolve(root, doc + '.md'), 'utf8').length > 200);
    const html = readFileSync(resolve(site, doc + '.html'), 'utf8');
    assert.match(html, /<h1>[^<]+<\/h1>/);
    assert.match(html, /<nav aria-label=/);
    assert.match(html, /<article>/);
    assert.ok(existsSync(resolve(site, doc + '.md')));
  }
});
test('@spec:AC-102 Links e estilos funcionam no subcaminho do projeto', () => {
  for (const page of ['index', ...docs]) {
    const html = readFileSync(resolve(site, page + '.html'), 'utf8');
    const base = new URL(page + '.html', 'https://example.test/fakenews/');
    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const url = new URL(match[1], base);
      if (url.origin !== base.origin) continue;
      assert.ok(url.pathname.startsWith('/fakenews/'), url.href);
      assert.ok(existsSync(resolve(site, url.pathname.slice('/fakenews/'.length))), url.href);
    }
  }
});
test('@spec:AC-103 Página inicial comunica limitações e estágio real', () => {
  const html = readFileSync(resolve(site, 'index.html'), 'utf8');
  assert.match(html, /Em planejamento/);
  assert.match(html, /Sem analisador ativo e sem resultados de pesquisa publicados/);
  assert.doesNotMatch(html, /<form|<input/);
});
test('@spec:AC-104 Build publica somente o portal e tem workflow de deploy', () => {
  const expected = ['.nojekyll', 'assets', 'docs', 'research', 'index.html', ...docs.filter(p => !p.includes('/')).flatMap(p => [p + '.md', p + '.html'])].sort();
  assert.deepEqual(readdirSync(site).sort(), expected);
  const workflow = readFileSync(resolve(root, '.github/workflows/pages.yml'), 'utf8');
  assert.match(workflow, /branches: \[main\]/);
  assert.match(workflow, /npm run build/);
  assert.match(workflow, /path: _site/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
});


