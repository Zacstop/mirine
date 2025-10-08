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

// 조리중 / 완료화면
export type OrderStatus =
  | "received"
  | "paid"
  | "cooking"
  | "ready"
  | "completed";

export interface OrderStep {
  id: string;
  title: string;
  icon: string;
  status: "completed" | "active" | "pending";
  time?: string;
}

export interface OrderTracking {
  orderNumber: string;
  status: OrderStatus;
  estimatedTime: number; // seconds
  steps: OrderStep[];
  items: OrderItem[];
  pickupLocation: {
    name: string;
    detail: string;
  };
}

export interface OrderItem {
  id: number;
  name: string;
  emoji: string;
  options?: string;
  quantity: number;
  price: number;
}

// 픽업완료 화면
export interface OrderComplete {
  orderNumber: string;
  date: string;
  waitTime: number; // minutes
  totalItems: number;
  totalAmount: number;
  earnedPoints: number;
  items: OrderItem[];
}

export interface OrderStats {
  waitTime: number;
  totalItems: number;
  totalAmount: number;
}

// 사용자 화면
export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  badge: string;
  points: number;
  stats: {
    totalOrders: number;
    totalReviews: number;
    favorites: number;
  };
}

export interface PaymentMethod {
  id: number;
  name: string;
  cardNumber: string;
  isDefault: boolean;
  icon: string;
}

export interface OrderHistory {
  id: string;
  orderNumber: string;
  date: string;
  status: "completed" | "processing" | "cancelled";
  items: string;
  location: string;
  totalAmount: number;
}

export interface Coupon {
  id: number;
  name: string;
  discount: number;
  expiryDays: number;
}
