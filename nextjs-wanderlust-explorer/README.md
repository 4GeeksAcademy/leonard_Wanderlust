# Wanderlust Explorer

Wanderlust Explorer is a multi-page Next.js App Router app to discover travel experiences, apply shareable URL filters, view details, and save favorites in React state.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS + custom global styles

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Routes

- `/` Home hero with call to action.
- `/experiences` Explorer with search + category + destination filters.
- `/experiences/[id]` Detail page for one experience.
- `/favorites` Favorites list from shared app state.
- `/profile` Static user profile + saved favorites count.

## Features Implemented

- 100 local experience objects in TypeScript.
- `Experience` interface used consistently across pages and components.
- Regex title search (`/term/i`) with escaped user input.
- Independent category and destination filters that stack with search.
- URL query state for `search`, `category`, and `destination`.
- Query params pre-fill controls and pre-filter results on load.
- Favorites toggle with heart icon on cards and detail page.
- Favorites managed by top-level `useState` via shared provider.
- Active nav link styling with `usePathname`.
- `No results found` empty state for filtered views.
- Responsive layout for mobile and desktop.
- Custom hook: `useExperienceFilters`.
- `useEffect` usage for URL synchronization and detail title updates.

## Design References

- Viator Philadelphia Tours: https://www.viator.com/Philadelphia-tourism/d906-r20657254331-s227193491
- GetYourGuide Experiences: https://www.getyourguide.com/
- Airbnb Experiences Browse Patterns: https://www.airbnb.com/experiences

## Project Notes

- Favorites persistence across browser refresh is intentionally out of scope.
- No external state libraries are used (Redux/Zustand/etc.).
