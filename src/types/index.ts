export interface Product {
  id: string;
  slug: string;
  name: string;
  artist: string;
  artwork: string;
  year: string;
  medium: string;
  location: string;
  dimensions: string;
  price: number;
  category: Category;
  status: "available" | "coming-soon" | "limited";
  description: string;
  fitNotes: string;
  care: string[];
  image: string;
  images: string[];
  tags: string[];
}

export type Category =
  | "renaissance"
  | "sacred"
  | "philosophy"
  | "mythology"
  | "archive";

export interface CartItem {
  product: Product;
  size: Size;
  quantity: number;
}

export type Size = "P" | "M" | "G" | "GG" | "XG";

export type FilterCategory = "all" | Category;
