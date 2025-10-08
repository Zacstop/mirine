// import { MiniGame } from "@/components/order/MiniGame";
// import { OrderDetailCard } from "@/components/order/OrderDetailCard";
// import { OrderHeader } from "@/components/order/OrderHeader";
// import { PickupLocationCard } from "@/components/order/PickupLocationCard";
// import { ProgressSteps } from "@/components/order/ProgressSteps";
// import { StatusHero } from "@/components/order/StatusHero";
// import { MOCK_ORDER, ORDER_STEPS } from "@/constants/orderData";
// import { styles } from "@/styles/orderTracking.styles";
// import { OrderStep } from "@/types";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import React, { useEffect, useState } from "react";
// import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function OrderTrackingScreen() {
//   const { id } = useLocalSearchParams<{ id: string }>();
//   const router = useRouter();

//   // 실제로는 API에서 주문 데이터를 가져와야 함
//   const [order] = useState(MOCK_ORDER);
//   const [steps, setSteps] = useState<OrderStep[]>(ORDER_STEPS);
//   const [remainingTime, setRemainingTime] = useState(order.estimatedTime);

//   // 타이머
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setRemainingTime((prev) => {
//         if (prev <= 0) {
//           clearInterval(timer);
//           handleOrderReady();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleOrderReady = () => {
//     // 준비 완료 상태로 변경
//     setSteps((prevSteps) =>
//       prevSteps.map((step) => {
//         if (step.id === "cooking") {
//           return { ...step, status: "completed" as const };
//         }
//         if (step.id === "ready") {
//           return { ...step, status: "active" as const, time: "지금" };
//         }
//         return step;
//       })
//     );

//     Alert.alert(
//       "🎉 주문 준비 완료!",
//       "주문이 준비되었습니다.\n픽업 장소로 이동해주세요.",
//       [{ text: "확인" }]
//     );
//   };

//   const handleCancelOrder = () => {
//     Alert.alert(
//       "주문 취소",
//       "정말 주문을 취소하시겠습니까?\n조리 진행 상황에 따라 취소가 불가능할 수 있습니다.",
//       [
//         { text: "아니오", style: "cancel" },
//         {
//           text: "예",
//           style: "destructive",
//           onPress: () => {
//             Alert.alert("취소 완료", "주문 취소 요청이 접수되었습니다.");
//             router.back();
//           },
//         },
//       ]
//     );
//   };

//   const minutes = Math.floor(remainingTime / 60);
//   const seconds = remainingTime % 60;

//   return (
//     <SafeAreaView style={styles.container} edges={["top"]}>
//       <OrderHeader orderNumber={order.orderNumber} />

//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <StatusHero
//           emoji="👨‍🍳"
//           title="맛있게 조리중입니다!"
//           subtitle="곧 준비가 완료됩니다"
//           estimatedMinutes={minutes}
//           estimatedSeconds={seconds}
//         />

//         <ProgressSteps steps={steps} />

//         <View style={styles.orderDetails}>
//           <Text style={styles.sectionTitle}>주문 내역</Text>
//           <OrderDetailCard items={order.items} />
//           <PickupLocationCard
//             name={order.pickupLocation.name}
//             detail={order.pickupLocation.detail}
//           />
//         </View>

//         <MiniGame />
//       </ScrollView>

//       <View style={styles.bottomAction}>
//         <TouchableOpacity
//           style={styles.cancelButton}
//           onPress={handleCancelOrder}
//         >
//           <Text style={styles.cancelButtonText}>주문 취소하기</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

import { MiniGame } from "@/components/order/MiniGame";
import { OrderDetailCard } from "@/components/order/OrderDetailCard";
import { OrderHeader } from "@/components/order/OrderHeader";
import { PickupLocationCard } from "@/components/order/PickupLocationCard";
import { ProgressSteps } from "@/components/order/ProgressSteps";
import { StatusHero } from "@/components/order/StatusHero";
import { MOCK_ORDER, ORDER_STEPS } from "@/constants/orderData";
import { styles } from "@/styles/orderTracking.styles";
import { OrderStep } from "@/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderTrackingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [order] = useState(MOCK_ORDER);
  const [steps, setSteps] = useState<OrderStep[]>(ORDER_STEPS);
  const [remainingTime, setRemainingTime] = useState(order.estimatedTime);
  const [isReady, setIsReady] = useState(false);
  const [statusEmoji, setStatusEmoji] = useState("👨‍🍳");
  const [statusTitle, setStatusTitle] = useState("맛있게 조리중입니다!");
  const [statusSubtitle, setStatusSubtitle] = useState("곧 준비가 완료됩니다");

  // 타이머
  useEffect(() => {
    if (isReady) return;

    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleOrderReady();
          return 0;
        }
        return prev - 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isReady]);

  // 데모: 10초 후 자동으로 준비 완료 (실제로는 서버에서 상태 받아옴)
  useEffect(() => {
    const demoTimer = setTimeout(() => {
      if (!isReady) {
        handleOrderReady();
      }
    }, 15000); // 10초

    return () => clearTimeout(demoTimer);
  }, [isReady]);

  const handleOrderReady = () => {
    // 상태 업데이트
    setIsReady(true);
    setStatusEmoji("🎉");
    setStatusTitle("주문이 준비되었습니다!");
    setStatusSubtitle("픽업 장소에서 수령해주세요");

    // 스텝 업데이트
    setSteps((prevSteps) =>
      prevSteps.map((step) => {
        if (step.id === "cooking") {
          return { ...step, status: "completed" as const };
        }
        if (step.id === "ready") {
          return { ...step, status: "active" as const, time: "지금" };
        }
        return step;
      })
    );

    // 진동 알림
    Vibration.vibrate([200, 100, 200]);

    // 알림 표시
    setTimeout(() => {
      Alert.alert(
        "🎉 주문이 준비되었습니다!",
        `\n📍 ${order.pickupLocation.name}\n${order.pickupLocation.detail}\n\n픽업 장소로 이동해주세요.`,
        [{ text: "확인" }]
      );
    }, 500);
  };

  const handleCancelOrder = () => {
    Alert.alert(
      "주문 취소",
      "정말 주문을 취소하시겠습니까?\n조리 진행 상황에 따라 취소가 불가능할 수 있습니다.",
      [
        { text: "아니오", style: "cancel" },
        {
          text: "예",
          style: "destructive",
          onPress: () => {
            Alert.alert("취소 완료", "주문 취소 요청이 접수되었습니다.");
            router.back();
          },
        },
      ]
    );
  };

  const handlePickupOrder = () => {
    router.push("/order/complete");
  };

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <OrderHeader orderNumber={order.orderNumber} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <StatusHero
          emoji={statusEmoji}
          title={statusTitle}
          subtitle={statusSubtitle}
          estimatedMinutes={minutes}
          estimatedSeconds={seconds}
          isReady={isReady}
        />

        <ProgressSteps steps={steps} />

        <View style={styles.orderDetails}>
          <Text style={styles.sectionTitle}>주문 내역</Text>
          <OrderDetailCard items={order.items} />
          <PickupLocationCard
            name={order.pickupLocation.name}
            detail={order.pickupLocation.detail}
          />
        </View>

        <MiniGame />
      </ScrollView>

      <View style={styles.bottomAction}>
        {isReady ? (
          <TouchableOpacity
            style={styles.pickupButton}
            onPress={handlePickupOrder}
          >
            <Text style={styles.pickupButtonText}>픽업 완료</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.cancelButton, isReady && { opacity: 0.5 }]}
            onPress={handleCancelOrder}
            disabled={isReady}
          >
            <Text style={styles.cancelButtonText}>주문 취소하기</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
