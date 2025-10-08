import { styles } from "@/styles/cart.styles";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const EmptyCart: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>🛒</Text>
      <Text style={styles.emptyTitle}>장바구니가 비어있어요</Text>
      <Text style={styles.emptyDescription}>맛있는 학식을 담아보세요!</Text>
      <TouchableOpacity
        style={styles.emptyButton}
        onPress={() => router.back()}
      >
        <Text style={styles.emptyButtonText}>메뉴 둘러보기</Text>
      </TouchableOpacity>
    </View>
  );
};
