import { styles } from "@/styles/profile.styles";
import { UserProfile } from "@/types";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

interface ProfileHeaderProps {
  profile: UserProfile;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  const handleSettings = () => {
    Alert.alert(
      "⚙️ 설정",
      "• 프로필 수정\n• 비밀번호 변경\n• 알림 설정\n• 언어 설정\n• 로그아웃"
    );
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <Text style={styles.headerTitle}>마이페이지</Text>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={handleSettings}
        >
          <Text style={styles.settingsButtonText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profileAvatar}>
          <Text style={styles.profileAvatarText}>{profile.avatar}</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{profile.name}</Text>
          <Text style={styles.profileEmail}>{profile.email}</Text>
          <Text style={styles.profileBadge}>{profile.badge}</Text>
        </View>
      </View>
    </View>
  );
};
