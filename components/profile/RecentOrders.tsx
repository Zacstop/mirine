import { styles } from "@/styles/profile.styles";
import { OrderHistory } from "@/types";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { PaymentHistoryModal } from "./PaymentHistoryModal";

interface RecentOrdersProps {
  orders: OrderHistory[];
}

export const RecentOrders: React.FC<RecentOrdersProps> = ({ orders }) => {
  const [historyModalVisible, setHistoryModalVisible] = useState(false);
  const handleOrderPress = (order: OrderHistory) => {
    Alert.alert(
      "📋 주문 상세",
      `${order.orderNumber}\n\n상세 내역을 확인하시겠습니까?`
    );
  };

  const handleViewAll = () => {
    setHistoryModalVisible(true);
  };

  return (
    <View style={styles.orderHistorySection}>
      <View style={styles.orderHistoryHeader}>
        <Text style={styles.sectionTitle}>최근 주문</Text>
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={styles.viewAllButton}>전체보기 ›</Text>
        </TouchableOpacity>
      </View>

      {orders.map((order) => (
        <TouchableOpacity
          key={order.id}
          style={styles.orderCard}
          onPress={() => handleOrderPress(order)}
        >
          <View style={styles.orderHeader}>
            <Text style={styles.orderDate}>{order.date}</Text>
            <Text style={styles.orderStatus}>픽업완료</Text>
          </View>
          <View style={styles.orderItems}>
            <Text style={styles.orderItemName}>{order.items}</Text>
            <Text style={styles.orderItemDetail}>{order.location}</Text>
          </View>
          <View style={styles.orderFooter}>
            <Text style={styles.orderNumber}>{order.orderNumber}</Text>
            <Text style={styles.orderTotal}>
              {order.totalAmount.toLocaleString()}원
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      <View>
        <PaymentHistoryModal
          visible={historyModalVisible}
          onClose={() => setHistoryModalVisible(false)}
        />
      </View>
    </View>
  );
};
