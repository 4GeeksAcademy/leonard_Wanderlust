interface FilterBarProps {
  category: string;
  destination: string;
  categories: string[];
  destinations: string[];
  onCategoryChange: (nextValue: string) => void;
  onDestinationChange: (nextValue: string) => void;
}

export function FilterBar({
  category,
  destination,
  categories,
  destinations,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <section className="filter-bar" aria-label="Experience filters">
      <label htmlFor="category-filter">
        Category
        <select
          id="category-filter"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="">All categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="destination-filter">
        Destination
        <select
          id="destination-filter"
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
        >
          <option value="">All destinations</option>
          {destinations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}