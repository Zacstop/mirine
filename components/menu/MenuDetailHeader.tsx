import { styles } from "@/styles/menuDetail.styles";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface MenuDetailHeaderProps {
  onShare: () => void;
  onLike: () => void;
  isLiked: boolean;
}

export const MenuDetailHeader: React.FC<MenuDetailHeaderProps> = ({
  onShare,
  onLike,
  isLiked,
}) => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <View style={styles.headerActions}>
        <TouchableOpacity style={styles.iconButton} onPress={onShare}>
          <Text style={styles.iconButtonText}>🔗</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onLike}>
          <Text style={styles.iconButtonText}>{isLiked ? "❤️" : "🤍"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => router.push("/cart")}
        >
          <Text style={styles.cartButtonText}>🛒</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
