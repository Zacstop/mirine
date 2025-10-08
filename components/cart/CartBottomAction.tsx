import { styles } from "@/styles/cart.styles";
import { PickupInfo } from "@/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CartBottomActionProps {
  pickupInfo: PickupInfo;
  totalAmount: number;
  onOrder: () => void;
}

export const CartBottomAction: React.FC<CartBottomActionProps> = ({
  pickupInfo,
  totalAmount,
  onOrder,
}) => {
  return (
    <View style={styles.bottomAction}>
      <View style={styles.pickupInfo}>
        <Text style={styles.pickupIcon}>📍</Text>
        <View style={styles.pickupDetails}>
          <Text style={styles.pickupTitle}>{pickupInfo.location}</Text>
          <Text style={styles.pickupLocation}>{pickupInfo.locationDetail}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.orderButton} onPress={onOrder}>
        <Text style={styles.orderButtonText}>주문하기</Text>
        <Text style={styles.orderButtonTotal}>
          {totalAmount.toLocaleString()}원
        </Text>
      </TouchableOpacity>
    </View>
  );
};
