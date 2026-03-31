# death2email — Showcase Site

## What This Is
A product vision showcase site for "death2email" — a concept that replaces the email inbox with an AI layer. This site is being sent to hiring managers at Fixer as evidence of strategic product thinking. It needs to look POLISHED and PROFESSIONAL.

## Live URL
Deployed on Cloudflare Pages. Every `git push` to `main` triggers an auto-deploy (~2 min).

## Stack
- Next.js 16 with App Router (static export)
- React 19, TypeScript
- Tailwind CSS v4
- Framer Motion (for hover interactions ONLY — do NOT use for scroll-triggered visibility)
- Lucide React for icons

## Build & Deploy
```bash
npm run build     # Must pass clean before committing
git add -A && git commit -m "improve: <description>" && git push
```

## Design System
- **Background**: #0a0a0a (near black)
- **Text**: white for headings, zinc-400 for body, zinc-500 for secondary
- **Cards**: bg-zinc-900/50, border border-zinc-800, rounded-xl
- **Accent colors**: blue-500 (travel), purple-500 (shopping), green-500 (finance), pink-500 (events), red-500 (urgent), amber-500 (suggested)
- **Font**: Inter (loaded via next/font/google)
- **Spacing**: Generous. Every section should have py-24 px-6 md:px-8 minimum. Max-w-6xl mx-auto for content.
- **Aesthetic target**: Linear.app, Vercel.com, Raycast.com — premium, minimal, confident

## Critical Rules
1. **Content must be visible without JS animations.** Never use framer-motion `initial={{ opacity: 0 }}`. Use CSS @keyframes for entrance effects.
2. **Dark theme only.** No white or light backgrounds anywhere.
3. **Every section needs consistent horizontal padding.** Use `max-w-6xl mx-auto px-6 md:px-8`.
4. **Build must pass** before every commit. Run `npm run build` and fix any errors.
5. **All components use `'use client'` and `export default function`.**

## Improvement Loop
Read `IMPROVEMENTS.md` for the prioritized list of visual issues. Work through them top to bottom:
1. Read the issue
2. Make the fix
3. Run `npm run build` to verify
4. Commit with message `improve: <what changed>`
5. Push to trigger deploy
6. Mark the issue as done in IMPROVEMENTS.md
7. Move to the next issue

## File Structure
```
src/
  app/
    globals.css      # Global styles, CSS variables
    layout.tsx       # Root layout with Inter font
    page.tsx         # Main page assembling all sections
  components/
    Hero.tsx              # Full-viewport hero with death2email branding
    ProblemStatement.tsx  # Why email is broken + comparison
    InboxDemo.tsx         # Side-by-side Traditional vs death2email (CENTREPIECE)
    WorkspacesShowcase.tsx # Workspace cards with missions
    AgentLayer.tsx        # Agent cards + how agents work flow
    DesignPrinciples.tsx  # 4 numbered principles in 2x2 grid
    TechnicalVision.tsx   # Roadmap + Why Now
    Footer.tsx            # Branding, links, copyright
  data/
    types.ts             # TypeScript interfaces
    mock-emails.ts       # 12 raw + 12 transformed emails
    mock-workspaces.ts   # 4 workspaces with missions
    mock-agents.ts       # 6 agents with capabilities
```

## Reference Material
- Concept doc: `../death2email - concept.md`
- Figma prototype: https://www.figma.com/make/DH7aLB3FUD6p5Olqezc6yh/Death2Email
