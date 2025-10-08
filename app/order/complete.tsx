import { CompletedOrderSummary } from "@/components/picup/CompletedOrderSummary";
import { OrderCompleteActions } from "@/components/picup/OrderCompleteActions";
import { OrderCompleteHeader } from "@/components/picup/OrderCompleteHeader";
import { OrderStats } from "@/components/picup/OrderStats";
import { ReviewSection } from "@/components/picup/ReviewSection";
import { SuccessHero } from "@/components/picup/SuccessHero";
import { MOCK_COMPLETED_ORDER } from "@/constants/orderCompleteData";
import { styles } from "@/styles/orderComplete.styles";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderCompleteScreen() {
  const router = useRouter();

  const handleSkipReview = () => {
    router.push("/");
  };

  const stats = {
    waitTime: MOCK_COMPLETED_ORDER.waitTime,
    totalItems: MOCK_COMPLETED_ORDER.totalItems,
    totalAmount: MOCK_COMPLETED_ORDER.totalAmount,
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <OrderCompleteHeader
        orderNumber={MOCK_COMPLETED_ORDER.orderNumber}
        totalAmount={MOCK_COMPLETED_ORDER.totalAmount}
        earnedPoints={MOCK_COMPLETED_ORDER.earnedPoints}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SuccessHero earnedPoints={MOCK_COMPLETED_ORDER.earnedPoints} />

        <OrderStats stats={stats} />

        <View style={styles.orderSummary}>
          <Text style={styles.sectionTitle}>주문 내역</Text>
          <CompletedOrderSummary order={MOCK_COMPLETED_ORDER} />
        </View>

        <ReviewSection onSkip={handleSkipReview} />
      </ScrollView>

      <OrderCompleteActions items={MOCK_COMPLETED_ORDER.items} />
    </SafeAreaView>
  );
}
