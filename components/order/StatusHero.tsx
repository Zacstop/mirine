// // import { styles } from "@/styles/orderTracking.styles";
// // import React, { useEffect, useRef } from "react";
// // import { Animated, Text, View } from "react-native";

// // interface StatusHeroProps {
// //   emoji: string;
// //   title: string;
// //   subtitle: string;
// //   estimatedMinutes: number;
// //   estimatedSeconds: number;
// // }

// // export const StatusHero: React.FC<StatusHeroProps> = ({
// //   emoji,
// //   title,
// //   subtitle,
// //   estimatedMinutes,
// //   estimatedSeconds,
// // }) => {
// //   const scaleAnim = useRef(new Animated.Value(1)).current;

// //   useEffect(() => {
// //     Animated.loop(
// //       Animated.sequence([
// //         Animated.timing(scaleAnim, {
// //           toValue: 1.05,
// //           duration: 1000,
// //           useNativeDriver: true,
// //         }),
// //         Animated.timing(scaleAnim, {
// //           toValue: 1,
// //           duration: 1000,
// //           useNativeDriver: true,
// //         }),
// //       ])
// //     ).start();
// //   }, []);

// //   return (
// //     <View style={styles.statusHero}>
// //       <Animated.View
// //         style={[styles.statusAnimation, { transform: [{ scale: scaleAnim }] }]}
// //       >
// //         <Text style={styles.statusEmoji}>{emoji}</Text>
// //       </Animated.View>
// //       <Text style={styles.statusTitle}>{title}</Text>
// //       <View style={{ flexDirection: "row", alignItems: "center" }}>
// //         <Text style={styles.statusSubtitle}>{subtitle}</Text>
// //         <LoadingDots />
// //       </View>
// //       <View style={styles.estimatedTime}>
// //         <Text style={styles.estimatedTimeText}>
// //           ⏱️ 약 {estimatedMinutes}분 {estimatedSeconds}초 남음
// //         </Text>
// //       </View>
// //     </View>
// //   );
// // };

// // const LoadingDots: React.FC = () => {
// //   const dot1Anim = useRef(new Animated.Value(1)).current;
// //   const dot2Anim = useRef(new Animated.Value(1)).current;
// //   const dot3Anim = useRef(new Animated.Value(1)).current;

// //   useEffect(() => {
// //     const animate = (anim: Animated.Value, delay: number) => {
// //       Animated.loop(
// //         Animated.sequence([
// //           Animated.delay(delay),
// //           Animated.timing(anim, {
// //             toValue: 1.3,
// //             duration: 300,
// //             useNativeDriver: true,
// //           }),
// //           Animated.timing(anim, {
// //             toValue: 1,
// //             duration: 300,
// //             useNativeDriver: true,
// //           }),
// //         ])
// //       ).start();
// //     };

// //     animate(dot1Anim, 0);
// //     animate(dot2Anim, 200);
// //     animate(dot3Anim, 400);
// //   }, []);

// //   return (
// //     <View style={styles.loadingDots}>
// //       <Animated.View
// //         style={[styles.dot, { transform: [{ scale: dot1Anim }] }]}
// //       />
// //       <Animated.View
// //         style={[styles.dot, { transform: [{ scale: dot2Anim }] }]}
// //       />
// //       <Animated.View
// //         style={[styles.dot, { transform: [{ scale: dot3Anim }] }]}
// //       />
// //     </View>
// //   );
// // };

// import { styles } from "@/styles/orderTracking.styles";
// import React, { useEffect, useRef } from "react";
// import { Animated, Text, View } from "react-native";

// interface StatusHeroProps {
//   emoji: string;
//   title: string;
//   subtitle: string;
//   estimatedMinutes?: number;
//   estimatedSeconds?: number;
//   isReady?: boolean;
// }

// export const StatusHero: React.FC<StatusHeroProps> = ({
//   emoji,
//   title,
//   subtitle,
//   estimatedMinutes = 0,
//   estimatedSeconds = 0,
//   isReady = false,
// }) => {
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     if (isReady) {
//       // 준비 완료 시 펄스 애니메이션 (3번 반복)
//       Animated.sequence([
//         Animated.timing(scaleAnim, {
//           toValue: 1.1,
//           duration: 250,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scaleAnim, {
//           toValue: 1,
//           duration: 250,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scaleAnim, {
//           toValue: 1.1,
//           duration: 250,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scaleAnim, {
//           toValue: 1,
//           duration: 250,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scaleAnim, {
//           toValue: 1.1,
//           duration: 250,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scaleAnim, {
//           toValue: 1,
//           duration: 250,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     } else {
//       // 조리중일 때 루프 애니메이션
//       Animated.loop(
//         Animated.sequence([
//           Animated.timing(scaleAnim, {
//             toValue: 1.05,
//             duration: 1000,
//             useNativeDriver: true,
//           }),
//           Animated.timing(scaleAnim, {
//             toValue: 1,
//             duration: 1000,
//             useNativeDriver: true,
//           }),
//         ])
//       ).start();
//     }
//   }, [isReady]);

//   return (
//     <View style={styles.statusHero}>
//       <Animated.View
//         style={[
//           styles.statusAnimation,
//           isReady && styles.statusAnimationReady,
//           { transform: [{ scale: scaleAnim }] },
//         ]}
//       >
//         <Text style={styles.statusEmoji}>{emoji}</Text>
//       </Animated.View>
//       <Text style={[styles.statusTitle, isReady && styles.statusTitleReady]}>
//         {title}
//       </Text>
//       <View style={{ flexDirection: "row", alignItems: "center" }}>
//         <Text style={styles.statusSubtitle}>{subtitle}</Text>
//         {!isReady && <LoadingDots />}
//       </View>
//       <View
//         style={[styles.estimatedTime, isReady && styles.estimatedTimeReady]}
//       >
//         <Text
//           style={[
//             styles.estimatedTimeText,
//             isReady && styles.estimatedTimeTextReady,
//           ]}
//         >
//           {isReady
//             ? "✓ 픽업 가능"
//             : `⏱️ 약 ${estimatedMinutes}분 ${estimatedSeconds}초 남음`}
//         </Text>
//       </View>
//     </View>
//   );
// };

// const LoadingDots: React.FC = () => {
//   const dot1Anim = useRef(new Animated.Value(1)).current;
//   const dot2Anim = useRef(new Animated.Value(1)).current;
//   const dot3Anim = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     const animate = (anim: Animated.Value, delay: number) => {
//       Animated.loop(
//         Animated.sequence([
//           Animated.delay(delay),
//           Animated.timing(anim, {
//             toValue: 1.3,
//             duration: 300,
//             useNativeDriver: true,
//           }),
//           Animated.timing(anim, {
//             toValue: 1,
//             duration: 300,
//             useNativeDriver: true,
//           }),
//         ])
//       ).start();
//     };

//     animate(dot1Anim, 0);
//     animate(dot2Anim, 200);
//     animate(dot3Anim, 400);
//   }, []);

//   return (
//     <View style={styles.loadingDots}>
//       <Animated.View
//         style={[styles.dot, { transform: [{ scale: dot1Anim }] }]}
//       />
//       <Animated.View
//         style={[styles.dot, { transform: [{ scale: dot2Anim }] }]}
//       />
//       <Animated.View
//         style={[styles.dot, { transform: [{ scale: dot3Anim }] }]}
//       />
//     </View>
//   );
// };

import { styles } from "@/styles/orderTracking.styles";
import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

interface StatusHeroProps {
  emoji: string;
  title: string;
  subtitle: string;
  estimatedMinutes?: number;
  estimatedSeconds?: number;
  isReady?: boolean;
}

export const StatusHero: React.FC<StatusHeroProps> = ({
  emoji,
  title,
  subtitle,
  estimatedMinutes = 0,
  estimatedSeconds = 0,
  isReady = false,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isReady) {
      // 준비 완료 시 펄스 애니메이션 (3번 반복)
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // 조리중일 때 루프 애니메이션
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.05,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [isReady]);

  // 회전 애니메이션 (링)
  useEffect(() => {
    if (!isReady) {
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        })
      ).start();
    }
  }, [isReady]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.statusHero}>
      <Animated.View
        style={[
          styles.statusAnimation,
          isReady && styles.statusAnimationReady,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        {/* 회전하는 링 (조리중일 때만 표시) */}
        {!isReady && (
          <Animated.View
            style={[styles.statusRing, { transform: [{ rotate }] }]}
          />
        )}
        <Text style={styles.statusEmoji}>{emoji}</Text>
      </Animated.View>
      <Text style={[styles.statusTitle, isReady && styles.statusTitleReady]}>
        {title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.statusSubtitle}>{subtitle}</Text>
        {!isReady && <LoadingDots />}
      </View>
      <View
        style={[styles.estimatedTime, isReady && styles.estimatedTimeReady]}
      >
        <Text
          style={[
            styles.estimatedTimeText,
            isReady && styles.estimatedTimeTextReady,
          ]}
        >
          {isReady
            ? "✓ 픽업 가능"
            : `⏱️ 약 ${estimatedMinutes}분 ${estimatedSeconds}초 남음`}
        </Text>
      </View>
    </View>
  );
};

const LoadingDots: React.FC = () => {
  const dot1Anim = useRef(new Animated.Value(1)).current;
  const dot2Anim = useRef(new Animated.Value(1)).current;
  const dot3Anim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animate = (anim: Animated.Value, delay: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, {
            toValue: 1.3,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animate(dot1Anim, 0);
    animate(dot2Anim, 100);
    animate(dot3Anim, 200);
  }, []);

  return (
    <View style={styles.loadingDots}>
      <Animated.View
        style={[styles.dot, { transform: [{ scale: dot1Anim }] }]}
      />
      <Animated.View
        style={[styles.dot, { transform: [{ scale: dot2Anim }] }]}
      />
      <Animated.View
        style={[styles.dot, { transform: [{ scale: dot3Anim }] }]}
      />
    </View>
  );
};
