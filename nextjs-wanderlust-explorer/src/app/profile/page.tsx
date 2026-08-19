"use client";

import { useFavorites } from "@/context/FavoritesContext";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <main className="container page-shell">
      <section className="profile-card">
        <p className="eyebrow">Philadelphia traveler profile</p>
        <h1>Lea Moreau</h1>
        <p>
          Product-minded traveler collecting food, culture, and nature experiences
          across Philadelphia neighborhoods.
        </p>

        <dl>
          <div>
            <dt>Home base</dt>
            <dd>Philadelphia, USA</dd>
          </div>
          <div>
            <dt>Favorite categories</dt>
            <dd>Food, Culture, Nature</dd>
          </div>
          <div>
            <dt>Saved experiences</dt>
            <dd>{favoriteIds.length}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}