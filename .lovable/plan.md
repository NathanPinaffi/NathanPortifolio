## Visão geral

Portfólio pessoal one-page (rota `/`) com estética dark futurista, glassmorphism, motion design refinado e todas as seções do brief. Stack: TanStack Start (já instalado) + React + TS + Tailwind v4 + Framer Motion + GSAP + Lucide. Conteúdo em PT‑BR com placeholders editáveis (nome, links, projetos) marcados claramente no topo de cada arquivo de dados.

## Design system (`src/styles.css`)

- Tokens dark: bg `#050505 / #0B0B0B / #111`, violetas `#7C3AED #8B5CF6 #A855F7`, cyan `#06B6D4`, textos `#FFF #E5E7EB #9CA3AF`.
- Fontes via `<link>` no `__root.tsx`: Inter (sans), Instrument Serif (display), JetBrains Mono (mono).
- Utilities customizadas v4: `glass`, `glass-strong`, `text-gradient`, `text-gradient-violet`, `grid-pattern`, `noise-overlay`.
- Keyframes: `float`, `scroll-down`, `aurora`, `marquee`, `draw` (SVG underline), `shimmer`.
- Selection roxa, smooth scroll, antialias.

## Estrutura de arquivos

```
src/
  routes/
    __root.tsx          # adiciona fontes + dark
    index.tsx           # monta todas as sections
  sections/
    Nav.tsx
    Hero.tsx
    About.tsx
    Tech.tsx
    Projects.tsx
    Timeline.tsx
    Social.tsx
    CTA.tsx
    Footer.tsx
  components/
    ui/
      GlassCard.tsx
      MagneticButton.tsx
      AnimatedUnderline.tsx   # SVG path animation em loop
      ScrollArrow.tsx
      AvailabilityBadge.tsx
      Counter.tsx             # contador animado on-viewport
      Marquee.tsx
      SectionHeading.tsx
    effects/
      CursorGlow.tsx          # spotlight do mouse global
      AuroraBackground.tsx    # blobs animados + blur
      AnimatedGrid.tsx        # grid pattern com mask
      NoiseTexture.tsx
      Spotlight.tsx           # gradiente radial fixo
  hooks/
    useMagnetic.ts            # efeito magnético
    useInViewOnce.ts
  data/
    site.ts                   # PLACEHOLDERS: nome, bio, socials, projetos, timeline, techs
  lib/
    gsap.ts                   # registra ScrollTrigger 1x (client-only)
```

## Seções (resumo do que cada uma faz)

- **Nav** – top fixo glass, blur on-scroll, links âncora, CTA "Contato" magnético.
- **Hero (100vh)** – AuroraBackground + AnimatedGrid + Noise. Faixa glass "Disponível para projetos e oportunidades" com pulse dot. Headline serif gigante "Transformando ideias em **software extraordinário**." com `AnimatedUnderline` SVG desenhando em loop sob "software extraordinário". Subtítulo. Dois `MagneticButton` (Ver Projetos / Entrar em Contato). `ScrollArrow` flutuando. Parallax leve via GSAP nos blobs.
- **About** – split 2 colunas. Esquerda: glass card com avatar gerado + reflexo. Direita: bio + 4 stats animadas (`Counter` on viewport: 5+ anos, 20+ projetos, etc.) + badges (Full Stack, IA, Automação).
- **Tech** – grid responsivo de cards glass (React, TS, Node, Python, Postgres, Docker, AWS, IA Generativa, OpenAI). Hover: glow + tilt 3D (mouse-follow rotate).
- **Projects** – 4-6 cards premium (placeholder). Imagem gerada, descrição, stack chips, botões GitHub/Demo magnéticos. Reveal stagger via Framer Motion `whileInView`.
- **Timeline** – vertical cinematográfica. Linha central com `ScaleY` controlado por GSAP ScrollTrigger; cards alternando esquerda/direita com fade-up stagger.
- **Social** – 5 cards (GitHub, LinkedIn, Instagram, X, Email). Hover: scale + glow + leve rotateX/Y.
- **CTA** – grande faixa glass com aurora animada atrás, headline serif, botão principal grande magnético.
- **Footer** – minimalista: nome, © ano, ícones sociais.

## Animações

- **Framer Motion**: `whileInView` + `staggerChildren` para reveals; `whileHover` em todos os cards/botões; `motion.div` floating no badge e arrow; `AnimatePresence` no menu mobile.
- **GSAP + ScrollTrigger**: parallax dos blobs do hero (yPercent), crescimento da linha da timeline (`scaleY` de 0→1 conforme scroll), pin opcional no CTA.
- **Microinterações**: `CursorGlow` global (radial gradient seguindo mouse, escondido em touch), `useMagnetic` (translate do botão até ~24px do cursor), `AnimatedUnderline` (SVG `stroke-dashoffset` em loop infinito), `ScrollArrow` (translateY infinite), tilt 3D nos tech cards.

## Conteúdo (placeholders)

Em `src/data/site.ts`, com header "// 👉 Edite aqui seus dados reais":
- name: "Seu Nome", role: "Desenvolvedor Full Stack & IA", email, github, linkedin, instagram, x.
- 4 stats, 9 techs, 5 projetos exemplo, 5 itens timeline.

## Imagens

Gero via `imagegen--generate_image`:
- 1 avatar abstrato premium para About.
- 4 mockups de projeto (UI escuras estilizadas).

Tudo em `src/assets/` e importado por ES6.

## Responsividade

Mobile-first. Hero ajusta tipografia, About vira coluna única, Tech/Projects/Social viram grid 1‑2 cols, Timeline mantém vertical com cards full-width.

## SEO

`__root.tsx` title/description em PT, og tags. `index.tsx` head sobrescrito com título específico.

## Detalhes técnicos

- GSAP registrado num módulo `lib/gsap.ts` que faz `gsap.registerPlugin(ScrollTrigger)` apenas no client (`if (typeof window !== "undefined")`); cada section usa `useGSAP`/`useEffect` com cleanup.
- Componentes que usam `window`/`mousemove` (CursorGlow, MagneticButton, tilt) montam efeitos dentro de `useEffect` para SSR safety.
- Sem dependências Node-only.

## Entrega

Ao final, gero o `.zip` do projeto em `/mnt/documents/portfolio-premium.zip` (excluindo `node_modules`, `.git`, `dist`, `.output`) e disponibilizo via `<presentation-artifact>`.