export type Category = 'Anime' | 'Games' | 'Pop Culture';

export type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  stockStatus: StockStatus;
  stockCount: number;
  scale: string;
  material: string;
  description: string;
  features: string[];
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  items: CartItem[];
  totalPrice: number;
  orderNumber: string;
  date: string;
}

export type SortOption = 'default' | 'priceAsc' | 'priceDesc' | 'rating';
