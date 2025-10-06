import { Header } from "@/components/common/Header";
import { CartBar } from "@/components/home/CartBar";
import { CategoryFilter } from "@/components/home/CategoryFilter";
import { FoodItem } from "@/components/home/FoodItem";
import { SearchBar } from "@/components/home/SearchBar";

import { CATEGORIES, MENU_DATA } from "@/constants/MenuData";
import { styles } from "@/styles/homeScreenStyles";
import { CartItem, MenuItem } from "@/types";
import React, { useMemo, useState } from "react";
import { Alert, SafeAreaView, ScrollView } from "react-native";

export default function HomeScreen() {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());

  const filteredMenu = useMemo(() => {
    return MENU_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchText, selectedCategory]);

  const cartTotal = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { totalItems, totalPrice };
  }, [cart]);

  const handleAddToCart = (item: MenuItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    const newAddedItems = new Set(addedItems);
    newAddedItems.add(item.id);
    setAddedItems(newAddedItems);

    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 1000);
  };

  const handleCartPress = () => {
    const cartSummary = cart
      .map((item) => `${item.name} x${item.quantity}`)
      .join("\n");
    Alert.alert("장바구니", `주문 내역:\n\n${cartSummary}`, [{ text: "확인" }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar value={searchText} onChangeText={setSearchText} />
      <CategoryFilter
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ScrollView>
        {filteredMenu.map((item) => (
          <FoodItem
            key={item.id}
            item={item}
            isAdded={addedItems.has(item.id)}
            onAdd={handleAddToCart}
          />
        ))}
      </ScrollView>
      {cartTotal.totalItems > 0 && (
        <CartBar cart={cart} onPress={handleCartPress} />
      )}
    </SafeAreaView>
  );
}
