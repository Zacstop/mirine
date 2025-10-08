import { OrderComplete } from "@/types";

export const MOCK_COMPLETED_ORDER: OrderComplete = {
  orderNumber: "#A247",
  date: "2024.01.15 14:23",
  waitTime: 4, // 4분
  totalItems: 4,
  totalAmount: 18300,
  earnedPoints: 500,
  items: [
    {
      id: 7,
      name: "치킨마요덮밥",
      emoji: "🍛",
      options: "치즈 추가",
      quantity: 2,
      price: 9000,
    },
    {
      id: 1,
      name: "김치찌개",
      emoji: "🍜",
      options: undefined,
      quantity: 1,
      price: 3800,
    },
    {
      id: 4,
      name: "치킨까스",
      emoji: "🍗",
      options: undefined,
      quantity: 1,
      price: 5500,
    },
  ],
};
