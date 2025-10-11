import { OrderHistory, PaymentMethod, UserProfile } from "@/types";

export const MOCK_USER_PROFILE: UserProfile = {
  name: "김학생",
  email: "student@university.ac.kr",
  avatar: "👤",
  badge: "🎓 재학생",
  points: 3500,
  stats: {
    totalOrders: 47,
    totalReviews: 23,
    favorites: 12,
  },
};

export const MOCK_PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 1,
    name: "신한카드",
    cardNumber: "**** **** **** 1234",
    isDefault: true,
    icon: "💳",
  },
  {
    id: 2,
    name: "국민카드",
    cardNumber: "**** **** **** 5678",
    isDefault: false,
    icon: "💳",
  },
];

export const MOCK_ORDER_HISTORY: OrderHistory[] = [
  {
    id: "1",
    orderNumber: "#A247",
    date: "2024.01.15 14:23",
    status: "completed",
    items: "치킨마요덮밥 외 2개",
    location: "학생회관 1층 3번 창구",
    totalAmount: 18300,
  },
  {
    id: "2",
    orderNumber: "#A231",
    date: "2024.01.14 12:15",
    status: "completed",
    items: "김치찌개 외 1개",
    location: "학생회관 1층 3번 창구",
    totalAmount: 7300,
  },
];

export const MENU_ITEMS = [
  {
    id: "payment",
    icon: "💳",
    title: "결제 수단 관리",
    subtitle: "카드 2개 등록",
    featured: true,
  },
  // {
  //   id: "payment-history",
  //   icon: "📊",
  //   title: "결제 내역",
  //   subtitle: "이번 달 47건",
  //   featured: true,
  // },
  {
    id: "coupons",
    icon: "🎫",
    title: "쿠폰함",
    subtitle: "사용 가능 3개",
    badge: 3,
    featured: false,
  },
  {
    id: "notifications",
    icon: "🔔",
    title: "알림 설정",
    subtitle: "주문 상태 알림 켜짐",
    featured: false,
  },
  {
    id: "help",
    icon: "💬",
    title: "고객센터",
    subtitle: "문의 및 FAQ",
    featured: false,
  },
];
