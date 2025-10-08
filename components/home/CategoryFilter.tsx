import { styles } from "@/styles/homeScreen.styles";
import { Category } from "@/types";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface CategoryFilterProps {
  categories: Category[];
  selected: string;
  onSelect: (key: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selected,
  onSelect,
}) => {
  return (
    <View style={styles.categoryFilter}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.key}
            style={[
              styles.filterTab,
              selected === category.key && styles.filterTabActive,
            ]}
            onPress={() => onSelect(category.key)}
          >
            <Text
              style={[
                styles.tabLabel,
                selected === category.key && styles.tabLabelActive,
              ]}
            >
              {category.label}
            </Text>
            <Text
              style={[
                styles.tabSubtitle,
                selected === category.key && styles.tabSubtitleActive,
              ]}
            >
              {category.subtitle}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
