import { styles } from "@/styles/homeScreenStyles";
import React from "react";
import { Text, View } from "react-native";

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>CampusEats</Text>
      <View style={styles.profileIcon}>
        <Text style={styles.profileEmoji}>👤</Text>
      </View>
    </View>
  );
};
