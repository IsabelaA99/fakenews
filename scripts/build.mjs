import { mkdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, '_site');
const docs = [
  ['README.md', 'Visão geral', 'O problema, a proposta e os limites do projeto.', 'Projeto'],
  ['PRD.md', 'Visão e requisitos', 'Público, escopo e critérios para o produto.', 'Projeto'],
  ['POC.md', 'Prova de conceito', 'Como vamos testar a viabilidade da proposta.', 'Projeto'],
  ['docs/rdo.md', 'Diário do projeto', 'Atividades, decisões e próximos passos.', 'Documentação'],
  ['docs/hipoteses.md', 'Hipóteses', 'O que queremos investigar, sem antecipar conclusões.', 'Documentação'],
  ['docs/guiding-questions.md', 'Perguntas norteadoras', 'As perguntas que orientam cada descoberta.', 'Documentação'],
  ['docs/matriz-confianca.md', 'Matriz de confiança', 'Evidências, fontes, data e contexto.', 'Documentação'],
  ['docs/casos-forenses.md', 'Casos forenses', 'Um roteiro para investigar alegações.', 'Documentação'],
  ['research/questionario.md', 'Questionário', 'Um ponto de partida para conhecer os participantes.', 'Pesquisa'],
  ['research/roteiro-entrevista.md', 'Roteiro de entrevista', 'Conversas sobre hábitos, dúvidas e compreensão.', 'Pesquisa'],
];
const htmlPath = p => p.replace(/\.md$/, '.html');
const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
function inline(s) {
  return esc(s).replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    if (/^(?:javascript|data):/i.test(url)) return label;
    return `<a href="${url.replace(/\.md$/, '.html')}">${label}</a>`;
  }).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>');
}
function markdown(text) {
  const lines = text.replace(/^\uFEFF/, '').trim().split(/\r?\n/);
  let result = '', list = '', table = false;
  const closeList = () => { if (list) { result += `</${list}>`; list = ''; } };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('|')) {
      closeList();
      if (/^\|[\s:|\-]+\|$/.test(line)) continue;
      const cells = line.split('|').slice(1, -1);
      if (!table) { result += '<div class="table-scroll"><table><thead><tr>' + cells.map(c => `<th scope="col">${inline(c.trim())}</th>`).join('') + '</tr></thead><tbody>'; table = true; }
      else result += '<tr>' + cells.map(c => `<td>${inline(c.trim())}</td>`).join('') + '</tr>';
      if (!lines[i + 1]?.startsWith('|')) { result += '</tbody></table></div>'; table = false; }
      continue;
    }
    const item = line.match(/^(?:- |\d+\. )(.*)/);
    if (item) {
      const type = /^\d/.test(line) ? 'ol' : 'ul';
      if (list !== type) { closeList(); result += `<${type}>`; list = type; }
      result += `<li>${inline(item[1])}</li>`; continue;
    }
    closeList();
    const heading = line.match(/^(#{1,3}) (.+)$/);
    if (heading) result += `<h${heading[1].length}>${inline(heading[2])}</h${heading[1].length}>`;
    else if (line.trim()) result += `<p>${inline(line)}</p>`;
  }
  closeList(); return result;
}
function shell(title, content, current = '') {
  const prefix = current.includes('/') ? '../' : './';
  const nav = ['Projeto', 'Documentação', 'Pesquisa'].map(group => `<div class="nav-group"><span>${group}</span>${docs.filter(d => d[3] === group).map(([p,t]) => `<a ${p === current ? 'aria-current="page"' : ''} href="${prefix}${htmlPath(p)}">${t}</a>`).join('')}</div>`).join('');
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Fake Eyes: documentação de um projeto acadêmico sobre IA, evidências e desinformação."><title>${esc(title)} · Fake Eyes</title><link rel="stylesheet" href="${prefix}assets/style.css"></head><body><a class="skip" href="#conteudo">Pular para o conteúdo</a><header><a class="brand" href="${prefix}index.html"><span class="eye" aria-hidden="true">◉</span> fake<span>eyes</span></a><span class="header-label">CADERNO DE PROJETO</span><a class="repo" href="https://github.com/IsabelaA99/fakenews">GitHub ↗</a></header><div class="layout"><aside><a class="home-link" href="${prefix}index.html">← Início</a><nav aria-label="Documentação do projeto">${nav}</nav><div class="aside-note"><i></i> Em construção<span>Da pergunta à evidência.</span></div></aside><main id="conteudo">${content}<footer><span>Fake Eyes · IA e desinformação</span><span>Pesquisa em andamento / 2026</span></footer></main></div></body></html>`;
}
mkdirSync(resolve(out, 'assets'), { recursive: true });
copyFileSync(resolve(root, 'assets/style.css'), resolve(out, 'assets/style.css'));
for (const [p,title] of docs) {
  const content = readFileSync(resolve(root, p), 'utf8');
  mkdirSync(dirname(resolve(out, p)), { recursive: true });
  copyFileSync(resolve(root, p), resolve(out, p));
  writeFileSync(resolve(out, htmlPath(p)), shell(title, `<div class="doc-top"><span class="eyebrow">DOCUMENTAÇÃO / VERSÃO INICIAL</span><a href="${p.split('/').at(-1)}">Ver Markdown ↗</a></div><article>${markdown(content)}</article><a class="back" href="${p.includes('/') ? '../' : './'}index.html">← Todos os documentos</a>`, p));
}
const cards = docs.slice(1).map(([p,t,desc,g],i) => `<a class="card" href="${htmlPath(p)}"><div><span class="card-num">${String(i+1).padStart(2,'0')}</span><span class="card-group">${g}</span><span class="arrow" aria-hidden="true">↗</span></div><h3>${t}</h3><p>${desc}</p></a>`).join('');
const home = `<section class="hero"><span class="eyebrow"><i></i> IA & DESINFORMAÇÃO</span><h1>Antes de compartilhar,<br><em>um olhar mais atento.</em></h1><p>Estamos investigando como a inteligência artificial pode ajudar pessoas a avaliar informações — com fontes, contexto e espaço para a dúvida.</p><a class="primary" href="PRD.html">Conheça a proposta <span aria-hidden="true">↗</span></a><a class="text-link" href="#documentos">Explore a documentação ↓</a><div class="hero-stamp" aria-hidden="true"><div class="orbit"><div class="iris"></div></div><span>OBSERVAR · INVESTIGAR · COMPREENDER</span></div></section><section class="status-strip" aria-label="Estado do projeto"><span class="status-pill"><i></i> Em planejamento</span><p>Este é o portal do projeto. Sem analisador ativo e sem resultados de pesquisa publicados.</p></section><section class="intro"><span class="eyebrow">NOSSO PONTO DE PARTIDA</span><h2>A resposta começa<br>com uma boa pergunta.</h2><p>Uma notícia não cabe apenas em um selo de “verdadeiro” ou “falso”. Queremos tornar visíveis as evidências, as divergências e aquilo que ainda não sabemos.</p></section><section id="documentos"><div class="section-heading"><div><span class="eyebrow">EXPLORE O PROJETO</span><h2>Documentação aberta</h2></div><span class="count">09 documentos + <a href="README.html">visão geral ↗</a></span></div><div class="cards">${cards}</div></section><section class="principle"><span class="eyebrow">UM PRINCÍPIO QUE NOS GUIA</span><h2>Não encontrar evidências<br>também precisa ser explicado.</h2><p>Na proposta do Fake Eyes, a falta de evidências leva a uma análise em aberto, com limitações claras e próximos passos.</p><a href="docs/matriz-confianca.html">Entenda a matriz de confiança ↗</a></section>`;
writeFileSync(resolve(out, 'index.html'), shell('Início', home));
writeFileSync(resolve(out, '.nojekyll'), '');
console.log(`Portal gerado: ${docs.length} documentos + página inicial em _site/`);
