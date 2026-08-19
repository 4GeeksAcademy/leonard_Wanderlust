"use client";

import { Suspense, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ExperienceCard } from "@/components/ExperienceCard";
import { FilterBar } from "@/components/FilterBar";
import { SearchBar } from "@/components/SearchBar";
import { useFavorites } from "@/context/FavoritesContext";
import { categories, destinationsList, experiences } from "@/data/experiences";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";

const FEATURED_EXPERIENCE_IDS = [1, 2, 3, 4];

function ExperiencesContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  const { isFavorite, toggleFavorite } = useFavorites();

  const updateParam = (
    key: "search" | "category" | "destination",
    value: string,
  ) => {
    const nextParams = new URLSearchParams(searchParams.toString());
    const nextValue = value.trim();

    if (nextValue.length === 0) {
      nextParams.delete(key);
    } else {
      nextParams.set(key, nextValue);
    }

    const query = nextParams.toString();
    const nextUrl = query ? `${pathname}?${query}` : pathname;
    router.replace(nextUrl);
  };

  const onSearchChange = (nextValue: string) => {
    updateParam("search", nextValue);
  };

  const onCategoryChange = (nextValue: string) => {
    updateParam("category", nextValue);
  };

  const onDestinationChange = (nextValue: string) => {
    updateParam("destination", nextValue);
  };

  const filteredExperiences = useExperienceFilters(experiences, {
    search,
    category,
    destination,
  });

  const orderedExperiences = useMemo(() => {
    const featuredOrder = new Map(
      FEATURED_EXPERIENCE_IDS.map((id, index) => [id, index]),
    );

    return [...filteredExperiences].sort((left, right) => {
      const leftIndex = featuredOrder.get(left.id);
      const rightIndex = featuredOrder.get(right.id);

      if (leftIndex !== undefined && rightIndex !== undefined) {
        return leftIndex - rightIndex;
      }

      if (leftIndex !== undefined) {
        return -1;
      }

      if (rightIndex !== undefined) {
        return 1;
      }

      return left.id - right.id;
    });
  }, [filteredExperiences]);

  const resultsLabel = useMemo(() => {
    return `${filteredExperiences.length} of ${experiences.length} experiences`;
  }, [filteredExperiences.length]);

  return (
    <main className="container page-shell">
      <section className="page-headline">
        <h1>Explore Curated Philadelphia Tours</h1>
        <p>Use search and filters to build a shareable Philly discovery link.</p>
      </section>

      <SearchBar value={search} onChange={onSearchChange} />
      <FilterBar
        category={category}
        destination={destination}
        categories={categories}
        destinations={destinationsList}
        onCategoryChange={onCategoryChange}
        onDestinationChange={onDestinationChange}
      />

      <p className="results-count">{resultsLabel}</p>

      {orderedExperiences.length === 0 ? (
        <section className="empty-state" aria-live="polite">
          <h2>No results found</h2>
          <p>Try clearing a filter or searching another Philadelphia keyword.</p>
        </section>
      ) : (
        <section className="card-grid" aria-live="polite">
          {orderedExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<main className="container page-shell">Loading experiences...</main>}>
      <ExperiencesContent />
    </Suspense>
  );
}