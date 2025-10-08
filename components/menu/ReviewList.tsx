import { styles } from "@/styles/menuDetail.styles";
import { Review } from "@/types";
import React from "react";
import { Text, View } from "react-native";

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <View>
      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewItem}>
          <View style={styles.reviewHeader}>
            <View style={styles.reviewerInfo}>
              <Text style={styles.reviewerAvatar}>{review.userAvatar}</Text>
              <View>
                <Text style={styles.reviewerName}>{review.userName}</Text>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
            </View>
            <Text style={styles.reviewRating}>⭐ {review.rating}</Text>
          </View>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      ))}
    </View>
  );
};
