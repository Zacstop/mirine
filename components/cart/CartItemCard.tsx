import { styles } from "@/styles/cart.styles";
import { CartItem } from "@/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CartItemCardProps {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const itemTotal = item.price * item.quantity;

  return (
    <View style={styles.cartItem}>
      <View style={styles.itemHeader}>
        <View style={styles.itemImage}>
          <Text style={styles.itemEmoji}>{item.emoji}</Text>
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemPrice}>{item.price.toLocaleString()}원</Text>
        </View>
        <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
          <Text style={styles.removeButtonText}>×</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemActions}>
        <View style={styles.quantityControls}>
          <TouchableOpacity style={styles.quantityButton} onPress={onDecrease}>
            <Text style={styles.quantityButtonText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>{item.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={onIncrease}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.itemTotal}>{itemTotal.toLocaleString()}원</Text>
      </View>
    </View>
  );
};
