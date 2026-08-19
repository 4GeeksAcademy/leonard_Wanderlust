## Plan: Wanderlust Explorer MVP Build

Build a five-page Next.js App Router experience explorer that matches the evaluation checklist and your intended structure (top search bar, horizontal filters, responsive card grid), with URL-driven filter state, local favorites state in React, and placeholder-image based dataset entries.

**Steps**
1. Phase 1: Foundation and data contracts.
2. Define shared TypeScript types for Experience and filter state, including allowed category values and required fields (id, title, description, category, destination, price, rating, imageUrl).
3. Create a local data module with 100 experience objects using placeholder image URLs, including enough variation in category and destination for realistic filtering.
4. Add utility helpers for filter option derivation (unique categories and destinations) and safe regex creation to avoid crashes from special characters.
5. Phase 2: Shared app shell and navigation.
6. Add a global client-side provider at app layout level to hold favorites in useState and expose toggle/check helpers to descendants.
7. Build a Navbar component rendered on all pages, with active-link styling based on usePathname.
8. Update root layout metadata, app chrome, and responsive spacing to support all pages consistently.
9. Phase 3: Explorer route and URL-synced filtering.
10. Create the experiences page with top-aligned SearchBar and horizontal FilterBar (category + destination) above a responsive card grid.
11. Implement URL query synchronization using useSearchParams, usePathname, and router navigation so search/category/destination are reflected in query params and prefilled on load.
12. Implement a custom hook that reads URL params and returns filtered results using case-insensitive regex title matching plus independent category/destination stacking.
13. Add explicit empty-state message when no results match filters.
14. Phase 4: Remaining required routes and card interactions.
15. Create home page hero with CTA navigation to experiences route.
16. Build reusable ExperienceCard with heart toggle and visual favorite state, reused in experiences and favorites listings.
17. Create dynamic detail page by id, loading the selected experience from local dataset and rendering full details.
18. Create favorites page that shows only favorited experiences from shared useState.
19. Create profile page with static mock profile and computed saved-favorites count.
20. Phase 5: Documentation, quality, and rubric verification.
21. Update README with project overview, run instructions, route map, and Design References section listing 2-3 real UI inspirations used for visual direction.
22. Run lint/build checks and manual validation of all rubric items (routing, URL params, prefill, regex search, filters, favorites behavior, responsiveness, active nav).
23. Address any issues found during checks and confirm no external state libraries are used.

**Relevant files**
- /workspaces/leonard_Wanderlust/nextjs-wanderlust-explorer/src/app/layout.tsx — add shared provider mount point, navbar inclusion, and metadata updates.
- /workspaces/leonard_Wanderlust/nextjs-wanderlust-explorer/src/app/page.tsx — replace starter content with hero + CTA to experiences.
- /workspaces/leonard_Wanderlust/nextjs-wanderlust-explorer/src/app/globals.css — implement responsive visual system and shared styles for cards, filters, and layout.
- /workspaces/leonard_Wanderlust/nextjs-wanderlust-explorer/README.md — add Design References and project-specific docs.
- New files to be created under src/app/experiences, src/app/experiences/[id], src/app/favorites, src/app/profile, src/components, src/hooks, src/data, and src/types.

**Verification**
1. npm run lint completes with zero errors.
2. npm run build succeeds without runtime/type failures.
3. Manual route check: home, experiences, experiences detail by id, favorites, profile all render and navigate client-side.
4. URL-state check: search/category/destination changes update query params; reloading with query params pre-fills controls and keeps filtered results.
5. Filtering logic check: case-insensitive regex title search works; category and destination each work independently and together.
6. Favorites check: heart toggle updates card state and favorites page contents; profile favorites count matches state.
7. Empty-state check: no-results message appears when filters produce zero matches.
8. Responsiveness check: layout and controls remain usable on mobile and desktop breakpoints.

**Decisions**
- UI structure follows your selected pattern: top search bar + horizontal filters + card grid.
- Image strategy uses placeholder image providers for dataset imageUrl values.
- Favorites persistence across refresh is excluded, matching project scope.
- State management remains in React built-in hooks only, no Redux/Zustand.

**Further Considerations**
1. Detail route identifier strategy: numeric id route segment is recommended for direct lookup simplicity.
2. Query update behavior: update URL immediately on input/filter change (recommended) versus submit button workflow.
3. Placeholder image provider consistency: use a single provider pattern for predictable rendering and easier maintenance.