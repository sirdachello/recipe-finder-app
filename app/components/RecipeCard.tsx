import Image from "next/image";
import Link from "next/link";

import { Recipe } from "../types/types";

type RecipeCardProps = {
    recipeDetails: Recipe;
}

export default function RecipeCard( { recipeDetails }: RecipeCardProps ) {

    return (
    <div className="bg-orange-100 rounded-xl overflow-hidden w-80 h-[412px] shadow-xl relative">
              <figure>
                <Image
                className="h-auto transition-all duration-200 hover:scale-110"
                  src={recipeDetails.image}
                  alt={`${recipeDetails.title}`}
                  width={400}
                  height={350}
                />
              </figure>
              <div className="flex flex-col pt-8">
                <h2 className="text-center font-bold text-lg text-balance px-3">{recipeDetails.title}</h2>
                <div className="absolute bottom-0">
                  <Link href={`/recipes/${recipeDetails.id}`}>
                    <button className="font-bold p-4 w-80 bg-orange-300 hover:bg-orange-400 transition-all duration-200">
                      View Full Recipe
                    </button>
                  </Link>
                </div>
              </div>
            </div>
    )
}