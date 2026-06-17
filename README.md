# 🚀 Portfólio Pessoal

Um portfólio moderno desenvolvido com **React**, **TypeScript**, **Vite**, **Bun**, **Framer Motion** e efeitos visuais avançados inspirados em landing pages premium.

## ✨ Tecnologias

* React
* TypeScript
* Vite
* Bun
* Tailwind CSS v4
* Framer Motion
* Lucide React
* Glassmorphism
* GitHub API

---

## 📋 Pré-requisitos

Antes de começar, instale:

### Node.js

Recomendado:

* Node.js 20+

Verifique a instalação:

```bash
node -v
```

### Bun

Instale o Bun:

#### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

#### Linux / macOS

```bash
curl -fsSL https://bun.sh/install | bash
```

Verifique a instalação:

```bash
bun --version
```

---

## 📦 Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta:

```bash
cd portfolio
```

Instale as dependências:

```bash
bun install
```

---

## ▶️ Executando o projeto

Inicie o servidor de desenvolvimento:

```bash
bun dev
```

O projeto ficará disponível em:

```txt
http://localhost:5173
```

---

## 🏗️ Gerando build de produção

Para gerar a versão otimizada:

```bash
bun run build
```

Os arquivos serão gerados na pasta:

```txt
dist/
```

---

## 👀 Visualizar build localmente

Após gerar a build:

```bash
bun run preview
```

---

## 📂 Estrutura do Projeto

```txt
src/
├── components/
│   ├── ui/
│   ├── effects/
│   └── sections/
│
├── data/
│
├── hooks/
│
├── services/
│
├── assets/
│
├── styles.css
│
├── App.tsx
│
└── main.tsx
```

---

## 🔗 Integração com GitHub

Os projetos exibidos na seção de portfólio são carregados dinamicamente através da API do GitHub.

As configurações podem ser encontradas em:

```txt
src/services/github.ts
```

---

## 🎨 Recursos Visuais

O projeto utiliza:

* Aurora Background
* Animated Grid
* Glassmorphism
* Motion Design com Framer Motion
* Animated Underline
* Magnetic Buttons
* Scroll Animations
* Responsive Layout

---

## 🚀 Deploy

O projeto pode ser publicado facilmente em:

* Vercel
* Netlify
* GitHub Pages
* Cloudflare Pages

Após conectar o repositório, configure:

```txt
Build Command:
bun run build

Output Directory:
dist
```

---

## 📄 Licença

Este projeto é de uso pessoal e educacional.

---

Desenvolvido com ❤️ utilizando Lovable, Bun e React.
