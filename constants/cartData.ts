import { CartOption, PickupInfo } from "@/types";

export const DEFAULT_OPTIONS: CartOption[] = [
  //   {
  //     id: "utensils",
  //     label: "일회용 수저/포크 포함",
  //     icon: "🍴",
  //     enabled: true,
  //   },
  {
    id: "notification",
    label: "준비 완료 알림 받기",
    icon: "🔔",
    enabled: true,
  },
];

export const PICKUP_INFO: PickupInfo = {
  location: "픽업 장소",
  locationDetail: "연지스퀘어 1층 S푸드 픽업대",
};
