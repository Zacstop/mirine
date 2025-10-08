import { styles } from "@/styles/orderComplete.styles";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Share, Text, TouchableOpacity, View } from "react-native";

interface OrderCompleteHeaderProps {
  orderNumber: string;
  totalAmount: number;
  earnedPoints: number;
}

export const OrderCompleteHeader: React.FC<OrderCompleteHeaderProps> = ({
  orderNumber,
  totalAmount,
  earnedPoints,
}) => {
  const router = useRouter();

  const handleShare = async () => {
    try {
      await Share.share({
        message: `오늘 학식 맛있게 먹었어요! 🍽️\n\n주문번호: ${orderNumber}\n총 금액: ${totalAmount.toLocaleString()}원\n적립 포인트: ${earnedPoints}P`,
      });
    } catch (error) {
      Alert.alert(
        "📤 공유하기",
        `주문번호: ${orderNumber}\n총 금액: ${totalAmount.toLocaleString()}원\n적립 포인트: ${earnedPoints}P`
      );
    }
  };

  const handleClose = () => {
    Alert.alert("메인 화면으로 돌아가시겠습니까?", "", [
      { text: "취소", style: "cancel" },
      { text: "확인", onPress: () => router.push("/") },
    ]);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>주문 완료</Text>
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareButtonText}>📤</Text>
      </TouchableOpacity>
    </View>
  );
};
