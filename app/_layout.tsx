import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        /> */}

        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, title: "메인" }}
        />
        <Stack.Screen
          name="menu/[id]"
          options={{ headerShown: false, title: "상세정보" }}
        />
        {/* <Stack.Screen
          name="menu/[id]"
          options={{
            headerShown: true,
            title: "상세정보",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => router.push("/cart")}
                style={{
                  marginRight: 15,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  backgroundColor: "#edededff",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{ color: "blue", fontSize: 16, fontWeight: "600" }}
                >
                  🛒
                </Text>
              </TouchableOpacity>
            ),
          }}
        /> */}

        <Stack.Screen
          name="cart/index"
          options={{ headerShown: false, title: "장바구니" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
