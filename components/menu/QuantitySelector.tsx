import { styles } from "@/styles/menuDetail.styles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <View style={styles.quantitySection}>
      <Text style={styles.quantityLabel}>수량</Text>
      <View style={styles.quantityControls}>
        <TouchableOpacity style={styles.quantityButton} onPress={onDecrease}>
          <Text style={styles.quantityButtonText}>−</Text>
        </TouchableOpacity>
        <Text style={styles.quantityValue}>{quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={onIncrease}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
