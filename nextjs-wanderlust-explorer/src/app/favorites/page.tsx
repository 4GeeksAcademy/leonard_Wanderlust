"use client";

import Link from "next/link";

import { ExperienceCard } from "@/components/ExperienceCard";
import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();

  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id),
  );

  return (
    <main className="container page-shell">
      <section className="page-headline">
        <h1>Your Favorite Philly Tours</h1>
        <p>Saved Philadelphia tours are kept in app state for this session.</p>
      </section>

      {favoriteExperiences.length === 0 ? (
        <section className="empty-state">
          <h2>No favorites yet</h2>
          <p>Tap the heart icon on any experience to save it here.</p>
          <Link href="/experiences">Browse experiences</Link>
        </section>
      ) : (
        <section className="card-grid">
          {favoriteExperiences.map((experience) => (
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