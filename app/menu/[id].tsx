import { CartButton } from "@/components/menu/CartButton";
import { MenuDetailHeader } from "@/components/menu/MenuDetailHeader";
import { MenuHeroSection } from "@/components/menu/MenuHeroSection";
import { MenuInfoCards } from "@/components/menu/MenuInfoCards";
import { MenuOptions } from "@/components/menu/MenuOptions";
import { NutritionGrid } from "@/components/menu/NutritionGrid";
import { QuantitySelector } from "@/components/menu/QuantitySelector";
import { ReviewList } from "@/components/menu/ReviewList";
import { MENU_DETAIL_DATA } from "@/constants/menuDetailData";
import { styles } from "@/styles/menuDetail.styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// export default function MenuDetailScreen() {
//   const { id } = useLocalSearchParams<{ id: string }>();
//   const menuItem = MENU_DETAIL_DATA[parseInt(id)];

//   const [isLiked, setIsLiked] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
//   const [quantity, setQuantity] = useState(1);

//   const totalPrice = useMemo(() => {
//     const optionsTotal = selectedOptions.reduce((sum, optionId) => {
//       const option = menuItem.options.find((opt) => opt.id === optionId);
//       return sum + (option?.price || 0);
//     }, 0);
//     return (menuItem.price + optionsTotal) * quantity;
//   }, [selectedOptions, quantity, menuItem]);

//   const handleShare = () => {
//     Alert.alert("공유", "공유 기능이 실행됩니다!");
//   };

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//   };

//   const handleOptionToggle = (optionId: number) => {
//     setSelectedOptions((prev) =>
//       prev.includes(optionId)
//         ? prev.filter((id) => id !== optionId)
//         : [...prev, optionId]
//     );
//   };

//   const handleAddToCart = () => {
//     Alert.alert("장바구니", "장바구니에 담겼습니다!");
//   };

//   if (!menuItem) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>메뉴를 찾을 수 없습니다.</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <MenuDetailHeader
//         onShare={handleShare}
//         onLike={handleLike}
//         isLiked={isLiked}
//       />

//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <MenuHeroSection emoji={menuItem.emoji} badges={menuItem.badges} />

//         <View style={styles.contentSection}>
//           <Text style={styles.menuCategory}>덮밥 (Bowl)</Text>
//           <Text style={styles.menuTitle}>{menuItem.name}</Text>

//           <View style={styles.ratingContainer}>
//             <Text style={styles.ratingStars}>⭐ {menuItem.rating}</Text>
//             <Text style={styles.ratingCount}>
//               ({menuItem.reviewCount}개 리뷰)
//             </Text>
//           </View>

//           <Text style={styles.menuPrice}>
//             {menuItem.price.toLocaleString()}원
//           </Text>
//           <Text style={styles.menuDescription}>{menuItem.fullDescription}</Text>

//           <MenuInfoCards
//             prepTime={menuItem.prepTime}
//             spiceLevel={menuItem.spiceLevel}
//             servingSize={menuItem.servingSize}
//           />

//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>영양 정보</Text>
//             <NutritionGrid nutrition={menuItem.nutrition} />
//           </View>

//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>추가 옵션</Text>
//             <MenuOptions
//               options={menuItem.options}
//               selectedOptions={selectedOptions}
//               onToggle={handleOptionToggle}
//             />
//           </View>

//           <QuantitySelector
//             quantity={quantity}
//             onIncrease={() => setQuantity((q) => q + 1)}
//             onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
//           />

//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>
//               리뷰 ({menuItem.reviewCount})
//             </Text>
//             <ReviewList reviews={menuItem.reviews} />
//           </View>
//         </View>
//       </ScrollView>

//       <View style={styles.bottomAction}>
//         <View style={styles.totalPrice}>
//           <Text style={styles.totalLabel}>총 금액</Text>
//           <Text style={styles.totalAmount}>
//             {totalPrice.toLocaleString()}원
//           </Text>
//         </View>
//         <TouchableOpacity
//           style={styles.addToCartButton}
//           onPress={handleAddToCart}
//         >
//           <Text style={styles.addToCartButtonText}>장바구니 담기</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

export default function MenuDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  // id가 없거나 메뉴 데이터가 없는 경우 처리
  const menuItem = id ? MENU_DETAIL_DATA[parseInt(id)] : undefined;

  const [isLiked, setIsLiked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [quantity, setQuantity] = useState(1);

  // menuItem이 없으면 early return
  if (!menuItem) {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 20 }}>
            메뉴를 찾을 수 없습니다.
          </Text>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              backgroundColor: "#0066FF",
              padding: 15,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>돌아가기</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const totalPrice = useMemo(() => {
    const optionsTotal = selectedOptions.reduce((sum, optionId) => {
      const option = menuItem.options.find((opt) => opt.id === optionId);
      return sum + (option?.price || 0);
    }, 0);
    return (menuItem.price + optionsTotal) * quantity;
  }, [selectedOptions, quantity, menuItem]);

  const handleShare = () => {
    Alert.alert("공유", "공유 기능이 실행됩니다!");
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleOptionToggle = (optionId: number) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleAddToCart = () => {
    Alert.alert("장바구니", "장바구니에 담겼습니다!");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <MenuDetailHeader
        onShare={handleShare}
        onLike={handleLike}
        isLiked={isLiked}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <MenuHeroSection emoji={menuItem.emoji} badges={menuItem.badges} />

        <View style={styles.contentSection}>
          <Text style={styles.menuCategory}>
            {menuItem.category === "soup"
              ? "국물"
              : menuItem.category === "bowl"
              ? "덮밥"
              : "튀김"}{" "}
            ({menuItem.category})
          </Text>
          <Text style={styles.menuTitle}>{menuItem.name}</Text>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingStars}>⭐ {menuItem.rating}</Text>
            <Text style={styles.ratingCount}>
              ({menuItem.reviewCount}개 리뷰)
            </Text>
          </View>

          <Text style={styles.menuPrice}>
            {menuItem.price.toLocaleString()}원
          </Text>
          <Text style={styles.menuDescription}>{menuItem.fullDescription}</Text>

          <MenuInfoCards
            prepTime={menuItem.prepTime}
            spiceLevel={menuItem.spiceLevel}
            servingSize={menuItem.servingSize}
          />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>영양 정보</Text>
            <NutritionGrid nutrition={menuItem.nutrition} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>추가 옵션</Text>
            <MenuOptions
              options={menuItem.options}
              selectedOptions={selectedOptions}
              onToggle={handleOptionToggle}
            />
          </View>

          <QuantitySelector
            quantity={quantity}
            onIncrease={() => setQuantity((q) => q + 1)}
            onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
          />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              리뷰 ({menuItem.reviewCount})
            </Text>
            <ReviewList reviews={menuItem.reviews} />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomAction}>
        <View style={styles.totalPrice}>
          <Text style={styles.totalLabel}>총 금액</Text>
          <Text style={styles.totalAmount}>
            {totalPrice.toLocaleString()}원
          </Text>
        </View>
        <CartButton cart={[]} onPress={handleAddToCart}></CartButton>
        {/* <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartButtonText}>장바구니 담기</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
