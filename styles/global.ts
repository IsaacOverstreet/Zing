import { StyleSheet } from "react-native";

export const colors = {
  background: "#FFF9F5",
  header: "#242444",
  surface: "#2a2a4a",
  primary: "#765097",
  text: "#ffffff",
  textSecondary: "#a0a0b0",
  alert: "#ff5252",
};

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    color: colors.text,
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: 30,
    marginBottom: 16,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
