import { styles } from "@/styles/orderTracking.styles";
import React from "react";
import { Text, View } from "react-native";

interface PickupLocationCardProps {
  name: string;
  detail: string;
}

export const PickupLocationCard: React.FC<PickupLocationCardProps> = ({
  name,
  detail,
}) => {
  return (
    <View style={styles.locationCard}>
      <View style={styles.locationIcon}>
        <Text style={styles.locationIconText}>📍</Text>
      </View>
      <View style={styles.locationInfo}>
        <Text style={styles.locationTitle}>{name}</Text>
        <Text style={styles.locationAddress}>{detail}</Text>
      </View>
    </View>
  );
};
