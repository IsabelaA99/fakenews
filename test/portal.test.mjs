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
docs.push('arquitetura', 'docs/exploracoes', 'docs/datasets', 'docs/tecnologias', 'docs/paradigmas', 'docs/metodologia', 'docs/changelog');
docs.push('relatorio-scrum');
test('Relatório Scrum oferece PDF e impressão', () => {
  const page = readFileSync(resolve(site, 'relatorio-scrum.html'), 'utf8');
  assert.match(page, /Baixar PDF/);
  assert.match(page, /Imprimir \/ Salvar como PDF/);
  assert.match(page, /assets\/print.js/);
  assert.match(page, /Pedro Augusto/);
  assert.equal(readFileSync(resolve(site,'assets/relatorio-scrum.pdf')).subarray(0,5).toString(),'%PDF-');
});
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
      if (url.hash) {
        const destination = readFileSync(resolve(site, url.pathname.slice('/fakenews/'.length)), 'utf8');
        assert.ok(destination.includes(`id="${url.hash.slice(1)}"`), `Âncora ausente: ${url.href}`);
      }
    }
  }
});
test('@spec:AC-105 Tópicos levam a seções próprias do Fake Eyes', () => {
  const html = readFileSync(resolve(site, 'index.html'), 'utf8');
  for (const [id,title] of [['exploracoes','Explorações'],['matriz','Matriz de Confiança'],['datasets','Bases de dados'],['tecnologias','Tecnologias'],['paradigmas','Paradigmas de IA'],['metodologia','Como trabalhamos'],['versionamento','Changelog']]) {
    assert.ok(html.includes(`href="#${id}"`));
    assert.ok(html.includes(`id="${id}"`));
    assert.ok(html.includes(`<h2>${title}</h2>`));
  }
  assert.match(html, /Ver repositório/);
  assert.match(html, /href="arquitetura.html">Como funciona/);
  assert.doesNotMatch(html, /Lucas-AV|Grupo12-ResIA/);
});
test('@spec:AC-106 Arquitetura é proposta e PDF está disponível', () => {
  const html = readFileSync(resolve(site, 'arquitetura.html'), 'utf8');
  assert.match(html, /Arquitetura proposta/);
  assert.match(html, /ainda não foi|não um sistema já integrado/);
  assert.match(html, /href="assets\/arquitetura-fake-eyes.pdf"/);
  const pdf = readFileSync(resolve(site, 'assets/arquitetura-fake-eyes.pdf'));
  assert.equal(pdf.subarray(0,5).toString(), '%PDF-');
  assert.ok(pdf.length > 3000);
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


