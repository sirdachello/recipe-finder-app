import { RecipeDetails } from "@/app/types/types";
import Image from "next/image";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

async function fetchRecipeData(recipeID: string) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${API_KEY}`,
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("Failed to fetch recipe");
  return response.json();
}

export default async function RecipePage({
  params,
}: {
  params: { "recipe-id": string };
}) {
  const recipeId = params["recipe-id"];
  const recipeData: RecipeDetails = await fetchRecipeData(recipeId);

  return (
    <div className="p-16">
      <figure className="flex flex-col items-center justify-center gap-4">
        <Image
          className="h-auto"
          src={recipeData.image}
          alt={`${recipeData?.title} image`}
          width={400}
          height={300}
        />
        <figcaption className="font-bold text-xl">
          {recipeData.title}
        </figcaption>
      </figure>
      <div className="">
        <div className="">
          <h4 className="text-xl my-4">Ingredients:</h4>
          <ol className="list-disc pl-5 ">
            {recipeData.extendedIngredients.map((ingredient, index) => {
              return (
                <li className="mb-2 odd:bg-orange-100 p-2" key={index}>
                  <p>{ingredient.original}</p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="">
          <h4 className="text-xl my-4">How To:</h4>
          {recipeData.analyzedInstructions.map((instruction, index) => (
            <ol key={index} className="list-decimal pl-5">
              {instruction.steps.map((step) => (
                <li key={step.number} className="mb-2 odd:bg-orange-100 p-2">
                  {step.step}
                </li>
              ))}
            </ol>
          ))}
        </div>
      </div>
    </div>
  );
}
