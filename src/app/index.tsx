import SegmentedControl from "@/components/SegmentedControl";
import { colors, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type StudyMode = "auto" | "manual";
type Direction = "en-target" | "target-en" | "both";
type Language = { name: string; code: string };

export default function HomeScreen() {
  const [studyMode, setStudyMode] = useState<StudyMode>("manual");
  const [direction, setDirection] = useState<Direction>("en-target");

  // Will be sourced from a language store once language selection is implemented
  const targetLanguage: Language = { name: "Spanish", code: "ES" };

  const directionOptions = [
    { label: `EN → ${targetLanguage.code}`, value: "en-target" },
    { label: `${targetLanguage.code} → EN`, value: "target-en" },
    { label: "BOTH", value: "both" },
  ];

  const studyModeOptions = [
    { label: "AUTO", value: "auto" },
    { label: "MANUAL", value: "manual" },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Ionicons name="globe-outline" size={26} color={colors.primary} />
            <View style={styles.headerTitles}>
              <Text style={styles.appTitle}>Flash</Text>
              <Text style={styles.appSubtitle}>
                LEARNING {targetLanguage.name.toUpperCase()}
              </Text>
            </View>
          </View>
          <Pressable hitSlop={12}>
            <Ionicons
              name="settings-outline"
              size={22}
              color={colors.textSecondary}
            />
          </Pressable>
        </View>

        {/* Study Mode */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>STUDY MODE</Text>
          <SegmentedControl
            options={studyModeOptions}
            value={studyMode}
            onChange={(v) => setStudyMode(v as StudyMode)}
          />
          <Text style={styles.modeDescription}>
            In Auto mode, answers and next cards appear after a short delay.
            Manual mode requires a tap for each step.
          </Text>
          <Text style={styles.modeDescription}>
            Note: Stats are not tracked in Auto mode.
          </Text>
        </View>

        {/* Translation Direction */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>TRANSLATION DIRECTION</Text>
          <SegmentedControl
            options={directionOptions}
            value={direction}
            onChange={(v) => setDirection(v as Direction)}
          />
        </View>

        {/* Learn New Words */}
        <Pressable
          style={styles.actionButton}
        >
          <View style={styles.iconCircle}>
            <Ionicons name="add-circle" size={26} color={colors.primary} />
          </View>
          <View style={styles.buttonTextGroup}>
            <Text style={styles.buttonBadge}>EXPAND</Text>
            <Text style={styles.buttonTitle}>Learn New Words</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={colors.textSecondary}
            style={styles.arrow}
          />
        </Pressable>

        {/* Review Known */}
        <Pressable
          style={styles.actionButton}
        >
          <View style={styles.iconCircle}>
            <Ionicons name="book-outline" size={22} color={colors.primary} />
          </View>
          <View style={styles.buttonTextGroup}>
            <Text style={styles.buttonBadge}>PERFECT</Text>
            <Text style={styles.buttonTitle}>Review Known</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={colors.textSecondary}
            style={styles.arrow}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: spacing.md,
    gap: spacing.md,
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.xs,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  headerTitles: {
    gap: 1,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
    letterSpacing: 0.3,
  },
  appSubtitle: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.primary,
    letterSpacing: 2,
  },

  // Section cards
  section: {
    gap: spacing.sm,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.textSecondary,
    letterSpacing: 2,
    paddingHorizontal: 2,
  },
  modeDescription: {
    fontSize: 11,
    color: colors.textSecondary,
    lineHeight: 17,
    paddingHorizontal: 2,
    opacity: 0.7,
  },

  // Buttons shared
  buttonTextGroup: {
    flex: 1,
    gap: 3,
  },
  buttonTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  arrow: {
    marginLeft: spacing.sm,
  },

  // Action buttons
  actionButton: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.outlineVariant + "4D",
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary + "1A",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBadge: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.primary,
    letterSpacing: 1.5,
  },

});
