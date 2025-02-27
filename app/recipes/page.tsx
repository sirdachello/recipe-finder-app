import Link from "next/link";
import RecipeCard from "../components/RecipeCard";
import { Recipe } from "../types/types";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

export default async function RecipesViewer({
  searchParams,
}: {
  searchParams: { query?: string; cuisine?: string; prepTime?: string };
}) {
  
  const query = searchParams.query || "";
  const cuisine = searchParams.cuisine || "";
  const prepTime = searchParams.prepTime || "";
  
  async function getRecipes() {

    const queryParams = new URLSearchParams();

    if (query) queryParams.append("query", query);
    if (cuisine) queryParams.append("cuisine", cuisine);
    if (prepTime) queryParams.append("maxReadyTime", prepTime);
    queryParams.append("apiKey", API_KEY || "");

 const url = `https://api.spoonacular.com/recipes/complexSearch?${queryParams.toString()}`;

    const response = await fetch(url, { next: { revalidate: 60 } });
    if (!response.ok) throw new Error("Failed to fetch recipes");

    const data = await response.json();
    return data.results as Recipe[];
  }

  const recipes = await getRecipes();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-14">
      {recipes?.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <p>No recipes found!</p>
          <Link href={"/"}>
            <button className="btn">Try again</button>
          </Link>
        </div>
      ) : (
        recipes?.map((recipe) => {
          return <RecipeCard key={recipe.id} recipeDetails={recipe} />;
        })
      )}
    </div>
  );
}
