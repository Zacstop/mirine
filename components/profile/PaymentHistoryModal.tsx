import { styles as profileStyles, styles } from "@/styles/profile.styles";
import { OrderHistory } from "@/types";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface PaymentHistoryModalProps {
  visible: boolean;
  onClose: () => void;
}

const MOCK_PAYMENT_HISTORY: OrderHistory[] = [
  {
    id: "1",
    orderNumber: "#A247",
    date: "2024.01.15 14:23",
    status: "completed",
    items: "치킨마요덮밥 외 2개",
    location: "신한카드 **** 1234",
    totalAmount: 18300,
  },
  {
    id: "2",
    orderNumber: "#A231",
    date: "2024.01.14 12:15",
    status: "completed",
    items: "김치찌개 외 1개",
    location: "신한카드 **** 1234",
    totalAmount: 7300,
  },
  {
    id: "3",
    orderNumber: "#A198",
    date: "2024.01.13 13:45",
    status: "completed",
    items: "불고기덮밥",
    location: "국민카드 **** 5678",
    totalAmount: 5200,
  },
  {
    id: "4",
    orderNumber: "#A176",
    date: "2024.01.12 11:30",
    status: "completed",
    items: "치킨까스 외 1개",
    location: "신한카드 **** 1234",
    totalAmount: 9300,
  },
  {
    id: "5",
    orderNumber: "#A152",
    date: "2024.01.11 12:50",
    status: "completed",
    items: "김치볶음밥",
    location: "신한카드 **** 1234",
    totalAmount: 3800,
  },
];

type FilterType = "all" | "month" | "last-month" | "3-months";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const INITIAL_HEIGHT = SCREEN_HEIGHT * 0.6; // 초기 60%
const MAX_HEIGHT = SCREEN_HEIGHT * 0.9; // 최대 95%
const MIN_HEIGHT = SCREEN_HEIGHT * 0.4; // 최소 40%

export const PaymentHistoryModal: React.FC<PaymentHistoryModalProps> = ({
  visible,
  onClose,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");
  const [isExpanded, setIsExpanded] = useState(false);

  const translateY = useRef(new Animated.Value(0)).current;
  const modalHeight = useRef(new Animated.Value(INITIAL_HEIGHT)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // 수직 방향 제스처만 처리
        return Math.abs(gestureState.dy) > 5;
      },
      onPanResponderMove: (_, gestureState) => {
        // 위로 드래그: 음수, 아래로 드래그: 양수
        if (gestureState.dy < 0) {
          // 위로 드래그 - 모달 확장
          const newHeight = Math.min(
            MAX_HEIGHT,
            INITIAL_HEIGHT - gestureState.dy
          );
          modalHeight.setValue(newHeight);
        } else if (gestureState.dy > 0 && isExpanded) {
          // 아래로 드래그 - 모달 축소 (확장 상태일 때만)
          const newHeight = Math.max(
            INITIAL_HEIGHT,
            MAX_HEIGHT - gestureState.dy
          );
          modalHeight.setValue(newHeight);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -50) {
          // 위로 빠르게 드래그 - 전체 화면으로 확장
          expandModal();
        } else if (gestureState.dy > 50 && isExpanded) {
          // 아래로 빠르게 드래그 - 초기 크기로 축소
          collapseModal();
        } else if (gestureState.dy > 100 && !isExpanded) {
          // 아래로 많이 드래그 - 모달 닫기
          onClose();
        } else {
          // 현재 상태 유지
          Animated.spring(modalHeight, {
            toValue: isExpanded ? MAX_HEIGHT : INITIAL_HEIGHT,
            useNativeDriver: false,
            tension: 50,
            friction: 8,
          }).start();
        }
      },
    })
  ).current;

  const expandModal = () => {
    setIsExpanded(true);
    Animated.spring(modalHeight, {
      toValue: MAX_HEIGHT,
      useNativeDriver: false,
      tension: 50,
      friction: 8,
    }).start();
  };

  const collapseModal = () => {
    setIsExpanded(false);
    Animated.spring(modalHeight, {
      toValue: INITIAL_HEIGHT,
      useNativeDriver: false,
      tension: 50,
      friction: 8,
    }).start();
  };

  const handleFilterChange = (filter: FilterType) => {
    setSelectedFilter(filter);
  };

  const totalOrders = MOCK_PAYMENT_HISTORY.length;
  const totalAmount = MOCK_PAYMENT_HISTORY.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "전체" },
    { key: "month", label: "이번 달" },
    { key: "last-month", label: "지난 달" },
    { key: "3-months", label: "3개월" },
  ];

  // 모달이 닫힐 때 상태 초기화
  React.useEffect(() => {
    if (!visible) {
      setIsExpanded(false);
      modalHeight.setValue(INITIAL_HEIGHT);
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={profileStyles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <Animated.View
          style={[
            styles.modalContentAnimated,
            {
              height: modalHeight,
            },
          ]}
          onStartShouldSetResponder={() => true}
        >
          {/* Drag Handle */}
          <View
            {...panResponder.panHandlers}
            style={styles.dragHandleContainer}
          >
            <View style={styles.dragHandle} />
          </View>

          {/* Header */}
          <View style={styles.modalHeaderCustom}>
            <Text style={profileStyles.modalTitle}>결제 내역</Text>
            <TouchableOpacity
              style={profileStyles.modalClose}
              onPress={onClose}
            >
              <Text style={profileStyles.modalCloseText}>×</Text>
            </TouchableOpacity>
          </View>

          {/* Tab Navigation */}
          <View style={styles.tabNavigation}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filters.map((filter) => (
                <TouchableOpacity
                  key={filter.key}
                  style={[
                    styles.tabButton,
                    selectedFilter === filter.key && styles.tabButtonActive,
                  ]}
                  onPress={() => handleFilterChange(filter.key)}
                >
                  <Text
                    style={[
                      styles.tabButtonText,
                      selectedFilter === filter.key &&
                        styles.tabButtonTextActive,
                    ]}
                  >
                    {filter.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Order History List */}
          <ScrollView
            style={styles.historyScrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.historyList}>
              {MOCK_PAYMENT_HISTORY.map((order) => (
                <View key={order.id} style={profileStyles.orderCard}>
                  <View style={profileStyles.orderHeader}>
                    <Text style={profileStyles.orderDate}>{order.date}</Text>
                    <Text style={profileStyles.orderStatus}>결제완료</Text>
                  </View>
                  <View style={profileStyles.orderItems}>
                    <Text style={profileStyles.orderItemName}>
                      {order.items}
                    </Text>
                    <Text style={profileStyles.orderItemDetail}>
                      {order.location}
                    </Text>
                  </View>
                  <View style={profileStyles.orderFooter}>
                    <Text style={profileStyles.orderNumber}>
                      {order.orderNumber}
                    </Text>
                    <Text style={profileStyles.orderTotal}>
                      {order.totalAmount.toLocaleString()}원
                    </Text>
                  </View>
                </View>
              ))}

              {/* Summary Card */}
              <View style={styles.summaryCard}>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>총 결제 건수</Text>
                  <Text style={styles.summaryValue}>{totalOrders}건</Text>
                </View>
                <View style={[styles.summaryRow, styles.summaryRowLast]}>
                  <Text style={styles.summaryLabel}>총 결제 금액</Text>
                  <Text style={styles.summaryTotal}>
                    {totalAmount.toLocaleString()}원
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

// import { styles as profileStyles, styles } from "@/styles/profile.styles";
// import { OrderHistory } from "@/types";
// import React, { useState } from "react";
// import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";

// interface PaymentHistoryModalProps {
//   visible: boolean;
//   onClose: () => void;
// }

// const MOCK_PAYMENT_HISTORY: OrderHistory[] = [
//   {
//     id: "1",
//     orderNumber: "#A247",
//     date: "2024.01.15 14:23",
//     status: "completed",
//     items: "치킨마요덮밥 외 2개",
//     location: "신한카드 **** 1234",
//     totalAmount: 18300,
//   },
//   {
//     id: "2",
//     orderNumber: "#A231",
//     date: "2024.01.14 12:15",
//     status: "completed",
//     items: "김치찌개 외 1개",
//     location: "신한카드 **** 1234",
//     totalAmount: 7300,
//   },
//   {
//     id: "3",
//     orderNumber: "#A198",
//     date: "2024.01.13 13:45",
//     status: "completed",
//     items: "불고기덮밥",
//     location: "국민카드 **** 5678",
//     totalAmount: 5200,
//   },
//   {
//     id: "4",
//     orderNumber: "#A176",
//     date: "2024.01.12 11:30",
//     status: "completed",
//     items: "치킨까스 외 1개",
//     location: "신한카드 **** 1234",
//     totalAmount: 9300,
//   },
//   {
//     id: "5",
//     orderNumber: "#A152",
//     date: "2024.01.11 12:50",
//     status: "completed",
//     items: "김치볶음밥",
//     location: "신한카드 **** 1234",
//     totalAmount: 3800,
//   },
// ];

// type FilterType = "all" | "month" | "last-month" | "3-months";

// export const PaymentHistoryModal: React.FC<PaymentHistoryModalProps> = ({
//   visible,
//   onClose,
// }) => {
//   const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");

//   const handleFilterChange = (filter: FilterType) => {
//     setSelectedFilter(filter);
//     // 실제로는 API 호출하여 필터링된 데이터 가져오기
//   };

//   const totalOrders = MOCK_PAYMENT_HISTORY.length;
//   const totalAmount = MOCK_PAYMENT_HISTORY.reduce(
//     (sum, order) => sum + order.totalAmount,
//     0
//   );

//   const filters: { key: FilterType; label: string }[] = [
//     { key: "all", label: "전체" },
//     { key: "month", label: "이번 달" },
//     { key: "last-month", label: "지난 달" },
//     { key: "3-months", label: "3개월" },
//   ];

//   return (
//     <Modal
//       visible={visible}
//       animationType="slide"
//       transparent
//       onRequestClose={onClose}
//     >
//       <TouchableOpacity
//         style={profileStyles.modalOverlay}
//         activeOpacity={1}
//         onPress={onClose}
//       >
//         <TouchableOpacity
//           activeOpacity={1}
//           onPress={(e) => e.stopPropagation()}
//         >
//           <View style={profileStyles.modalContent}>
//             <View style={profileStyles.modalHeader}>
//               <Text style={profileStyles.modalTitle}>결제 내역</Text>
//               <TouchableOpacity
//                 style={profileStyles.modalClose}
//                 onPress={onClose}
//               >
//                 <Text style={profileStyles.modalCloseText}>×</Text>
//               </TouchableOpacity>
//             </View>

//             <ScrollView>
//               {/* Tab Navigation */}
//               <View style={styles.tabNavigation}>
//                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                   {filters.map((filter) => (
//                     <TouchableOpacity
//                       key={filter.key}
//                       style={[
//                         styles.tabButton,
//                         selectedFilter === filter.key && styles.tabButtonActive,
//                       ]}
//                       onPress={() => handleFilterChange(filter.key)}
//                     >
//                       <Text
//                         style={[
//                           styles.tabButtonText,
//                           selectedFilter === filter.key &&
//                             styles.tabButtonTextActive,
//                         ]}
//                       >
//                         {filter.label}
//                       </Text>
//                     </TouchableOpacity>
//                   ))}
//                 </ScrollView>
//               </View>

//               {/* Order History List */}
//               <View style={styles.historyList}>
//                 {MOCK_PAYMENT_HISTORY.map((order) => (
//                   <View key={order.id} style={profileStyles.orderCard}>
//                     <View style={profileStyles.orderHeader}>
//                       <Text style={profileStyles.orderDate}>{order.date}</Text>
//                       <Text style={profileStyles.orderStatus}>결제완료</Text>
//                     </View>
//                     <View style={profileStyles.orderItems}>
//                       <Text style={profileStyles.orderItemName}>
//                         {order.items}
//                       </Text>
//                       <Text style={profileStyles.orderItemDetail}>
//                         {order.location}
//                       </Text>
//                     </View>
//                     <View style={profileStyles.orderFooter}>
//                       <Text style={profileStyles.orderNumber}>
//                         {order.orderNumber}
//                       </Text>
//                       <Text style={profileStyles.orderTotal}>
//                         {order.totalAmount.toLocaleString()}원
//                       </Text>
//                     </View>
//                   </View>
//                 ))}

//                 {/* Summary Card */}
//                 <View style={styles.summaryCard}>
//                   <View style={styles.summaryRow}>
//                     <Text style={styles.summaryLabel}>총 결제 건수</Text>
//                     <Text style={styles.summaryValue}>{totalOrders}건</Text>
//                   </View>
//                   <View style={[styles.summaryRow, styles.summaryRowLast]}>
//                     <Text style={styles.summaryLabel}>총 결제 금액</Text>
//                     <Text style={styles.summaryTotal}>
//                       {totalAmount.toLocaleString()}원
//                     </Text>
//                   </View>
//                 </View>
//               </View>
//             </ScrollView>
//           </View>
//         </TouchableOpacity>
//       </TouchableOpacity>
//     </Modal>
//   );
// };
