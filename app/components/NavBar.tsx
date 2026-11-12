import Link from "next/link";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 font-black text-white shadow-md shadow-amber-500/20">
            NB
          </span>
          <span className="text-xl font-bold tracking-tight text-stone-900 dark:text-white">
            Next<span className="text-amber-500">Bites</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-amber-600 transition-colors dark:text-amber-400"
          >
            Recipes
          </Link>
          <a
            href="#explore"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
          >
            Explore
          </a>
          <a
            href="#submit"
            className="rounded-lg bg-stone-900 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-stone-800 dark:bg-amber-500 dark:hover:bg-amber-600"
          >
            + Add Recipe
          </a>
        </nav>
      </div>
    </header>
  );
}
