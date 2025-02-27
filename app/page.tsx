import SearchForm from "./components/SearchForm";

const cuisines = [
  "African", "French", "Italian", "Thai", "Asian", 
  "American", "British", "Greek", "Korean", "Jewish", "Japanese"
];

export default function Home() {
  return (
    <div className="p-16">
      <SearchForm cuisines={cuisines} />
    </div>
  );
}