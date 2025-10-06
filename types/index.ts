export interface MenuItem {
  id: number;
  name: string;
  emoji: string;
  category: string;
  description: string;
  price: number;
  calories: number;
  time: number;
  spice: string;
  rating: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Category {
  key: string;
  label: string;
  subtitle: string;
}
