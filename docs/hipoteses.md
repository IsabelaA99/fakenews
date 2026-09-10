# Hipóteses de pesquisa

Propostas do grupo · ainda não validadas

## Objetivo da investigação

O Fake Eyes pretende apoiar pessoas na avaliação de informações recebidas por texto ou link, apresentando a alegação investigada, evidências, fontes e limitações. A pesquisa deve verificar se essa proposta melhora a compreensão e a decisão do usuário antes de compartilhar uma informação.

As hipóteses abaixo orientam os experimentos. Não representam funcionalidades já implementadas nem resultados alcançados. Os métodos e critérios apresentados são propostas operacionais que devem ser revisadas e registradas pelo grupo antes da coleta.

## Recorte da pesquisa

A investigação inicial considera textos e links em português, com uma alegação verificável por análise. Uma alegação é uma afirmação que pode ser confrontada com evidências, levando em conta data, local e contexto. O usuário deverá conseguir confirmar ou corrigir a afirmação identificada.

Os casos devem incluir informações sustentadas por evidências, falsas, enganosas, fora de contexto, desatualizadas e situações em que não seja possível concluir. Essas características podem se sobrepor; o grupo deverá registrar definições e exemplos antes de atribuir rótulos.

Linguagem alarmista, falta de autoria e ausência de data são sinais para investigar, não provas de falsidade. Falha de acesso a uma página também não determina a confiabilidade do conteúdo.

O teste inicial será realizado na interface web, conforme o [PRD](../PRD.md). O interesse em um chatbot no WhatsApp pode ser investigado nas entrevistas, mas sua implementação permanece fora da entrega principal atualmente documentada. A inclusão desse canal exige uma revisão explícita de escopo.

## H1 — Explicações e fontes

**Hipótese:** uma explicação curta acompanhada de fontes melhora a compreensão da avaliação em comparação com a apresentação de apenas um rótulo.

**Como investigar:** comparar duas versões de resultado: uma com apenas a categoria e outra com a mesma categoria, uma explicação e referências consultáveis. Utilizar casos equivalentes e alternar a ordem das versões entre os participantes. Cada caso deve aparecer nas duas condições ao longo da amostra, evitando que a mesma pessoa o veja repetidamente.

Após cada tarefa, pedir que a pessoa explique, com suas palavras, qual afirmação foi avaliada, o que fundamenta o resultado e o que ainda não pode ser concluído. Usar um roteiro de correção previamente definido, sem orientar a resposta.

**O que medir:**

* Compreensão da alegação, do fundamento e dos limites: um ponto por item corretamente explicado, totalizando de zero a três pontos por tarefa.
* Capacidade de localizar a referência pertinente, quando apresentada.
* Interpretações equivocadas e decisões de compartilhar, não compartilhar ou buscar mais informações.

**Critério proposto de apoio:** a versão com explicação e fontes apresenta maior pontuação média de compreensão, sem aumento da taxa de interpretações de certeza indevida. Registrar a diferença observada, os denominadores e a variação entre participantes.

**Se não for apoiada:** revisar tamanho, linguagem, organização e relação entre explicação e fonte antes de ampliar a quantidade de informação exibida.

**Limite:** intenção declarada de compartilhar não equivale a comportamento real. Uma redução geral na intenção de compartilhar também não demonstra, sozinha, melhor avaliação: informações legítimas precisam estar presentes no teste.

**Estado:** não testada.

## H2 — Facilidade de uso

**Hipótese:** participantes do público inicial conseguem enviar um texto ou link, confirmar a alegação e compreender o resultado na interface web sem ajuda do pesquisador.

**Como investigar:** observar tarefas em um protótipo, sem explicar a interface durante a primeira tentativa. Registrar o aparelho utilizado, a familiaridade digital, as dificuldades e os pedidos de ajuda. Perguntar o que a pessoa faria ao receber um resultado inconclusivo.

**O que medir:**

* Conclusão do envio e da confirmação da alegação.
* Compreensão do resultado e de suas limitações.
* Capacidade de indicar um próximo passo coerente com as evidências.
* Tempo por tarefa, erros, desistências e intervenções do pesquisador.

**Critério proposto de apoio:** manter como referência a meta provisória do PRD de pelo menos 16 entre 20 participantes concluírem o fluxo completo sem ajuda. Apresentar também os resultados de cada etapa e dos dois grupos separadamente. Concluir a navegação sem compreender o resultado não conta como sucesso completo.

**Se não for apoiada:** identificar em qual etapa ocorre a dificuldade e revisar o protótipo antes do próximo teste.

**Limite:** uma amostra exploratória de 10 idosos e 10 pessoas de outras faixas etárias não representa toda a população. Não presumir que idade determina habilidade digital nem interpretar a média geral como evidência de bom desempenho de todos os grupos.

**Estado:** não testada.

## H3 — Comunicação da confiança

**Hipótese:** acrescentar uma nota à categoria e à explicação melhora a interpretação do resultado sem aumentar a falsa sensação de certeza.

**Como investigar:** comparar categoria e explicação com uma segunda apresentação equivalente que também inclua nota. Manter os demais elementos iguais e alternar a ordem dos casos. Perguntar o que o número significa e se a pessoa considera que ele garante a veracidade da informação.

Antes desse teste, definir exatamente o que a nota pretende medir. Se o cálculo ainda não existir, usar apenas valores hipotéticos em um protótipo identificado como simulação, com esclarecimento aos participantes. Esse experimento avalia a apresentação; não valida o cálculo de uma nota real.

**O que medir:**

* Pontuação de compreensão da alegação, do fundamento e dos limites, conforme a rubrica de H1.
* Interpretação correta do significado atribuído à nota.
* Taxa de interpretações de garantia ou probabilidade de verdade sem fundamento.
* Compreensão dos casos em que não há evidências suficientes e nenhum percentual é exibido.

**Critério proposto de apoio:** a apresentação com nota aumenta a compreensão e não aumenta a taxa de falsa certeza em comparação com a versão sem nota. Preferência visual ou satisfação, isoladamente, não apoiam a hipótese.

**Se não for apoiada:** propor a retirada ou reformulação da nota e registrar a decisão no PRD e na matriz de confiança. Até que existam definição e avaliação adequadas, a nota permanece uma proposta a investigar.

**Limite:** confiança de um classificador, quantidade de fontes e probabilidade de uma afirmação ser verdadeira são conceitos diferentes. Ausência de evidências não deve ser substituída por zero, 50% ou outro valor arbitrário.

**Estado:** não testada.

## H4 — Apoio do modelo

**Hipótese:** um modelo simples treinado pelo grupo supera uma referência básica previamente definida na classificação do conjunto selecionado.

**Como investigar:** definir a tarefa, as classes, o classificador de referência e o modelo candidato antes da avaliação. Como ponto de partida proposto, a referência pode prever sempre a classe mais frequente no treino; o candidato pode utilizar uma representação textual e um classificador simples.

Separar treino, validação e teste, mantendo versões da mesma alegação no mesmo conjunto e controlando possíveis pistas de origem. Ajustar representação textual e parâmetros apenas com treino e validação. Utilizar o teste somente após congelar as escolhas e preservar textos de checagem que revelem o rótulo fora da entrada do classificador.

**O que medir:**

* Macro F1, que atribui o mesmo peso a cada classe na média.
* Precisão e revocação por classe, além da matriz de confusão.
* Quantidade e proporção de conteúdos falsos classificados como verdadeiros.
* Quantidade e proporção de conteúdos verdadeiros classificados como falsos.
* Erros por tema, origem e período, quando houver dados suficientes.

**Critério proposto de apoio:** o candidato apresenta Macro F1 superior à referência no mesmo conjunto de teste. Registrar o tamanho da diferença e sua incerteza. Se os resultados não permitirem distinguir melhora de variação da amostra, registrar como inconclusiva.

**Se não for apoiada:** revisar dados, tarefa e abordagem. Se houver melhora média acompanhada de piora em erros críticos, registrar a troca envolvida; o resultado não autoriza usar o modelo como veredito automático.

**Limite:** desempenho em um conjunto histórico não comprova capacidade de verificar acontecimentos novos, detectar desatualização ou produzir uma porcentagem de verdade. A avaliação do classificador e a avaliação do assistente completo são experimentos distintos.

**Estado:** não testada.

## H5 — Recuperação de evidências

**Hipótese:** a busca recupera evidências sobre a mesma alegação, preservando data e contexto, e o sistema evita concluir quando o material disponível é insuficiente.

**Como investigar:** montar uma coleção de casos com referências revisadas por duas pessoas do grupo. Registrar divergências e sua resolução. Incluir casos com evidências disponíveis, casos sem material suficiente e conteúdos parecidos que tratem de outra data, local ou acontecimento.

Separar casos usados para ajustar a busca dos usados para avaliá-la. Uma página que apenas menciona o mesmo tema não deve ser considerada evidência pertinente. Quando não houver como estabelecer a referência de avaliação, marcar o caso como indeterminado e relatá-lo separadamente.

**O que medir:**

* Proporção de casos com evidência disponível em que pelo menos um dos três primeiros resultados é pertinente.
* Associações incorretas com outra alegação, data ou contexto.
* Proporção de casos com evidências insuficientes em que o sistema se abstém de concluir.
* Abstenções indevidas em casos com evidências suficientes.
* Correspondência entre cada conclusão apresentada e o conteúdo da referência citada.

**Critério proposto de apoio:** como metas operacionais iniciais, recuperar evidência pertinente entre os três primeiros resultados em pelo menos 80% dos casos com evidência disponível e se abster em pelo menos 90% dos casos de referência insuficiente. Esses limiares são propostas para discussão, não padrões de qualidade comprovados; devem ser fixados antes do teste e apresentados com contagens e denominadores.

**Se não for apoiada:** restringir temas ou fontes, melhorar a identificação da alegação e revisar os critérios de correspondência antes de ampliar o acesso ao sistema.

**Limite:** não encontrar uma checagem não comprova falsidade. A ausência de resultados pode indicar limites da busca. Fontes que reproduzem o mesmo material não devem ser contadas automaticamente como confirmações independentes.

**Estado:** não testada.

## Plano inicial de investigação

1. Definir público prioritário, faixas etárias, temas iniciais e critérios de inclusão dos participantes.
2. Revisar e registrar os métodos, as rubricas e os critérios de apoio antes da coleta.
3. Preparar de 30 a 50 casos exploratórios com alegação, contexto, evidências, data e justificativa. Esse conjunto serve para desenvolver o protocolo; reservar uma avaliação independente.
4. Construir um protótipo com respostas previamente revisadas, sem depender de uma IA integrada para iniciar os testes de compreensão.
5. Realizar um piloto proposto com quatro a seis pessoas para revisar tarefas e instruções. Registrar quem participou e distinguir piloto de avaliação final.
6. Aplicar os experimentos, registrar falhas e analisar resultados por hipótese.
7. Relacionar cada descoberta a uma decisão: manter, revisar, retirar ou investigar novamente um requisito.

A amostra prevista no PRD é de 20 pessoas distintas. Confirmar recrutamento, participação voluntária, consentimento e forma de registro antes da aplicação. Publicar apenas sínteses sem identificação pessoal.

## Regra de registro

Cada hipótese deverá ter um registro próprio, com observações separadas da interpretação do grupo.

| Campo                | O que registrar                                                                    |
| -------------------- | ---------------------------------------------------------------------------------- |
| Hipótese e versão    | Identificador, formulação e data da versão testada                                 |
| Método               | Tarefas, condições comparadas, ordem de apresentação e instrumentos                |
| Amostra              | Participantes ou casos, critérios de seleção e exposição prévia ao protótipo       |
| Métricas e critérios | Rubrica, denominadores, limiares e regra de interpretação definidos antes do teste |
| Evidências           | Observações, respostas autorizadas, referências e registros dos experimentos       |
| Resultado            | Contagens, medidas, diferenças, falhas e dados ausentes                            |
| Limitações           | Tamanho da amostra, vieses, incertezas e condições não avaliadas                   |
| Decisão              | Manter, revisar, retirar ou repetir; requisito afetado e responsável               |
| Estado               | Não testada, apoiada nesta amostra, não apoiada nesta amostra ou inconclusiva      |

**Não testada:** ainda não há dados coletados por um procedimento definido.

**Apoiada nesta amostra:** os resultados atendem aos critérios previamente registrados, dentro das condições avaliadas.

**Não apoiada nesta amostra:** os resultados obtidos não atendem aos critérios registrados, com dados suficientes para essa avaliação.

**Inconclusiva:** os dados, a qualidade da aplicação ou a incerteza não permitem uma interpretação adequada.

Nenhum desses estados deve ser apresentado como prova definitiva sobre toda a população. Alterações de método ou de critério após a coleta precisam ser registradas como revisão exploratória, sem substituir silenciosamente o plano original.

## Documentos relacionados

* [PRD — visão e requisitos](../PRD.md)
* [POC — plano de prova de conceito](../POC.md)
* [Perguntas norteadoras](guiding-questions.md)
* [Matriz de confiança](matriz-confianca.md)
* [Bases de dados](datasets.md)
* [Questionário](../research/questionario.md)
* [Roteiro de entrevista](../research/roteiro-entrevista.md)
