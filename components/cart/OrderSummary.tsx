import { styles } from "@/styles/cart.styles";
import { OrderSummary as OrderSummaryType } from "@/types";
import React from "react";
import { Text, View } from "react-native";

interface OrderSummaryProps {
  summary: OrderSummaryType;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ summary }) => {
  return (
    <View style={styles.summarySection}>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>주문 금액</Text>
        <Text style={styles.summaryValue}>
          {summary.subtotal.toLocaleString()}원
        </Text>
      </View>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>할인 금액</Text>
        <Text style={[styles.summaryValue, styles.summaryDiscount]}>
          -{summary.discount.toLocaleString()}원
        </Text>
      </View>
      <View style={styles.summaryDivider} />
      <View style={styles.summaryTotal}>
        <Text style={styles.totalLabel}>총 결제 금액</Text>
        <Text style={styles.totalAmount}>
          {summary.finalTotal.toLocaleString()}원
        </Text>
      </View>
    </View>
  );
};
