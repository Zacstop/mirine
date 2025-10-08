import { styles } from "@/styles/orderTracking.styles";
import { OrderItem } from "@/types";
import React from "react";
import { Text, View } from "react-native";

interface OrderDetailCardProps {
  items: OrderItem[];
}

export const OrderDetailCard: React.FC<OrderDetailCardProps> = ({ items }) => {
  return (
    <View style={styles.orderCard}>
      {items.map((item, index) => (
        <View
          key={item.id}
          style={[
            styles.orderItem,
            index === items.length - 1 && styles.orderItemLast,
          ]}
        >
          <View style={styles.itemImage}>
            <Text style={styles.itemEmoji}>{item.emoji}</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemOptions}>
              {item.options ? `${item.options} · ` : ""}
              {item.quantity}개
            </Text>
          </View>
          <Text style={styles.itemPrice}>{item.price.toLocaleString()}원</Text>
        </View>
      ))}
    </View>
  );
};
