import React from "react";
import type { Recipe } from "../data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900">
      {/* Recipe Image with Cuisine Badge */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
          {recipe.cuisine}
        </span>
        <span
          className={`absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-xs font-medium shadow-sm backdrop-blur-md ${
            recipe.difficulty === "Easy"
              ? "bg-emerald-500/90 text-white"
              : recipe.difficulty === "Medium"
              ? "bg-amber-500/90 text-white"
              : "bg-rose-500/90 text-white"
          }`}
        >
          {recipe.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{recipe.minutes} mins</span>
        </div>

        <h3 className="line-clamp-1 text-lg font-bold text-stone-900 group-hover:text-amber-600 dark:text-stone-100 dark:group-hover:text-amber-400">
          {recipe.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-stone-600 dark:text-stone-400">
          {recipe.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <button
            type="button"
            className="w-full rounded-xl bg-amber-500 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 active:bg-amber-700"
          >
            View Recipe
          </button>
        </div>
      </div>
    </article>
  );
}
