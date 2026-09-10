# Como funciona
Arquitetura proposta do Fake Eyes · versão 0.2

## O que está funcionando hoje
Este portal publica documentação em HTML e CSS no GitHub Pages. Os textos Markdown são convertidos por um script Node.js e publicados pelo GitHub Actions. O portal não analisa notícias, não envia textos a APIs e não coleta respostas.

## Fluxo previsto para o analisador
1. A pessoa informa uma notícia por vez, por texto ou link, sem cadastro.
2. O sistema identifica uma alegação e permite que a pessoa a corrija.
3. Um serviço de análise consulta uma coleção selecionada e busca fontes complementares.
4. O modelo simples e a API auxiliar apoiam a investigação e a explicação das evidências.
5. O resultado apresenta fontes, contexto, categoria e limitações; nota somente quando houver base definida.
6. Resumo e resultado são salvos no navegador, com exclusão pelo usuário.

## Componentes propostos
| Componente | Responsabilidade | Estado |
| --- | --- | --- |
| Interface web | Entrada, correção da alegação, fontes e resultado | Planejado |
| Serviço de análise | Coordenar consulta, limites, erros e explicações | Planejado; hospedagem pendente |
| Coleção de evidências e busca | Oferecer referências rastreáveis e contexto | Fontes candidatas |
| Modelo simples | Comparar classificação com uma referência básica | Experimento pendente |
| API de IA auxiliar | Apoiar alegação e explicação apoiada nas fontes | Provedor pendente |
| Histórico local | Guardar resumo e resultado no navegador | Decisão aprovada; implementação pendente |

## Fronteiras e limitações
O GitHub Pages hospeda o portal estático. O futuro serviço de análise precisará de infraestrutura separada. Chaves de serviços externos não devem aparecer no código entregue ao navegador.

O histórico previsto não guarda o texto integral e não sincroniza entre aparelhos. A expiração será verificada ao abrir ou usar o site; não há exclusão remota garantida em navegador fechado. Datas e provedor externo ainda serão definidos.

## Quando não for possível analisar
Se uma URL não puder ser lida, orientar a colagem do texto. Se não houver evidências suficientes, apresentar “Análise em aberto”, explicar a limitação e permitir adicionar contexto. Falhas técnicas não são prova de falsidade.

## Documento para compartilhar
[Arquitetura em PDF](assets/arquitetura-fake-eyes.pdf)

## Base do desenho
Síntese das decisões registradas na especificação local do grupo. O desenho é uma proposta de implementação, não um sistema já integrado. Consulte também [PRD](PRD.md) e [POC](POC.md).

