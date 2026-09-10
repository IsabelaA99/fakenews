from pathlib import Path
import re
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT

root = Path(__file__).resolve().parents[1]
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Body',fontName='Helvetica',fontSize=10,leading=15,spaceAfter=9))
styles.add(ParagraphStyle(name='Cell',fontName='Helvetica',fontSize=8,leading=11,spaceAfter=0))
for key in ('Heading1','Heading2','Heading3'):
    styles[key].textColor=HexColor('#1d3436')
    styles[key].spaceBefore=15
    styles[key].spaceAfter=9
    styles[key].keepWithNext=True
styles['Heading1'].fontSize=22
styles['Heading1'].leading=27
def inline(s):
    s=escape(s.strip())
    s=re.sub(r'\[([^\]]+)\]\((https?://[^)]+)\)',r'<link href="\2" color="#b94825">\1</link>',s)
    return re.sub(r'\*\*(.+?)\*\*',r'<b>\1</b>',s)
story=[]
lines=(root/'relatorio-scrum.md').read_text(encoding='utf-8-sig').splitlines()
i=0
while i<len(lines):
    line=lines[i].strip()
    if line.startswith('|'):
        rows=[]
        while i<len(lines) and lines[i].strip().startswith('|'):
            raw=lines[i].strip()
            if not re.fullmatch(r'[|\s:\-]+',raw):
                rows.append([Paragraph(inline(c),styles['Cell']) for c in raw.strip('|').split('|')])
            i+=1
        n=len(rows[0]); widths={3:[115,145,235],4:[130,100,190,75]}.get(n,[495/n]*n)
        table=Table(rows,colWidths=widths,repeatRows=1,hAlign='LEFT')
        table.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),HexColor('#e7ece4')),('GRID',(0,0),(-1,-1),.4,HexColor('#ccd4cc')),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),('TOPPADDING',(0,0),(-1,-1),7),('BOTTOMPADDING',(0,0),(-1,-1),7)]))
        story.extend([table,Spacer(1,12)]);continue
    heading=re.match(r'^(#{1,3})\s+(.+)',line)
    if heading: story.append(Paragraph(inline(heading[2]),styles['Heading'+str(len(heading[1]))]))
    elif line: story.append(Paragraph(inline(line[2:] if line.startswith('- ') else line),styles['Body'],bulletText='•' if line.startswith('- ') else None))
    i+=1
def footer(c,doc):
    c.setTitle('Fake Eyes - Relatório Scrum')
    c.setAuthor('Projeto Fake Eyes')
    c.setStrokeColor(HexColor('#ccd4cc'));c.line(50,42,545,42)
    c.setFillColor(HexColor('#596c6b'));c.setFont('Helvetica',8)
    c.drawString(50,28,'Fake Eyes | Relatório Scrum | Proposta de organização')
    c.drawRightString(545,28,str(doc.page))
out=root/'assets/relatorio-scrum.pdf'
SimpleDocTemplate(str(out),pagesize=(595,842),rightMargin=50,leftMargin=50,topMargin=40,bottomMargin=58).build(story,onFirstPage=footer,onLaterPages=footer)
print(out)
