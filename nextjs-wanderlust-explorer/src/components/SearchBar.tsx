interface SearchBarProps {
  value: string;
  onChange: (nextValue: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search-bar" htmlFor="experience-search">
      <span>Search experiences</span>
      <input
        id="experience-search"
        type="search"
        placeholder="Try: food, walk, cruise"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}