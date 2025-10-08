// 메인
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

// 메뉴 상세
export interface MenuOption {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface Review {
  id: number;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  text: string;
}

export interface MenuDetail extends MenuItem {
  fullDescription: string;
  reviewCount: number;
  prepTime: number;
  spiceLevel: string;
  servingSize: string;
  nutrition: {
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
    sodium: number;
    sugar: number;
  };
  options: MenuOption[];
  reviews: Review[];
  badges: string[];
  isPopular: boolean;
  isAIRecommended: boolean;
}

// 장바구니
export interface CartOption {
  id: string;
  label: string;
  icon: string;
  enabled: boolean;
}

export interface OrderSummary {
  subtotal: number;
  discount: number;
  finalTotal: number;
  totalItems: number;
}

export interface PickupInfo {
  location: string;
  locationDetail: string;
}
