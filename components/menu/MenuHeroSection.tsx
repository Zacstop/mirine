import { styles } from "@/styles/menuDetail.styles";
import React from "react";
import { Text, View } from "react-native";

interface MenuHeroSectionProps {
  emoji: string;
  badges: string[];
}

export const MenuHeroSection: React.FC<MenuHeroSectionProps> = ({
  emoji,
  badges,
}) => {
  return (
    <View style={styles.heroSection}>
      <View style={styles.badgeContainer}>
        {badges.map((badge, index) => (
          <Text key={index} style={styles.badge}>
            {badge}
          </Text>
        ))}
      </View>
      <Text style={styles.heroEmoji}>{emoji}</Text>
    </View>
  );
};
