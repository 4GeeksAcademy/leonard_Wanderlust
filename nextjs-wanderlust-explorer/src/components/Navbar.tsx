"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useFavorites } from "@/context/FavoritesContext";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export function Navbar() {
  const pathname = usePathname();
  const { favoriteIds } = useFavorites();

  return (
    <header className="main-header">
      <div className="container nav-shell">
        <Link href="/" className="brand">
          Wanderlust Explorer
        </Link>
        <nav aria-label="Main navigation">
          <ul>
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link href={item.href} className={isActive ? "active" : ""}>
                    {item.label}
                    {item.href === "/favorites" ? ` (${favoriteIds.length})` : ""}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}