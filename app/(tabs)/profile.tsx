import { PaymentMethodsModal } from "@/components/profile/PaymentMethodsModal";
import { PointsCard } from "@/components/profile/PointsCard";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileMenuList } from "@/components/profile/ProfileMenuList";
import { RecentOrders } from "@/components/profile/RecentOrders";
import { UserStats } from "@/components/profile/UserStats";
import {
  MENU_ITEMS,
  MOCK_ORDER_HISTORY,
  MOCK_PAYMENT_METHODS,
  MOCK_USER_PROFILE,
} from "@/constants/profileData";
import { styles } from "@/styles/profile.styles";
import React, { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);

  const handleMenuItemPress = (id: string) => {
    switch (id) {
      case "payment":
        setPaymentModalVisible(true);
        break;
      case "payment-history":
        Alert.alert(
          "📊 결제 내역",
          "총 47건의 결제 내역이 있습니다.\n\n이번 달 총 결제금액: 326,500원"
        );
        break;
      case "coupons":
        Alert.alert(
          "🎫 쿠폰함",
          "사용 가능한 쿠폰:\n\n• 1,000원 할인쿠폰 (D-7)\n• 무료 음료 쿠폰 (D-14)\n• 10% 할인쿠폰 (D-30)"
        );
        break;
      case "notifications":
        Alert.alert(
          "🔔 알림 설정",
          "• 주문 상태 알림: ON\n• 프로모션 알림: ON\n• 포인트 적립 알림: ON\n• 푸시 알림: ON"
        );
        break;
      case "help":
        Alert.alert(
          "💬 고객센터",
          "문의사항이 있으시면 도와드리겠습니다.\n\n📞 학생회관: 02-1234-5678\n💬 채팅 상담: 평일 9:00-18:00\n📧 이메일: support@campuseats.com"
        );
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProfileHeader profile={MOCK_USER_PROFILE} />
        <PointsCard points={MOCK_USER_PROFILE.points} />
        <UserStats stats={MOCK_USER_PROFILE.stats} />
        <ProfileMenuList items={MENU_ITEMS} onItemPress={handleMenuItemPress} />
        <RecentOrders orders={MOCK_ORDER_HISTORY} />
      </ScrollView>

      <PaymentMethodsModal
        visible={paymentModalVisible}
        methods={MOCK_PAYMENT_METHODS}
        onClose={() => setPaymentModalVisible(false)}
      />
    </SafeAreaView>
  );
}
