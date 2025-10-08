import { styles } from "@/styles/orderTracking.styles";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

interface OrderHeaderProps {
  orderNumber: string;
}

export const OrderHeader: React.FC<OrderHeaderProps> = ({ orderNumber }) => {
  const router = useRouter();

  const handleHelp = () => {
    Alert.alert(
      "💬 고객센터",
      "문의사항이 있으시면 도와드리겠습니다.\n\n📞 학생회관 2층: 02-1234-5678\n💬 채팅 상담: 9:00 - 18:00"
    );
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.orderNumber}>주문번호 {orderNumber}</Text>
      <TouchableOpacity style={styles.helpButton} onPress={handleHelp}>
        <Text style={styles.helpButtonText}>💬</Text>
      </TouchableOpacity>
    </View>
  );
};
