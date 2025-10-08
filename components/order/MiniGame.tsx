import { styles } from "@/styles/orderTracking.styles";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export const MiniGame: React.FC = () => {
  const handlePlayGame = () => {
    Alert.alert(
      "🎮 미니게임",
      "미니게임 기능이 곧 제공됩니다!\n게임을 즐기며 포인트를 모아보세요."
    );
  };

  return (
    <View style={styles.miniGameSection}>
      <View style={styles.gameCard}>
        <Text style={styles.gameTitle}>🎮 대기 시간이 지루하신가요?</Text>
        <Text style={styles.gameSubtitle}>
          미니게임을 즐기고 포인트를 모아보세요!
        </Text>
        <TouchableOpacity style={styles.gameButton} onPress={handlePlayGame}>
          <Text style={styles.gameButtonText}>게임 시작하기</Text>
        </TouchableOpacity>
        <View style={styles.rewardBadge}>
          <Text style={styles.rewardBadgeText}>🎁 최대 500P 적립 가능</Text>
        </View>
      </View>
    </View>
  );
};
