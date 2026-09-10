# Paradigmas de IA
Abordagens previstas para investigação

## Aprendizado supervisionado
Treinar um modelo simples com exemplos rotulados e avaliar em dados separados. Comparação proposta: classificador básico, TF-IDF com Regressão Logística e Linear SVM. A seleção final depende de resultados.

## IA generativa como apoio
Usar uma API auxiliar para sugerir a alegação e explicar evidências consultadas. A explicação deverá se apoiar nas fontes; fluência do texto não será tratada como prova.

## Recuperação de evidências
Consultar uma coleção selecionada e complementar com busca online. Identificar origem, data, independência das fontes e relação com a alegação antes de sintetizar a resposta.

## Regras explícitas
Definir limites de entrada, condições para abstenção, tratamento de erros e apresentação das categorias. Não inventar uma nota quando faltarem evidências.

## Como combinar
O desenho proposto combina classificação, recuperação, explicação e regras. Nenhuma abordagem isolada garante a veracidade. A integração e sua avaliação ainda estão pendentes.

## Responsabilidade de cada abordagem
| Abordagem | Contribuição esperada | O que não demonstra sozinha |
| --- | --- | --- |
| Classificação supervisionada | Reconhecer padrões nos exemplos rotulados | Veracidade de qualquer notícia nova |
| Recuperação de evidências | Localizar material relacionado à alegação | Independência e suficiência de todas as fontes |
| IA generativa | Ajudar a formular alegações e explicar referências | Correção de uma afirmação sem verificação |
| Regras explícitas | Aplicar limites e estados de falha ou abstenção | Validação científica de uma nota de confiança |

## Como avaliar
Comparar Macro F1, erros por categoria e compreensão dos participantes. Registrar limitações do conjunto de dados e interpretações equivocadas das explicações.
