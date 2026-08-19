import Link from "next/link";

export default function Home() {
  return (
    <main className="hero-wrap">
      <section className="container hero-content">
        <p className="eyebrow">Wanderlust Labs</p>
        <h1>Find your next unforgettable Philadelphia tour in minutes.</h1>
        <p>
          Browse curated Philly food walks, history routes, wellness escapes, and
          cultural experiences with shareable filters and favorites.
        </p>
        <div className="hero-actions">
          <Link href="/experiences" className="btn-primary">
            Explore Philly tours
          </Link>
          <Link href="/favorites" className="btn-secondary">
            View favorites
          </Link>
        </div>
      </section>
    </main>
  );
}
