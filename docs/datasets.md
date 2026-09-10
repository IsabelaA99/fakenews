# Bases de dados
Seleção preliminar · ainda sem treinamento ou auditoria integral

## Candidatos para os experimentos
| Base | Papel proposto | Cuidados antes do uso |
| --- | --- | --- |
| Fake.Br | Candidato principal para classificação inicial em português | Manter pares e versões juntos na divisão; esclarecer condições de uso |
| FACTCK.BR | Complemento de alegações e checagens | Normalizar rótulos; separar texto de checagem da entrada |
| FakeRecogna | Alternativa para comparação posterior | Investigar duplicatas e marcas editoriais que revelem o rótulo |

O [Fake.Br](https://github.com/roneysco/Fake.br-Corpus) disponibiliza textos e metadados de notícias falsas e verdadeiras pareadas. A existência de versões do mesmo conteúdo exige cuidado ao separar treino e teste.

O [FACTCK.BR](https://github.com/jghm-f/FACTCK.BR) reúne alegações e checagens em português. O texto de uma checagem não deve ser confundido com a alegação a classificar.

O [FakeRecogna](https://huggingface.co/datasets/recogna-nlp/FakeRecogna) é outra base candidata em português. Sua adequação ao experimento depende da inspeção dos dados e das condições de uso.

## Antes de treinar
1. Registrar origem, versão, licença e transformações.
2. Medir campos ausentes, duplicatas, distribuição de classes, temas e datas.
3. Agrupar versões da mesma alegação antes de dividir os conjuntos.
4. Ajustar a representação textual apenas com os dados de treino.
5. Preservar o conjunto de teste para avaliação final.

## Limite da evidência
Classificar textos históricos não valida automaticamente a avaliação de contexto, atualização temporal ou uma nota de verdade. As bases são candidatas de pesquisa e não uma garantia de cobertura do produto.

