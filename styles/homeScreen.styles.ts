import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#E8EAED",
  },
  logo: {
    fontFamily:
      "'Inter', 'Helvetica Neue', 'SF Pro Display', -apple-system, sans-serif",
    fontSize: 26,
    fontWeight: "800",
    color: "#0066FF",
    // color: "linear-gradient(135deg, #0066FF 0%, #4facfe 100%)",
  },
  headerActions: {
    flexDirection: "row",
    gap: 12,
  },
  slogun: {
    fontSize: 14,
    color: "#979797",
    paddingRight: 120,
  },
  profileIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#F1F3F4",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profileEmoji: {
    fontSize: 20,
  },
  searchSection: {
    padding: 20,
  },
  searchBar: {
    padding: 16,
    borderWidth: 2,
    borderColor: "#E8EAED",
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: "#F8F9FA",
  },
  categoryFilter: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  filterTab: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "#E8EAED",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    marginRight: 12,
    alignItems: "center",
  },
  filterTabActive: {
    backgroundColor: "#0066FF",
    borderColor: "#0066FF",
  },
  tabLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  tabLabelActive: {
    color: "#FFFFFF",
  },
  tabSubtitle: {
    fontSize: 12,
    color: "#5F6368",
  },
  tabSubtitleActive: {
    color: "#FFFFFF",
    opacity: 0.7,
  },
  foodList: {
    flex: 1,
  },
  foodListContent: {
    padding: 20,
    paddingBottom: 100,
  },
  foodItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8EAED",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  foodImage: {
    width: 80,
    height: 80,
    backgroundColor: "#F1F3F4",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  foodEmoji: {
    fontSize: 32,
  },
  foodContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  foodHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  foodDescription: {
    fontSize: 14,
    color: "#5F6368",
    lineHeight: 20,
  },
  foodPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0066FF",
    marginLeft: 8,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  infoItem: {
    fontSize: 13,
    color: "#5F6368",
  },
  cartButton: {
    width: 40,
    height: 40,
    backgroundColor: "#F1F3F4",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cartButtonText: {
    // fontSize: 18,
    fontSize: 20,
  },

  foodActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFD700",
  },
  addButton: {
    width: 36,
    height: 36,
    backgroundColor: "#0066FF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonActive: {
    backgroundColor: "#FFD700",
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  addButtonTextActive: {
    color: "#1A1A1A",
  },
  cartBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0066FF",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartCount: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cartCountText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0066FF",
  },
  cartText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  cartTotal: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
