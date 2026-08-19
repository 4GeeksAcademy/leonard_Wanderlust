import { useMemo } from "react";

import type { Experience } from "@/types/experience";

interface FilterState {
  search: string;
  category: string;
  destination: string;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function useExperienceFilters(
  source: Experience[],
  filters: FilterState,
): Experience[] {
  return useMemo(() => {
    const term = filters.search.trim();
    const hasSearch = term.length > 0;
    const safeRegex = hasSearch ? new RegExp(escapeRegExp(term), "i") : null;

    return source.filter((experience) => {
      const titleMatch = safeRegex ? safeRegex.test(experience.title) : true;
      const categoryMatch =
        filters.category.length > 0
          ? experience.category === filters.category
          : true;
      const destinationMatch =
        filters.destination.length > 0
          ? experience.destination === filters.destination
          : true;

      return titleMatch && categoryMatch && destinationMatch;
    });
  }, [source, filters.search, filters.category, filters.destination]);
}