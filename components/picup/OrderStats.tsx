import { styles } from "@/styles/orderComplete.styles";
import { OrderStats as OrderStatsType } from "@/types";
import React from "react";
import { Text, View } from "react-native";

interface OrderStatsProps {
  stats: OrderStatsType;
}

export const OrderStats: React.FC<OrderStatsProps> = ({ stats }) => {
  const statsData = [
    { icon: "⏱️", value: `${stats.waitTime}분`, label: "대기시간" },
    { icon: "🍽️", value: `${stats.totalItems}개`, label: "주문메뉴" },
    {
      icon: "💰",
      value: `${stats.totalAmount.toLocaleString()}원`,
      label: "결제금액",
    },
  ];

  return (
    <View style={styles.statsSection}>
      <View style={styles.statsGrid}>
        {statsData.map((stat, index) => (
          <View key={index} style={styles.statCard}>
            <Text style={styles.statIcon}>{stat.icon}</Text>
            <Text
              style={styles.statValue}
              numberOfLines={1}
              ellipsizeMode="clip"
            >
              {stat.value}
            </Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
