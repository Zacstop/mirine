import { styles } from "@/styles/menuDetail.styles";
import React from "react";
import { Text, View } from "react-native";

interface NutritionGridProps {
  nutrition: {
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
    sodium: number;
    sugar: number;
  };
}

export const NutritionGrid: React.FC<NutritionGridProps> = ({ nutrition }) => {
  const nutritionItems = [
    { label: "열량", value: `${nutrition.calories} kcal` },
    { label: "탄수화물", value: `${nutrition.carbs}g` },
    { label: "단백질", value: `${nutrition.protein}g` },
    { label: "지방", value: `${nutrition.fat}g` },
    { label: "나트륨", value: `${nutrition.sodium}mg` },
    { label: "당류", value: `${nutrition.sugar}g` },
  ];

  return (
    <View style={styles.nutritionGrid}>
      {nutritionItems.map((item, index) => (
        <View key={index} style={styles.nutritionItem}>
          <Text style={styles.nutritionLabel}>{item.label}</Text>
          <Text style={styles.nutritionValue}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};
