import { styles } from "@/styles/menuDetail.styles";
import React from "react";
import { Text, View } from "react-native";

interface InfoCardData {
  icon: string;
  value: string;
  label: string;
}

interface MenuInfoCardsProps {
  prepTime: number;
  spiceLevel: string;
  servingSize: string;
}

export const MenuInfoCards: React.FC<MenuInfoCardsProps> = ({
  prepTime,
  spiceLevel,
  servingSize,
}) => {
  const cards: InfoCardData[] = [
    { icon: "🕐", value: `${prepTime}분`, label: "조리시간" },
    { icon: "🌶️", value: spiceLevel, label: "매운맛" },
    { icon: "👥", value: servingSize, label: "제공량" },
  ];

  return (
    <View style={styles.infoCards}>
      {cards.map((card, index) => (
        <View key={index} style={styles.infoCard}>
          <Text style={styles.infoIcon}>{card.icon}</Text>
          <Text style={styles.infoValue}>{card.value}</Text>
          <Text style={styles.infoLabel}>{card.label}</Text>
        </View>
      ))}
    </View>
  );
};
