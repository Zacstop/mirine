import { styles } from "@/styles/orderComplete.styles";
import { OrderComplete } from "@/types";
import React from "react";
import { Text, View } from "react-native";

interface CompletedOrderSummaryProps {
  order: OrderComplete;
}

export const CompletedOrderSummary: React.FC<CompletedOrderSummaryProps> = ({
  order,
}) => {
  return (
    <View style={styles.summaryCard}>
      <View style={styles.summaryHeader}>
        <Text style={styles.orderNumber}>주문번호 {order.orderNumber}</Text>
        <Text style={styles.orderDate}>{order.date}</Text>
      </View>

      {order.items.map((item, index) => (
        <View
          key={item.id}
          style={[
            styles.orderItem,
            index === order.items.length - 1 && styles.orderItemLast,
          ]}
        >
          <View style={styles.itemImage}>
            <Text style={styles.itemEmoji}>{item.emoji}</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>
              {item.options ? `${item.options} · ` : ""}
              {item.quantity}개
            </Text>
          </View>
          <Text style={styles.itemPrice}>{item.price.toLocaleString()}원</Text>
        </View>
      ))}

      <View style={styles.totalSection}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>주문 금액</Text>
          <Text style={styles.totalValue}>
            {order.totalAmount.toLocaleString()}원
          </Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>할인</Text>
          <Text style={[styles.totalValue, styles.totalDiscount]}>-0원</Text>
        </View>
        <View style={[styles.totalRow, styles.totalRowLast]}>
          <Text style={styles.totalLabel}>결제 금액</Text>
          <Text style={styles.totalFinal}>
            {order.totalAmount.toLocaleString()}원
          </Text>
        </View>
      </View>

      <View style={styles.pointsCard}>
        <View style={styles.pointsInfo}>
          <Text style={styles.pointsLabel}>적립 포인트</Text>
          <Text style={styles.pointsValue}>+ {order.earnedPoints}P</Text>
        </View>
        <Text style={styles.pointsIcon}>🎁</Text>
      </View>
    </View>
  );
};
