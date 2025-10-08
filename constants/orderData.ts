import { OrderStep } from "@/types";

export const ORDER_STEPS: OrderStep[] = [
  {
    id: "received",
    title: "주문 접수",
    icon: "✓",
    status: "completed",
    time: "14:23",
  },
  {
    id: "paid",
    title: "결제 완료",
    icon: "✓",
    status: "completed",
    time: "14:23",
  },
  {
    id: "cooking",
    title: "조리중",
    icon: "👨‍🍳",
    status: "active",
    time: "진행중",
  },
  {
    id: "ready",
    title: "준비 완료",
    icon: "🔔",
    status: "pending",
    time: "대기중",
  },
  {
    id: "completed",
    title: "픽업 완료",
    icon: "✨",
    status: "pending",
    time: "대기중",
  },
];

export const MOCK_ORDER = {
  orderNumber: "#A247",
  status: "cooking" as const,
  estimatedTime: 300, // 5분
  items: [
    {
      id: 7,
      name: "치킨마요덮밥",
      emoji: "🍛",
      options: "치즈 추가",
      quantity: 1,
      price: 5000,
    },
    {
      id: 99,
      name: "콜라",
      emoji: "🥤",
      options: undefined,
      quantity: 1,
      price: 1500,
    },
  ],
  pickupLocation: {
    name: "제1학생회관 2층",
    detail: "푸드코트 3번 창구에서 픽업",
  },
};
