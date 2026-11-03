export type Recipe = {
  id: string;
  title: string;
  description: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  imageUrl: string;
  tags: string[];
};

export const recipes: Recipe[] = [
  {
    id: "creamy-tuscan-garlic-chicken",
    title: "Creamy Tuscan Garlic Chicken",
    description: "Tender chicken cutlets bathed in a rich garlic, sun-dried tomato, and spinach cream sauce.",
    cuisine: "Italian",
    minutes: 30,
    difficulty: "Easy",
    imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    tags: ["Dinner", "High-Protein", "Keto-friendly"]
  },
  {
    id: "spicy-thai-basil-beef",
    title: "Spicy Thai Basil Beef (Pad Krapow)",
    description: "Savory minced beef wok-fried with fragrant holy basil, garlic, and fiery bird's eye chilies.",
    cuisine: "Thai",
    minutes: 20,
    difficulty: "Medium",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    tags: ["Quick & Easy", "Spicy", "Stir-Fry"]
  },
  {
    id: "classic-shakshuka-feta",
    title: "Classic Shakshuka with Feta",
    description: "Gently poached eggs in a spiced simmering tomato, bell pepper, and cumin sauce topped with crumbled feta.",
    cuisine: "Middle Eastern",
    minutes: 25,
    difficulty: "Easy",
    imageUrl: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80",
    tags: ["Breakfast", "Vegetarian", "One-Pan"]
  },
  {
    id: "matcha-chia-pudding-bowl",
    title: "Matcha Coconut Chia Pudding",
    description: "Overnight chia seeds infused with ceremonial grade matcha, rich coconut milk, and fresh berries.",
    cuisine: "Japanese Fusion",
    minutes: 10,
    difficulty: "Easy",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    tags: ["Breakfast", "Vegan", "Gluten-Free"]
  },
  {
    id: "smoked-salmon-avocado-tartine",
    title: "Smoked Salmon & Avocado Tartine",
    description: "Crispy artisan sourdough toast topped with smashed avocado, smoked Atlantic salmon, and capers.",
    cuisine: "French Contemporary",
    minutes: 15,
    difficulty: "Easy",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Brunch", "Omega-3", "Quick & Easy"]
  },
  {
    id: "authentic-mexican-street-tacos",
    title: "Charred Carne Asada Street Tacos",
    description: "Marinated flank steak grilled over high flame, served on warm corn tortillas with cilantro and lime.",
    cuisine: "Mexican",
    minutes: 35,
    difficulty: "Medium",
    imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    tags: ["Dinner", "Street Food", "Favorites"]
  }
];
