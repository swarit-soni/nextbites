import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/NavBar";

export const metadata: Metadata = {
  title: "NextBites - Discover & Cook Delicious Recipes",
  description: "Browse delicious recipes in a responsive grid powered by Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-50 font-sans">
        <NavBar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-stone-200 py-6 text-center text-xs text-stone-500 dark:border-stone-800 dark:text-stone-500">
          © 2026 NextBites. Built with Next.js, TypeScript & Tailwind CSS.
        </footer>
      </body>
    </html>
  );
}
