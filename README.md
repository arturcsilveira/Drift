# Drift — Landing Page
 
Landing page da **Drift**, marca fictícia de malas de viagem que eliminou a alça retrátil tradicional. A página destaca o design inteligente do produto, as vantagens em relação às malas comuns, a prova social e a oferta de lançamento, com foco em uma experiência fluida em desktop, tablet e celular.
 
🔗 **Link:** [drift-mala.vercel.app](https://drift-mala.vercel.app)
🎨 **Protótipo no Figma:** [Abrir protótipo](https://www.figma.com/design/8FtxPdJ0ZniFjRsQNrW6oA/Sem-t%C3%ADtulo?node-id=0-1&t=KDGsk5aXHzW2bWyJ-1)
 
![Interface da Landing Page](assets/imgs/drift-fundo2.png)
 
---
 
## Sumário
 
- [Seções da página](#seções-da-página)
- [Tecnologias](#tecnologias)
- [Como rodar](#como-rodar)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Arquitetura do CSS](#arquitetura-do-css)
- [Responsividade](#responsividade)
- [JavaScript](#javascript)
- [Acessibilidade](#acessibilidade)
- [Autor](#autor)
---
 
## Seções da página
 
| Seção | Descrição |
|---|---|
| **Header** | Logo, navegação por âncoras e botão de compra. No celular vira menu hambúrguer. |
| **Hero** | Chamada principal com botão. Usa uma imagem para desktop e tablet e outra para celular. |
| **Contador** | Contagem regressiva da oferta de lançamento. |
| **Design inteligente** | Apresentação do conceito da mala sem alça. |
| **Vantagens** | Seis cards com os benefícios do produto. |
| **Comparação** | Mala comum × Drift, lado a lado. |
| **Testemunhas** | Carrossel de depoimentos de clientes. |
| **Produto** | Oferta, preço, desconto e benefícios de compra. |
| **FAQ** | Perguntas frequentes em acordeão. |
| **Footer** | Logo, links, redes sociais e direitos autorais. |
 
---
 
## Tecnologias
 
- **HTML5** semântico
- **CSS3** com variáveis (CSS Custom Properties), Flexbox e Grid
- **JavaScript (ES6)** com módulos
- **IntersectionObserver API** para as animações de entrada
- **Fontes locais:** Manrope (corpo) e Playfair Display (títulos)
- **Hospedagem:** Vercel
Não há dependências, bibliotecas, frameworks nem etapa de build.
 
---
 
## Como rodar
 
O projeto é estático, mas usa **módulos ES6**. Por restrição de segurança dos navegadores (CORS), ele não funciona corretamente se o `index.html` for aberto direto pelo protocolo `file://`. É preciso servi-lo por um servidor local.
 
1. Clone o repositório:
```bash
   git clone https://github.com/arturcsilveira/Drift.git
   cd Drift
```
 
2. Inicie um servidor local. Duas opções:
   - **VS Code:** instale a extensão **Live Server**, clique com o botão direito no `index.html` e escolha **Open with Live Server**.
   - **Terminal:**
```bash
     npx serve .
```
 
     ou, com Python instalado:
 
```bash
     python -m http.server 8000
```
 
3. Abra o endereço indicado no navegador (por exemplo, `http://localhost:8000`).
---
 
## Estrutura do projeto
 
```text
📁 Drift
├── 📁 assets
│   ├── 📁 fonts            # Manrope e Playfair Display (fontes variáveis)
│   ├── 📁 icons            # Ícones de vantagens e benefícios de compra
│   └── 📁 imgs             # Logo, hero, produto, comparação e depoimentos
├── 📁 src
│   ├── 📁 css
│   │   ├── 📁 base
│   │   │   └── 📄 base.css           # Reset, variáveis globais e tipografia
│   │   ├── 📁 sections               # Um arquivo por seção
│   │   │   ├── 📄 header.css
│   │   │   ├── 📄 hero.css
│   │   │   ├── 📄 counter.css
│   │   │   ├── 📄 design-inteligente.css
│   │   │   ├── 📄 vantagens.css
│   │   │   ├── 📄 comparacao.css
│   │   │   ├── 📄 testemunhas.css
│   │   │   ├── 📄 product.css
│   │   │   ├── 📄 faq.css
│   │   │   └── 📄 footer.css
│   │   └── 📄 main.css               # Importa base e seções
│   └── 📁 js
│       ├── 📄 main.js                # Ponto de entrada dos módulos
│       ├── 📄 menu.js                # Menu mobile
│       ├── 📄 counter.js             # Contador regressivo
│       ├── 📄 carousel.js            # Carrossel de depoimentos
│       ├── 📄 faq.js                 # Acordeão do FAQ
│       └── 📄 animacoes.js              # Animações ao rolar a página
├── 📄 index.html
└── 📄 README.md
```
 
---
 
## Arquitetura do CSS
 
### Um arquivo por seção
 
Cada seção tem seu próprio arquivo em `src/css/sections/`. **O código responsivo de cada seção fica no fim do próprio arquivo**, em vez de em um arquivo separado de mobile. Assim, ao alterar uma seção, o desktop, o tablet e o celular ficam no mesmo lugar.
 
### Variáveis globais (`base.css`)
 
Todo o visual é controlado por variáveis no `:root`:
 
| Grupo | Variáveis |
|---|---|
| **Cores** | `--bege`, `--bege-claro`, `--grafite`, `--verde`, `--marrom` |
| **Fontes** | `--font-title`, `--font-body` |
| **Tamanhos de fonte** | `--font-size-h1` a `--font-size-h5`, `--font-size-body-lg/md/sm`, `--font-size-button`, `--font-size-nav`, `--font-size-caption` |
| **Espaçamentos** | `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl` |
| **Bordas** | `--radius-sm`, `--radius-md`, `--radius-lg` |
| **Layout** | `--container-width` |
| **Transição** | `--transition` |
 
Os componentes usam essas variáveis sempre que possível, em vez de valores fixos.
 
---
 
## Responsividade
 
A abordagem é **desktop-first**: o CSS base é o desktop, e as media queries com `max-width` adaptam o layout para telas menores.
 
| Breakpoint | Dispositivo |
|---|---|
| `max-width: 768px` | Tablet |
| `max-width: 480px` | Celular |
 
### Escala automática pelas variáveis
 
O `base.css` **redefine as variáveis dentro dos próprios breakpoints** (títulos, espaçamentos e raios de borda diminuem em 768px e 480px). Como os componentes usam essas variáveis, boa parte do layout se ajusta sozinha, sem repetir valores em cada seção.
 
Exemplo: `--spacing-lg` vale 64px no desktop, 48px no tablet e 32px no celular, e o `padding: var(--spacing-lg)` de qualquer seção acompanha essa mudança.
 
### Adaptações por seção
 
- **Header:** a navegação vira menu hambúrguer abaixo de 768px, e o botão "Compre agora" é ocultado.
- **Hero:** desktop e tablet usam a imagem larga, com o texto sobre a área vazia ao lado da mala. No celular, o elemento `<picture>` troca para uma versão vertical, com filtro grafite e o texto centralizado por cima. O tamanho do texto usa `clamp()` para acompanhar a largura da tela.
- **Comparação:** no desktop, a lista fica ao lado da imagem. No tablet e no celular, a lista fica em cima e a imagem embaixo.
- **Testemunhas:** o carrossel mostra 3 cards no desktop e 2 no tablet e no celular.
- **Produto:** imagem e painel lado a lado no desktop e no tablet. No celular, a imagem vira fundo da seção, com filtro grafite, e o texto fica por cima.
- **FAQ, Footer, Contador, Design e Vantagens:** reduzem fontes e espaçamentos e reorganizam colunas conforme a tela.
---
 
## JavaScript
 
O JS é dividido em módulos pequenos, importados pelo `main.js`, cada um com uma única responsabilidade.
 
| Arquivo | Função |
|---|---|
| `menu.js` | Abre e fecha o menu mobile pela classe `active`. |
| `counter.js` | Contagem regressiva de 30 dias. A data final fica no `localStorage`. Quando a oferta expira, um novo ciclo começa automaticamente. |
| `carousel.js` | Carrossel com botões de anterior e próximo. A função `getCardsPerView()` retorna 2 cards em telas de até 768px e 3 acima disso, e a posição é recalculada ao redimensionar a janela. |
| `faq.js` | Acordeão com troca dinâmica dos ícones "+" e "−". |
| `animacoes.js` | Usa `IntersectionObserver` para aplicar o efeito de entrada (fade-in com deslocamento) nos elementos com a classe `.reveal` quando eles aparecem na tela. |
 
> **Sobre o contador:** a data final é guardada no `localStorage` do navegador, então cada visitante vê um prazo de 30 dias a partir da primeira visita. É uma contagem simulada, usada apenas como elemento visual de escassez.
 
---
 
## Acessibilidade
 
- Estrutura semântica com `<header>`, `<main>`, `<section>` e `<footer>`
- Atributos `aria-label` e `aria-expanded` nos controles interativos (menu e FAQ)
- Texto alternativo (`alt`) em todas as imagens de conteúdo
- Navegação por âncoras com rolagem suave (`scroll-behavior: smooth`)
---
 
## Autor
 
**Artur de Carvalho Silveira**
Engenharia de Computação — Universidade SENAI CIMATEC
 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-arturcsilveira-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arturcsilveira/)
[![GitHub](https://img.shields.io/badge/GitHub-arturcsilveira-181717?logo=github&logoColor=white)](https://github.com/arturcsilveira)