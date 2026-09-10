from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import simpleSplit

root = Path(__file__).resolve().parents[1]
out = root / 'assets' / 'arquitetura-fake-eyes.pdf'
c = canvas.Canvas(str(out), pagesize=(595,842))
c.setTitle('Fake Eyes - Arquitetura proposta v0.2')
c.setAuthor('Projeto Fake Eyes')
ink, muted, orange = '#1d3436', '#596c6b', '#b94825'
def text(x,y,s,size=11,color=ink,font='Helvetica'):
    c.setFillColor(HexColor(color)); c.setFont(font,size); c.drawString(x,y,s)
def para(s,y,width=493,size=11):
    for line in simpleSplit(s,'Helvetica',size,width):
        text(51,y,line,size); y-=17
    return y-12
def frame(page):
    c.setFillColor(HexColor('#f7f6f1')); c.rect(0,0,595,842,fill=1,stroke=0)
    text(51,790,'FAKE EYES / CADERNO DE PROJETO',10,orange,'Helvetica-Bold')
    c.setStrokeColor(HexColor('#dce0d8')); c.line(51,63,544,63)
    text(51,43,'Arquitetura proposta - v0.2 - 10/09/2026',9,muted)
    text(514,43,f'{page} / 2',9,muted)
frame(1)
text(51,735,'Da alegação à evidência.',29,ink,'Times-Roman')
y=para('Desenho inicial do analisador Fake Eyes. O portal de documentação está publicado; o serviço de análise abaixo ainda não foi implementado.',700)
text(51,620,'01 / O PORTAL QUE JÁ EXISTE',10,orange,'Helvetica-Bold')
y=para('Markdown > geração com Node.js > HTML e CSS > GitHub Actions > GitHub Pages. A publicação atual apresenta documentos e não coleta notícias ou respostas de participantes.',593)
text(51,514,'02 / FLUXO PROPOSTO PARA O PRODUTO',10,orange,'Helvetica-Bold')
steps=[('Entrada e alegação','Texto ou link sem cadastro; a pessoa pode corrigir a alegação.'),('Consulta e investigação','Coleção selecionada e busca complementar com referências.'),('Explicação e resultado','Categoria, evidências, contexto e limitações; nota só com base definida.'),('Histórico no navegador','Salvar resumo e resultado localmente, com exclusão pelo usuário.')]
for i,(title,desc) in enumerate(steps):
    top=491-i*91
    c.setFillColor(HexColor('#e7ece4')); c.roundRect(51,top-69,493,69,5,fill=1,stroke=0)
    text(65,top-24,f'{i+1:02d} / {title}',12,ink,'Helvetica-Bold')
    for j,line in enumerate(simpleSplit(desc,'Helvetica',10,461)): text(65,top-44-j*14,line,10,muted)
    if i<3: text(292,top-83,'v',10,orange)
c.showPage(); frame(2)
text(51,735,'Componentes e limites.',29,ink,'Times-Roman')
y=700
for title,body in [
('Serviço de análise - proposto','Coordenar a entrada, a consulta a evidências, os modelos e o tratamento de falhas. Hospedagem e framework ainda serão definidos; o portal estático não executa esse serviço.'),
('IA e fontes - experimentos pendentes','Modelo simples para comparação acadêmica e API auxiliar para alegações e explicações apoiadas nas fontes. Fake.Br, FACTCK.BR e FakeRecogna são candidatos, sujeitos a auditoria e condições de uso.'),
('Dados e credenciais','Chaves ficam no serviço, nunca no navegador. O histórico previsto guarda resumo e resultado, sem texto integral ou sincronização entre aparelhos. Informar o envio de conteúdo a serviços externos antes do uso.'),
('Incerteza e falhas','Evidência insuficiente gera Análise em aberto, sem percentual inventado. Uma URL inacessível deve levar à orientação de colar o texto. Linguagem emocional, ausência de dados e falha técnica não provam falsidade.'),
('Decisões ainda em aberto','Provedores, pesos da nota, fontes finais e datas da avaliação. Expiração local será verificada ao abrir ou usar o site; não há exclusão remota garantida de um navegador fechado.'),
('Base e acompanhamento','Síntese da especificação do grupo e dos documentos PRD e POC. Consulte a versão publicada para acompanhar mudanças. Não representa resultado de pesquisa nem arquitetura já integrada.')]:
    text(51,y,title,12,orange,'Helvetica-Bold');y-=23;y=para(body,y,size=10.5);y-=9
text(51,91,'https://isabelaa99.github.io/fakenews/arquitetura.html',9,muted)
c.linkURL('https://isabelaa99.github.io/fakenews/arquitetura.html',(51,86,500,102),relative=0)
c.save()
print(out)
