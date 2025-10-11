import { styles } from "@/styles/profile.styles";
import { PaymentMethod } from "@/types";
import React from "react";
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface PaymentMethodsModalProps {
  visible: boolean;
  methods: PaymentMethod[];
  onClose: () => void;
}

export const PaymentMethodsModal: React.FC<PaymentMethodsModalProps> = ({
  visible,
  methods,
  onClose,
}) => {
  const handleAddPayment = () => {
    Alert.alert(
      "💳 새 카드 등록",
      "카드 정보를 입력해주세요.\n\n• 카드 번호\n• 유효기간\n• CVC\n• 비밀번호 앞 2자리"
    );
  };

  const handleSetDefault = (id: number) => {
    Alert.alert(
      "기본 결제수단",
      "이 카드를 기본 결제수단으로 설정하시겠습니까?",
      [
        { text: "취소", style: "cancel" },
        {
          text: "확인",
          onPress: () => Alert.alert("✓ 기본 결제수단으로 설정되었습니다."),
        },
      ]
    );
  };

  const handleEdit = (id: number) => {
    Alert.alert(
      "✏️ 카드 정보 수정",
      "카드 별칭이나 설정을 변경할 수 있습니다."
    );
  };

  const handleDelete = (id: number) => {
    Alert.alert("카드 삭제", "정말 이 카드를 삭제하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "삭제",
        style: "destructive",
        onPress: () => Alert.alert("🗑️ 카드가 삭제되었습니다."),
      },
    ]);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.methodsModalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>결제 수단 관리</Text>
              <TouchableOpacity style={styles.modalClose} onPress={onClose}>
                <Text style={styles.modalCloseText}>×</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.modalBody}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 90 }}
            >
              {methods.map((method) => (
                <View key={method.id} style={styles.paymentCard}>
                  <View style={styles.paymentInfo}>
                    <View style={styles.paymentIcon}>
                      <Text style={styles.paymentIconText}>{method.icon}</Text>
                    </View>
                    <View style={styles.paymentDetails}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={styles.paymentName}>{method.name}</Text>
                        {method.isDefault && (
                          <Text style={styles.paymentDefault}>기본</Text>
                        )}
                      </View>
                      <Text style={styles.paymentNumber}>
                        {method.cardNumber}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.paymentActions}>
                    {!method.isDefault && (
                      <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => handleSetDefault(method.id)}
                      >
                        <Text style={styles.iconButtonText}>⭐</Text>
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity
                      style={styles.iconButton}
                      onPress={() => handleEdit(method.id)}
                    >
                      <Text style={styles.iconButtonText}>✏️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.iconButton}
                      onPress={() => handleDelete(method.id)}
                    >
                      <Text style={styles.iconButtonText}>🗑️</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
              <TouchableOpacity
                style={styles.addPaymentButton}
                onPress={handleAddPayment}
              >
                <Text>➕</Text>
                <Text style={styles.addPaymentButtonText}>새 카드 등록</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
