import { styles } from "@/styles/profile.styles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface MenuItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  badge?: number;
  featured: boolean;
}

interface ProfileMenuListProps {
  items: MenuItem[];
  onItemPress: (id: string) => void;
}

export const ProfileMenuList: React.FC<ProfileMenuListProps> = ({
  items,
  onItemPress,
}) => {
  return (
    <View style={styles.menuSection}>
      <Text style={styles.sectionTitle}>메뉴</Text>
      <View style={styles.menuList}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.menuItem,
              index === items.length - 1 && styles.menuItemLast,
            ]}
            onPress={() => onItemPress(item.id)}
          >
            <View
              style={[
                styles.menuIcon,
                item.featured && styles.menuIconFeatured,
              ]}
            >
              <Text style={styles.menuIconText}>{item.icon}</Text>
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
            </View>
            {item.badge && <Text style={styles.menuBadge}>{item.badge}</Text>}
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
