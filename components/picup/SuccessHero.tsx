import { styles } from "@/styles/orderComplete.styles";
import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

interface SuccessHeroProps {
  earnedPoints: number;
}

export const SuccessHero: React.FC<SuccessHeroProps> = ({ earnedPoints }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const ringScaleAnim = useRef(new Animated.Value(1)).current;
  const ringOpacityAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // 성공 애니메이션
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // 링 확장 애니메이션
    Animated.parallel([
      Animated.timing(ringScaleAnim, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(ringOpacityAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.successHero}>
      <Animated.View
        style={[styles.successAnimation, { transform: [{ scale: scaleAnim }] }]}
      >
        <Animated.View
          style={[
            styles.successRing,
            {
              transform: [{ scale: ringScaleAnim }],
              opacity: ringOpacityAnim,
            },
          ]}
        />
        <Text style={styles.successEmoji}>🎉</Text>
      </Animated.View>
      <Text style={styles.successTitle}>맛있게 드셨나요?</Text>
      <Text style={styles.successSubtitle}>
        주문이 성공적으로 완료되었습니다!
      </Text>
      <View style={styles.successBadge}>
        <Text style={styles.successBadgeText}>
          ✨ {earnedPoints}P 적립 완료
        </Text>
      </View>
    </View>
  );
};
