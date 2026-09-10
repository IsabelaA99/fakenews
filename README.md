# Fake Eyes
IA e desinformação · documentação do projeto

## O projeto
O Fake Eyes é uma proposta acadêmica de assistente de avaliação da informação. Seu objetivo é ajudar pessoas a investigar notícias e alegações por meio de evidências, fontes e explicações compreensíveis.

**Estágio: planejamento.** Este portal apresenta a documentação. Não há analisador ativo nem resultados de pesquisa publicados.

## Como queremos ajudar
Receber um texto ou link, identificar a alegação com possibilidade de correção e apresentar evidências consistentes, conflitantes ou insuficientes. A IA será um apoio à investigação; não uma garantia de verdade.

## Documentação
- [PRD — visão e requisitos](PRD.md)
- [POC — plano de prova de conceito](POC.md)
- [Registro de desenvolvimento](docs/rdo.md)
- [Hipóteses de pesquisa](docs/hipoteses.md)
- [Perguntas norteadoras](docs/guiding-questions.md)
- [Matriz de confiança](docs/matriz-confianca.md)
- [Casos forenses](docs/casos-forenses.md)
- [Questionário](research/questionario.md)
- [Roteiro de entrevista](research/roteiro-entrevista.md)

## Novos tópicos
- [Como funciona](arquitetura.md)
- [Arquitetura em PDF](assets/arquitetura-fake-eyes.pdf)
- [Explorações](docs/exploracoes.md)
- [Bases de dados](docs/datasets.md)
- [Tecnologias](docs/tecnologias.md)
- [Paradigmas de IA](docs/paradigmas.md)
- [Como trabalhamos](docs/metodologia.md)
- [Changelog](docs/changelog.md)

## Contexto
Projeto planejado para seis semanas, por uma equipe de cinco integrantes. A pesquisa prevê 20 pessoas distintas: 10 idosos e 10 pessoas de outras faixas etárias. Participação e resultados ainda não foram confirmados.

## Executar o portal
Com Node.js 22 ou superior, execute `npm run build`. As páginas são geradas em `_site/`. Para visualizar, sirva essa pasta com um servidor HTTP local.

## Publicar no GitHub Pages
Em Settings → Pages, selecione GitHub Actions como origem. O workflow publica após alterações na branch main. A configuração inicial requer permissão administrativa no repositório.

Endereço esperado após ativação: https://isabelaa99.github.io/fakenews/

## Atualizar
Edite os arquivos Markdown mantendo seus nomes. O build gera páginas HTML a partir deles. O portal usa CSS local e não requer serviço pago, chave de API ou dependências externas de build.
