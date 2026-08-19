"use client";

import Link from "next/link";
import Image from "next/image";

import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <div className="image-wrap">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          width={900}
          height={600}
        />
        <button
          type="button"
          className={isFavorite ? "favorite-btn active" : "favorite-btn"}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={() => onToggleFavorite(experience.id)}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="card-content">
        <div className="card-meta">
          <span>{experience.category}</span>
          <span>{experience.rating.toFixed(1)} ★</span>
        </div>
        <h3>{experience.title}</h3>
        <p>{experience.description}</p>
        <div className="card-footer">
          <strong>${experience.price}</strong>
          <Link href={`/experiences/${experience.id}`}>View details</Link>
        </div>
      </div>
    </article>
  );
}