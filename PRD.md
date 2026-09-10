# PRD — visão e requisitos
Documento de requisitos do produto · versão inicial

## Problema
Pessoas que recebem notícias nas redes sociais podem ter dificuldade para avaliar informações antes de compartilhar. O grupo quer investigar como explicações e fontes podem apoiar essa decisão.

## Objetivo
Construir um site responsivo que auxilie a avaliação de textos e links, apresentando a alegação investigada, evidências, referências, sinais e limitações.

## Público e contexto
Pesquisa exploratória planejada com 10 idosos e 10 pessoas de outras faixas etárias. Frequência de uso de redes sociais será investigada em ambos os grupos. Prioridade de público e limites de idade ainda precisam ser definidos.

## Escopo do MVP
- Acesso sem cadastro.
- Entrada de texto ou link em português.
- Identificação da alegação, com correção pelo usuário.
- Categorias explicadas: evidências consistentes, conflitantes ou insuficientes.
- Nota de 0 a 100% quando houver base definida e suficiente, acompanhada de justificativa.
- Referências consultáveis, datas e relação entre evidência e alegação.
- Possibilidade de adicionar contexto e consultar as fontes.

## Limites
Não prometer precisão absoluta ou inferir intenção de enganar. Não considerar linguagem emocional como prova de falsidade. Falta de evidências não equivale a notícia falsa.

Áudio, vídeo, deepfakes complexos, extensão de navegador e chatbot ficam fora da entrega principal. Imagens são uma extensão opcional.

## Abordagem prevista
Modelo simples treinado pelo grupo para avaliação acadêmica e API de IA auxiliar para identificação da alegação e explicação das evidências. Coleção selecionada pelo grupo com busca online complementar. A especificação registra Groq, Tavily e Render como escolhas provisórias para o piloto; cotas, qualidade e operação ainda precisam ser validadas. Não há integração ativa no portal.

## Metas provisórias
- Superar um classificador básico em Macro F1 em um conjunto de avaliação separado.
- Pelo menos 16 de 20 participantes concluírem análise, compreensão e indicação do próximo passo sem ajuda.
- Manter o gasto acumulado de todos os serviços abaixo de R$ 50 nas seis semanas, priorizando recursos gratuitos.

As metas são propostas de avaliação, não resultados alcançados.

## Decisões pendentes
Pesos da nota, fontes finais, provedores e datas de avaliação. A especificação local prevê uma notícia por vez e histórico sem cadastro apenas no navegador: resumo e resultado, sem texto integral, com exclusão pelo usuário e sem sincronização entre aparelhos. Implementação e detalhes operacionais continuam pendentes.

## Entrega atual
Este GitHub Pages é o portal de documentação. O assistente descrito acima ainda não está implementado.
