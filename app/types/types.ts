export type Recipe = {
    id: number;
    title: string;
    image: string;
};
export type Query = {
    textQuery: string | null;
    cuisine: string | null;
    prepTime: string | null;
};

export type InstructionStep = {
  step: string;
  number: string;
};

export type Instruction = {
  steps: InstructionStep[];
};

export type Ingredients = {
  original: string;
};
export type RecipeDetails = {
  image: string;
  title: string;
  readyInMinutes: string;
  extendedIngredients: Ingredients[];
  analyzedInstructions: Instruction[];
};
