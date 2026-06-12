# TSX drafts

Production-ready equivalents of the HTML mockups in `samples/html/`. Nothing here is
wired in yet — these are for review.

## Wiring the theme

1. Append the chosen palette block from `theme.css` to `app/globals.css`.
2. Replace the `colors` block in `tailwind.config.ts` with semantic tokens:

```ts
theme: {
  extend: {
    colors: {
      bg: "var(--bg)",
      surface: "var(--surface)",
      "surface-2": "var(--surface-2)",
      line: "var(--border)",        // "border" clashes with the borderColor key
      fg: "var(--text)",
      muted: "var(--muted)",
      faint: "var(--faint)",
      primary: "var(--primary)",
      "primary-strong": "var(--primary-strong)",
      "on-primary": "var(--on-primary)",
      "primary-hover": "var(--primary-hover)",
      accent: "var(--accent)",
    },
  },
},
```

This also removes the current `green: colors.orange` trap — with semantic names,
no class lies about its color again.

## Files

- `Navbar.tsx` — adds Contact as a persistent primary button, real mobile menu,
  `aria-current` on the active link. Becomes a client component (menu state +
  `usePathname`).
- `Hero.tsx` — static headline (value prop readable in <5s, no typewriter delay),
  availability badge instead of "System Status", contact-first CTAs, résumé link,
  proof-stat row. Server component; drop framer-motion entrance animations or
  re-add them in a small client island.
- `ProjectCard.tsx` — whole card is the link, internal links no longer open new
  tabs, link label says what it does ("Read case study" vs "View code").
- `ContactCta.tsx` — reusable end-of-page CTA band for home, project pages, about.

Replace `RESUME_URL`, `LINKEDIN_URL`, and the stats with real values before shipping.
