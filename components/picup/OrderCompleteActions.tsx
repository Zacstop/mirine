import { styles } from "@/styles/orderComplete.styles";
import { OrderItem } from "@/types";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

interface OrderCompleteActionsProps {
  items: OrderItem[];
}

export const OrderCompleteActions: React.FC<OrderCompleteActionsProps> = ({
  items,
}) => {
  const router = useRouter();

  const handleOrderAgain = () => {
    const itemsSummary = items
      .map((item) => `${item.emoji} ${item.name} x${item.quantity}`)
      .join("\n");

    Alert.alert(
      "재주문",
      `같은 메뉴를 다시 주문하시겠습니까?\n\n${itemsSummary}`,
      [
        { text: "취소", style: "cancel" },
        {
          text: "주문하기",
          onPress: () => {
            Alert.alert("장바구니에 담았습니다!", "주문 페이지로 이동합니다.");
            router.push("/cart");
          },
        },
      ]
    );
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <View style={styles.bottomActions}>
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.actionButton, styles.buttonPrimary]}
          onPress={handleOrderAgain}
        >
          <Text>🍽️</Text>
          <Text style={styles.buttonPrimaryText}>재주문</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.buttonSecondary]}
          onPress={handleGoHome}
        >
          <Text>🏠</Text>
          <Text style={styles.buttonSecondaryText}>홈으로</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
