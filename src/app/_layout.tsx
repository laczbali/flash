import { colors } from "@/constants/theme";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.textPrimary,
        headerTitleStyle: { fontWeight: "700" },
        headerShadowVisible: false,
      }}
    />
  );
}
