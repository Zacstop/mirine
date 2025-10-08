import { styles } from "@/styles/orderTracking.styles";
import { OrderStep } from "@/types";
import React from "react";
import { Text, View } from "react-native";

interface ProgressStepsProps {
  steps: OrderStep[];
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({ steps }) => {
  return (
    <View style={styles.progressContainer}>
      {steps.map((step, index) => (
        <View key={step.id} style={styles.progressStep}>
          <View
            style={[
              styles.stepIconContainer,
              step.status === "completed" && styles.stepIconCompleted,
              step.status === "active" && styles.stepIconActive,
            ]}
          >
            <Text style={styles.stepIcon}>{step.icon}</Text>
          </View>
          <View style={styles.stepContent}>
            <Text
              style={[
                styles.stepTitle,
                step.status === "completed" && styles.stepTitleCompleted,
                step.status === "active" && styles.stepTitleActive,
              ]}
            >
              {step.title}
            </Text>
            <Text style={styles.stepTime}>{step.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
