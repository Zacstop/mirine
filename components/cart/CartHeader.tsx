import { styles } from "@/styles/cart.styles";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CartHeaderProps {
  onClear: () => void;
  hasItems: boolean;
}

export const CartHeader: React.FC<CartHeaderProps> = ({
  onClear,
  hasItems,
}) => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>장바구니</Text>
      <TouchableOpacity onPress={onClear} disabled={!hasItems}>
        <Text style={[styles.clearButton, !hasItems && { opacity: 0.3 }]}>
          전체삭제
        </Text>
      </TouchableOpacity>
    </View>
  );
};
