import { styles } from "@/styles/menuDetail.styles";
import { MenuOption } from "@/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface MenuOptionsProps {
  options: MenuOption[];
  selectedOptions: number[];
  onToggle: (optionId: number) => void;
}

export const MenuOptions: React.FC<MenuOptionsProps> = ({
  options,
  selectedOptions,
  onToggle,
}) => {
  return (
    <View>
      {options.map((option) => {
        const isSelected = selectedOptions.includes(option.id);
        return (
          <TouchableOpacity
            key={option.id}
            style={[styles.optionItem, isSelected && styles.optionItemSelected]}
            onPress={() => onToggle(option.id)}
          >
            <View style={styles.optionInfo}>
              <Text style={styles.optionName}>{option.name}</Text>
              <Text style={styles.optionDesc}>{option.description}</Text>
            </View>
            <Text style={styles.optionPrice}>
              +{option.price.toLocaleString()}원
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
