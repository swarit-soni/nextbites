import { recipes } from "./data/recipes";
import { RecipeCard } from "./components/RecipeCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <section className="mb-10 text-center sm:text-left">
        <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:bg-amber-950 dark:text-amber-300">
          Fresh & Tasty
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-5xl dark:text-white">
          Explore Handcrafted Recipes
        </h1>
        <p className="mt-3 max-w-2xl text-base text-stone-600 sm:text-lg dark:text-stone-400">
          Discover easy weeknight dinners, quick breakfast bowls, and savory crowd-pleasers. Cook with confidence!
        </p>
      </section>

      {/* Responsive Recipe Grid */}
      <section>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
}
