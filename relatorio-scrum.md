# Relatório de organização Scrum do projeto Fake Eyes

**Projeto:** Fake Eyes — IA e desinformação  
**Participantes:** Pedro Augusto, Isabela, Marlom, Mateus e Victor  
**Versão:** 1.1 — proposta com agenda presencial  
**Data:** 10 de setembro de 2026

## 1. Objetivo do relatório

Este relatório apresenta uma proposta de aplicação do Scrum ao projeto acadêmico Fake Eyes, distribuindo responsabilidades, organizando as entregas e definindo uma rotina de acompanhamento. A proposta é publicada como documentação: não representa a realização de reuniões, a conclusão de sprints ou a criação de um quadro de tarefas no repositório.

Considera-se Pedro Augusto como o nome de um único participante, totalizando cinco integrantes. As funções abaixo são propostas para organização do trabalho, sem pressupor experiência profissional ou habilidades que não foram informadas.

## 2. Contexto do projeto

O Fake Eyes pretende apoiar a investigação de informações por meio de fontes, contexto, explicações e indicação de limitações. O produto planejado receberá texto ou link, permitirá corrigir a alegação e apresentará evidências consistentes, conflitantes ou insuficientes. A ausência de evidências não deverá ser interpretada como prova de falsidade.

O projeto já possui um portal de documentação publicado no GitHub Pages, com requisitos, prova de conceito, instrumentos de pesquisa e arquitetura proposta. O analisador de notícias ainda não está implementado. Portanto, o portal existente constitui o ponto de partida, e não uma entrega atribuída retroativamente às sprints deste relatório.

O planejamento considera seis semanas, sem datas de início e término definidas. O orçamento total previsto para serviços é inferior a R$ 50, priorizando alternativas gratuitas. A pesquisa exploratória prevê 20 participantes distintos: 10 idosos e 10 pessoas de outras faixas etárias.

### Disponibilidade presencial informada pela equipe

| Dia de trabalho | Horário presencial | Janela bruta por participante |
| --- | --- | --- |
| Terça-feira | 08h00 às 18h00 | 10 horas |
| Quinta-feira | 08h00 às 18h00 | 10 horas |
| Sexta-feira | 14h00 às 18h00 | 4 horas |
| **Total semanal** | **Três encontros presenciais** | **24 horas** |

Esses dias e horários foram informados pelo grupo. Não se presume disponibilidade às segundas, quartas ou nos fins de semana. Datas específicas e local dos encontros ainda serão definidos.

Uma sprint de duas semanas dispõe, em condições regulares, de **48 horas brutas por participante** dentro dessas janelas; três sprints correspondem a **144 horas brutas por participante**. Esses valores incluem pausas, eventos Scrum, pesquisa, testes e documentação: não são horas líquidas de programação nem garantia de entrega. Feriados, ausências e outras atividades acadêmicas deverão ser considerados no Sprint Planning. A capacidade técnica será calculada conforme a participação real de cada integrante, sem multiplicar automaticamente a agenda dos cinco por uma taxa de desenvolvimento.

## 3. Fundamento Scrum

Scrum organiza o trabalho em ciclos chamados Sprints, com inspeção e adaptação frequentes. O Scrum Team reúne Product Owner, Scrum Master e Developers. O Product Owner responde pelo valor do produto e pela gestão do Product Backlog; o Scrum Master ajuda a estabelecer Scrum e melhorar a efetividade da equipe; os Developers planejam e executam o trabalho necessário para produzir um incremento utilizável.

Os artefatos são Product Backlog, Sprint Backlog e Incremento, associados, respectivamente, à Meta do Produto, à Meta da Sprint e à Definição de Pronto. Os eventos incluem Sprint Planning, Daily Scrum, Sprint Review e Sprint Retrospective. A Daily dura 15 minutos e permite aos Developers adaptar o plano em direção à Meta da Sprint. Refinamento é uma atividade contínua, não um evento formal adicional.

Referência normativa deste relatório: Schwaber e Sutherland, [The Scrum Guide, novembro de 2020](https://scrumguides.org/scrum-guide.html), disponibilizado no site dos autores. A [página oficial de downloads](https://scrumguides.org/download.html) também oferece a tradução em português brasileiro. O relatório aplica o guia ao Fake Eyes; não reproduz integralmente seu conteúdo.

O guia estabelece sprints de duração fixa de até um mês, sem intervalo entre ciclos. Neste relatório, duas semanas, encontros presenciais, horários, quadro de tarefas e divisão de referências técnicas são acordos propostos para o grupo, não exigências do Scrum. A rotina usa transparência, inspeção e adaptação para orientar ajustes. A Review inspeciona o produto com interessados; a Retrospective examina a forma de trabalhar. Uma não substitui a outra.

## 4. Distribuição proposta das funções

| Participante | Responsabilidade Scrum | Atuação proposta no Fake Eyes |
| --- | --- | --- |
| Pedro Augusto | Product Owner | Definir prioridades, esclarecer requisitos e manter o foco nas necessidades dos usuários e nos critérios acadêmicos. Organizar o backlog e discutir ajustes de escopo com a equipe. |
| Isabela | Scrum Master | Facilitar a adoção da rotina, ajudar a resolver impedimentos, incentivar comunicação e acompanhar ações de melhoria. Apoiar a articulação de acessos e publicação quando necessário. |
| Marlom | Developer | Referência inicial para dados e experimentos de IA: revisar bases candidatas, preparar comparações e documentar resultados e limitações. |
| Mateus | Developer | Referência inicial para interface e experiência: desenvolver entrada, apresentação de evidências e histórico local, em colaboração com o restante da equipe. |
| Victor | Developer | Referência inicial para serviço de análise e integração: conectar componentes, tratar falhas e apoiar testes e publicação do protótipo. |

As referências técnicas não constituem departamentos ou tarefas exclusivas. Os três Developers compartilham a responsabilidade pela qualidade e pela integração, colaborando em pesquisa, código, testes e documentação. A divisão diária será ajustada por eles conforme capacidade e necessidades da sprint.

Pedro Augusto não distribuirá tarefas técnicas unilateralmente. Isabela não funcionará como chefe da equipe ou responsável por cobrar produtividade individual. Caso ambos também executem itens técnicos, essa participação deverá entrar no planejamento de capacidade, sem deixar suas responsabilidades principais descobertas.

## 5. Meta do Produto

**Disponibilizar um protótipo acadêmico utilizável que ajude uma pessoa a investigar uma alegação, consultar evidências e compreender as limitações da avaliação antes de decidir seu próximo passo.**

A equipe buscará preservar uma experiência simples, sem cadastro e adequada a celular e computador. A nota de confiança só será incorporada com regras documentadas e base suficiente; ela não deverá representar uma probabilidade de verdade sem validação apropriada.

## 6. Product Backlog inicial

A ordem abaixo é uma proposta de prioridade. Os itens serão detalhados e reordenados à medida que o grupo aprender. A seleção para uma sprint dependerá da capacidade real dos Developers, não de uma obrigação de concluir toda a lista em seis semanas.

| Ordem | Item e valor esperado | Condição inicial de aceite |
| --- | --- | --- |
| 1 | Investigar uma alegação com uma pequena coleção de casos | Um caso selecionado percorre entrada, confirmação da alegação e resultado com referências verificáveis. |
| 2 | Informar insuficiência de evidências | O resultado apresenta “Análise em aberto”, explica a limitação e não inventa percentual. |
| 3 | Preparar dados e comparação de modelos | Origem, versão e divisão dos dados ficam registradas; o experimento compara uma referência básica e um modelo candidato sem misturar versões de casos entre treino e teste. |
| 4 | Oferecer interface responsiva e compreensível | O fluxo pode ser percorrido em celular e computador e as fontes são localizáveis pelo usuário. |
| 5 | Ampliar a consulta e integrar IA auxiliar | A explicação usa evidências consultadas; falhas são comunicadas e chaves não aparecem no navegador. |
| 6 | Receber links e permitir alternativa textual | Quando o conteúdo da URL não puder ser lido, o usuário recebe orientação para colar o texto. |
| 7 | Manter histórico local | Resumo e resultado ficam apenas no navegador; o usuário pode excluir registros e recebe aviso sobre ausência de sincronização. |
| 8 | Avaliar categorias e eventual nota | Critérios e limitações são documentados; não há nota quando os dados não permitem calculá-la. |
| 9 | Avaliar compreensão com participantes | O protocolo distingue piloto e avaliação final e registra conclusão de tarefas, ajuda solicitada e limitações da amostra. |
| 10 | Consolidar entrega acadêmica | Demonstração reproduzível, documentação atualizada e resultados efetivamente obtidos ficam organizados para apresentação. |

## 7. Plano de três sprints

Propõem-se três sprints consecutivas de duas semanas. Pesquisa, desenvolvimento, testes e documentação acontecerão dentro de cada ciclo. As metas a seguir são uma previsão de trabalho, a revisar no planejamento de cada sprint.

### Cadência proposta para caber na agenda presencial

Para manter ciclos contínuos e realizar a transição presencialmente, propõe-se **iniciar cada sprint em uma sexta-feira às 16h15 e encerrá-la na sexta-feira de duas semanas depois, às 16h15**. A Review e a Retrospective ocorrerão antes desse encerramento; o Planning da próxima sprint começará imediatamente depois. Assim, não será necessário marcar reuniões fora dos horários informados.

| Marco relativo | Sexta-feira às 16h15 | Trabalho previsto |
| --- | --- | --- |
| Início | Data inicial a combinar | Início e Planning da Sprint 1 |
| Duas semanas depois | Mesma faixa de horário | Encerramento da Sprint 1 e início da Sprint 2 |
| Quatro semanas depois | Mesma faixa de horário | Encerramento da Sprint 2 e início da Sprint 3 |
| Seis semanas depois | Mesma faixa de horário | Encerramento da Sprint 3; continuidade depende de nova decisão do grupo |

O período compreende seis semanas corridas. Cada sprint atravessa os encontros de terça, quinta e sexta; as frações das sextas de abertura e fechamento compõem a mesma janela bruta de 48 horas por participante. Os dias sem trabalho não pausam a contagem da sprint. Na primeira sexta, o período anterior às 16h15 poderá ser usado para preparar o backlog e combinar acordos, sem inventar uma sprint anterior.

### Sprint 1 — Permitir uma primeira investigação guiada

**Período relativo:** semanas 1 e 2.  
**Meta:** uma pessoa consegue percorrer uma investigação simples e consultar as evidências de um caso selecionado.

O grupo deverá escolher poucos casos rastreáveis, esclarecer a alegação, implementar um fluxo mínimo e apresentar fontes e o estado inconclusivo. O incremento previsto é uma versão navegável e utilizável em escopo limitado, com conteúdo curado identificado. Dados simulados, se usados durante o desenvolvimento, deverão estar claramente rotulados e não serão apresentados como análise automática real.

Na Review, a equipe demonstrará um caso com evidências e outro insuficiente. O feedback orientará a próxima seleção do backlog. Pesquisa inicial com usuários poderá ocorrer nesse ciclo, conforme recrutamento e condições de participação.

### Sprint 2 — Ampliar a investigação com integração verificável

**Período relativo:** semanas 3 e 4.  
**Meta:** a pessoa recebe uma explicação associada às fontes consultadas e entende quando a consulta falha.

O foco será integrar o serviço de análise e as fontes disponíveis, realizar a comparação inicial de modelos e ampliar o tratamento de texto ou URL. O incremento deverá estender o fluxo anterior, mantendo o que já funciona. Histórico local poderá entrar nesta sprint se houver capacidade.

Na Review, a equipe demonstrará o caminho completo e uma falha tratada. A existência de um experimento de classificação não será apresentada como validação de todo o produto.

### Sprint 3 — Tornar a experiência avaliável e consolidar a entrega

**Período relativo:** semanas 5 e 6.  
**Meta:** os participantes conseguem utilizar a versão integrada e indicar um próximo passo de verificação.

O foco será corrigir dificuldades de uso, completar o histórico local quando selecionado, aplicar o protocolo de avaliação e organizar a demonstração final. As regras da nota só entrarão se houver evidência e capacidade suficientes; caso contrário, a pendência será explicitada e o escopo será renegociado.

O incremento previsto é uma versão revisada do protótipo, acompanhada dos resultados realmente medidos e das limitações conhecidas. Não serão declarados testes com 20 pessoas se o recrutamento ou a aplicação não tiverem ocorrido.

## 8. Eventos e rotina presencial proposta

### 8.1 Agenda dos eventos

| Atividade | Horário proposto | Participação e resultado esperado |
| --- | --- | --- |
| Sprint Planning | Sexta de abertura, 16h15–17h45; 90 minutos | Todo o time. Definir a meta, selecionar trabalho compatível com a capacidade e planejar como realizá-lo. |
| Daily Scrum | Terças, quintas e sextas, 14h00–14h15 | Developers. Inspecionar a meta e adaptar o plano de trabalho. O horário é comum aos três encontros. |
| Refinamento | Quintas, 16h30–17h00; reserva de 30 minutos | Pedro Augusto e Developers, com apoio de Isabela quando útil. Esclarecer e dividir itens futuros; refinar também quando necessário. |
| Sprint Review | Sexta de encerramento, 14h15–15h15; 60 minutos | Time e interessados convidados. Examinar o incremento utilizável e discutir o que mudou nas necessidades do produto. |
| Sprint Retrospective | Sexta de encerramento, 15h30–16h15; 45 minutos | Todo o time. Identificar melhorias de qualidade e colaboração e escolher uma ação concreta para o próximo ciclo. |

**Convenção para a sexta de transição:** a Daily das 14h pertence à sprint que está terminando. Depois do Planning da nova sprint, os Developers reservam 17h45–18h00 para sua primeira Daily nessa sprint, ajustando o plano inicial. Trata-se de uma exceção de horário na abertura; nos demais encontros, a Daily permanece às 14h, no mesmo local. Na primeira abertura, não há Daily de uma sprint anterior às 14h.

A Daily no meio do dia é intencional: terça e quinta têm trabalho pela manhã, e sexta começa às 14h. O grupo não precisa aguardar a reunião para colaborar ou resolver problemas. Discussões técnicas longas continuarão fora dos 15 minutos. Pedro Augusto e Isabela participarão como Developers quando estiverem trabalhando em itens do Sprint Backlog, sem transformar o evento em prestação de contas.

Somente os dias informados são considerados dias de trabalho do projeto. Se a equipe passar a trabalhar também em outro dia, deverá revisar o acordo da Daily para contemplar essa disponibilidade; trabalho adicional não é presumido neste relatório.

Os blocos de Planning, Review e Retrospective são durações locais propostas, não tempos mínimos nem durações obrigatórias para toda equipe Scrum. O refinamento não se limita à reserva de quinta-feira e não é apresentado como um novo evento formal. Base: seções “Scrum Events”, “The Sprint” e “Daily Scrum” do [Scrum Guide oficial](https://scrumguides.org/scrum-guide.html).

### 8.2 Terças e quintas: organização dos encontros longos

| Horário | Organização proposta |
| --- | --- |
| 08h00–10h00 | Trabalho colaborativo nos itens selecionados: pesquisa, implementação ou testes |
| 10h00–10h15 | Pausa proposta |
| 10h15–12h00 | Continuidade do trabalho e revisão entre pares |
| 12h00–13h00 | Intervalo de almoço proposto |
| 13h00–14h00 | Integração, testes ou continuação dos itens prioritários |
| 14h00–14h15 | Daily Scrum |
| 14h15–16h00 | Trabalho ajustado conforme o plano dos Developers |
| 16h00–16h15 | Pausa proposta |
| 16h15–18h00 | Desenvolvimento, pesquisa, testes e documentação; na quinta, reservar 16h30–17h00 ao refinamento |

Pausas e almoço são uma proposta para tornar a jornada sustentável, e não horários já confirmados pelo grupo ou prescritos pelo Scrum. Se adotados, os intervalos somam 1h30 em cada encontro longo. Os conteúdos dos blocos são flexíveis: testes, documentação e pesquisa não ficam restritos a um dia ou integrante.

### 8.3 Sexta intermediária e sexta de encerramento

| Horário | Sexta intermediária, sem troca de sprint | Sexta de encerramento e transição |
| --- | --- | --- |
| 14h00–14h15 | Daily Scrum | Daily Scrum da sprint em encerramento |
| 14h15–15h15 | Trabalho e integração | Sprint Review |
| 15h15–15h30 | Pausa proposta | Pausa proposta |
| 15h30–16h15 | Trabalho e verificação | Sprint Retrospective |
| 16h15–17h45 | Trabalho, testes e documentação | Início e Planning da próxima sprint |
| 17h45–18h00 | Atualizar o plano e os registros do trabalho | Primeira Daily da nova sprint |

Na sexta que encerra a Sprint 3, o bloco após 16h15 será reservado à organização da entrega acadêmica, caso o grupo encerre o desenvolvimento. Não se presume uma quarta sprint. Uma entrega utilizável também poderá ser disponibilizada antes da Review; não é necessário aguardar a reunião para gerar valor.

### 8.4 Capacidade a considerar no Planning

Com os intervalos propostos, a janela de 24 horas semanais passa a **20h45 antes de descontar os eventos e outras indisponibilidades**: 24h menos 3h de pausas e almoço de terça/quinta, menos 15 minutos de pausa de sexta. Isso corresponde a **41h30 por participante em duas semanas**, ainda incluindo reuniões e trabalho de diferentes naturezas.

Pedro Augusto, Isabela e os Developers deverão informar sua disponibilidade real no planejamento. Os Developers estimarão o que podem concluir considerando reuniões, atividades acadêmicas, pesquisa, revisão e dependências. Essas contas apoiam a seleção de escopo; não estabelecem cobrança individual ou promessa de produtividade.

## 9. Exemplo de Sprint Backlog da primeira sprint

Este quadro é ilustrativo e está inteiramente em “A fazer”. Não registra atribuições aceitas, trabalho iniciado ou atividades concluídas.

| Trabalho proposto | Referência inicial | Evidência esperada | Estado |
| --- | --- | --- | --- |
| Selecionar casos e revisar referências | Marlom, com revisão de Victor | Fichas com alegação, fontes e limitações | A fazer |
| Construir entrada e confirmação da alegação | Mateus, com apoio de Victor | Fluxo utilizável e verificado | A fazer |
| Conectar casos curados ao resultado | Victor, com apoio de Marlom | Fontes e relação com a alegação visíveis | A fazer |
| Apresentar estado inconclusivo | Mateus e Victor | Ausência de nota sem base e orientação clara | A fazer |
| Verificar o fluxo integrado | Todos os Developers | Registro de cenários e correções | A fazer |
| Atualizar documentação da entrega | Todos os Developers | Limites e modo de reprodução registrados | A fazer |

Pedro Augusto esclarecerá prioridades e critérios de uso; Isabela ajudará a remover impedimentos. O detalhamento, a estimativa e a distribuição efetiva serão feitos pelos Developers no planejamento e ajustados durante a sprint.

## 10. Definição de Pronto proposta

Uma funcionalidade só comporá o incremento concluído quando:

- atender às condições de aceite acordadas para o item;
- estar integrada ao fluxo existente, e não apenas funcionar isoladamente;
- passar pelas verificações relevantes de comportamento e tratamento de falhas;
- apresentar fontes e limitações quando houver avaliação de alegações;
- não expor credenciais nem publicar dados identificáveis de participantes;
- permitir uso no tamanho de tela previsto para o fluxo;
- ter revisão de outro Developer e documentação suficiente para reprodução;
- estar disponível em um ambiente em que a equipe consiga demonstrar seu uso.

Itens incompletos permanecerão transparentes e voltarão ao Product Backlog para nova ordenação. Não receberão o estado “Pronto” apenas porque a sprint terminou. Uma investigação de pesquisa poderá ser encerrada com resultado inconclusivo, desde que método, evidências e limitações estejam registrados; isso não equivale a concluir uma funcionalidade do produto.

## 11. Acompanhamento, riscos e adaptação

Propõe-se um quadro com “A fazer”, “Em andamento”, “Em revisão” e “Pronto”. Um bloqueio será sinalizado no próprio item, com motivo, próximo passo e pessoa que acompanhará sua resolução. Este relatório não cria esse quadro em nenhuma ferramenta.

O acompanhamento considerará a Meta da Sprint, entregas que satisfazem a Definição de Pronto, defeitos relevantes e impedimentos. Contagem de commits, horas ou pontos não será usada para classificar os integrantes. Estimativas, se utilizadas, serão discutidas coletivamente, sem produtividade histórica inventada.

| Risco | Resposta proposta |
| --- | --- |
| Escopo maior que a capacidade | Pedro Augusto reordena o backlog com base no valor; Developers renegociam a seleção preservando a meta do ciclo. |
| Falta de acesso, integração ou fonte | Isabela ajuda a articular a solução; Developers tornam o bloqueio visível e avaliam alternativas. |
| Dados inadequados ou resultado fraco do modelo | Marlom conduz a análise com revisão do grupo; registrar evidências e revisar a abordagem, sem mascarar erros. |
| Poucos participantes disponíveis | Ajustar o calendário e relatar a amostra efetiva; não generalizar resultados nem fabricar respostas. |
| Custo de serviços | Registrar consumo acumulado e rever a solução antes de ultrapassar o limite do projeto. |
| Ausência de um integrante | Compartilhar contexto, revisar trabalho em pares e redistribuir atividades conforme a capacidade restante. |

As metas provisórias do produto — superar uma referência básica em Macro F1 e obter pelo menos 16 de 20 participantes concluindo o fluxo de avaliação sem ajuda — serão usadas para investigação. Não são resultados já alcançados nem condições que possam ser declaradas satisfeitas apenas com a realização dos eventos Scrum.

## 12. Considerações finais

A proposta organiza o Fake Eyes em ciclos curtos com entregas verificáveis, participação dos cinco integrantes e espaço para adaptação. Pedro Augusto assume a direção de valor do produto, Isabela apoia o processo e a efetividade da equipe, e Marlom, Mateus e Victor colaboram na construção e avaliação do incremento.

A disponibilidade presencial está registrada: terças e quintas, das 08h às 18h, e sextas, das 14h às 18h. A adoção efetiva dependerá de confirmar a distribuição de responsabilidades, a primeira data de sprint e os blocos internos propostos. Até lá, este documento constitui exclusivamente um relatório de aplicação proposta do Scrum, sem comprovar adoção operacional ou alterar automaticamente a rotina da equipe.

## Referências

- SCHWABER, Ken; SUTHERLAND, Jeff. **The Scrum Guide: The Definitive Guide to Scrum — The Rules of the Game**, novembro de 2020. [Texto oficial](https://scrumguides.org/scrum-guide.html). Base normativa para responsabilidades, eventos, artefatos e compromissos. Consulta em 10/09/2026.
- SCRUM GUIDES. [Downloads oficiais e traduções](https://scrumguides.org/download.html). Página dos autores com a edição de novembro de 2020 e tradução em português brasileiro. Consulta em 10/09/2026.
- **Agenda fornecida pela equipe nesta conversa:** terça e quinta, 08h–18h; sexta, 14h–18h; encontros presenciais. Fonte dos horários fixos deste relatório. Os demais blocos são propostas de organização.
- **Fake Eyes — documentação do projeto:** PRD, metodologia, arquitetura e changelog. Disponível em: https://isabelaa99.github.io/fakenews/. Contexto de planejamento e estado do portal, não evidência de execução de sprints.

