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

## Ficha de adoção de cada base
Antes de adotar um conjunto, o grupo deverá registrar: endereço de origem, revisão ou data de obtenção, condições de uso, campos utilizados, significado dos rótulos, transformações e regra de divisão. A aprovação depende dessa revisão, não apenas da disponibilidade pública do arquivo.

## Papel das bases no produto
As bases de treinamento e a coleção de evidências têm funções distintas. Um conjunto rotulado permite comparar modelos; uma evidência consultável precisa sustentar ou contrariar a alegação específica. O resultado deverá identificar quais referências foram realmente usadas, independentemente da base que treinou o modelo.

## Limite da evidência
Classificar textos históricos não valida automaticamente a avaliação de contexto, atualização temporal ou uma nota de verdade. As bases são candidatas de pesquisa e não uma garantia de cobertura do produto.
