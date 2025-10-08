import { CartBottomAction } from "@/components/cart/CartBottomAction";
import { CartHeader } from "@/components/cart/CartHeader";
import { CartItemCard } from "@/components/cart/CartItemCard";
import { CartOptions } from "@/components/cart/CartOptions";
import { EmptyCart } from "@/components/cart/EmptyCart";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { DEFAULT_OPTIONS, PICKUP_INFO } from "@/constants/cartData";
import { styles } from "@/styles/cart.styles";
import { CartItem, CartOption } from "@/types";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  const router = useRouter();

  // 실제로는 전역 상태 관리(Context, Redux 등)에서 가져와야 함
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 7,
      name: "치킨마요덮밥",
      emoji: "🍛",
      category: "bowl",
      description: "바삭한 치킨과 크리미한 마요소스",
      price: 4500,
      calories: 580,
      time: 5,
      spice: "덮밥",
      rating: 4.9,
      quantity: 2,
    },
    {
      id: 1,
      name: "김치찌개",
      emoji: "🍜",
      category: "soup",
      description: "집에서 끓인 것처럼 얼큰하고 깊은 맛",
      price: 3800,
      calories: 320,
      time: 5,
      spice: "매움",
      rating: 4.5,
      quantity: 1,
    },
    {
      id: 4,
      name: "치킨까스",
      emoji: "🍗",
      category: "fried",
      description: "바삭한 치킨에 달콤한 소스",
      price: 5500,
      calories: 520,
      time: 8,
      spice: "마늘",
      rating: 4.8,
      quantity: 1,
    },
  ]);

  const [options, setOptions] = useState<CartOption[]>(DEFAULT_OPTIONS);

  const orderSummary = useMemo(() => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const discount = 0;
    const finalTotal = subtotal - discount;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return { subtotal, discount, finalTotal, totalItems };
  }, [cart]);

  const handleIncreaseQuantity = (itemId: number) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId: number) => {
    setCart(
      cart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId: number) => {
    const item = cart.find((i) => i.id === itemId);
    if (!item) return;

    Alert.alert("상품 삭제", `${item.name}을(를) 삭제하시겠습니까?`, [
      { text: "취소", style: "cancel" },
      {
        text: "삭제",
        style: "destructive",
        onPress: () => setCart(cart.filter((i) => i.id !== itemId)),
      },
    ]);
  };

  const handleClearCart = () => {
    if (cart.length === 0) return;

    Alert.alert("장바구니 비우기", "장바구니를 비우시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "비우기",
        style: "destructive",
        onPress: () => setCart([]),
      },
    ]);
  };

  const handleToggleOption = (optionId: string) => {
    setOptions(
      options.map((opt) =>
        opt.id === optionId ? { ...opt, enabled: !opt.enabled } : opt
      )
    );
  };

  const handleOrder = () => {
    const orderSummaryText = cart
      .map((item) => `${item.emoji} ${item.name} x${item.quantity}`)
      .join("\n");

    Alert.alert(
      "주문 확인",
      `주문이 접수되었습니다!\n\n주문 내역:\n${orderSummaryText}\n\n총 ${
        orderSummary.totalItems
      }개 / ${orderSummary.finalTotal.toLocaleString()}원\n\n픽업 장소: ${
        PICKUP_INFO.locationDetail
      }`,
      [
        {
          text: "확인",
          onPress: () => {
            setCart([]);
            router.back();
          },
        },
      ]
    );
  };

  if (cart.length === 0) {
    return (
      <SafeAreaView style={styles.container} edges={["top"]}>
        <CartHeader onClear={handleClearCart} hasItems={false} />
        <EmptyCart />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <CartHeader onClear={handleClearCart} hasItems={true} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.cartContent}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.sectionTitle}>주문 내역 </Text>
            <Text style={styles.badge}>{orderSummary.totalItems}개</Text>
          </View>

          {cart.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              onIncrease={() => handleIncreaseQuantity(item.id)}
              onDecrease={() => handleDecreaseQuantity(item.id)}
              onRemove={() => handleRemoveItem(item.id)}
            />
          ))}

          <CartOptions options={options} onToggle={handleToggleOption} />

          <OrderSummary summary={orderSummary} />
        </View>
      </ScrollView>

      <CartBottomAction
        pickupInfo={PICKUP_INFO}
        totalAmount={orderSummary.finalTotal}
        onOrder={handleOrder}
      />
    </SafeAreaView>
  );
}
