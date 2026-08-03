# Tiago Peron — Portfólio

Portfólio pessoal de **Tiago Peron**, Desenvolvedor Java Full-Stack. Single-page application construída com **Angular 22**, Bootstrap 5 e muita atenção aos detalhes.

**[🔗 tiagoperon.com.br](https://tiagoperon.com.br/)**

## ✨ Funcionalidades

- **Tema claro / escuro / automático** — respeita a preferência do sistema com detecção via `matchMedia` e persistência em `localStorage`
- **Scroll-spy no menu** — links da navbar sincronizados com as seções visíveis via IntersectionObserver
- **Animações fade-up** — elementos entram com transição suave ao rolar a página
- **SEO completo** — JSON-LD (`ProfilePage`), Open Graph, meta tags, sitemap.xml, robots.txt
- **Google Analytics** — medição de tráfego com GA4
- Seções: **Hero**, **Sobre**, **Skills**, **Projetos**, **Contato**
- Responsivo — glass-morphism navbar, cards com badges de tecnologia

## 🛠 Tecnologias

| Categoria       | Tecnologia                              |
| --------------- | --------------------------------------- |
| Framework       | Angular 22 (standalone)                 |
| Linguagem       | TypeScript 6.0                          |
| Estilização     | SCSS + Bootstrap 5.3 + Bootstrap Icons  |
| Fontes          | DM Sans, Space Mono (Google Fonts)      |
| Testes          | Vitest + jsdom                          |
| Build tooling   | esbuild (`@angular/build`)              |
| Formatação      | Prettier                                |

## 📋 Pré-requisitos

- **Node.js** 22+
- **npm** (gerenciador de pacotes fixado em `npm@11.16.0`)

## 🚀 Instalação

```bash
git clone https://github.com/tperons/portfolio.git
cd portfolio
npm install
```

## 📦 Scripts

| Comando          | Descrição                                       |
| ---------------- | ----------------------------------------------- |
| `npm start`      | Servidor de desenvolvimento em `localhost:4200` |
| `npm run build`  | Build de produção (saída em `dist/`)            |
| `npm run watch`  | Build de desenvolvimento com watch mode         |
| `npm test`       | Executa testes unitários com Vitest             |

## 📁 Estrutura do Projeto

```
src/
├── index.html                  # HTML principal (CDNs, GA, OG tags, JSON-LD)
├── main.ts                     # Bootstrap standalone
├── styles.scss                 # Variáveis CSS, reset, tipografia, animações
└── app/
    ├── app.config.ts           # Providers da aplicação
    ├── app.routes.ts           # Rotas (atualmente SPA sem lazy loading)
    ├── app.ts / .html / .scss  # Componente raiz
    ├── core/
    │   └── services/
    │       ├── active-section.ts    # Scroll-spy (IntersectionObserver)
    │       └── theme.ts             # Gerenciamento de tema
    ├── layout/
    │   └── navbar/                  # Navbar fixa com glass-morphism
    ├── pages/
    │   └── home/
    │       ├── home.ts              # Página principal (compõe as seções)
    │       └── sections/
    │           ├── hero-section/    # Hero com código Java decorativo
    │           ├── about-section/   # Sobre + cards de estatísticas
    │           ├── skills-section/  # Skills com barras de progresso
    │           ├── projects-section/# Cards de projetos + badges de tech
    │           │   └── project-card/
    │           └── contact-section/ # Contato + footer
    └── shared/
        └── directives/
            └── fade-up.ts           # Diretiva de animação ao scroll
```

## 🏗 Arquitetura

- **100% standalone components** — sem `NgModule`, usando `inject()`, `signal()`, `input.required()`, `effect()`
- **Esbuild builder** (`@angular/build:application`) no lugar de Webpack
- Separação clara: `core/` (serviços), `layout/` (componentes estruturais), `pages/` (páginas), `shared/` (diretivas)

## 👤 Autor

**Tiago Peron** — Desenvolvedor Java Full-Stack

- 🌐 [tiagoperon.com.br](https://tiagoperon.com.br/)
- 💼 [linkedin.com/in/tperons](https://www.linkedin.com/in/tperons/)
- 🐙 [github.com/tperons](https://github.com/tperons)
