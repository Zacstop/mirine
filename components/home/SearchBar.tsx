import { styles } from "@/styles/homeScreenStyles";
import React from "react";
import { TextInput, View } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.searchSection}>
      <TextInput
        style={styles.searchBar}
        placeholder="메뉴를 검색해보세요..."
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
