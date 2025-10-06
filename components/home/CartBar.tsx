import { styles } from "@/styles/homeScreenStyles";
import { CartItem } from "@/types";
import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CartBarProps {
  cart: CartItem[];
  onPress: () => void;
}

export const CartBar: React.FC<CartBarProps> = ({ cart, onPress }) => {
  const cartTotal = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { totalItems, totalPrice };
  }, [cart]);

  return (
    <TouchableOpacity style={styles.cartBar} onPress={onPress}>
      <View style={styles.cartInfo}>
        <View style={styles.cartCount}>
          <Text style={styles.cartCountText}>{cartTotal.totalItems}</Text>
        </View>
        <Text style={styles.cartText}>장바구니 보기</Text>
      </View>
      <Text style={styles.cartTotal}>
        {cartTotal.totalPrice.toLocaleString()}원
      </Text>
    </TouchableOpacity>
  );
};
