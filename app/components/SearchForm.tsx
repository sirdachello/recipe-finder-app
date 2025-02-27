"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Query } from "../types/types";

interface SearchFormProps {
  cuisines: string[];
}

export default function SearchForm({ cuisines }: SearchFormProps) {
  const [queries, setQueries] = useState<Query>({
    textQuery: null,
    cuisine: null,
    prepTime: null,
  });

  const [queryParams, setQueryParams] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const updatedQueryParams = new URLSearchParams();

    if (queries.textQuery) updatedQueryParams.set("query", queries.textQuery);
    if (queries.cuisine) updatedQueryParams.set("cuisine", queries.cuisine);
    if (queries.prepTime) updatedQueryParams.set("prepTime", queries.prepTime);

    setQueryParams(String(updatedQueryParams));
  }, [queries]);

  const isFormValid = !Boolean(
    queries?.textQuery || queries?.cuisine || queries?.prepTime
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (queryParams) {
      router.push(`/recipes?${queryParams}`);
    }
  }

  return (
    <form
      className="flex flex-wrap justify-center items-center gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className="input input-bordered"
        type="text"
        placeholder="e.g. pasta / salad / soup"
        value={queries?.textQuery || ""}
        onChange={(e) => setQueries({ ...queries, textQuery: e.target.value })}
      />
      <select
        className="select select-bordered w-[229px]"
        value={queries?.cuisine || ""}
        onChange={(e) => setQueries({ ...queries, cuisine: e.target.value })}
      >
        <option value="" disabled>
          Select cuisine
        </option>
        {cuisines.map((type, index) => {
          return (
            <option key={index} value={type}>
              {type}
            </option>
          );
        })}
      </select>
      <input
        className="input input-bordered"
        placeholder="Preparation time (minutes)"
        type="number"
        min={1}
        value={queries?.prepTime || ""}
        onChange={(e) => setQueries({ ...queries, prepTime: e.target.value })}
      />
      <button className="btn" type="submit" disabled={isFormValid}>
        Find Recipe
      </button>
    </form>
  );
}