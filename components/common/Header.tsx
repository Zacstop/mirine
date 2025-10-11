import { styles } from "@/styles/homeScreen.styles";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>UnionEats</Text>

      <View style={styles.headerActions}>
        <TouchableOpacity
          style={styles.profileIcon}
          onPress={() => router.push("/(tabs)/profile")}
        >
          <Text style={styles.profileEmoji}>👤</Text>
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
