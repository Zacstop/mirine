import { styles } from "@/styles/orderComplete.styles";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

interface ReviewSectionProps {
  onSkip: () => void;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ onSkip }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarPress = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleWriteReview = () => {
    if (selectedRating === 0) {
      Alert.alert("⭐ 별점을 선택해주세요!");
      return;
    }

    Alert.alert(
      `⭐ ${selectedRating}점 선택!`,
      "상세 리뷰를 작성해주세요.\n(리뷰 작성 페이지로 이동)"
    );
  };

  const handleSkip = () => {
    Alert.alert(
      "리뷰 건너뛰기",
      "나중에 마이페이지에서도 작성할 수 있습니다.",
      [
        { text: "취소", style: "cancel" },
        { text: "건너뛰기", onPress: onSkip },
      ]
    );
  };

  return (
    <View style={styles.reviewSection}>
      <View style={styles.reviewCard}>
        <Text style={styles.reviewIcon}>⭐</Text>
        <Text style={styles.reviewTitle}>식사는 만족스러우셨나요?</Text>
        <Text style={styles.reviewSubtitle}>
          여러분의 소중한 리뷰가{"\n"}더 나은 학식을 만듭니다
        </Text>

        <View style={styles.starRating}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <TouchableOpacity
              key={rating}
              onPress={() => handleStarPress(rating)}
            >
              <Text
                style={[
                  styles.star,
                  rating > selectedRating && styles.starInactive,
                ]}
              >
                ⭐
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.reviewButton}
          onPress={handleWriteReview}
        >
          <Text style={styles.reviewButtonText}>리뷰 작성하기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>다음에 하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
