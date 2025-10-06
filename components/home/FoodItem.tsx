import { styles } from "@/styles/homeScreenStyles";
import { MenuItem } from "@/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface FoodItemProps {
  item: MenuItem;
  isAdded: boolean;
  onAdd: (item: MenuItem) => void;
}

export const FoodItem: React.FC<FoodItemProps> = ({ item, isAdded, onAdd }) => {
  return (
    <View style={styles.foodItem}>
      <View style={styles.foodImage}>
        <Text style={styles.foodEmoji}>{item.emoji}</Text>
      </View>
      <View style={styles.foodContent}>
        <View style={styles.foodHeader}>
          <View style={styles.foodInfo}>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodDescription}>{item.description}</Text>
          </View>
          <Text style={styles.foodPrice}>{item.price.toLocaleString()}원</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoItem}>📊 {item.calories}kcal</Text>
          <Text style={styles.infoItem}>🕐 {item.time}분</Text>
          <Text style={styles.infoItem}>🌶️ {item.spice}</Text>
        </View>
        <View style={styles.foodActions}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>⭐ {item.rating}</Text>
          </View>
          <TouchableOpacity
            style={[styles.addButton, isAdded && styles.addButtonActive]}
            onPress={() => onAdd(item)}
          >
            <Text
              style={[
                styles.addButtonText,
                isAdded && styles.addButtonTextActive,
              ]}
            >
              {isAdded ? "✓" : "+"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
