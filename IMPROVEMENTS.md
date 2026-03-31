# death2email — Improvement Plan

Work through these issues top to bottom. After each fix, run `npm run build`, commit, and push.

## Priority 1: Layout & Spacing (everything feels cramped and flush-left)

- [x] **Global padding consistency**: Every section component needs `max-w-6xl mx-auto px-6 md:px-8`. Many sections currently have content flush to the left edge with no margin. Check ALL components.
- [x] **Section spacing**: Ensure every section has `py-24 md:py-32` for vertical breathing room. Add subtle `border-t border-zinc-800/30` between sections for visual separation.
- [x] **Heading hierarchy**: Section headings should be `text-4xl md:text-5xl font-bold` (not text-5xl md:text-6xl which is too large). Subtitles in `text-lg text-zinc-400`. Consistent `mb-16` gap between heading and content.

## Priority 2: Hero Section Polish

- [x] **Hero spacing**: The pills (Interprets/Extracts/Acts) need more visual weight — add icon or number prefix, increase padding. Add subtle gradient divider at the bottom of the hero section.
- [x] **Red glow refinement**: The red glow on "email" is too big/blobby. Make it more subtle — reduce blur radius, lower opacity. It should be a hint of red, not a spotlight.

## Priority 3: Problem Statement Section

- [x] **Card styling**: The three problem cards need more visual depth — add subtle gradient backgrounds, padding of p-8, rounded-xl corners. Each card should have a small colored icon circle at the top (red for Structural, amber for User Pain, blue for Mismatch).
- [x] **Comparison section**: The "What email shows you" vs "What you actually need" comparison needs to be more dramatic. The bad example should feel clearly worse (darker, flatter). The good example should feel alive (colored accent border, structured data visible). Add more visual contrast between them.

## Priority 4: Inbox Demo (MOST IMPORTANT SECTION)

- [x] **Visual hierarchy**: The Traditional Inbox column should feel deliberately boring — monochrome, compact, no visual interest. The death2email column should feel alive — colored urgency dots should pulse subtly, workspace tags should pop with color, the column should have a very subtle colored border or glow.
- [x] **Card expansion**: When clicking an email in the death2email column, the expansion should show extracted data in a clean key-value grid (2 columns), the action button should be prominent (full-width, colored), and "Open the coffin" should be clearly secondary.
- [x] **Empty state**: The right side of the death2email column has too much empty space when no email is expanded. Either auto-expand the first email, or fill the space with a summary panel showing stats (e.g., "9 emails → 4 actions needed").
- [x] **Mobile layout**: On mobile (< 768px), use tab switching between Traditional and death2email views instead of side-by-side.

## Priority 5: Workspaces Section

- [x] **Card design**: Workspace cards need colored left borders (4px) matching their category color. Add hover state that lifts the card and brightens the border. Show a small icon in the top-left.
- [x] **Mission expansion**: When a workspace card is expanded, the missions should show with progress bars that have colored fills matching the workspace color. Show email count per mission.
- [x] **View pills**: The Timeline/Kanban/Checklist/Ledger/Canvas pills at the bottom need more visual treatment — add subtle icons, hover states, and spacing.

## Priority 6: Agent Layer

- [x] **Card grid**: Agent cards should have consistent height (min-h-[280px]). Status badges should be positioned consistently in the top-right corner.
- [x] **Capability list**: Agent capabilities should be styled as small pills or tags, not plain bullet points.
- [x] **How agents work flow**: The 5-step flow at the bottom should have connecting arrows/lines between steps, not just text. Use a subtle gradient line connecting the circles. Each circle should use the accent purple color.

## Priority 7: Design Principles

- [x] **Number styling**: The large faded numbers (01-04) should be much larger (text-8xl or text-9xl) and positioned as a watermark behind the card text — overlapping the title. They should be very faint (zinc-800/20).
- [x] **Card hover**: On hover, cards should get a subtle colored top border accent (alternating colors).

## Priority 8: Technical Vision & Footer

- [x] **Roadmap cards**: Phase 1 and Phase 2 cards should have a clear visual distinction — Phase 1 should feel "completed/solid" (brighter border, check icons in green). Phase 2 should feel "upcoming" (dashed border, circle icons in zinc-500).
- [x] **Why Now cards**: Should have more visual weight — add a relevant icon at the top of each card.
- [x] **Footer**: Add a subtle gradient divider above the footer. Footer links should show label text on hover, not just be bare icons.

## Priority 9: Overall Polish

- [x] **Smooth scroll anchoring**: Add an id to each section so the page feels navigable.
- [ ] **Loading state**: Add a simple CSS loading animation that shows for 200ms on page load before content appears, so the staggered animations feel intentional.
- [x] **Typography refinement**: Ensure consistent use of `font-light` for body text and `font-bold` for headings throughout. No `font-black` except on the hero title.
- [x] **Micro-interactions**: Add subtle hover effects on all cards (translateY(-2px), border-color change). Keep these as CSS transitions, not framer-motion.
