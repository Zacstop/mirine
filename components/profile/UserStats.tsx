import { styles } from "@/styles/profile.styles";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

interface UserStatsProps {
  stats: {
    totalOrders: number;
    totalReviews: number;
    favorites: number;
  };
}

export const UserStats: React.FC<UserStatsProps> = ({ stats }) => {
  const handleOrderHistory = () => {
    Alert.alert(
      "📊 전체 주문 내역",
      `총 ${stats.totalOrders}건의 주문 내역이 있습니다.\n\n가장 많이 주문한 메뉴:\n1. 치킨마요덮밥 (12회)\n2. 김치찌개 (8회)\n3. 불고기덮밥 (7회)`
    );
  };

  const handleReviews = () => {
    Alert.alert(
      "⭐ 작성한 리뷰",
      `총 ${stats.totalReviews}개의 리뷰를 작성하셨습니다.\n평균 평점: 4.6점\n\n최근 리뷰:\n• 치킨마요덮밥 ⭐5.0\n• 김치찌개 ⭐4.5`
    );
  };

  const handleFavorites = () => {
    Alert.alert(
      "❤️ 찜한 메뉴",
      `• 치킨마요덮밥\n• 불고기덮밥\n• 김치찌개\n• 치킨까스\n... 외 ${
        stats.favorites - 4
      }개`
    );
  };

  const statsData = [
    {
      icon: "🍽️",
      value: stats.totalOrders,
      label: "총 주문",
      onPress: handleOrderHistory,
    },
    {
      icon: "⭐",
      value: stats.totalReviews,
      label: "작성 리뷰",
      onPress: handleReviews,
    },
    {
      icon: "❤️",
      value: stats.favorites,
      label: "찜한 메뉴",
      onPress: handleFavorites,
    },
  ];

  return (
    <View style={styles.statsSection}>
      <View style={styles.statsGrid}>
        {statsData.map((stat, index) => (
          <TouchableOpacity
            key={index}
            style={styles.statCard}
            onPress={stat.onPress}
          >
            <Text style={styles.statIcon}>{stat.icon}</Text>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
