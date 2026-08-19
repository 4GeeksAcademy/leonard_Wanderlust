"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";

import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/data/experiences";

export default function ExperienceDetailPage() {
  const params = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();

  const experience = useMemo(() => {
    const id = Number(params.id);
    return experiences.find((item) => item.id === id);
  }, [params.id]);

  useEffect(() => {
    if (experience) {
      document.title = `${experience.title} | Wanderlust Explorer`;
    }
  }, [experience]);

  if (!experience) {
    return (
      <main className="container page-shell">
        <section className="empty-state">
          <h1>Experience not found</h1>
          <p>The selected experience does not exist in this local dataset.</p>
          <Link href="/experiences">Back to experiences</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="container detail-shell">
      <Image
        src={experience.imageUrl}
        alt={experience.title}
        width={1200}
        height={800}
        className="detail-image"
      />
      <section className="detail-content">
        <p className="detail-meta">{experience.category} · {experience.destination}</p>
        <h1>{experience.title}</h1>
        <p>{experience.description}</p>
        <div className="detail-stats">
          <span>Rating: {experience.rating.toFixed(1)} ★</span>
          <span>Price: ${experience.price}</span>
        </div>
        <button
          type="button"
          className={isFavorite(experience.id) ? "favorite-btn active" : "favorite-btn"}
          onClick={() => toggleFavorite(experience.id)}
        >
          {isFavorite(experience.id) ? "♥ Remove favorite" : "♡ Add to favorites"}
        </button>
        <Link href="/experiences">Back to explorer</Link>
      </section>
    </main>
  );
}