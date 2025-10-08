import { styles } from "@/styles/profile.styles";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

interface PointsCardProps {
  points: number;
}

export const PointsCard: React.FC<PointsCardProps> = ({ points }) => {
  const handlePointHistory = () => {
    Alert.alert(
      "🎁 포인트 적립 내역",
      "• 2024.01.15: +500P (주문)\n• 2024.01.14: +300P (리뷰)\n• 2024.01.13: +200P (출석)\n\n총 적립: 3,500P"
    );
  };

  const handlePointShop = () => {
    Alert.alert(
      "🛍️ 포인트샵",
      "포인트로 다양한 혜택을 받아보세요!\n\n• 1,000P 할인쿠폰\n• 무료 음료 쿠폰\n• 추가 토핑 무료"
    );
  };

  return (
    <View style={styles.pointsCard}>
      <View style={styles.pointsHeader}>
        <Text style={styles.pointsLabel}>보유 포인트</Text>
        <Text style={styles.pointsIcon}>🎁</Text>
      </View>
      <Text style={styles.pointsValue}>{points.toLocaleString()}P</Text>
      <View style={styles.pointsActions}>
        <TouchableOpacity
          style={styles.pointsButton}
          onPress={handlePointHistory}
        >
          <Text style={styles.pointsButtonText}>적립 내역</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pointsButton} onPress={handlePointShop}>
          <Text style={styles.pointsButtonText}>포인트샵</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
