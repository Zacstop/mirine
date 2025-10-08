import { styles } from "@/styles/cart.styles";
import { CartOption } from "@/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CartOptionsProps {
  options: CartOption[];
  onToggle: (optionId: string) => void;
}

export const CartOptions: React.FC<CartOptionsProps> = ({
  options,
  onToggle,
}) => {
  return (
    <View style={styles.optionsSection}>
      <Text style={styles.sectionTitle}>추가 옵션</Text>
      {options.map((option) => (
        <View key={option.id} style={styles.optionItem}>
          <View style={styles.optionLabel}>
            <Text style={styles.optionIcon}>{option.icon}</Text>
            <Text style={styles.optionText}>{option.label}</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.optionToggle,
              option.enabled && styles.optionToggleActive,
            ]}
            onPress={() => onToggle(option.id)}
          >
            <View
              style={[
                styles.optionToggleThumb,
                option.enabled && styles.optionToggleThumbActive,
              ]}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
